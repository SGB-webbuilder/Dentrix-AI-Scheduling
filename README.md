# AI-Powered Dental Scheduling Module — Dentrix Ascend Integration

> **NO REAL PHI, PRODUCTION CREDENTIALS, DENTRIX SECRETS, AWS SECRETS OR CLIENT DATA MAY BE COMMITTED TO THIS REPOSITORY.**

Private engineering foundation for an AI-assisted scheduling application layered on Dentrix Ascend. Dentrix remains authoritative for patient, treatment, provider, schedule, and final appointment records. The signed IZURE agreement is the execution baseline; see [execution baseline](docs/project/execution-baseline.md).

## Current phase

Milestone 0 preparation only. This scaffold contains module boundaries, documentation, development-tool configuration, and repository checks. There is no running Next.js application, scheduling engine, database schema, Dentrix client, AWS stack, or deployment. Those deliverables require later implementation and evidence. Scaffold checks are not application or milestone acceptance.

The proposed development dependencies require the agreement's IZURE notification and licensing/security/HIPAA review before installation. The CI tooling gate intentionally fails until that review is recorded. See [tooling](docs/testing/tooling.md).

## Architecture

Use one npm-workspace monorepo and one initial deployable application: a modular monolith. Next.js is the proposed web/API host; TypeScript modules hold use cases, scheduling, integrations, security, and persistence. This avoids separate service deployments while keeping future modules independently understandable. Choices are **PROPOSED**, with approval recorded through [ADRs](docs/adr/README.md).

AI interprets permitted soft constraints and explains recommendations. Deterministic server-side validation decides whether a candidate is admissible. Every Dentrix write must originate from an explicit human **Approve and Submit** action; production write enablement separately requires written IZURE authorization. Neither condition alone is sufficient.

## Layout

| Path | Purpose |
| --- | --- |
| `apps/web` | Future Next.js UI and HTTP/server presentation layer |
| `packages/application` | Use cases, ports, approval workflow, audit and event coordination |
| `packages/scheduling` | Pure scheduling domain, versioned rules and deterministic validation |
| `packages/integrations` | Separate Dentrix and Bedrock adapters |
| `packages/security` | Server-only PHI boundary, authentication and tenant authorization |
| `packages/data` | Future persistence repositories, schema and migrations |
| `packages/contracts` | Minimal transport-neutral shared schemas/types; no secrets or PHI mappings |
| `infrastructure` | Proposed Terraform boundaries and separate environment placeholders |
| `tests` | Foundation checks and purpose-defined future product test categories |
| `scripts` | Local and CI repository checks |
| `docs` | Architecture, integration evidence, security, operations and decisions |
| `.github` | CI, dependency updates, ownership and contribution templates |

See [architecture](docs/architecture/architecture-overview.md), [module responsibility map](docs/architecture/module-responsibilities.md), and [documentation index](docs/README.md).

## Local development

Use the Node/npm versions pinned in the tooling files. Run dependency-free foundation checks first as documented in [tooling](docs/testing/tooling.md). After the candidate dependencies have completed review, use `npm ci --ignore-scripts`, then the validation commands declared in `package.json`. Commit the lockfile. [npm documents](https://docs.npmjs.com/cli/v11/commands/npm-ci/) reproducible clean installation and the limits of `ignore-scripts`.

No AWS account, Dentrix sandbox, model connection, patient data, or database is needed for repository preparation. This scaffold is the Git root pushed to the private `SGB-webbuilder/Dentrix-AI-Scheduling` repository. The parent document/KOS workspace is outside Git and must stay outside it. Confirm IZURE's ownership/designation and the remaining [setup checklist](docs/project/setup-checklist.md) before treating this remote as the contractual delivery repository or beginning product implementation.

There is no `npm run dev` or product build yet. Add the reviewed framework and actual build/test commands in the separately authorized application-shell task. A README placeholder is not an implemented or tested feature.

## Configuration

`.env.example` contains placeholders and disabled write flags only. Local secrets belong in ignored local files only if approved for local use; real patient data remains prohibited locally. Hosted secrets later come from client-owned AWS Secrets Manager using short-lived IAM credentials. Environment values, secret references, and scheduling rules have different owners and lifecycles. See [environment strategy](docs/deployment/environments.md).

## Verification and delivery

Use synthetic fixtures exclusively. Product testing will cover unit, integration, Dentrix contracts, AI behavior, scheduling, authorization/isolation, concurrency/recovery, E2E, performance, and regression. See [test strategy](docs/testing/test-strategy.md). No live or sandbox operations run in PR CI.

Use short-lived branches into `main`, squash merge through a PR, and link the ClickUp task. CI is required; independent review is required once a qualified second reviewer is available and for sensitive changes before production use. See [CONTRIBUTING](CONTRIBUTING.md), [GitHub settings](docs/project/github-settings.md), and [ClickUp workflow](docs/project/clickup-workflow.md).

Merging to `main` does not deploy production. Future releases promote an already tested artifact through protected staging/production with recorded approvals, rollback evidence, and a separate default-off Dentrix write gate. See [deployment guide](docs/deployment/deployment-guide.md).

Report suspected exposure privately according to [SECURITY](SECURITY.md) and [incident response](docs/runbooks/incident-response.md). Repository controls do not establish HIPAA compliance. Ownership and repository designation follow the agreement; legal notice wording remains [pending](LICENSE.pending.md).
