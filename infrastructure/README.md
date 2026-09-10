# Infrastructure preparation — PROPOSED

Choose **Terraform**, pending ADR approval and tool/license/security review. It provides explicit plan/apply separation and reviewable AWS resource configuration, with reusable modules without tying infrastructure lifecycle to the application runtime. AWS CDK would reuse TypeScript and is a reasonable alternative, but adds synthesis/construct dependencies; this small team benefits from keeping deployment plans explicit. No Terraform binary/provider is installed here.

There are no `.tf` resources, provider/account settings, state backends or apply commands. This scaffold creates no AWS resource. Account access: **BLOCKED — CLIENT ACCESS REQUIRED**.

| Path | Purpose |
| --- | --- |
| `terraform/environments/development` | Future development root/state and reviewed nonsecret inputs |
| `terraform/environments/staging` | Independent staging root/state and UAT configuration |
| `terraform/environments/production` | Restricted production root/state with separate approval |
| `terraform/modules` | Add reusable modules only when concrete resources are approved |

## Future design obligations

Client-designated single region; network and runtime boundaries; encrypted managed PostgreSQL; KMS and Secrets Manager; TLS; immutable sanitized audit destination; monitoring; same-region encrypted backups; constrained Bedrock access; scoped CI/runtime roles; production/nonproduction separation. Compute, database SKU, availability, retention and cost are pending evidence and budget. No Kubernetes or microservice fleet is needed by this proposal.

Keep state, saved plans, sensitive variable files and crash logs out of Git/CI artifacts. Use encrypted client-owned remote state with versioning, least privilege and locking after backend bootstrap approval. Terraform's `sensitive` flag does not by itself remove values from state or saved plans; see [HashiCorp sensitive-data guidance](https://developer.hashicorp.com/terraform/language/manage-sensitive-data).

Later CI: format/validate and static checks on IaC PRs; reviewed plans only in a trusted context with restricted output; separate approved apply and provider lockfiles. Do not run untrusted PR Terraform with cloud credentials. See [deployment guide](../docs/deployment/deployment-guide.md).
