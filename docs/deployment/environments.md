# Environment and configuration strategy — PROPOSED

| Environment | Data and access | Purpose | Current status |
| --- | --- | --- | --- |
| local | Synthetic only; no client AWS/Dentrix/model credentials required | Tooling and later isolated unit development | Scaffold checks available |
| development | Synthetic only; dedicated client AWS identity, secrets and database later | Shared integration development | BLOCKED — CLIENT ACCESS REQUIRED |
| staging | Approved synthetic sandbox scenarios; separate secrets, database and IAM | UAT rehearsal and deployment/recovery validation | BLOCKED — CLIENT ACCESS REQUIRED |
| production | Authorized minimum-necessary data only after readiness/approval | Shadow mode followed by controlled writes | BLOCKED — CLIENT ACCESS REQUIRED |

Prefer separate client AWS accounts for production and nonproduction, with dev/staging separation also evaluated. If budget/access requires shared nonproduction accounts, explicitly document isolation of VPC/access paths, IAM, KMS, secrets, database, state and logs. Never share production credentials or copy production data into lower environments. Actual account layout is pending.

## Values, secrets and rules

- Environment variables: nonsecret operating mode, application URL, selected region, safe resource/secret references, timeout configuration and feature gates. These still require validation and may contain confidential metadata; `.env.example` uses placeholders.
- Secrets Manager later: Dentrix credentials/tokens, database credentials, session/signing secrets and webhook secrets if that mechanism is verified. Runtime IAM grants only the secret access needed in that environment. Use AWS role credentials; no committed AWS access-key pair or Bedrock API secret.
- Client-supplied organization/location IDs and integration URLs: private configuration validated against authorized environment evidence, never fixture identities or public browser defaults.
- Office/provider/CDT rules: reviewed and versioned project-owned configuration with audit and approval workflow, not deployment environment-variable blobs.
- Frontend: only deliberately public configuration may use a `NEXT_PUBLIC_` variable later. No server credentials, token mappings or private endpoints may cross into client bundles.

`.env.example` is documentation and contains no usable credentials. Do not source it as a shell script. An ignored local environment file may later hold approved local synthetic settings; personal machines must not hold patient data. Do not add environment files to Git except the reviewed example. Hosted values should be provisioned through the approved secrets/configuration path, not distributed as `.env` attachments.

## Future validation requirements

Implement a server-only configuration loader that validates required values, rejects placeholders at startup, detects mismatched account/region/environment, and defaults both integration access and writes off. There is no such runtime loader yet. For every write require authenticated scope, current human approval for the exact proposed operation, deterministic revalidation and the environment write gate. In production require the separate recorded IZURE write authorization. A flag is never evidence of approval.

No environment variable in this scaffold connects to a service. Runtime loading, secret rotation, account identity probes and operational configuration are pending implementation.
