# Audit policy and events

Owns which security and business actions require evidence and the minimum safe event metadata. Infrastructure owns durable delivery and storage; security policy defines access and sensitivity.

The agreement requires at least six years of audit-log retention and immutability with no administrator deletion. Retention architecture, required fields, tamper evidence, search/access controls, and recovery proof are **PENDING CONFIRMATION**. This requirement does not authorize retaining temporary patient mappings or booking payloads for six years.

Never include patient names, notes, prompts, raw Dentrix bodies, tokens, credentials, or unreviewed exception messages in ordinary logs or audit events. Decide whether linkable references are necessary and restricted before implementation.
