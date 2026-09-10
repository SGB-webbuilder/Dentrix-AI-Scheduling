# 0001 — Small workspace monorepo and modular monolith

- Status: **PROPOSED**
- Date: 2026-09-09
- Technical owner: Sedrick
- Decision approver / approval reference: **PENDING CONFIRMATION**
- Scope: repository preparation and architecture direction only

## Context

The MVP combines a scheduling UI, server-side application workflows, deterministic rules, Dentrix and AI integrations, project-owned data, and client AWS infrastructure. One developer starts the work, with future collaborators expected. The [execution baseline](../project/execution-baseline.md) requires repository preparation to remain independent of sandbox access and preserves Dentrix authority and security controls.

## Proposal

Use npm workspaces with `apps/web` and six private packages: application, scheduling, integrations, security, data, and contracts. Keep documentation, tests, scripts, CI, and IaC in the same private repository. Propose one Next.js web/server deployment initially, with domain and application code independent of Next.js. Use application-owned ports and explicit server composition for adapters.

Keep package releases internal and coordinated with the application release. Do not add independent services, multiple repositories, a task-orchestration platform, or a worker deployment until observed requirements justify their operational cost. A future worker can share application modules if durable external events/recovery require it.

## Alternatives

| Option | Benefit | Tradeoff |
| --- | --- | --- |
| Flat single application | Least initial structure | Module dependency ownership is less explicit as integrations and future dental modules grow |
| Small workspace monorepo | Atomic cross-layer changes; explicit boundaries; one lockfile and release candidate | Requires import/export discipline and shared dependency maintenance |
| Separate services/repositories | Independent deployment and scaling | Additional authorization, network, event, release and operational complexity before evidence justifies it |

The workspace recommendation reflects the current team size and cohesive MVP; it is an engineering judgment, not a signed deployment choice.

## Security and consequences

A package directory is not a runtime trust boundary. Future implementation must enforce browser/server separation, authorized tenant/location propagation, output minimization, and deterministic validation. No scheduling or adapter behavior is provided here. The database must not become a parallel clinical system. AI cannot bypass validation or perform writes.

Shared deployment simplifies initial releases but couples application availability and dependency updates. Review extraction only when workload, team ownership, security isolation, or recovery needs demonstrate a benefit. Hosting, dependency versions, database, auth, PHI lifecycle, and integration capabilities remain unresolved.

## Verification and acceptance

Repository foundation checks verify scaffold integrity only. Before accepting this ADR for product implementation, confirm requirements and application binding, review dependency rules and ownership, validate AWS runtime constraints, and resolve any Dentrix feasibility claim that affects the architecture. After code is introduced, test import boundaries, server-only dependencies, tenant isolation, and the real application build/flows.

No architecture acceptance, product readiness, deployment, or client approval is implied by this proposed record.
