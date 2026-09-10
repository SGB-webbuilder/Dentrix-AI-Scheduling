# Tooling candidate and validation boundaries

This is a repository preparation scaffold. It contains no executable web application, database migration, Dentrix adapter, authentication service, or deployable artifact. `npm run build` and `npm run build:foundation` validate the scaffold only. `npm run build:app` exits with a blocked message; a real application build and its tests are pending later architecture and implementation.

## Candidate dependency review

All selections below are candidates, not client-approved adoption. The signed agreement's section 4.2 requires IZURE notification and HIPAA, licensing, and security confirmation before introducing third-party libraries. That evidence is absent. Public package metadata and a candidate lockfile can be prepared without installing or executing these libraries. No notification has been sent and no dependency approval is claimed.

| Candidate | Exact selection | Declared license / purpose |
| --- | --- | --- |
| Node.js | 24.20.0 | Runtime already present locally; review runtime license and distribution terms |
| npm | 11.19.0 | CLI already present locally; review CLI license and distribution terms |
| ESLint | 10.10.0 | MIT; lint JavaScript tooling |
| @eslint/js | 10.0.1 | MIT; ESLint recommended rules |
| @types/node | 24.13.3 | MIT; Node 24 tooling declarations |
| Prettier | 3.9.6 | MIT; repository formatting |
| TypeScript | 7.0.2 | Apache-2.0; typecheck JavaScript tooling via JSDoc |
| actions/checkout | v7.0.1, `3d3c42e5aac5ba805825da76410c181273ba90b1` | Review upstream action and bundled dependencies before GitHub onboarding |
| actions/setup-node | v7.0.0, `820762786026740c76f36085b0efc47a31fe5020` | Review upstream action and bundled dependencies before GitHub onboarding |

Versions and package license fields were read from the public npm registry on 2026-09-09. License fields are an inventory input, not legal clearance. Transitive dependencies in the lockfile also need review. Pin changes and lock changes invalidate the review record; Dependabot creates reviewable proposals and has no auto-merge configuration.

Candidate lock metadata was generated with npm 11.19.0 using `--package-lock-only --ignore-scripts --no-audit --no-fund`: lockfile version 3, 117 package entries including seven workspace manifests. No `node_modules` directory was created. Candidate lock SHA-256: `eaa9d71d36748533b71cbe39a37aa74774589520d14c245a235ba3799aa7667b`. This is reproducible dependency metadata, not an executed installation, successful audit, or approved library inventory.

Record genuine review references in [dependency-review.json](dependency-review.json), including the SHA-256 of the approved lockfile. `check:dependency-review` checks record completeness, exact candidate versions, action pins, and lock digest. It cannot authenticate a person's approval or prevent a contributor from editing the checker; enforce code-owner review and repository rules externally during onboarding. Do not replace pending values with invented approval.

## Commands that work without installing libraries

Run from this scaffold directory using Node 24.20.0 / npm 11.19.0:

```sh
npm run check:foundation
npm run build:foundation
```

These validate layout/defaults, scan local scaffold files for limited patterns, and test the scanner and review checker with synthetic in-memory strings. They make no network calls and do not use `.env` values. Template `false` values document intended defaults; no runtime currently enforces them.

After migration into its own approved Git root:

```sh
npm run secrets:staged
npm run secrets:tracked
```

Staged mode reads index blobs, so unstaged changes cannot hide the version about to be committed. Tracked mode scans the checkout used by CI. Both refuse an absent or parent Git binding. The `.githooks/pre-commit` template is present but no hook or Git setting has been installed. Run the staged check manually before committing. Git-local mode and GitHub workflow execution cannot be verified while this directory is not a Git repository.

After the client-owned repository location and Git changes are explicitly authorized, enable the hook locally using:

```sh
chmod +x .githooks/pre-commit
git config --local core.hooksPath .githooks
```

These are onboarding instructions only; they have not been executed. Hooks can be bypassed locally, so the tracked CI check must also be required.

