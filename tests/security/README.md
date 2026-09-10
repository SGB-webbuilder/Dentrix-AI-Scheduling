# Security tests

Reserved for MFA/session expiry and concurrent-session prevention, role/permission checks, request validation, safe error/log handling, browser/server separation, restricted mapping access, injection defenses, and audit controls. Assertions must follow approved security requirements.

`tenant-isolation/` owns negative scope tests. Do not store real credentials, patient data, stolen tokens, or production attack payloads here; use bounded synthetic inputs.
