# Architecture decision records

ADRs explain a consequential decision, its evidence, alternatives, tradeoffs, and verification obligations. They are engineering records; they do not amend the signed agreement or grant access to PHI, AWS, or Dentrix.

Create a sequential `NNNN-short-title.md` from [0000-template.md](0000-template.md). Use **PROPOSED**, **ACCEPTED**, **SUPERSEDED**, or **REJECTED**. Only mark a proposal accepted after the responsible authorized approver and evidence are recorded. Keep superseded records and link the replacement. No ADR is accepted in this scaffold.

| Record | Status | Purpose |
| --- | --- | --- |
| [0001 — Modular monolith](0001-modular-monolith.md) | PROPOSED | Repository/package structure and initial deployment direction |

Suggested future ADRs, created only when evidence is ready:

- AWS architecture and IaC/runtime choice, designated region, IAM/network boundaries.
- Managed PostgreSQL service, data-access/migration tooling, and backup/restore objectives.
- Authentication, MFA/session policy, RBAC, and tenant/location isolation.
- Dentrix adapter contracts, write/read-back feasibility, concurrency and recovery.
- Bedrock model routing, model/version controls, soft-reasoning scope, and cost limits.
- PHI minimization, random-token mapping, re-identification, and temporary-data lifetime.
- Deterministic scheduling model, duration ingestion, resource timing, and hard validation.
- Office/provider rule precedence, overrides, rule versioning, and approval binding.
- Webhook/reconciliation strategy, durable events, ordering, duplicate handling.
- Audit immutability and retention, access controls, incident evidence, and deletion restrictions.
- UAT, shadow mode, release approval, and controlled production-write enablement.

Each decision must distinguish **PENDING CONFIRMATION**, **PENDING DENTRIX VALIDATION**, and **BLOCKED — CLIENT ACCESS REQUIRED** from verified facts. Link to the [execution baseline](../project/execution-baseline.md) and relevant current evidence without copying confidential source documents or sensitive payloads into Git.
