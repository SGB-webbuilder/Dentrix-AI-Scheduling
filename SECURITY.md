# Security policy

This private healthcare project accepts synthetic data only in development artifacts. Do not use GitHub issues or discussions to report secrets, PHI or exploitable details.

## Reporting

Notify the authorized IZURE project/security contact privately. The verified contact and backup route are **PENDING CONFIRMATION**; configure them before onboarding. The signed agreement §11.2 requires notification of a suspected breach/security incident within one hour. Notify with sanitized facts; do not send payloads, secrets or patient information. This records a contractual response requirement, not a statement about statutory notification deadlines.

Use [incident response](docs/runbooks/incident-response.md) for containment and evidence. Do not wait for certainty before notifying the approved contact. Do not contact the end client directly without IZURE's written authorization.

## Required now

- Private IZURE-designated repository; least-privilege collaborators; MFA for engineering accounts.
- Ignore local secrets, state, logs and restricted documents; staged secret scan plus CI checks and human PHI review.
- PRs, required checks and restricted Actions permissions; full commit pins for Actions; no PR secrets or deployment credentials.
- Exact dependency lockfile, IZURE library review, vulnerability review and Dependabot update PRs. Disable automatic dependency merge.
- Native secret scanning and push protection where the private repository plan supports them; plan/entitlement verification and a maintained local/CI scanner before first push.
- No raw request/response bodies, prompts, environment dumps, session tokens or patient fields in logs or test reports.

## Before application/production use

Add qualified security review, threat model, implemented MFA/RBAC and tenant isolation, safe audit controls, tokenization tests, dependency/static analysis, backup/restore drills and incident exercises. Configure CodeQL when JavaScript/TypeScript application code and the necessary private-repository entitlement exist. External certification or independent penetration testing is a separate scope decision under agreement §4.7.

See [control matrix](docs/security/repository-controls.md), [HIPAA readiness](docs/hipaa/readiness.md), [tenant isolation](docs/security/tenant-isolation.md), and [GitHub settings](docs/project/github-settings.md). Scanner success is not evidence that arbitrary text contains no PHI.
