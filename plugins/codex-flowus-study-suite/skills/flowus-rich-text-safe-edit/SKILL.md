---
name: flowus-rich-text-safe-edit
description: Make surgical FlowUs rich-text changes while preserving all unrelated segments, annotations, links, block types, and checked state. Use for recoloring text, changing one linked phrase, or updating a small part of an existing block; do not use for whole-page rewriting.
---

# FlowUs rich-text safe edit

Use an authenticated `flowus` CLI. Never read its credential files directly.

## Procedure

1. Locate the exact block through `flowus --json block children <parent_id>` and the CLI's documented pagination options. Do not assume a title match is unique.
2. Immediately before writing, run `flowus --json block get <block_id>`.
3. Copy the current block's complete `rich_text` array and block-specific fields.
4. Deep-copy only the target segment or annotation object. Change only the requested field, such as `annotations.color` or `text.link`.
5. Keep the original block type. For example, `bulleted_list_item` must remain `bulleted_list_item`.
6. Submit the smallest valid body through `flowus --json block update <block_id> --body <patch.json>`.
7. Independently fetch the block again. Verify target values changed and every unrelated segment, annotation, link, icon, and checklist state is identical.

If the block changed between reads, discard the prepared patch and recompute it from the latest remote value. If matching remains ambiguous, stop and ask for the target block instead of editing multiple candidates.

## Special cases

- For selective color changes, preserve gray notes or other excluded segments unless the user explicitly includes them.
- A `link_to_page` block has no `rich_text`; identify it by type and target page ID.
- Insertion position belongs in the append body as the `after` field when supported; do not invent a CLI flag.
- Do not strip explicit `null` link fields or rebuild rich text from plain text, because that can discard formatting.
