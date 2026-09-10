# Initial setup execution checklist

This order avoids committing private source material and avoids consuming Dentrix sandbox time. The scaffold is now in the selected private GitHub repository; each unchecked step still needs execution/evidence.

| Phase | Action | Expected result | Dependency | Can complete now? |
| --- | --- | --- | --- | --- |
| A1 | [x] Select existing private `SGB-webbuilder/Dentrix-AI-Scheduling`; verify owner access | Private remote and administrator identity confirmed | User push instruction and authenticated account | Completed 2026-09-11 |
| A2 | [ ] Confirm IZURE designation/transfer, GitHub plan, collaborators, MFA and independent reviewer | Contractual destination plus known security entitlements/owners | IZURE and repository administrator | PENDING CONFIRMATION |
| A3 | [ ] Reconcile external KOS task and bind instructions to the actual future checkout | Validated repository/Git/instruction authority before product work | KOS owner and designated checkout | PENDING CONFIRMATION |
| B1 | [ ] Set private visibility, Actions restrictions, scanning/push protection and minimum privileges | Security settings effective before first code push | A1–A2 and plan | After access |
| C1 | [x] Initialize `scaffold/` as a separate Git root and connect the existing empty private remote | Git worktree contains no restricted parent source documents | Selected remote and authorized GitHub account | Completed 2026-09-11 |
| C2 | [x] Stage only the 115 scaffold files | Prepared modules/config/docs; no parent KOS/contracts/attachments | C1 | Completed 2026-09-11 |
| C3 | [ ] Verify runtime pins and review the complete candidate dependency inventory with IZURE | Notification and HIPAA/license/security confirmation references | Agreement §4.2 and `docs/testing/dependency-review.json` | Prepare now; approval pending |
| C4 | [ ] Record review; generate/verify lockfile and run `npm ci --ignore-scripts` | Reproducible approved dev tools, no lifecycle scripts | C3; registry access | After review |
| D1 | [ ] Confirm README, scope map, ADR proposals, owner map, private reporting contact and legal notice | Joiner understands boundaries and open decisions | Named owners | Drafts prepared now; confirmations pending |
| D2 | [ ] Replace CODEOWNERS comments with verified handles; approve a maintained secret scanner and install local hooks | Real ownership and local secret checks | A2, dependency/tool review | After review |
| E1 | [x] Run dependency-free foundation checks and tests | Structure and local limited scan passed; 9/9 Node tests passed | Node pin | Completed 2026-09-11 |
| E2 | [ ] Run reviewed lint, typecheck, formatting, dependency audit and foundation build validation | CI commands reproducible without Dentrix/AWS | C4 | After review |
| F1 | [x] Inspect the complete staged file list/diff and run the limited staged secret scan | Only the intended 115 technical scaffold files were committed; no parent artifacts | C2 | Completed 2026-09-11; maintained history scanner still pending D2 |
| F2 | [x] Commit and push `main` to the selected private remote | Remote commit matches local commit; repository remains private | A1, C1, F1 | Completed 2026-09-11; IZURE designation remains A2 |
| G1 | [ ] Select actual job contexts and activate `main` PR/check/conversation/force-push/deletion rules | Enforced protection; documented solo review setting | First GitHub CI run, plan | After first push |
| G2 | [ ] Open a small technical PR to verify protection and CI behavior | Actual merge-blocking evidence, checks green after tool review | G1 | After setup |
| H1 | [ ] Independently review scaffold and record check results, commit identity, unresolved limits | Reviewable repository-preparation result | All preceding steps | Local review possible now; remote checks pending |
| H2 | [ ] Link repository/PR/commit/docs/test evidence in ClickUp; Loom for significant architecture delivery | Single execution record and appropriate demo evidence | ClickUp access, agreement §6 | After access; no external messages sent here |
| I1 | [ ] Approve application-shell task and framework/library choices, then add real Next build/unit tests | Actual runnable application foundation later | Governance/architecture/dependency approval | Not part of current preparation |
| I2 | [ ] Validate AWS/BAA/model/account/region and create infrastructure through reviewed IaC | Client infrastructure readiness evidence | Client access and separate provisioning authorization | BLOCKED — CLIENT ACCESS REQUIRED |
| I3 | [ ] Validate Dentrix capability matrix, sandbox contracts and feasibility outcome | Evidence for GO / GO WITH ADJUSTMENTS / CRITICAL BLOCKER | Approved sandbox credentials/context | PENDING DENTRIX VALIDATION |
| I4 | [ ] Implement protected staging/production delivery and separate human/write approval controls | Tested controlled deployment/rollout | Real app, environment and acceptance evidence | Later, separately authorized |

Never run `git init` in the parent document/KOS workspace. The Git root is `scaffold/`; do not copy private source provenance, KOS state or confidential source files into it. The selected remote and initial push are verified, while IZURE designation/transfer and administrative settings remain pending. A foundation pass does not satisfy I1–I4 or the full Milestone 0 feasibility gate.
