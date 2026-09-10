import assert from 'node:assert/strict';
import test from 'node:test';
import { detectSecrets, prohibitedPath, scanSummary } from '../../scripts/lib/secret-patterns.mjs';

test('detects synthetic provider tokens, key blocks, JWTs, and credential URLs', () => {
  const examples = [
    ['gh' + 'p_' + 'A'.repeat(36), 'github-token'],
    ['AK' + 'IA' + 'A'.repeat(16), 'aws-access-key'],
    ['-----BEGIN ' + 'PRIVATE KEY-----', 'private-key'],
    ['ey' + 'J' + 'a'.repeat(16) + '.' + 'b'.repeat(16) + '.' + 'c'.repeat(16), 'jwt'],
    ['postgres' + 'ql://synthetic:synthetic@database.invalid/demo', 'credential-url'],
    ['Bearer ' + 'a'.repeat(25), 'bearer-token'],
    ['DEMO_' + 'SECRET=' + 'synthetic-value', 'credential-assignment'],
    ['PASS' + 'WORD=' + 'synthetic-value', 'credential-assignment'],
    ['"pass' + 'word": "' + 'synthetic-value"', 'credential-assignment'],
  ];
  for (const [content, expected] of examples) assert.ok(detectSecrets(content).includes(expected));
});

test('permits explicit examples and code without credential material', () => {
  assert.deepEqual(detectSecrets('DEMO_SECRET=REPLACE_WITH_APPROVED_SANDBOX_SECRET'), []);
  assert.deepEqual(detectSecrets('PHI_PROCESSING_ENABLED=false'), []);
  assert.deepEqual(detectSecrets('https://dentrix-api.invalid'), []);
});

test('refuses environment files, restricted documents, archives, and data paths', () => {
  for (const name of ['.env', '.env.local', 'apps/web/.env.production', 'docs/client.pdf', 'data/export.csv', 'backup.zip', 'secrets/value.txt', '.kos/STATUS.md', '.aws/credentials', 'credentials', '.terraform/providers/example', 'infra/terraform.tfstate.backup', 'infra/main.tfplan', 'infra/prod.tfvars', 'infra/prod.tfvars.json', 'crash.123.log']) {
    assert.equal(prohibitedPath(name), true);
  }
  for (const name of ['.env.example', 'docs/architecture.md', 'tests/synthetic.json']) {
    assert.equal(prohibitedPath(name), false);
  }
});

test('summaries disclose counts without accepting raw paths or secret values', () => {
  assert.match(scanSummary(3, 2), /^FAIL: 2 .* across 3 files/);
  assert.match(scanSummary(3, 0), /^PASS: 3 files/);
  assert.match(scanSummary(3, 0), /not PHI detection/);
});