The scanner detects a small set of provider tokens, private keys, credential URLs, JWT patterns, and credential assignments. It refuses known environment/data/archive files, symlinks, binary content, and files over 5 MiB, with a 10,000-file ceiling. Local mode excludes generated/dependency directories; CI tracked mode does not exclude tracked files. Output contains counts only, never matched values or paths. It is not comprehensive secret scanning, PHI discovery, DLP, history scanning, or a HIPAA compliance control. If it fails, inspect only the affected candidate in a trusted local editor and add a regression fixture using constructed synthetic strings. Do not copy a real finding into an issue or AI tool.

## After dependency review is evidenced

The following commands are prepared but must wait for the required review:

```sh
npm run check:dependency-review
npm ci --ignore-scripts --no-audit --no-fund
npm run lint
npm run typecheck
npm run format
npm run format:check
npm run audit:dependencies
```

Typechecking is limited to `scripts/**/*.mjs`; the web/package scaffolds have no TypeScript implementation to check. ESLint is configured for foundation `.mjs` files only. These dependency-backed checks, including formatting, have not been executed during preparation. The first reviewed-tooling run may require `npm run format` and a review of its diff before `format:check` can pass. Fix any lint/typecheck findings, then rerun the checks; configuration files are not passing evidence. Future application changes must add framework-aware lint/typecheck, unit/integration tests, and a real application build. Do not claim those checks from this preparation configuration.

`ignore-scripts=true` is a defense against dependency lifecycle execution. It does not make arbitrary packages safe. Audit is explicit to keep install metadata retrieval separate from advisory requests; `npm audit --audit-level=low` checks all severities and must fail on findings or inability to retrieve advisory evidence. Do not run `npm audit fix` automatically. Audit sends dependency metadata to the registry and cannot establish privacy compliance or detect all vulnerabilities.

To refresh candidate metadata after review of proposed changes, without installing packages:

```sh
npm install --package-lock-only --ignore-scripts --no-audit --no-fund
```

Recheck the lockfile and reset the review record to pending whenever candidates change. Do not use package installation to satisfy missing contractual approval.

## CI and repository onboarding

`Foundation checks` uses Node core and requires no npm package installation. `Reviewed tooling checks` intentionally fails at the dependency review step while the record is pending; it must never report a green tooling check by silently skipping an unavailable dependency. After approval, the job pins npm, installs the lockfile without lifecycle scripts, and runs lint/typecheck/format/audit. GitHub execution remains unverified until a client-owned repository is created and a candidate runs there.

Both jobs use read-only `contents` permission, immutable upstream action commits, hosted Ubuntu runners, finite timeouts, no persisted checkout credentials, and disabled npm cache. The workflow uses normal PR events, consumes no repository secrets, and has no deployment job. Platform actions necessarily execute before the npm review check; client approval for GitHub hosting/actions must precede onboarding. The full workflow and its Actions remain review candidates.

After onboarding is approved and pending reviews are resolved, require both `Foundation checks` and `Reviewed tooling checks` in the protected main-branch ruleset. Confirm actual check names after the first run. Configure the real CODEOWNER, required PR review, branch deletion/force-push restrictions, and available private vulnerability reporting/secret protection in GitHub. Local templates do not configure those settings. Deployment must be separately designed with environment approvals and scoped credentials; no production workflow is provided.

## Official references

- [Node.js releases](https://nodejs.org/en/about/previous-releases) and [Node.js test runner](https://nodejs.org/api/test.html) for runtime/test support.
- [npm install](https://docs.npmjs.com/cli/v11/commands/npm-install/) documents `package-lock-only` and `ignore-scripts`; [npm ci](https://docs.npmjs.com/cli/v11/commands/npm-ci/) documents lockfile installs.
- [npm audit](https://docs.npmjs.com/cli/v11/commands/npm-audit/) documents advisory scope and exit thresholds.
- [ESLint releases](https://github.com/eslint/eslint/releases), [Prettier 3.9.6](https://github.com/prettier/prettier/releases/tag/3.9.6), and [TypeScript 7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2) are upstream release sources.
- The exact [checkout action](https://github.com/actions/checkout/blob/3d3c42e5aac5ba805825da76410c181273ba90b1/action.yml) and [setup-node action](https://github.com/actions/setup-node/blob/820762786026740c76f36085b0efc47a31fe5020/action.yml) define pinned action inputs.
- [GitHub secure use reference](https://docs.github.com/en/actions/reference/security/secure-use) explains action pinning and workflow security boundaries.
