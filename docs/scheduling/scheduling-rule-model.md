# Scheduling rule model

Status: **PROPOSED**. This document reserves design decisions and tests; no scheduling model or engine is implemented.

The intended system ingests CDT/procedure duration configuration, supports office and provider rules, interprets appropriate soft preferences with AI, and generates three validated recommendations. The server remains the deterministic authority for hard constraints. See [execution baseline](../project/execution-baseline.md).

| Concern | Proposed owner | Required decision/evidence |
| --- | --- | --- |
| Procedure duration input | Application ingestion; domain model | Approved input format, units, invalid/missing values, versioning, combination and override policy |
| Resources/provider timing | Domain plus validated availability adapter | Provider/chair/assistant requirements and verified Dentrix timing semantics |
| Office rules | Deterministic domain rules | Allowed rule types, location scope, hard/soft classification, effective date |
| Provider rules/preferences | Deterministic rules and bounded soft ranking | Precedence, conflicting rules, authority to override, rule-version ownership |
| Patient free-text constraints | PHI boundary then bounded AI interpretation | Minimization, supported constraints, confirmation, uncertainty/failure behavior |
| Candidate validity | Deterministic server evaluation | Explainable hard checks, input provenance, availability freshness, time/DST policy |
| Soft ranking | Pure ranking contract with application/AI suggestions | Score limits, deterministic fallback, ties, reproducibility and explanations |
| Three recommendations | Application output | Behavior with fewer than three valid candidates; never fabricate availability |
| Quick day/time filtering | Application/domain | Filter semantics, local timezone, recomputation and stale-result policy |
| Utilization visualization | Application read model and UI | Agreement 10–15-minute granularity; exact bins and denominator definitions |
| Simulation | Application plus pure rules | Synthetic inputs and explicit no-write guarantee; output comparison policy |

All entries are **PENDING CONFIRMATION**; Dentrix-dependent entries additionally require **PENDING DENTRIX VALIDATION**. Office/provider precedence must be an explicit ADR, not an ordering accident in code. Rule changes need version history and minimized audit events; how an approved booking binds to a rule version must be designed before writes.

Required synthetic tests include conflicting hard rules, duration boundaries, missing configuration, multiple procedures/resources, overlapping candidates, office/provider conflicts, timezone/DST transitions, unavailable AI, malformed AI output, fewer than three valid slots, stale availability, concurrent approval, and simulation producing no external mutation.
