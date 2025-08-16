```bash
npm --version
node --version

npm init -y
npm install --sve-dev svgo

```

Install SVGO as development dependency

---

Now you can optimize your SVG files with:

# Optimize all SVG files in \_old/ folder

npm run optimize

# Optimize while preserving titles/descriptions (better for sprites)

npm run optimize-sprites

# Or use SVGO directly

npx svgo \_old/common-icons.svg --pretty

SVGO is ready to use in your project!

---

Perfect! Your SVGO configuration is now set up specifically for icon sprites. The config:

Preserves:

- viewBox attributes (essential for scaling)
- title and desc elements (accessibility)
- Symbol IDs with prefixes like icon-, actions-icon-, social-icon-

Optimizes:

- Removes design tool artifacts (data-name, style classes)
- Reduces path precision to 2 decimal places
- Cleans up empty containers
- Sorts attributes for consistency

Usage:

# Optimize all SVG files

npm run optimize

# Optimize a single file

npm run optimize-single filename.svg

# Or use directly

npx svgo \_old/common-icons.svg --config=svgo.config.js --pretty

The configuration is tailored for your sprite-based icon system!
