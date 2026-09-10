/** @param {string} workflow */
export function consumesRepositorySecrets(workflow) {
  return /\$\{\{[^}]*\bsecrets\s*(?:\.|\[)/.test(workflow);
}
