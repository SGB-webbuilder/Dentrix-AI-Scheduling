# PHI and patient token boundary

Future policy for data minimization, request allowlists, random opaque patient tokens, mapping access, and restricted re-identification. The agreement requires the patient mapping to be encrypted in the database and excluded from AI inputs. Exact token scope, lifetime, rotation, deletion, and mapping design are **PENDING CONFIRMATION**.

The data package will implement approved storage interfaces; this policy module must not expose mapping access to browser code or AI adapters. Do not use stable hashes of patient identifiers as a substitute for the required random-token design.

Removing names or replacing IDs is insufficient to prove de-identification. Free text, precise appointment details, combinations of metadata, model output, telemetry, and derived records need a reviewed minimization policy. Repository fixtures must be synthetic by default, with no real patient mappings.
