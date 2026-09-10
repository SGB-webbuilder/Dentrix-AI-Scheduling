import assert from 'node:assert/strict';
import test from 'node:test';
import { reviewIsComplete } from '../../scripts/lib/dependency-review.mjs';

const versions = { example: '1.2.3' };
const digest = 'a'.repeat(64);
const complete = {
  status: 'confirmed',
  package_lock_sha256: digest,
  candidate_versions: versions,
  izure_notification_reference: 'SYNTHETIC-TEST-EVIDENCE-1',
  hipaa_review_reference: 'SYNTHETIC-TEST-EVIDENCE-2',
  license_review_reference: 'SYNTHETIC-TEST-EVIDENCE-3',
  security_review_reference: 'SYNTHETIC-TEST-EVIDENCE-4',
  reviewed_by: 'SYNTHETIC-TEST-REVIEWER',
  reviewed_at: '2026-01-01T00:00:00Z',
};

test('dependency review rejects pending or absent evidence', () => {
  assert.equal(reviewIsComplete({ status: 'pending' }, versions, digest), false);
  assert.equal(reviewIsComplete({ ...complete, hipaa_review_reference: null }, versions, digest), false);
});

test('dependency review rejects changed direct versions or transitive lock digest', () => {
  assert.equal(reviewIsComplete(complete, { example: '1.2.4' }, digest), false);
  assert.equal(reviewIsComplete(complete, versions, 'b'.repeat(64)), false);
  assert.equal(reviewIsComplete(complete, { ...versions, added: '1.0.0' }, digest), false);
});

test('complete matching synthetic record satisfies structural check only', () => {
  assert.equal(reviewIsComplete(complete, versions, digest), true);
});
