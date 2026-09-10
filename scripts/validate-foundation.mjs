import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { root } from './lib/root.mjs';
import { consumesRepositorySecrets } from './lib/workflow-checks.mjs';

/** @type {string[]} */
const failures = [];
/** @param {boolean} condition @param {string} message */
function requireCondition(condition, message) {
  if (!condition) failures.push(message);
}

try {
  const manifest = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8'));
  requireCondition(manifest.private === true, 'root package must remain private');
  requireCondition(Object.keys(manifest.dependencies ?? {}).length === 0, 'runtime dependencies require a new reviewed application task');
  requireCondition(JSON.stringify(manifest.workspaces) === JSON.stringify(['apps/*', 'packages/*']), 'workspace roots differ from prepared layout');
  for (const [name, version] of Object.entries(manifest.devDependencies ?? {})) {
    requireCondition(typeof version === 'string' && /^\d+\.\d+\.\d+$/.test(version), `candidate dependency must be exactly pinned: ${name}`);
  }
  for (const hook of ['preinstall', 'install', 'postinstall', 'prepare', 'publish', 'deploy']) {
    requireCondition(!Object.hasOwn(manifest.scripts, hook), `automatic install/publish/deployment script is outside preparation: ${hook}`);
  }
  for (const workspace of ['apps/web', 'packages/application', 'packages/scheduling', 'packages/integrations', 'packages/security', 'packages/data', 'packages/contracts']) {
    requireCondition(existsSync(path.join(root, workspace, 'package.json')), `workspace manifest missing: ${workspace}`);
  }
  const env = readFileSync(path.join(root, '.env.example'), 'utf8');
  for (const flag of ['EXTERNAL_CONNECTIONS_ENABLED', 'DENTRIX_WRITES_ENABLED', 'PHI_PROCESSING_ENABLED', 'PRODUCTION_DEPLOYMENT_ENABLED']) {
    requireCondition(env.split('\n').includes(`${flag}=false`), `template flag must default false: ${flag}`);
  }
  requireCondition(!existsSync(path.join(root, '.env')), 'real environment files are outside preparation');
  const workflow = readFileSync(path.join(root, '.github/workflows/ci.yml'), 'utf8');
  requireCondition(!/pull_request_target\s*:/.test(workflow), 'privileged PR trigger is forbidden');
  requireCondition(!consumesRepositorySecrets(workflow), 'CI must not consume repository secrets');
  for (const match of workflow.matchAll(/uses:\s*([^\s#]+)/g)) {
    requireCondition(/^[\w-]+\/[\w-]+@[a-f0-9]{40}$/.test(match[1] ?? ''), 'third-party Actions must have immutable commit pins');
  }
} catch {
  failures.push('required foundation configuration could not be read or parsed');
}
if (failures.length > 0) {
  for (const failure of failures) console.error(`FAIL: ${failure}`);
  process.exitCode = 1;
} else {
  console.log('PASS: preparation structure and template defaults. No application was built; runtime security, API, database, integration, and production checks remain PENDING.');
}
