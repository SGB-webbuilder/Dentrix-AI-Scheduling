# Database preparation

Status: **PROPOSED**. A managed PostgreSQL-compatible database in client-owned AWS is the expected direction. There is no deployed database, schema, connection, migration, ORM, or selected service in this scaffold.

## Ownership inventory

Anticipate project-owned tenants/organizations, locations, users, roles, memberships, integration configuration references, duration configuration, office/provider rules, rule versions, immutable audit evidence, restricted random-token mappings, and temporary booking recovery state. This inventory does not establish tables, keys, relationships, DTO fields, or retention periods.

Dentrix remains authoritative for patient, treatment, provider, scheduling, and final appointment records. Do not create a permanent parallel clinical database. Project configuration may refer to validated external resources through a reviewed mapping; identifier shape and scoping remain **PENDING DENTRIX VALIDATION**.

## Required design evidence

Select service/engine, migration tool, access layer, network boundaries, least-privilege roles, encryption/KMS model, tenant/location enforcement, transaction/concurrency semantics, backup/restore targets, and observability only after requirements and client AWS constraints are verified. RLS or another isolation mechanism requires an explicit decision and negative tests; no mechanism is assumed operational.

Define sensitive field classification, mapping access, data minimization, retention/deletion, backups, and recovery ownership for each record. Agreement §4.1 requires encrypted patient mappings excluded from AI and at least six years of immutable audit logs with no administrator deletion. Temporary mapping and booking-state TTL are **PENDING CONFIRMATION** and must remain distinct from audit retention.

Migration sources will live in [packages/data/migrations](../../packages/data/migrations/README.md); approved schema definitions in [packages/data/schema](../../packages/data/schema/README.md). Require reviewed changes, synthetic migration verification, compatibility planning, recovery evidence, and controlled environment authorization. A local database transaction cannot make an external Dentrix write atomic.

AWS/account-backed verification is **BLOCKED — CLIENT ACCESS REQUIRED**. Do not generate speculative SQL or apply migrations as part of repository preparation.
