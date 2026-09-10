# Web application

Status: **PROPOSED — preparation only.** No Next.js dependency, runnable application, route, authentication flow, or deployment exists in this scaffold.

The intended MVP has one Next.js application with browser presentation and thin server entrypoints. `src/app/` will contain App Router pages, layouts, and HTTP routes after implementation is authorized. Framework version and AWS hosting integration remain **PENDING CONFIRMATION**.

Browser code may consume explicitly approved, PHI-minimized contracts. It must never import database, Dentrix, Bedrock, secret-management, token-mapping, or privileged security modules. Server entrypoints perform authenticated input handling and delegate to application use cases. A future server-only composition module will connect those use cases to adapters; dependency checks must enforce this distinction when code is introduced.

The UI will eventually expose role-appropriate workflows, three recommendations, filtering, utilization views, simulation, and explicit **Approve and Submit**. A UI click alone is insufficient authorization: server-side role, tenant/location, current availability, hard constraints, and production-write gates remain required.

See [architecture](../../docs/architecture/architecture-overview.md), [API boundary](../../docs/api/api-boundary.md), and [security](../../docs/security/).
