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
id

name

version

description

minAppVersion

entrypoint

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

5. Publishing Your Plugin
Upload your ZIP to /releases/<pluginId>.zip

Add your icon to /icons/<pluginId>.png

Add your entry to plugins.json

Submit a pull request

6. Updating Your Plugin
Increase the version number in manifest.json and plugins.json.

The Plugin Store will detect the update automatically.

7. Best Practices
Keep ZIPs under 25 MB

Use clear, concise descriptions

Follow SemVer strictly

Test on multiple devices

Avoid unnecessary assets

Keep icons 512×512 PNG

8. Security Notes
Plugins cannot:

Execute native code

Access external storage

Access network resources

Modify system settings

Plugins can:

Provide configuration

Provide assets

Provide metadata

Provide UI overlays (within sandbox)

9. Support
For questions or issues, open a GitHub Issue.
