# Uncertain appointment outcome — PENDING DENTRIX VALIDATION

This is a design checklist, not an implemented procedure or permission for a write.

On timeout after a submitted appointment, treat the outcome as unknown. Do not blindly retry a non-idempotent write. Preserve minimal scoped recovery state and the exact human approval reference inside approved encrypted storage. Determine whether a read-back can establish the outcome using verified API capabilities. Escalate ambiguous matches for authorized human resolution.

Before implementation validate appointment lookup/read-back, any idempotency support, concurrency behavior, treatment linking, error categories and reconciliation lag. Define attempt boundaries, expiry of approvals, bounded retries for safe reads, durable recovery ownership and user messaging. A changed candidate or expired approval requires fresh deterministic validation and human approval.

Webhook/reconciliation jobs may observe and update project-owned recovery state. They do not gain permission to create/modify Dentrix appointments. Any recovered write must remain bound to a valid explicit approval and the authorized workflow. No deletion or compensating write is assumed safe.

Evidence and executable steps are pending feasibility testing in the approved sandbox with synthetic cases.
