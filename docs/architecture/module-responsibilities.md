# Module responsibilities and ownership

Status: **PROPOSED**. Sedrick is the initial primary technical owner. The areas below identify responsibility, not additional hires or services. Named GitHub reviewers and client approvers remain **PENDING CONFIRMATION**.

| Area / location | Responsibility | Security sensitivity | Required future tests |
| --- | --- | --- | --- |
| Web — `apps/web` | Role-appropriate presentation; authenticated thin HTTP entrypoints; explicit approval interaction | High: rendered data, session handling, browser leakage | E2E, accessibility, authorization, output minimization |
| Application — `packages/application/src/use-cases` | Coordinate reads, duration/rule changes, candidates, simulation, approval, submission/recovery | Critical: cross-boundary authorization and writes | Unit, integration, E2E, concurrency/recovery |
| Dentrix — `packages/integrations/src/dentrix` | Verified auth, scoped requests, pagination, limits, mapping, safe errors, writes/read-back | Critical: external patient data and final writes | Contract/API, error recovery, tenant isolation, sandbox capability evidence |
| Scheduling — `packages/scheduling` | Pure duration/resource models, hard validation, rules, ranking boundary | High: appointment validity and reproducibility | Unit, scheduling scenarios, regression, time/DST, boundary cases |
| AI — `packages/integrations/src/bedrock` | Bounded soft interpretation/ranking, explanations, safe output, token/cost telemetry | Critical: sensitive text and model output | Synthetic reasoning evaluations, injection, output validation, deterministic hard-gate tests |
| PHI — `packages/security/src/phi` | Minimize inputs/outputs; random-token mapping policy; restricted re-identification | Critical: disclosure and linkability | Security, minimization, mapping access/expiry, telemetry leakage |
| Identity — `packages/security/src/auth` | Session/MFA and role policy; per-operation authorization | Critical: unauthorized access | Authentication/session, authorization matrix, MFA, revocation |
| Tenant/location — `packages/security/src/tenancy` | Establish scope; preserve isolation across data, adapters, jobs, caches | Critical: cross-tenant disclosure | Negative isolation tests across every boundary |
| Audit — `packages/application/src/audit` | Minimized event policy, attribution, retention requirements | Critical: tamper evidence and sensitive metadata | Redaction, durable delivery, access, immutability, retention verification |
| Events — `packages/application/src/events` | Verified webhook handling, deduplication, reconciliation, recoverable processing | Critical: duplicate/out-of-order events and uncertain writes | Contract, replay, ordering, concurrency, recovery |
| Database — `packages/data` | Scoped project-owned persistence; approved schema and migrations | Critical: encryption, access, recovery, retention | Integration, isolation, migration, backup/restore, recovery |
| Shared contracts — `packages/contracts` | Minimal pure shared DTOs and runtime-validation boundaries | High: accidental overexposure and trust assumptions | Invalid input, compatibility, boundary validation |
| Infrastructure — `infrastructure` | Client AWS provisioning definitions, IAM/network/encryption, environment separation | Critical: blast radius and deployment credentials | Static IaC checks, plan review, environment/restore verification |
| Engineering — `.github`, `scripts`, root configuration | Dependency/secret checks, PR evidence, reproducible checks and releases | High: supply chain and privilege escalation | Foundation tests, CI policy checks, controlled release verification |

Sedrick coordinates each area initially; security-sensitive changes should receive qualified independent review before release. Approval by the implementation author does not constitute independent verification. Product validation and explicit client production-write approval remain separate from repository checks.

See [dependency rules](architecture-overview.md#source-dependency-direction), [test strategy](../testing/test-strategy.md), and [execution baseline](../project/execution-baseline.md).
