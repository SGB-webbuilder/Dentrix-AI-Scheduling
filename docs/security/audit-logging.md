# Audit and operational logs — PROPOSED

Agreement §4.1 requires patient-data access, user login, scheduling actions and system modifications to be audited with timestamp, actor, action, affected-record reference and outcome. It also requires immutable records unavailable for alteration/deletion even to application administrators and retention of at least six years or an IZURE specification. This is recorded as a contractual requirement, not a universal statement about HIPAA log-retention law.

Use separate operational telemetry and protected audit destinations. Redact tokens, credentials, PHI not operationally necessary and sensitive payloads from both. Pseudonymous actor/record references may remain sensitive; their access and retention require approval. A normal mutable application table alone does not satisfy the immutability requirement.

Before implementation, decide the append-only ingestion path, AWS retention/immutability enforcement, KMS roles, clock/correlation scheme, backup handling, permitted reader roles and alerting for failed audit writes. Document whether a user action must fail if durable audit recording is unavailable. Resolve retention conflicts with short-lived booking and token mappings through explicit data classification; do not retain full clinical payloads for audit convenience.

Evidence: **PENDING CONFIRMATION**. Tests must prove completeness, sanitized failures, no administrator modification, tenant scope, write approval traceability and recovery behavior without real patient data.
