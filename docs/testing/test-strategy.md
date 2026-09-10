# Test strategy

Status: **PROPOSED**. Only repository-foundation checks are appropriate at this stage. No application, scheduling engine, database, Dentrix contract, AI evaluation, or production environment has been verified.

## Locations and purpose

| Location | Future coverage | Dependencies |
| --- | --- | --- |
| `tests/foundation/` | Repository policy/configuration integrity | Local tooling only; not application behavior |
| `tests/unit/` | Small application/policy units and pure boundary validation | Synthetic inputs, no external services |
| `tests/scheduling/` | Duration/resource rules, deterministic validity, ranking boundaries, time/DST | Approved domain requirements |
| `tests/integration/` | Application-to-adapter/persistence composition | Approved isolated synthetic test services; no live Dentrix |
| `tests/contract/dentrix/` | Evidence-backed external schemas, auth/scoping, pagination, errors, writes/read-back | Official contracts and authorized synthetic sandbox; pending |
| `tests/ai/` | Soft interpretation/ranking, injection, malformed output, minimization, regression | Synthetic inputs; approved model access for remote evaluation |
| `tests/security/` | MFA/session/permissions, input/output handling, sensitive logging, access denial | Approved identity and security design |
| `tests/security/tenant-isolation/` | Negative cross-tenant/location tests in requests, data, cache, adapter, jobs | At least two synthetic scopes; no real identifiers |
| `tests/concurrency-recovery/` | Competing approvals, duplicates, stale availability, ambiguous outcomes, replay | Approved booking design and external capability evidence |
| `tests/e2e/` | Browser → server → approved adapters/data → response; explicit approval and simulation | Runnable application and isolated synthetic environment |
| `tests/performance/` | Normal and failure-load timing; third-party latency measured separately | Approved load shape, safe environment, external rate budget |
| `tests/regression/` | Reproductions of resolved defects and accepted scenario baselines | Synthetic cases with source issue/ClickUp references |
| `tests/fixtures/` | Hand-authored synthetic inputs with provenance and purpose | No production-derived patient data or credentials |

Unit tests may later be colocated with a package when that makes ownership clearer; central scenario suites remain here. Avoid duplicating the same assertion in both places. Product test framework selection and coverage thresholds are **PENDING CONFIRMATION**; add them alongside real behavior, not placeholder success tests.

## Required scenarios before booking release

Verify deterministic hard constraints; office/provider precedence; duration ingestion validation; three valid recommendations and fewer-than-three behavior; filtering/timezone; appropriate soft-AI behavior; utilization semantics; simulation's no-write guarantee; scoped **Approve and Submit**; stale recommendation rejection/revalidation; unauthorized roles/locations; concurrency; duplicate prevention; unknown write outcomes; safe read-back/reconciliation; event replays; and sanitized audit evidence. Unsupported Dentrix capability must remain blocked, not represented as a successful mock contract.

The agreement's normal-load target is approximately five seconds with five concurrent users, fifteen providers, and a sixty-day lookahead, with third-party latency accounted for separately (§4.5). Exact operations, measurement boundaries, percentile/statistic, fixture distribution, and pass/fail tolerance are **PENDING CONFIRMATION**. Never use that target as an excuse to load-test a live service without permission.

## Data and execution rules

Use synthetic fixtures by default. Do not commit real patient names, identifiers, DOB, contact or insurance details, clinical notes, payloads, logs, recordings, screenshots, credentials, or tokens. A generated random token does not make a real underlying record acceptable for Git. Any claim of de-identification requires a separate approved process; use fresh synthetic cases for this repository.

Offline suites must not silently contact Dentrix, AWS, or model APIs. Remote contract/evaluation suites require explicit environment labels, authorization, isolated synthetic data, client-owned secrets, rate/cost limits, and a separate manual trigger or protected workflow. Never run writes against live Dentrix to validate the repository or deployment.

Record the candidate commit, command, environment class, synthetic fixture revision, actual result, and limitations. Skipped/missing suites must be reported as pending, not passed. Test logs, screenshots, traces, videos, snapshots, coverage and reports must remain sanitized; restrict artifact access/retention before uploading anything from a protected environment.

## CI progression

Now: run the dependency-free foundation structure, secret and unit-test checks. After evidenced dependency review, run lint, typecheck, formatting and dependency audit. A foundation build validates preparation artifacts; it cannot validate a Next.js build that does not exist.

With first authorized application implementation: add real runtime dependencies, application build, meaningful unit/domain tests, import boundaries, and synthetic E2E smoke flows. Make the resulting checks required on PRs. Add database integration, evidence-backed Dentrix contract tests, remote AI evaluations, security/isolation, and recovery/performance suites as dependencies become available.

Release: reproduce required suites against the current candidate; review migrations/infrastructure, UAT and shadow-mode evidence, recovery readiness, and rollout approvals. Production writes require written IZURE approval independently of a green PR or merge to `main`.
