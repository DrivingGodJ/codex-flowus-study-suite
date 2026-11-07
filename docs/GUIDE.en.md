[简体中文](GUIDE.zh-CN.md) | **English**

# Usage, Configuration and Development

[Back to the project](../README.en.md)

## Quick start

Requires Codex with plugin support and an installed, authenticated, compatible `flowus` CLI. [next-space/flowus-skill](https://github.com/next-space/flowus-skill) is one implementation; check its current license and terms separately. The CLI is not bundled here.

```bash
git clone https://github.com/DrivingGodJ/codex-flowus-study-suite.git
cd codex-flowus-study-suite
codex plugin marketplace add .
codex plugin add codex-flowus-study-suite@drivinggodj-study
```

Authenticate using the FlowUs CLI's own instructions. Never copy tokens into conversations or the repository.

## Usage

Ask for a study plan for a course, or identify a page and the passages to change. The current remote page remains the source of truth:

- Reread before writing and apply minimal block-level changes instead of replacing the whole page.
- Preserve manual content and checklist completion unless explicitly asked to change them.
- Change only the requested rich-text fields, then independently reread the target page or blocks.
- Stop the affected operation and explain unsupported deletion, reordering or file types.
- Do not read credential files directly or bypass client/API validation.

## Development and checks

Offline repository checks use Node.js's test runner:

```bash
npm test
```

Real page operations still require verification in your own authenticated FlowUs environment.

## Documentation and support

- [Changelog](../CHANGELOG.md) · [Contributing](../CONTRIBUTING.md) · [Security](../SECURITY.md)
- [Report an issue](https://github.com/DrivingGodJ/codex-flowus-study-suite/issues)

## License and credits

[MIT License](../LICENSE). FlowUs CLI source is not included; see [third-party notices](../THIRD_PARTY_NOTICES.md).
