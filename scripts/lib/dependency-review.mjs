/**
 * @param {{status?: string, package_lock_sha256?: string | null, candidate_versions?: Record<string, string>, [key: string]: unknown}} review
 * @param {Record<string, string>} currentVersions
 * @param {string} lockDigest
 * @returns {boolean}
 */
export function reviewIsComplete(review, currentVersions, lockDigest) {
  const evidence = [
    'izure_notification_reference',
    'hipaa_review_reference',
    'license_review_reference',
    'security_review_reference',
    'reviewed_by',
    'reviewed_at',
  ];
  return (
    review.status === 'confirmed' &&
    review.package_lock_sha256 === lockDigest &&
    /^[a-f0-9]{64}$/.test(lockDigest) &&
    evidence.every((key) => {
      const value = review[key];
      return typeof value === 'string' && value.trim().length > 0 && !/pending|unknown|replace/i.test(value);
    }) &&
    Object.keys(currentVersions).length === Object.keys(review.candidate_versions ?? {}).length &&
    Object.entries(currentVersions).every(([name, version]) => review.candidate_versions?.[name] === version)
  );
}
