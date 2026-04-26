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

/
├── plugins.json
├── icons/
│   └── <pluginId>.png
├── releases/
│   └── <pluginId>.zip
├── docs/
│   ├── developer-guide.md
│   └── template-manifest.json
└── README.md

---

## 🛠️ Contributing

1. Fork the repository  
2. Add your plugin ZIP + icon  
3. Update `plugins.json`  
4. Submit a pull request  

Plugins are reviewed for:
- Stability  
- Security  
- Performance  
- UX quality  
- Brand consistency  

---

# SpectreLens Plugin Versioning Strategy

SpectreLens uses Semantic Versioning (SemVer):

MAJOR.MINOR.PATCH

### MAJOR (X.0.0)
Breaking changes:
- Manifest structure changes
- API changes
- Removal of fields
- New required fields

### MINOR (0.X.0)
New features:
- New optional fields
- New assets
- Expanded capabilities
- Performance improvements

### PATCH (0.0.X)
Fixes:
- Bug fixes
- Typo corrections
- Minor metadata adjustments

The Plugin Store checks versions on every refresh.  
If a plugin’s version increases, the user is prompted to update.

# SpectreLens Plugin Developer Guide

This guide explains how to create, package, and publish plugins for the SpectreLens ecosystem.

---

## 1. Overview

SpectreLens plugins extend the capabilities of the app by adding:
- New analysis modes
- Custom filters
- Audio/visual processors
- Data transforms
- UI overlays
- Logging modules

Plugins are sandboxed and cannot execute arbitrary code.

---

## 2. Required Files

Every plugin ZIP must contain:

plugin.zip
└── manifest.json
└── assets/
└── (optional files)


---

## 3. Manifest Specification

Example:

```json
{
  "id": "evp_enhancer",
  "name": "EVP Enhancer",
  "version": "1.0.0",
  "description": "Improves EVP clarity using spectral isolation.",
  "author": "Your Name",
  "minAppVersion": "1.0.0",
  "tags": ["audio", "evp", "filter"],
  "entrypoint": "assets/config.json"
}

Required Fields
id — unique identifier

name — display name

version — SemVer

description — short summary

minAppVersion — minimum SpectreLens version

entrypoint — path to main config

Optional Fields
author

tags

changelog

homepage

4. Packaging Your Plugin
Create your manifest.json

Add any assets to /assets

Zip the folder

Name the ZIP exactly as your plugin ID:

## 🛡️ License

Plugins remain the property of their respective authors.  
The SpectreLens Plugin Repository metadata is licensed under MIT.
