# Initial setup execution checklist

This order avoids committing private source material and avoids consuming Dentrix sandbox time. No external repository has been created by this preparation. Each unchecked step still needs execution/evidence.

| Phase | Action | Expected result | Dependency | Can complete now? |
| --- | --- | --- | --- | --- |
| A1 | [ ] Confirm IZURE-designated organization/repository, private visibility and administrator | Exact approved remote destination | IZURE designation/access | PENDING CONFIRMATION |
| A2 | [ ] Confirm GitHub plan, collaborators, MFA, Sedrick handle and reviewer | Known security entitlements and owners | Organization administrator | BLOCKED — CLIENT ACCESS REQUIRED |
| A3 | [ ] Reconcile external KOS task and bind instructions to the actual future checkout | Validated repository/Git/instruction authority before product work | KOS owner and designated checkout | PENDING CONFIRMATION |
| B1 | [ ] Set private visibility, Actions restrictions, scanning/push protection and minimum privileges | Security settings effective before first code push | A1–A2 and plan | After access |
| C1 | [ ] Create/clone the designated empty private repository into a separate clean directory | Git worktree containing no restricted source documents | A1 and authorized GitHub access | After access; no Dentrix dependency |
| C2 | [ ] Copy only the contents of this `scaffold/` into that checkout | Prepared modules/config/docs; no parent KOS/contracts/attachments | C1 | Local copy possible now; designated target pending |
| C3 | [ ] Verify runtime pins and review the complete candidate dependency inventory with IZURE | Notification and HIPAA/license/security confirmation references | Agreement §4.2 and `docs/testing/dependency-review.json` | Prepare now; approval pending |
| C4 | [ ] Record review; generate/verify lockfile and run `npm ci --ignore-scripts` | Reproducible approved dev tools, no lifecycle scripts | C3; registry access | After review |
| D1 | [ ] Confirm README, scope map, ADR proposals, owner map, private reporting contact and legal notice | Joiner understands boundaries and open decisions | Named owners | Drafts prepared now; confirmations pending |
| D2 | [ ] Replace CODEOWNERS comments with verified handles; approve a maintained secret scanner and install local hooks | Real ownership and local secret checks | A2, dependency/tool review | After review |
| E1 | [ ] Run dependency-free foundation checks and tests | Honest scaffold integrity evidence | Node pin | Yes |
| E2 | [ ] Run reviewed lint, typecheck, formatting, dependency audit and foundation build validation | CI commands reproducible without Dentrix/AWS | C4 | After review |
| F1 | [ ] Inspect file list, staged diff and history with reviewed secret scanner and manual PHI review | Only intended synthetic technical assets staged | C2, D2 | In designated checkout after setup |
| F2 | [ ] Make initial commit and push only to the private designated remote | Clean initial history; no public publication | A–F1 | After destination/security confirmation |
| G1 | [ ] Select actual job contexts and activate `main` PR/check/conversation/force-push/deletion rules | Enforced protection; documented solo review setting | First GitHub CI run, plan | After first push |
| G2 | [ ] Open a small technical PR to verify protection and CI behavior | Actual merge-blocking evidence, checks green after tool review | G1 | After setup |
| H1 | [ ] Independently review scaffold and record check results, commit identity, unresolved limits | Reviewable repository-preparation result | All preceding steps | Local review possible now; remote checks pending |
| H2 | [ ] Link repository/PR/commit/docs/test evidence in ClickUp; Loom for significant architecture delivery | Single execution record and appropriate demo evidence | ClickUp access, agreement §6 | After access; no external messages sent here |
| I1 | [ ] Approve application-shell task and framework/library choices, then add real Next build/unit tests | Actual runnable application foundation later | Governance/architecture/dependency approval | Not part of current preparation |
| I2 | [ ] Validate AWS/BAA/model/account/region and create infrastructure through reviewed IaC | Client infrastructure readiness evidence | Client access and separate provisioning authorization | BLOCKED — CLIENT ACCESS REQUIRED |
| I3 | [ ] Validate Dentrix capability matrix, sandbox contracts and feasibility outcome | Evidence for GO / GO WITH ADJUSTMENTS / CRITICAL BLOCKER | Approved sandbox credentials/context | PENDING DENTRIX VALIDATION |
| I4 | [ ] Implement protected staging/production delivery and separate human/write approval controls | Tested controlled deployment/rollout | Real app, environment and acceptance evidence | Later, separately authorized |

Never run `git init` in the parent document/KOS workspace. Git creation, remotes, commits, pushes and settings were left to the designated checkout because its identity is unconfirmed. Do not copy this report's private source provenance or confidential source files into it. A foundation pass does not satisfy I1–I4 or the full Milestone 0 feasibility gate.
