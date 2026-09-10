# Tenant and location scope

Reserved for deriving authorized organization/location scope from authenticated membership and enforcing it across application use cases, database queries, Dentrix calls, caches, audit events, and background work.

Tenant identifiers in request input are untrusted. Verify membership and operation permission before resolving an adapter or accessing data. Never default to a global tenant or reuse cached results across scopes.

Actual Dentrix organization/location identifiers and scoping semantics are **PENDING DENTRIX VALIDATION**. Database isolation mechanisms and membership model are **PENDING CONFIRMATION**.
