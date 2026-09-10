# Security boundaries

Status: **PROPOSED**. Server-side policy for `src/phi/`, `src/auth/`, and `src/tenancy/`. No control is implemented or certified by the existence of these folders.

Identity-provider infrastructure is a later selection. Authentication does not replace authorization. Application use cases must apply role and tenant/location checks; persistence and integration adapters must preserve the authorized scope. Browser callers cannot grant scope or privileges.

The agreement baseline includes MFA for all users, Admin/Doctor/Front Desk role separation, a 15-minute idle session limit, and prevention of concurrent sessions. Provider capabilities, exception handling, and exact permission matrix are **PENDING CONFIRMATION**. Security policy should depend only on pure contracts; persistence and provider mechanisms should be injected through narrow interfaces.
