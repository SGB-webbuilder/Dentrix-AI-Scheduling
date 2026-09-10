# Application/API boundary

Status: **PROPOSED**. No URLs, request fields, response schemas, or handlers have been defined. Dentrix API contracts remain **PENDING DENTRIX VALIDATION**.

Future Next.js server entrypoints adapt authenticated requests into framework-independent application use cases. Expected operation families include duration configuration ingestion, office/provider rules, recommendations/filtering, utilization, simulation, explicit approved submission, and recovery status. Their final contracts require approved requirements; these names are not endpoint promises.

For each future operation, document method/route, roles, authorized tenant/location derivation, input/output allowlists, sensitive fields, runtime validation, error categories, rate/cost controls, audit event, caching policy, and test evidence. For mutations also specify CSRF/origin handling as applicable to the chosen session mechanism, duplicate protection, approval binding, consistency, retry/recovery, and allowed environments.

Keep patient identifiers and sensitive text out of URLs, analytics, ordinary logs, and error messages. Runtime validation must reject unrecognized or unauthorized scope, and server-side authorization must run for every protected operation regardless of UI visibility.

Only the approved application workflow may request a Dentrix write. It must bind approval to the authenticated actor and the approved patient/slot/rule context using a reviewed design, revalidate just before submission, and stop or reconcile ambiguous outcomes. Exact identifiers and state transitions are **PENDING CONFIRMATION** and **PENDING DENTRIX VALIDATION**.
