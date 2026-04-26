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
