# Future migrations

No SQL or executable migration is included. Add reviewed, ordered migrations only after an approved schema and environment binding exist.

Each migration needs affected objects, sensitive-data assessment, application compatibility, forward/rollback or recovery strategy, synthetic verification, and deployment authorization. Production migrations must follow the controlled release process; never run migrations implicitly from a PR check.
