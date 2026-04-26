# SpectreLens Plugin Repository

Official global plugin index powering the SpectreLens Plugin Store.

This repository hosts:
- The live `plugins.json` feed
- Plugin metadata and manifests
- Versioned release packages (ZIP)
- Plugin icons and assets
- Developer documentation and publishing guidelines

Updating this repository updates the SpectreLens Plugin Store worldwide.

---

## 📦 Plugin Index (`plugins.json`)

The Android app fetches this file to populate the in‑app Plugin Store.

Each plugin entry includes:
- id
- name
- description
- version
- downloadUrl
- iconUrl

See `plugins.json` for the current live index.

---

## 🧪 Plugin Development

Developers can create modular extensions for SpectreLens using the official Plugin API.

### Plugin Requirements
- Must be packaged as a `.zip`
- Must include a `manifest.json`
- Must follow the versioning rules below
- Must not exceed 25 MB
- Must not contain executable code outside the plugin sandbox

See **Plugin Developer Guide** for full details.

---

## 🔖 Versioning Strategy

SpectreLens uses **Semantic Versioning (SemVer)**:

`MAJOR.MINOR.PATCH`

- **MAJOR** — Breaking changes to plugin structure or API  
- **MINOR** — New features, backwards compatible  
- **PATCH** — Bug fixes or small improvements  

The Plugin Store automatically detects updates when the version number increases.

---

## 📁 Repository Structure

