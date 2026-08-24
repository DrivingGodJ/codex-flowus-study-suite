---
name: flowus-media-upload
description: Upload supported local images or files through the FlowUs CLI and insert a renderable internal media block at a verified position. Use when adding media to a FlowUs page; do not bypass MIME validation or read credentials directly.
---

# FlowUs media upload

Use an authenticated `flowus` CLI. Confirm the local file, target page ID, media type, caption, and requested insertion point before uploading.

## Workflow

1. Verify the file exists, its real MIME type, size, and intended page. Treat uploads as remote writes.
2. Run `flowus --json file upload --parent-page <page_id> <file_path>`.
3. Preserve the returned `oss_name` and `size`. Do not expose signed upload URLs or credentials.
4. Build an `image` or `file` block using internal storage:

```json
{
  "children": [{
    "type": "image",
    "image": {
      "type": "file",
      "file": {
        "oss_name": "oss/<id>/image.jpg",
        "size": 12345,
        "content_type": "image/jpeg"
      },
      "caption": []
    }
  }]
}
```

5. If inserting after an existing block, re-read that block and place the supported `after` field in the append body.
6. Append through `flowus --json block append <page_id> --body <body.json>`.
7. Read back the created block and page. Confirm the stored `oss_name`, type, caption, and position.

## Boundaries

- Do not use an external CDN URL as a substitute for an internal uploaded file when reliable rendering is required.
- Do not call raw upload endpoints, read token files, or disguise unsupported MIME types. If the CLI rejects a file type, report the limitation and stop.
- Page covers may have different API constraints from image blocks. Verify the current CLI documentation and public URL requirements before changing a cover.
- Do not upload private material to the wrong workspace or page; resolve IDs rather than guessing from titles.
