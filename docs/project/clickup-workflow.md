# ClickUp ↔ GitHub workflow

ClickUp owns execution/project status; GitHub owns source, technical discussion, checks and review. Do not create a second backlog in GitHub Projects or duplicate every ClickUp task as a GitHub issue.

| Artifact | Required reference / purpose |
| --- | --- |
| ClickUp task | Description, approved scope, acceptance criteria, estimate, subtasks before work, actual time, daily status, blocker, PR and evidence links |
| Git branch | `<kind>/<clickup-id>-<short-description>` |
| Commit / squash commit | Clear change purpose and ClickUp identifier |
| GitHub issue | Optional technical defect/reproduction or design discussion; link canonical ClickUp task, no duplicate status board |
| Pull request | ClickUp link; behavior/problem; test results; documentation/ADR; dependency review and data/security impact; rollout if relevant |
| Verification evidence | Commit/artifact identity, command/scenario, environment classification, date and sanitized outcome |
| Loom | Linked from ClickUp for completed user-facing features, major integrations/tokenization/Bedrock deliverables, milestone demos, significant architecture decisions and significant bug/security fixes (§6.1) |

Minor refactoring/configuration/utilities may use ClickUp updates and Git commits without a separate Loom. All recordings are internal to the authorized IZURE team and contain only synthetic, approved de-identified or redacted content. Never record secrets or patient screens.

Update task status at least daily; correct omitted records within the agreement's 24-hour window. Flag blockers immediately in ClickUp and the approved WhatsApp channel (§6.2); third-party/client dependency impact notices follow §2.5. The engineer performs these communications through the authorized channels—this scaffold sends no messages or creates external tasks.

Milestone acceptance remains the agreement's IZURE process. A merged PR or green CI is evidence, not acceptance by itself.
