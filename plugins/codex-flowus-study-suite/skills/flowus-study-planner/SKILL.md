---
name: flowus-study-planner
description: Research current learning resources and create or safely iterate a structured FlowUs study-plan page with main courses, alternatives, projects, and checklists. Use when a user asks to build or update a learning roadmap in FlowUs; preserve remote manual edits and avoid whole-page replacement.
---

# FlowUs study planner

Use an authenticated `flowus` CLI. Read `references/page-structure.md` when creating a new plan or substantially changing its hierarchy.

## Safety boundary

- The current remote page is the source of truth. Local drafts and old conversations are candidates only.
- Never restore content the user removed remotely or overwrite manual text, rich-text annotations, links, icons, covers, or checklist state without explicit instruction.
- Do not use delete-all, whole-page Markdown replacement, raw destructive API calls, direct credential-file access, or empty placeholder blocks to simulate deletion.
- If installation, upgrade, or login is required, explain it and obtain the user's authorization before changing that local state.

## Workflow

1. Confirm the learning goal, current level, available time, deadline, preferred format, budget, and desired output page.
2. Verify the exact target page ID. Read the page, Markdown representation, and all child blocks, following the CLI's current pagination help until complete.
3. Snapshot section and block IDs, rich-text segments, links, annotations, toggle children, checklist states, and last-edited metadata.
4. Research current course candidates from official course pages, creator pages, or reputable platforms. Verify title, instructor, scope, level, duration, price status, and link. Mark time-sensitive or unverified fields.
5. Compare the desired structure with the remote snapshot using stable IDs first, exact links second, and normalized title plus platform third. Classify each item as keep, update, append, or blocked because true deletion or reordering is unsupported.
6. Immediately before each update, run `flowus --json block get <block_id>` again. If it changed, recompute the patch from the new remote block.
7. Copy the full current block structure and change only the requested fields. Preserve unrelated segments, annotations, links, icons, and checked state.
8. Append new content in batches of at most 50 blocks. Create a toggle first, capture its ID, then append its children.
9. After every batch, independently read the page and every changed block. Stop on mismatch; do not repair by rewriting the page.

## Verification report

Return the page link, preserved and changed blocks, selected main resources, alternative count, checklist changes, unsupported requests, and whether independent readback passed.
