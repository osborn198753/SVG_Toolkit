# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an SVG icon management system for web applications, specifically designed to handle sprite-based icon systems. The project consolidates multiple SVG files into unified sprite sheets and provides a JavaScript API for icon management.

## Repository Structure

- `_old/`: Contains legacy SVG files and the current icon management system
  - `index.js`: Main JavaScript module for icon system management
  - `icons-manifest.json`: Complete metadata and configuration for all icons
  - `*.svg` files: SVG sprite files containing symbol definitions
- `task.md`: Project specification and requirements (in Chinese)

## Development Commands

This project appears to be a standalone utility without a build system. No package.json or build configuration files were found.

## Core Architecture

### Icon System Structure

The system is built around three main components:

1. **SVG Sprite Files**: Multiple themed SVG files containing `<symbol>` definitions

   - `common-icons.svg`: General purpose icons (search, cart, user, menu)
   - `actions-icons.svg`: E-commerce action icons (benefits, delivery, store, etc.)
   - `social-icons.svg`: Social media and contact icons

2. **JavaScript API** (`_old/index.js`):

   - Icon loading and DOM injection via `loadAllIcons()`
   - Icon lookup and validation functions
   - Category-based filtering and search capabilities
   - Metadata and statistics reporting

3. **Manifest System** (`_old/icons-manifest.json`):
   - Complete icon metadata including descriptions, keywords, accessibility info
   - Category organization with multilingual support
   - Usage statistics and design tokens
   - Planned icon roadmap

### Key API Functions

- `loadAllIcons()`: Injects all icon sprites into DOM
- `hasIcon(iconName)`: Validates icon existence
- `getIconId(iconName)`: Returns symbol ID for icon
- `searchIcons(keyword)`: Keyword-based icon search
- `getIconsByCategory(categoryName)`: Category filtering
- `listAllIcons()`: Complete icon inventory

### Icon Categories

- `common`: General UI icons (search, cart, user, menu)
- `actions`: E-commerce feature icons (benefits, delivery, bundles, etc.)
- `social`: Social media and contact icons

## Project Goals

Based on `task.md`, the main objectives are:

1. Merge existing SVG files into a single `sprite-icons.svg`
2. Rewrite the JavaScript and JSON configuration files
3. Optimize SVGs using the SVGO package
4. Create testing HTML and organize test SVG files

## Usage Pattern

Icons are accessed using the symbol ID format: `icon-{name}` for common icons, `actions-icon-{name}` for action icons, and `social-icon-{name}` for social icons.

## Language Context

The project includes both English and Chinese text, with Chinese being the primary language for descriptions and documentation.
