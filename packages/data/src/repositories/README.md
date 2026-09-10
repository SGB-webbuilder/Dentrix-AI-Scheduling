# Scoped persistence adapters

Reserved for implementations of application/security-owned persistence interfaces after schema and database access are approved. Require explicit authorized tenant/location scope where applicable and avoid unscoped query helpers.

Transaction boundaries, concurrency controls, encryption, audit storage, and recovery-state durability are **PENDING CONFIRMATION**. Do not assume an application transaction can atomically commit a Dentrix API write.
