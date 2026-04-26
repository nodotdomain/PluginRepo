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

