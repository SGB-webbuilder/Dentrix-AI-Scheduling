# PHI-safe data handling

**Never commit patient names, DOB, phone/email, insurance details, chart notes, patient identifiers, PHI screenshots, Dentrix patient payloads, production logs, credentials, tokens or API keys.** This applies to branches, commits, deleted files in history, PR comments, issue forms, CI artifacts, ClickUp and Loom.

Use synthetic fixtures generated without a real patient source. Approved de-identified material requires a documented review confirming it is safe; replacing a name or assigning a token is insufficient. For this foundation, use synthetic material exclusively. Use placeholders for tenant/location/record references and never real clinic configuration exports.

Only collect fields needed for an authorized use case. The future secure PHI boundary must inspect free text, model prompts, error messages, metadata and tool traces, as well as structured fields. Patient-token mappings remain encrypted in client AWS; no browser, AI model, Git artifact or developer machine receives the mapping.

Log allowed operational metadata only: operation, opaque correlation ID, status, duration and safe error category. Future audit actor/affected-record references need access controls and retention rules because pseudonymous references can remain sensitive. Never dump environment variables, headers, cookies, prompts or payloads during failures.

Before a commit, inspect the complete staged diff, filenames, screenshots and test reports. Run staged secret checks. Before a push, use a maintained history-capable secret scanner as described in [controls](repository-controls.md). Automated pattern checks cannot prove text is PHI-free. If exposure is suspected, follow [incident response](../runbooks/incident-response.md); deletion in a later commit does not remove history or revoke a secret.
