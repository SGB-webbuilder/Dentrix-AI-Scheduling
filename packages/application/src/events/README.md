# Event and recovery processing

Reserved for scoped webhook ingestion, deduplication, ordered or out-of-order event handling, reconciliation triggers, and recoverable background use cases after external behavior is verified.

Webhook support, event identity, signature verification, retry/delivery guarantees, ordering, and reconciliation endpoints are **PENDING DENTRIX VALIDATION**. Queue technology and separate worker hosting are **PENDING CONFIRMATION**. No listener or worker is implemented.

Never treat a local timeout as proof that an external write failed. The approved recovery design must verify external state before any repeat write and prevent automated ambiguous retries.
