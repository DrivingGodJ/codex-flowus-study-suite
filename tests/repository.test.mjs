import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pluginRoot = path.join(root, "plugins", "codex-flowus-study-suite");

test("marketplace points to the bundled plugin", () => {
  const marketplace = JSON.parse(fs.readFileSync(path.join(root, ".agents", "plugins", "marketplace.json"), "utf8"));
  assert.equal(marketplace.name, "drivinggodj-study");
  assert.equal(marketplace.plugins[0].source.path, "./plugins/codex-flowus-study-suite");
});

test("plugin manifest and skill names match their directories", () => {
  const plugin = JSON.parse(fs.readFileSync(path.join(pluginRoot, ".codex-plugin", "plugin.json"), "utf8"));
  assert.equal(plugin.name, "codex-flowus-study-suite");
  for (const entry of fs.readdirSync(path.join(pluginRoot, "skills"), { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const body = fs.readFileSync(path.join(pluginRoot, "skills", entry.name, "SKILL.md"), "utf8");
    assert.match(body, new RegExp(`^---\\nname: ${entry.name}\\n`, "m"));
  }
});

test("skills do not access local FlowUs credentials or advertise validation bypasses", () => {
  const skills = path.join(pluginRoot, "skills");
  const bodies = fs.readdirSync(skills)
    .map((name) => fs.readFileSync(path.join(skills, name, "SKILL.md"), "utf8"))
    .join("\n");
  assert.doesNotMatch(bodies, /\.flowus\/credentials\.json/);
  assert.doesNotMatch(bodies, /MIME\s+(?:whitelist\s+)?bypass/i);
});
