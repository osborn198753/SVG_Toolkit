# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a completed SVG icon management system for web applications, specifically designed to handle sprite-based icon systems. The project consolidates multiple SVG files into unified sprite sheets and provides a JavaScript API for icon management.

## Repository Structure

### Core Files
- `sprite-icons.svg`: Unified SVG sprite file containing all icon symbols
- `index.js`: Main JavaScript module for icon system management
- `icons-manifest.json`: Complete metadata and configuration for all icons (18 icons total)
- `icons-showcase.html`: Interactive showcase and testing interface with Tailwind CSS

### Legacy Files
- `_old/`: Contains original development files and legacy system
  - `index.js`: Legacy JavaScript module
  - `icons-manifest.json`: Legacy manifest file
  - `*.svg` files: Original separate SVG sprite files

### Development Files
- `task.md`: Project specification and progress tracking (in Chinese)
- `test-svgs/`: Testing SVG files and development assets
- `CLAUDE.md`: This guidance file

## Development Commands

This is a client-side project without a build system. To use:

1. **Development**: Open `icons-showcase.html` in a browser to test and view all icons
2. **Integration**: Import the unified sprite system via `index.js` or directly load `sprite-icons.svg`
3. **Testing**: Use the showcase interface for visual testing and code generation

## Core Architecture

### Unified Icon System

The completed system is built around a unified sprite-based architecture:

1. **Unified Sprite File**: `sprite-icons.svg`
   - Contains all 18 icons as `<symbol>` definitions
   - Optimized and consolidated from original separate files
   - Ready for production use

2. **JavaScript API** (`index.js`):
   - Icon loading and DOM injection via `loadAllIcons()`
   - Icon lookup and validation functions
   - Category-based filtering and search capabilities
   - Metadata and statistics reporting

3. **Manifest System** (`icons-manifest.json`):
   - Complete metadata for all 18 icons
   - Four-category organization: common, actions, social, logo
   - Accessibility information and usage patterns
   - Keywords and descriptions in both English and Chinese

4. **Interactive Showcase** (`icons-showcase.html`):
   - Live preview and testing interface
   - Dynamic size and color controls
   - Category filtering and search functionality
   - Copy-to-clipboard for easy integration

### Key API Functions

- `loadAllIcons()`: Injects all icon sprites into DOM
- `hasIcon(iconName)`: Validates icon existence
- `getIconId(iconName)`: Returns symbol ID for icon
- `searchIcons(keyword)`: Keyword-based icon search
- `getIconsByCategory(categoryName)`: Category filtering
- `listAllIcons()`: Complete icon inventory
- `showIconStats()`: Display usage statistics

### Icon Categories

- `common`: General UI icons (search, cart, user, menu) - 4 icons
- `actions`: E-commerce feature icons (benefits, delivery, store, etc.) - 8 icons
- `social`: Social media and contact icons (Facebook, Instagram, LINE, etc.) - 5 icons
- `logo`: Platform brand identity icons - 1 icon

### Symbol ID Patterns

Icons use consistent naming conventions:
- Common: `icon-{name}` (e.g., `icon-search`)
- Actions: `actions-icon-{name}` (e.g., `actions-icon-benefits`)
- Social: `social-icon-{name}` (e.g., `social-icon-facebook`)
- Logo: `brand-logo`

## Project Status: COMPLETED ✅

All major objectives have been achieved:

1. ✅ Merged all SVG files into unified `sprite-icons.svg`
2. ✅ Created comprehensive JavaScript API and configuration
3. ✅ Implemented interactive testing and showcase interface
4. ✅ Organized development assets and documentation
5. ✅ Updated all category naming (brand → logo)

## Usage Examples

### Basic HTML Usage
```html
<svg class="w-6 h-6" fill="currentColor">
  <use href="#icon-search"></use>
</svg>
```

### JavaScript Integration
```javascript
import { loadAllIcons, createIconSVG } from './index.js';

// Load all icons
loadAllIcons();

// Create dynamic icon
const icon = createIconSVG('search', { className: 'w-6 h-6' });
```

## Language Context

The project includes both English and Chinese text, with Chinese being the primary language for descriptions and documentation. The interface supports bilingual usage.
