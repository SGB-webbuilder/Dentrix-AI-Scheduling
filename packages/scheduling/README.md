# Scheduling domain

Status: **PROPOSED**. Pure, deterministic domain behavior belongs here; no scheduling engine is implemented.

Owns procedure durations, resource/timing models, candidate validity, hard-rule evaluation, and explicit soft-ranking boundaries. It must not make HTTP/database calls, know about Next.js, invoke an AI model, or store patient identity. Dependencies point only toward pure shared contracts where needed.

`src/domain/` contains domain models; `src/rules/` contains deterministic rules and validation; `src/ranking/` contains the allowed ranking boundary and explanation references. No AI result can make an invalid candidate valid. Office/provider precedence and override authority remain **PENDING CONFIRMATION**.
