# Tenant and location isolation — PROPOSED

Authenticated server-side context determines tenant, permitted locations and role permissions. Browser-supplied organization/location IDs are untrusted request inputs, never authority. Every use case, repository query, cache key, event, audit reference and Dentrix credential selection must carry verified scope. Unknown or mismatched scope fails closed.

Admin, Doctor and Front Desk are agreement-defined starting roles; exact permission matrix and multi-location memberships are **PENDING CONFIRMATION**. Admin is not a cross-tenant bypass. MFA, 15-minute idle expiry, concurrent-session prevention, revocation and step-up needs belong in authentication design before implementation.

Define negative tests for guessing record IDs, modifying tenant/location claims, stale memberships, cross-tenant cache hits, webhook misrouting, recovery-state leakage, token mapping access and background job scope. Decide whether database row-level policies supplement application enforcement in a proposed database/security ADR; no such policy exists yet.
