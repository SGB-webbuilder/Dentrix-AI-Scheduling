# Future App Router entrypoints

Reserved for pages, layouts, loading/error presentation, and thin HTTP route handlers. There are no routes or framework special files yet.

Keep server-only data access out of browser bundles. Derive identity and authorized tenant/location on the server; validate every request independently. Do not accept a client-supplied tenant identifier as authorization. Do not cache responses containing patient or tenant data until cache scope, invalidation, and isolation are designed and tested.

HTTP operations and schemas are **PENDING CONFIRMATION**. Dentrix-facing details are **PENDING DENTRIX VALIDATION**. Future handlers call application use cases rather than implementing scheduling, booking recovery, or adapter behavior here.
