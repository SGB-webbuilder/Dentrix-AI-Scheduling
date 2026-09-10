# HIPAA readiness evidence — PENDING CONFIRMATION

Repository preparation does not establish HIPAA compliance. No PHI processing is authorized by this scaffold. Before PHI processing, record owner, date, safe evidence reference and outcome for each item:

- Executed required BAAs/HIPAA agreements and confirmed client/IZURE responsibilities.
- Client-owned AWS access, designated region, least-privilege roles and MFA.
- Eligibility of each exact AWS service, feature and model used under the applicable BAA; do not infer eligibility from a service family name.
- Bedrock model availability, retention/abuse-monitoring behavior, provider data-sharing settings and regional routing approved for the chosen configuration.
- Encryption, private data access paths, secret management, key policy and same-region encrypted backups implemented and tested.
- PHI minimization/tokenization, tenant isolation, authentication/session controls and protected audit retention implemented and independently tested.
- Safe operational tooling, incident contacts, restoration drills, UAT and operational handover acceptance.

The current [AWS HIPAA eligible services reference](https://aws.amazon.com/compliance/hipaa-eligible-services-reference/) and the client's executed agreement must be checked at architecture approval and before deployment. Eligibility does not remove customer configuration and operational responsibilities. Review the exact model's [Bedrock retention behavior](https://docs.aws.amazon.com/bedrock/latest/userguide/data-retention.html), not an assumed universal retention promise.

Cross-region model inference remains unselected and disabled in the proposed design until it can satisfy the agreement's single designated-region constraint. Owners and actual account/service evidence: **BLOCKED — CLIENT ACCESS REQUIRED**.
