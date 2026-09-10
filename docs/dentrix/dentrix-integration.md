# Dentrix integration preparation

Status: **PROPOSED; PENDING DENTRIX VALIDATION**. The folder structure is ready for evidence-backed adapter work. No client, auth flow, endpoint, DTO, or fake integration is implemented.

## Boundary

Dentrix remains authoritative for patient, treatment, provider, scheduling, and final appointment records. The adapter translates approved application ports to verified Dentrix contracts and maps responses into minimized application models. It must preserve authenticated organization/location scope, isolate transport concerns, and expose safe failure outcomes without leaking raw provider bodies.

Implement only capabilities supported by the [capability matrix](dentrix-capability-matrix.md). Do not assume OAuth, a particular endpoint path, a webhook, a rate-limit header, pagination style, or a native idempotency key exists. Keep provider DTOs inside the adapter and document schema/version evidence before generating types.

## Proposed write and recovery requirements

1. Allow writes only in an explicitly authorized environment and after the required rollout approvals. Repository setup has no write access.
2. Require an authenticated, authorized human to choose **Approve and Submit** for the exact reviewed context. Rule edits or stale availability must invalidate or revalidate the proposal according to an approved policy.
3. Recheck scope, permissions, hard constraints, current availability, and duplicate/concurrency controls on the server immediately before attempting the change.
4. Persist the minimum approved recovery intent needed to identify and reconcile the attempt; its fields and TTL remain unresolved. Never pretend a local database transaction is atomic with Dentrix.
5. Confirm the external result through a verified read-back path. A timeout or disconnected response leaves an uncertain outcome until evidence resolves it.
6. Reconcile uncertain writes before retrying. Automatic write retries require demonstrated idempotency or another approved duplicate-safe design; retry limits and intervention rules are unresolved.
7. Record minimized, attributable audit evidence and display an accurate success, failure, or unresolved state to the authorized user.

These steps are design requirements, not a tested state machine. Read-back, concurrency support, treatment linking, error semantics, webhook availability, and recovery lookup are all **PENDING DENTRIX VALIDATION**. If a mandatory safe-write capability is unavailable, return the affected design/scope for approval; do not silently weaken the gate.

## Validation sequence

Review official current contracts and client scopes; establish sandbox identity and synthetic test permission; test scoped reads and isolation; confirm mapping/pagination/errors/limits; validate synthetic write and read-back; inject duplicate/concurrent/timeout scenarios; then validate webhook/reconciliation behavior if supported. Record sanitized evidence and repeatable contract tests.

Sandbox validation does not authorize creating test data in live Dentrix. UAT, shadow mode, and controlled production-write enablement follow the agreement; written IZURE approval is required before production writes. Repository preparation can proceed independently of sandbox access under agreement §2.2; infeasible integration assumptions must be surfaced under §2.4. See [execution baseline](../project/execution-baseline.md).
