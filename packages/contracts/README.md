# Shared contracts

Status: **PROPOSED**. Put only stable, intentionally shared pure types and runtime-validation contracts in `src/` after their requirements are approved. No DTO, schema, validation library, or endpoint contract is defined yet.

Keep external Dentrix DTOs in the Dentrix adapter, scheduling internals in the domain, and database models in data. This package must not become a miscellaneous utility bucket or a route for exporting privileged server types to browsers.

Dependencies must not point to application, integrations, data, or Next.js. Browser-facing contracts require an explicit allowlist and PHI review. TypeScript types do not replace runtime validation, authorization, or isolation.
