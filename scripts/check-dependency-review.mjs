import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { root } from './lib/root.mjs';
import { reviewIsComplete } from './lib/dependency-review.mjs';

try {
  const review = JSON.parse(readFileSync(path.join(root, 'docs/testing/dependency-review.json'), 'utf8'));
  const manifest = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8'));
  const lockDigest = createHash('sha256').update(readFileSync(path.join(root, 'package-lock.json'))).digest('hex');
  /** @type {Record<string, string>} */
  const versions = { node: manifest.engines.node, npm: manifest.engines.npm, ...manifest.devDependencies };
  const workflow = readFileSync(path.join(root, '.github/workflows/ci.yml'), 'utf8');
  for (const match of workflow.matchAll(/uses:\s*([\w-]+\/[\w-]+)@([a-f0-9]{40})/g)) {
    if (match[1] && match[2]) versions[match[1]] = match[2];
  }
  const complete = reviewIsComplete(review, versions, lockDigest);
  if (!complete) {
    console.error('BLOCKED: candidate dependencies await evidenced IZURE notification and HIPAA, license, and security confirmation. See docs/testing/dependency-review.json.');
    process.exitCode = 1;
  } else {
    console.log('Dependency review record is complete; reviewers must verify the referenced evidence. This check cannot authenticate human approval.');
  }
} catch {
  console.error('BLOCKED: dependency review record is absent or invalid.');
  process.exitCode = 1;
}
