# Repository control matrix

Status: scaffold controls and proposed administrative settings; no compliance certification.

| Concern | Required now | Evidence / limit | Before later production use |
| --- | --- | --- | --- |
| Secrets | Ignore secret files; inspect staged content; local/CI secret checks; reviewed maintained/history scanner before first push; native Secret Protection/push protection if licensed | Foundation scanner is deliberately limited; no scanner proves absence of secrets or PHI | Repeated history scans, verified rotation and incident drills |
| PHI | Synthetic-only policy; PR/issue warnings; manual text/image/report review | Regex cannot recognize all identifying combinations or guarantee de-identification | Implemented data minimization/tokenization, secure evidence environment and independent tests |
| Vulnerable dependencies | Exact candidate versions/lockfile; IZURE review before installation; dependency audit; Dependabot | Native advisories and audit report known published findings, not all flaws | Remediation SLA, static analysis, SBOM and signed artifact provenance as justified |
| Malicious dependencies | Minimize packages; review provenance/maintainer/source/install scripts; lockfile and integrity; `npm ci --ignore-scripts` | Disabling install scripts does not prevent malicious behavior when a tool later executes | Approved dependency-change policy and stronger build isolation |
| Unsafe logs | Never log environment/header/payload/prompt contents; scanner output must not echo findings | CI failures can reveal filenames/line numbers; review even sanitized artifacts | Typed allowlisted log events, redaction tests and protected audit sink |
| Unsafe Actions | SHA pins; read-only token; no persisted checkout credential; no PR secrets or cloud role; disposable runner | PR authors can edit workflow/code; merge protection and review are necessary | Isolated protected deployment job and constrained AWS OIDC trust |
| Credential exposure | No AWS/Bedrock key in examples; placeholder references only | `.env.example` is documentation; no runtime secret loader exists | Secrets Manager/IAM, rotation/revocation, no browser leakage |
| Ownership | Private manifests/repository; named owner once verified | CODEOWNERS remains inactive while handles are unknown | Tested code-owner/reviewer coverage and offboarding |

## Required preparation gates

The dependency-free CI job checks scaffold integrity, safety conventions and its own repository tooling. The separate reviewed-tooling job intentionally fails while the dependency review ledger is pending. It may install candidates only after the agreement's review is evidenced. Do not remove that gate just to obtain a green badge.

After review, install with lifecycle scripts disabled, run lint/typecheck/format checks and audit all development dependencies as well as future runtime dependencies. Exceptions need an owner, reason, impact and expiry; do not globally ignore audit failures. Never use `npm audit fix --force` as unattended remediation.

Before the initial push, have a maintained scanner and manual staged/history inspection in addition to this foundation scanner. Gitleaks is a candidate, not installed or claimed active; verify its current release/source/license and approve it through the same dependency process. Do not send source text to an external scanning service without the applicable authorization.

## Recommended later

CodeQL with private-repository entitlement and real application source; dependency review on PRs; SBOM/provenance for release artifacts; container/IaC scans once those artifacts exist; secret rotation drills; qualified security review, incident rehearsals, access reviews and backup restoration. External certification/penetration testing remains a separate agreement scope decision. Configuration files cannot supply these operational controls by themselves.

See [GitHub settings](../project/github-settings.md) for licensing and enforcement evidence and [data handling](data-handling.md) for contributor restrictions.
