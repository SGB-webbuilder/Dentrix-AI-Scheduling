# Incident response — preparation template

Owner: Sedrick during delivery; authorized IZURE escalation contact and backup: **PENDING CONFIRMATION**. Operational ownership after handover: IZURE/client, subject to the agreement and any separately agreed support.

1. Stop the suspected exposure path. Use only authorized containment access. If appointment writes may be unsafe, disable the write gate through the approved procedure once implemented.
2. Notify the approved IZURE contact privately within one hour of suspected breach/security incident per agreement §11.2. Include sanitized timing, environment, impact and containment status. Do not contact the end client without written authorization.
3. Preserve evidence in the approved restricted incident system. Record opaque evidence references in ClickUp; no PHI, secrets, raw logs or screenshots in GitHub.
4. For a leaked credential, revoke/rotate promptly through its owner. Inspect audit/access evidence and dependent credentials. Removing a Git file is insufficient. History rewriting, artifact deletion and remote changes require coordinated explicit authorization.
5. Assess affected systems and data with IZURE and the designated security/privacy owner. Legal/regulatory notification decisions belong to that owner; this template sets no statutory conclusion.
6. Recover using reviewed changes, verify credential invalidation and service health, and obtain the necessary authorization before re-enabling writes.
7. Record root cause, sanitized evidence, follow-up tasks, control gaps, and a later rehearsal. Retain incident records only in the approved system under the approved policy.

Missing prerequisites: confirmed contacts, incident evidence location, scoped emergency access, shutdown/rotation commands, recovery procedure and drill. This file is not a tested operational runbook.
