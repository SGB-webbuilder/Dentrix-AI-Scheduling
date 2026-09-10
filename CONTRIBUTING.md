# Contribution policy

**No real PHI, patient identifiers, credentials, production payloads, or client source documents belong in Git, PRs, issues, CI logs, ClickUp, or Loom.** Follow [data handling](docs/security/data-handling.md).

1. Start from the ClickUp task with acceptance criteria, estimate and approved scope. Break larger work into estimated subtasks. Use synthetic examples.
2. Branch from `main`: `feature/<task-id>-<description>`, `fix/…`, `chore/…`, `docs/…`, or `security/…`. Keep sensitive incident details out of branch names. Do not create `develop` initially.
3. Use focused commits, for example `chore(CU-123): prepare repository checks`. Include the reason for non-obvious behavior. Do not change unrelated files.
4. Review dependency additions with IZURE before adoption: purpose, exact version, license, advisories, maintenance, install scripts, data/network behavior and HIPAA relevance. Record a safe approval reference; never paste private communications or credentials.
5. Run the repository checks, inspect the staged diff and scan it for secrets. Use [tooling](docs/testing/tooling.md). Hooks supplement required CI and can be bypassed.
6. Open a PR linking ClickUp, the problem/result, evidence for affected tests, documentation, security/data effects and rollout/rollback where relevant. Resolve conversations and use squash merge. The PR title becomes the squash commit subject.
7. During solo bootstrap, a PR and green required checks may use zero approving reviews with an explicit self-review checklist. This is not independent review. When a qualified second reviewer has access, require one review and stale-review dismissal; sensitive implementation must receive independent security review before production use.
8. Update ClickUp daily with progress, estimates/actual time, PR, merge commit, evidence and Loom where required. See [workflow](docs/project/clickup-workflow.md).

Never commit patient names, dates of birth, contact details, insurance information, chart notes, PHI screenshots, Dentrix payloads, production logs, passwords, tokens, API keys or session cookies. Use generated synthetic fixtures, opaque placeholder identifiers, minimal sanitized logs and inspected redacted screenshots. Removing a name alone does not make a record safe.

Tag accepted releases `v0.x.y` during MVP and `v1.0.0` at the approved production baseline. A tag is an artifact/version marker, not authorization to deploy. A later production hotfix branches from the deployed tag, receives targeted tests and review, deploys through the same approval path, and merges back to `main`. If a branch protection exception is required, the designated administrator records the reason, scope and restoration in the private execution record.
