import { execFileSync } from 'node:child_process';
import { lstatSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { root } from './lib/root.mjs';
import { detectSecrets, prohibitedPath, scanSummary } from './lib/secret-patterns.mjs';

const mode = process.argv[2];
const ignored = new Set(['.git', 'node_modules', '.next', 'dist', 'build', 'coverage', '.cache']);
const maxFiles = 10000;
const maxBytes = 5 * 1024 * 1024;

/** @param {string[]} args */
function git(args) {
  return execFileSync('git', args, {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

/** @param {string} dir @returns {string[]} */
function localFiles(dir) {
  /** @type {string[]} */
  const names = [];
  for (const entry of readdirSync(path.join(root, dir), { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue;
    const name = path.posix.join(dir, entry.name);
    if (entry.isDirectory()) names.push(...localFiles(name));
    else names.push(name);
    if (names.length > maxFiles) throw new Error('limit');
  }
  return names;
}

try {
  /** @type {string[]} */
  let names;
  if (mode === '--local') {
    names = localFiles('');
  } else if (mode === '--staged' || mode === '--tracked') {
    if (path.resolve(git(['rev-parse', '--show-toplevel']).trim()) !== root) {
      throw new Error('wrong Git root');
    }
    names = git(
      mode === '--staged'
        ? ['diff', '--cached', '--name-only', '--diff-filter=ACMR', '-z']
        : ['ls-files', '-z'],
    ).split('\0').filter(Boolean);
  } else {
    throw new Error('mode required');
  }
  if (names.length > maxFiles) throw new Error('limit');
  let findings = 0;
  for (const name of names) {
    if (name.startsWith('/') || name.split('/').includes('..') || prohibitedPath(name)) {
      findings += 1;
      continue;
    }
    /** @type {Buffer} */
    let bytes;
    if (mode === '--staged') {
      if (git(['ls-files', '--stage', '--', name]).startsWith('120000 ')) {
        findings += 1;
        continue;
      }
      bytes = Buffer.from(git(['show', `:${name}`]), 'utf8');
    } else {
      const stat = lstatSync(path.join(root, name));
      if (!stat.isFile() || stat.isSymbolicLink() || stat.size > maxBytes) {
        findings += 1;
        continue;
      }
      bytes = readFileSync(path.join(root, name));
    }
    if (bytes.length > maxBytes || bytes.includes(0)) {
      findings += 1;
      continue;
    }
    findings += detectSecrets(bytes.toString('utf8')).length;
  }
  console.log(scanSummary(names.length, findings));
  if (findings > 0) process.exitCode = 1;
} catch {
  console.error('BLOCKED: secret scan could not complete. Check mode, scaffold Git binding, file limits, and local filesystem access. No file contents were printed.');
  process.exitCode = 1;
}
