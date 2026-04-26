const fs = require("fs");
const path = require("path");

const plugins = JSON.parse(fs.readFileSync("plugins.json", "utf8")).plugins;

console.log("🔍 SpectreLens Plugin Linter\n");

let errors = 0;

plugins.forEach(plugin => {
  const id = plugin.id;

  const zipPath = `releases/${id}.zip`;
  const iconPath = `icons/${id}.png`;

  if (!fs.existsSync(zipPath)) {
    console.error(`❌ Missing ZIP for plugin: ${id}`);
    errors++;
  }

  if (!fs.existsSync(iconPath)) {
    console.error(`❌ Missing icon for plugin: ${id}`);
    errors++;
  }

  if (!plugin.version.match(/^\d+\.\d+\.\d+$/)) {
    console.error(`❌ Invalid version format for ${id}`);
    errors++;
  }

  if (!plugin.downloadUrl.includes(`${id}.zip`)) {
    console.error(`❌ downloadUrl mismatch for ${id}`);
    errors++;
  }

  if (!plugin.iconUrl.includes(`${id}.png`)) {
    console.error(`❌ iconUrl mismatch for ${id}`);
    errors++;
  }
});

if (errors === 0) {
  console.log("✅ All plugins validated successfully");
  process.exit(0);
} else {
  console.error(`\n❗ Validation failed with ${errors} error(s)`);
  process.exit(1);
}
