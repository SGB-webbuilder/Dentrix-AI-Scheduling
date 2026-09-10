# Deployment guide — PROPOSED / BLOCKED — CLIENT ACCESS REQUIRED

No deployment command or credential is provided in this scaffold. Merging to `main` only runs repository CI.

## Intended release flow

1. Merge a reviewed PR with green required checks. Produce a versioned application artifact from the tested commit once application build support exists. Record dependency inventory and artifact digest; exclude secrets and patient data.
2. Promote that same artifact into client staging using short-lived AWS identity and environment-specific configuration. Run synthetic smoke/E2E, isolation, recovery and migration checks; record results against the commit and digest.
3. Submit a release request in ClickUp with artifact digest, test evidence, change list, database compatibility, backup/restore evidence, rollback procedure, readiness evidence and named approver.
4. An authorized approver releases the protected production job. Restrict permitted branches/tags and IAM trust to this repository/environment. Bind approval to the reviewed artifact; do not rebuild arbitrary new source after approval.
5. Deploy in shadow mode with writes disabled. Observe approved health/performance metrics and reconcile safely. Roll back on agreed thresholds.
6. Enable production Dentrix writes only after acceptance criteria are met and IZURE gives written authorization. Each individual appointment still needs explicit human approval. Observe/disable writes on uncertainty.

GitHub Environment approval availability depends on the private-repository plan. If required reviewers cannot be enforced, keep production deployment absent until an equivalently enforced client-controlled approval system is available. An informal comment or a manual-dispatch button alone is insufficient for the proposed independent deployment approval. See [settings](../project/github-settings.md).

OIDC trust must use the exact emitted GitHub claims for the designated repository and environment; verify current subject format rather than copying a generic example. Grant `id-token: write` only to the future deployment job, never PR CI. Separate deployment permissions from Terraform planning/apply roles and runtime roles.

## Database and rollback

Use reviewed, versioned migrations after a schema is approved. Prefer backward-compatible expand/contract changes; evaluate locks, data volume and two-version application compatibility. Test encrypted backups and restoration before production migration. Reverting app code does not automatically reverse a migration or a Dentrix appointment. Record safe reconciliation steps and authorized manual escalation; never auto-delete appointments to simulate rollback.

## Evidence still needed

AWS account/region and IAM trust; BAA/service/model approval; compute choice; networking; certificates/domain; approved database; secret references; observability/audit sink; backup retention/restoration; actual staging/production workflows; deployment and write approvers; on-call owner; rollback thresholds. All remain **PENDING CONFIRMATION** or **BLOCKED — CLIENT ACCESS REQUIRED**.
