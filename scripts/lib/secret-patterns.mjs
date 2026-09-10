/** @param {string} name */
export function prohibitedPath(name) {
  const parts = name.replaceAll('\\', '/').split('/');
  return parts.some(
    (part) =>
      (part.startsWith('.env') && part !== '.env.example') ||
      /\.(?:tfstate.*|tfplan|tfvars(?:\.json)?)$/i.test(part) ||
      /^(?:\.terraform|crash(?:\..*)?\.log)$/.test(part) ||
      /\.(?:pem|key|p12|pfx|jks|db|sqlite\d*|dump|bak|csv|pdf|docx|zip|tar|gz)$/i.test(part) ||
      /^(?:credentials(?:.*\.json)?|service-account.*\.json|secrets|uploads|exports|backups|\.aws|\.kos|kos-starter-kit)$/i.test(part),
  );
}

/** @param {string} content @returns {string[]} */
export function detectSecrets(content) {
  const rules = [
    ['private-key', /-----BEGIN (?:[A-Z ]+ )?PRIVATE KEY-----/],
    ['github-token', /\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,})\b/],
    ['aws-access-key', /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/],
    ['jwt', /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/],
    ['credential-url', /\b(?:postgres(?:ql)?|mysql|mongodb(?:\+srv)?):\/\/[^\s/:]+:[^\s/@]+@/i],
    ['bearer-token', /\bBearer\s+[A-Za-z0-9._~-]{20,}/i],
  ];
  /** @type {string[]} */
  const findings = [];
  for (const [name, pattern] of /** @type {[string, RegExp][]} */ (rules)) {
    if (pattern.test(content)) findings.push(name);
  }
  const assignments = content.matchAll(
    /\b(?:[A-Z][A-Z0-9_]*_)?(?:SECRET|TOKEN|PASSWORD|PRIVATE_KEY|API_KEY)["']?\s*[=:]\s*["']?([^\s"',;]+)/gi,
  );
  for (const match of assignments) {
    const value = match[1] ?? '';
    if (
      value.length >= 8 &&
      !/^(?:REPLACE_WITH_[A-Z0-9_]+|false|true|null|undefined)$/.test(value) &&
      !value.startsWith('${')
    ) {
      findings.push('credential-assignment');
      break;
    }
  }
  return findings;
}

/** @param {number} files @param {number} findings */
export function scanSummary(files, findings) {
  return findings === 0
    ? `PASS: ${files} files checked by the limited foundation secret scanner. This is not PHI detection or a complete secret audit.`
    : `FAIL: ${findings} sensitive-content or unsupported-file findings across ${files} files. Values and paths are withheld; inspect locally in a trusted editor.`;
}
