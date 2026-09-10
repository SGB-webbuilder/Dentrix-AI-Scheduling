# Project persistence

Status: **PROPOSED**. A managed PostgreSQL-compatible database is the expected direction. Provider, engine version, driver, ORM/migration tool, topology, and schema are **PENDING CONFIRMATION**.

`src/repositories/` will implement scoped persistence ports. `schema/` will hold approved project-owned definitions. `migrations/` will hold reviewed versioned migrations. These locations contain documentation only; no database is provisioned or modified.

Anticipated records include organizations, locations, users, roles, memberships, integration configuration references, duration configuration, office/provider rules, rule versions, restricted token mappings, audit records, and temporary booking recovery state. This is a planning inventory, not an approved schema.

Dentrix remains authoritative for clinical and final appointment records. Do not build a permanent parallel patient, treatment, or appointment database. Any temporary sensitive material needs explicit scope, encryption, access controls, and a retention/deletion decision. See [database preparation](../../docs/database/database-preparation.md).
