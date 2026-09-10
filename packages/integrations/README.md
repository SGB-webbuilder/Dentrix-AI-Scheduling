# External adapters

Status: **PROPOSED**. `src/dentrix/` and `src/bedrock/` isolate external provider behavior from application use cases. No network client or mock adapter is implemented.

Adapters implement application-owned ports and map validated external contracts into application types. They own provider-specific auth/transport/error translation and must not decide scheduling eligibility or user authorization. Browser imports are prohibited.

Dentrix behavior remains **PENDING DENTRIX VALIDATION**. AWS account, approved region, IAM, Bedrock availability and data-handling configuration are **BLOCKED — CLIENT ACCESS REQUIRED**. Never add a fallback that sends data to a direct model-provider API without an approved architecture change.
