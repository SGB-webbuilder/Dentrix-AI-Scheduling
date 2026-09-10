# AI reasoning boundary

Status: **PROPOSED**. Amazon Bedrock / Claude is the expected technology direction. No model, SDK, prompt, agent, AWS account, or request is configured.

## Allowed responsibility

AI may interpret supported natural-language office/provider preferences and patient scheduling constraints, suggest soft ranking, and produce explanations. Application code validates structure and meaning; deterministic server rules determine hard validity. The model must never receive a Dentrix mutation tool or authority to relax hard constraints. Whether interpreted rule changes require explicit confirmation is **PENDING CONFIRMATION** and must be resolved before implementation.

## Proposed data boundary

Patient mappings stay encrypted in approved project storage and are excluded from AI inputs under agreement §4.1. Use random opaque tokens where a patient reference is necessary. Before a call, enforce an allowlist and a reviewed minimization policy for free text, time/resource details, metadata, and any derived information. A token is not proof of de-identification; model outputs and explanations can also expose sensitive material.

No PHI may be processed until client AWS access, applicable BAA/service eligibility, the designated region, model access, data handling, logging, retention, and controls are confirmed. Those checks are **BLOCKED — CLIENT ACCESS REQUIRED**. Do not fall back to a direct third-party model API when Bedrock fails.

## Reliability and security

- Treat user text, external records, and model output as untrusted. Test prompt injection and instructions embedded in source content.
- Bound input size, output schema, model latency, token/cost budget, retries, and per-tenant usage. Exact values and model/version pinning are **PENDING CONFIRMATION**.
- Revalidate candidate validity after AI suggestions and again before approved submission. The AI cannot invent availability or fill missing recommendations with invalid slots.
- Define a clear deterministic fallback or an explicit unavailable outcome. Behavior, explanations, and permitted retries require approval; they are not implemented here.
- Record only reviewed metadata for model version, latency, token usage, cost attribution, and outcome. Avoid raw prompt/response logging, traces, or snapshots in repository/CI artifacts.

Use synthetic reasoning tests with explicit expected properties, uncertainty cases, injection attempts, hard-constraint violations, refusal/unavailability, and minimized-output checks. Compare model versions before changing them. Agreement-related token/cost accounting is a requirement to design, not a capability demonstrated by this scaffold. See [test strategy](../testing/test-strategy.md).
