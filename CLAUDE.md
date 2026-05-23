# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview
This is a static website for Saahvan Solutions, a technology advisory company. The site consists of:
- `index.html`: Main HTML file with embedded CSS and JavaScript
- No build system, frameworks, or external dependencies
- Pure HTML/CSS/JS implementation

## Development Commands

### Viewing the Site
Since this is a static site, you can view it by:
- Opening `index.html` directly in a web browser
- Using any static file server (e.g., `python -m http.server`, `npx serve`, etc.)

### Common Tasks
- **Editing content**: Modify the HTML structure in `index.html`
- **Styling changes**: Edit CSS variables and rules in the `<style>` section
- **JavaScript behavior**: Modify the IntersectionObserver script at the bottom
- **Updating text/content**: Find and replace text throughout the HTML file

### No Build Steps Required
This site requires no compilation, transpilation, or build process. Changes take effect immediately when the HTML file is reloaded in a browser.

## Code Structure & Architecture

### HTML Structure
The site follows a traditional single-page layout with semantic sections:
- Header with navigation and CTA
- Hero section with main messaging
- Advisory positioning section
- Services grid (4-column on desktop, 1-column on mobile)
- Engagement models section
- Contact section
- Footer with navigation links

### CSS Approach
- Uses CSS custom properties (variables) defined in `:root`
- Responsive design with `clamp()` for fluid typography
- Mobile-first approach with media queries at 700px, 720px, 800px, and 860px breakpoints
- Subtle animations and transitions for hover states and reveal effects
- CSS-only decorative elements (gradients, patterns, animations)

### JavaScript Functionality
- Minimal JS: IntersectionObserver for scroll-triggered reveal animations
- No external libraries or frameworks
- Animation reveals elements as they enter the viewport

### Design Tokens
Key CSS variables in `:root`:
- `--ink`: Primary text color (dark)
- `--bone`: Background/secondary color (off-white)
- `--accent`: Primary accent color (burnt amber)
- `--accent-2`: Secondary accent (gilded)
- Various shades and tints derived from these bases

### Typography
- Serif: Fraunces (headings, emphasis)
- Sans: Geist (body, navigation)
- Mono: JetBrains Mono (UI elements, labels)

## Working with This Codebase

### Making Changes
1. **Content updates**: Edit text directly in HTML elements
2. **Style modifications**: Adjust CSS variables or rules in the `<style>` block
3. **Layout changes**: Modify HTML structure or CSS grid/flex properties
4. **Animation tweaks**: Adjust IntersectionObserver thresholds or CSS transition properties

### Best Practices
- Maintain the CSS variable system for consistent theming
- Keep responsive behavior intact when modifying layouts
- Preserve the reveal animation functionality for proper UX
- Test changes across different viewport sizes
- Keep the site lightweight - avoid adding unnecessary dependencies

### File Organization
This repository contains only:
- `index.html` - The complete website
- Standard Git files (.git/)
- README.md - Basic project description

There are no separate CSS/JS files, build configurations, or asset directories.