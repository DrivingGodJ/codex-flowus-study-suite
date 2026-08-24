# Security policy

Use the FlowUs CLI's own authentication flow. Skills in this repository must not read credential files directly, print tokens, bypass client or API validation, or send data to an unapproved endpoint.

Before every remote write, re-read the target page or block. After every write, independently read it back. Stop when the remote content changed concurrently or when the requested operation requires an unsupported destructive API.

Report vulnerabilities privately through GitHub when possible. Never include credentials, private page contents, or personal identifiers in a public issue.
