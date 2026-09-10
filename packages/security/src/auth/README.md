# Authentication and authorization

Reserved for server-side session validation, permission decisions, MFA requirements, and role policy. Admin, Doctor, and Front Desk are agreement roles; exact operation permissions remain **PENDING CONFIRMATION**.

The agreement requires MFA for every user, 15-minute idle session expiration, and prevention of concurrent sessions. Identity provider, revocation mechanisms, emergency access, and authorization tests must be approved before implementation. Apply checks to every protected request and use case; hiding UI controls is insufficient.
