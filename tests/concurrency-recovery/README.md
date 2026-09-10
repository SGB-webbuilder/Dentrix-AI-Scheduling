# Concurrency and recovery tests

Reserved for simultaneous approval of overlapping slots, repeated submission, stale availability/rules, lost responses, crash/restart, read-back, event replay/out-of-order delivery, and reconciliation.

Prove that uncertain external writes are reconciled before any retry. Local mock behavior cannot prove Dentrix idempotency or concurrency semantics. The write/recovery contract is **PENDING DENTRIX VALIDATION** and requires an approved failure design.
