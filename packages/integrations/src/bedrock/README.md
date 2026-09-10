# Bedrock adapter placeholder

Status: **PROPOSED; BLOCKED — CLIENT ACCESS REQUIRED** for account-backed validation.

Future server-only adapter for approved Amazon Bedrock model calls, bounded inputs/outputs, model/version selection, latency/token/cost accounting, and safe failure mapping. Claude is the expected model direction, not an approved model ID or region configuration.

Enforce the reviewed PHI-minimization boundary before requests leave the application. Patient tokenization does not prove de-identification; free text, schedules, metadata, explanations, and traces may remain sensitive. Disable raw prompt/response logging by design unless an explicitly approved restricted policy requires it.

AI suggests soft interpretations/ranking and explanations only. It receives no Dentrix write authority. See [AI boundary](../../../../docs/ai/ai-boundary.md).
