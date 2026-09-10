# Execution baseline

Status: source-derived technical summary; implementation and acceptance are pending.

The signed IZURE LLC Independent Contractor Agreement supplied by the project owner is primary. Relevant sections were directly inspected for this preparation. The confidential source remains outside this repository. Later written approved amendments prevail over earlier supporting documents; no amendment was supplied or verified for this preparation.

| Source | Engineering consequence |
| --- | --- |
| §1 | Integrate through the official Dentrix API; AI via Amazon Bedrock/Claude; communication with the end client requires IZURE authorization. |
| §§2.1–2.3 | The agreement estimates approximately 10 weeks after prerequisites, with M0/M1/M2 approximately 2/3/5 weeks. The 60-day sandbox is an integration-validation window. GitHub preparation uses no sandbox time. This scaffold does not establish the official start date or readiness of prerequisites. |
| §2.4 and §3 M0 | API mapping, architecture, database design, AWS setup, repository/CI, connection prototype, rules specification and feasibility assessment remain M0 deliverables. Only the repository preparation subset is addressed here; missing AWS/Dentrix evidence prevents completion of the full milestone. |
| §3 M1 | Future app shell, MFA, configurable Admin/Doctor/Front Desk permissions, sandbox integration, CDT duration ingestion, Bedrock, tokenization, audit, responsive UI and staging deployment. |
| §3 M2 | Rules configuration, three recommendations, quick/free-text filtering, explicit approval submission, utilization at 10–15-minute increments, simulation, edge cases, testing, security review, UAT, shadow mode, controlled production write-back, handover. |
| §4.1 | KMS-backed AES-256 storage encryption, TLS 1.2+, secret management, patient identifier tokenization before AI, encrypted mapping inaccessible to AI, MFA for every user, 15-minute inactivity timeout, concurrent-session prevention, immutable audit records, at least six years' audit retention or IZURE specification, one designated region, encrypted backups, human-gated writes. These are implementation requirements, not controls implemented by this scaffold. |
| §4.2 | Consistent code/documentation and notified/reviewed third-party libraries. Candidate tooling requires IZURE confirmation before installation/adoption. |
| §§4.3–4.5 | Critical automated tests, documented results, regression before milestone demonstrations, sanitized documentation; approximately five-second recommendations under stated normal load of five concurrent users, up to 15 providers and 60-day lookahead, with external latency measured separately. |
| §§4.6–4.7 | Operational handover to IZURE/client; contractor technical security review. External certification and specialist audits are not silently included. |
| §6 | ClickUp execution tracking, estimates/actual time, daily updates, repository technical documentation and Loom for defined significant deliverables. |
| §10 | Project-specific ownership/delivery follows the IZURE-to-end-client assignment chain. No public repository or invented license. |
| §11 | Confidentiality, synthetic/safely de-identified documentation, no patient data on personal devices; suspected incident notice to IZURE within one hour. |

The user additionally directs deterministic server-side hard validation, clean modular boundaries, a proposed Next.js/TypeScript stack and PostgreSQL-compatible storage, no real PHI in repository artifacts, no live infrastructure creation, and no implementation of business logic in this task. AWS/Bedrock are supported by the agreement; Next.js, PostgreSQL, Terraform and detailed module design remain engineering proposals.

## Conflicts and missing decisions

- The existing external KOS intake allows discovery only and has no verified Git binding. This latest user request authorizes local preparation. The prepared scaffold does not advance that lifecycle, establish its future authority, or constitute an approved implementation handoff. Reconcile the task contract and instruction binding before product development.
- Older document names refer to 12-week plans. Those documents were not imported or treated as amendments. Use the signed agreement's timing; any claimed later change needs its written approval reference.
- The user's general client-owned repository direction is implemented as an **IZURE-designated private repository**, consistent with §10. The actual organization/repository and transfer process are pending.
- Unknown Dentrix capabilities remain pending feasibility evidence. No endpoint, field, idempotency guarantee, webhook signature or rate limit has been invented.
- HIPAA service eligibility, BAA coverage, model configuration and technical controls require separate evidence. Tokenization does not itself establish de-identification or HIPAA compliance.

Track approved changes by safe decision reference, date, owner, affected criteria, ADR and ClickUp task. Keep the confidential approval record in its approved system.
