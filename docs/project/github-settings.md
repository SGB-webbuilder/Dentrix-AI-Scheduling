# GitHub settings checklist

Status: the scaffold was pushed to the existing private `SGB-webbuilder/Dentrix-AI-Scheduling` repository on 2026-09-11. Its visibility, owner access and default `main` branch were verified. Administrative security settings below remain recommendations until separately applied and tested. Verify the actual account plan and entitlements before relying on enforcement. Sources checked 2026-09-09.

## Repository and people

- [x] Select the existing private `SGB-webbuilder/Dentrix-AI-Scheduling` repository and verify `SGB-webbuilder` has administrator access.
- [ ] Confirm with IZURE that this personal-account repository is the designated delivery location, or document the approved transfer to the required IZURE organization, under agreement §10.
- [ ] Keep visibility private. Limit access to named authorized collaborators; Sedrick is primary technical owner, a designated IZURE administrator owns administration, and future engineers receive write access only as needed. Require MFA and remove departed users.
- [x] Confirm Sedrick's GitHub handle as `@SGB-webbuilder` and activate it in `.github/CODEOWNERS`.
- [ ] Set a qualified second security/infrastructure reviewer or team when available.
- [ ] Enable Issues for technical records linked to ClickUp. Disable Wiki and Discussions initially; keep documentation in PR-reviewed `docs/`. Leave GitHub Projects off unless it is a view of the existing ClickUp workflow rather than another backlog.

## Main branch

- [ ] Set `main` as default. Use an active rule/ruleset covering `main`, not a merely evaluated rule.
- [ ] Require PRs, successful **Foundation checks** and **Reviewed tooling checks**, and resolved conversations. Select the exact job contexts after their first real run.
- [ ] Block force pushes and deletion; require linear history and squash merge. Disable merge commits/rebase merge to keep one simple path; auto-delete merged branches.
- [ ] Require the candidate branch to be up to date before merge. Do not require the product-build check until a real application exists; it must become mandatory when the application shell is added.
- [ ] During solo bootstrap, use zero required approving reviews and document self-review. Once a qualified second person can review, require one approval, dismiss stale approvals and require review after the latest push. Require code-owner review only after valid owners are configured and available.
- [ ] Apply restrictions to administrators where supported; keep routine bypass actors empty. Any emergency exception is time-limited, recorded, and immediately restored. `main` must not accept ordinary direct pushes.
- [ ] Signed commits: recommended after the team has configured managed signing, initially optional to avoid onboarding deadlock. CI and review remain required.

PR authors cannot approve their own PRs; see [GitHub approval documentation](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/approving-a-pull-request-with-required-reviews). Rulesets for private repositories require an eligible paid plan; confirm organization Team/Enterprise support in [ruleset availability](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets). A checklist is not evidence that a rule is enforced.

## Actions and supply chain

- [ ] Restrict allowed Actions to the reviewed set; use full commit SHA pins and review Dependabot pin updates.
- [ ] Default workflow permissions to read-only; disable Actions creating/approving PRs. Keep checkout credentials unpersisted.
- [ ] Use GitHub-hosted disposable runners for synthetic-only CI initially. Do not run untrusted PR code on a self-hosted runner inside client infrastructure.
- [ ] Require approval for outside-contributor workflows where applicable. No `pull_request_target` or privileged follow-on execution of untrusted artifacts.
- [ ] Add no AWS, Dentrix, database or model secrets to PR CI. Future OIDC permissions belong only in approved deployment jobs.
- [ ] Use minimal artifact/log retention suitable for sanitized engineering evidence; review retention before enabling uploads. No raw payload or environment dumps.
- [ ] Enable Dependabot alerts and security updates plus the committed weekly npm/GitHub Actions update configuration. Keep update PRs reviewed; no auto-merge. Registry advisory results are one input, not proof of package trust.

These controls follow [GitHub Actions security guidance](https://docs.github.com/en/actions/reference/security/secure-use). Exact action versions/pins are in the committed workflow and remain subject to review.

## Native scanning

- [ ] Verify and enable GitHub Secret Protection for organization-owned private repositories: secret scanning and push protection. GitHub Team/Enterprise plus the applicable product is required; see [availability](https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning). Do not count personal public-repository push protection as private-repository coverage.
- [ ] Retain local/CI secret checks regardless of native coverage. Introduce a maintained scanner such as Gitleaks after exact version/license/security review; inspect the initial history before first push.
- [ ] Enable private CodeQL/code scanning after confirming GitHub Code Security entitlement and adding actual application source. See [code scanning availability](https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning). Document an approved alternative if unavailable; do not claim it is active.

## Environments and releases

- [ ] Later create `staging` and `production` GitHub Environments with branch/tag restrictions, isolated configuration and no static AWS keys.
- [ ] Protect production with an authorized reviewer, prevent self-review and disallow bypass where the plan supports these controls. Private environment required reviewers require Enterprise; Pro/Team environment creation alone does not provide that approval gate. Verify [environment feature availability](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments).
- [ ] If enforceable approval is unavailable, keep production deployment absent until an approved client-controlled alternative is configured and tested. A dispatch button alone is not independent approval.
- [ ] Later constrain OIDC trust to the exact repository/environment and intended audience, based on observed claims and [current AWS OIDC guidance](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-aws). A new repository may have a different subject format from older examples.
- [ ] Release only tested artifact digests. Tags and merges do not enable Dentrix writes. Record written IZURE production-write authorization separately from deployment approval and each user's appointment approval.

## Administrative smoke verification

Use a temporary nonproduction test branch/PR after setup to confirm missing checks and unresolved conversations block merge. Verify branch deletion/force-push restrictions through settings/API evidence without destructive attempts. Confirm a synthetic example is handled safely by scanning and that workflow permissions contain no deployment authority. Record actual results in ClickUp; this scaffold contains no GitHub-side verification result.
