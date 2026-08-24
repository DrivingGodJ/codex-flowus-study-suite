# Codex FlowUs Study Suite

一套面向 Codex 的 FlowUs 学习规划插件，重点不是“自动重写整页”，而是尊重远端手工修改：写前回读、最小差异更新、写后独立验证。

## Included skills

- `flowus-study-planner`: 调研课程并创建或迭代主线、备选、实践项目和检查清单。
- `flowus-rich-text-safe-edit`: 只修改目标 rich-text 字段，保留链接、粗体、颜色等其他结构。
- `flowus-media-upload`: 通过 CLI 上传受支持的图片或文件并创建可渲染块。

## Requirements

- Codex with plugin support.
- A compatible authenticated `flowus` CLI. One implementation is [next-space/flowus-skill](https://github.com/next-space/flowus-skill); it is not bundled here and should be reviewed under its own current terms.

## Install

```bash
git clone https://github.com/DrivingGodJ/codex-flowus-study-suite.git
cd codex-flowus-study-suite
codex plugin marketplace add .
codex plugin add codex-flowus-study-suite@drivinggodj-study
```

Authenticate through the FlowUs CLI's documented login flow. Do not copy tokens into chat or into this repository.

## Core guarantees

- The remote page is the source of truth.
- Manual edits and checked states are preserved unless the user explicitly changes them.
- Existing pages are updated by block-level minimum diffs, not whole-page replacement.
- Unsupported deletion, reordering, or MIME types stop with a clear explanation.
- Every write is followed by independent readback.

## License

MIT. No FlowUs CLI source is bundled; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
