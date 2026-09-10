# Tenant/location isolation tests

Reserved for denial scenarios using distinct synthetic tenants, locations, users and roles. Cover forged request scope, unauthorized memberships, repository queries, adapter requests, cache keys, background jobs, audit access and token mappings.

Successful same-tenant access alone does not establish isolation. Actual database/auth mechanisms and Dentrix scoping are pending; no isolation control is tested by this placeholder.
