# Application layer

Status: **PROPOSED**. Coordinates authorized use cases; no business logic is implemented.

Owns recommendation orchestration, rule configuration and version selection, approved booking intent, simulation, audit intent, and event/recovery workflows. Depends on pure scheduling and shared contracts plus server-side security policy. Defines narrow adapter ports; infrastructure and integration implementations satisfy them. It must not depend on Next.js or Dentrix transport DTOs.

`src/use-cases/` holds workflow orchestration; `src/ports/` holds integration/persistence interface definitions after evidence approval; `src/audit/` holds minimized audit-event policy; `src/events/` holds webhook/reconciliation processing policy. A durable process boundary is a later deployment decision, not a new microservice requirement.

All writes require authenticated authorization, scoped human approval, fresh hard validation, and a controlled write gate. Actual booking states, transaction boundaries, retries, and reconciliation contracts are **PENDING DENTRIX VALIDATION**.
