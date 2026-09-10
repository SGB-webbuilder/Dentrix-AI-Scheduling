# Tests

This tree distinguishes repository-foundation checks from future product verification. Category folders contain purpose statements only until approved implementation makes meaningful tests possible. See [test strategy](../docs/testing/test-strategy.md).

All committed fixtures and test output must be synthetic and free of patient/client data and secrets. Missing suites are pending, not passing. No test may contact AWS, a model API, or Dentrix by default; protected remote validation requires explicit authorized environment configuration.
