import assert from 'node:assert/strict';
import test from 'node:test';
import { consumesRepositorySecrets } from '../../scripts/lib/workflow-checks.mjs';

test('secret-scanner filenames do not imply GitHub secret access', () => {
  assert.equal(consumesRepositorySecrets('run: node scripts/scan-secrets.mjs --tracked'), false);
});

test('GitHub secret context is rejected for dot and bracket access', () => {
  assert.equal(consumesRepositorySecrets('env: ${{ secrets.DEMO }}'), true);
  assert.equal(consumesRepositorySecrets("env: ${{ secrets['DEMO'] }}"), true);
});
