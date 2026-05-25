# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

Since this is a static website with no build system, frameworks, or external dependencies, there are no traditional build, lint, or test commands.

### Viewing the Site
- Open `index.html` directly in a web browser (double-click or `open index.html` on macOS)
- Use any static file server:
  - Python: `python -m http.server 8000` then visit `http://localhost:8000`
  - Node.js: `npx serve` or `npx http-server`
  - VS Code: Install "Live Server" extension and click "Go Live"

### Validation (Optional)
While not required, you can validate the code quality:
- HTML: Use the W3C Validator (https://validator.w3.org/)
- CSS: Use the W3C CSS Validator (https://jigsaw.w3.org/css-validator/)
- JavaScript: Use ESLint manually if desired (no configuration included)

## High-Level Code Architecture

### Three-File Structure
This site consists of exactly three core files with clear separation of concerns:
1. **`index.html`** - Semantic HTML structure and content
2. **`styles.css`** - All styling including CSS variables, layout, animations, and responsive design
3. **`script.js`** - Minimal JavaScript (~1KB) for IntersectionObserver-based scroll reveal animations

### Architectural Principles
- **No Build Process**: Changes take effect immediately when HTML is reloaded
- **No Dependencies**: Zero external libraries or frameworks
- **Mobile-First Responsive Design**: Uses CSS `clamp()` for fluid typography and media queries for layout changes
- **Performance Optimized**:
  - JavaScript unobserves elements after animation to reduce overhead
  - CSS-only animations for decorative elements
  - Efficient CSS selectors and minimal DOM manipulation
- **Maintainability**:
  - CSS Custom Properties (`--ink`, `--bone`, etc.) for centralized theming
  - Consistent naming conventions (kebab-case)
  - Organized with clear section comments in CSS

### Key Technical Details

#### HTML Structure (`index.html`)
Traditional single-page layout with semantic sections:
- Header with navigation (hidden on mobile, would need enhancement for production)
- Hero section with headline, subheading, description, and dual CTAs
- Why section: 4-column differentiator cards (responsive: 4→2→1 columns)
- About us section (placeholder content)
- Advisory section: Positioning statement
- Services section: 4 service offerings (responsive: 2→1 columns)
- Engage section: Two engagement models (Sprint & Retainer)
- Contact section: Information and final CTA
- Footer with copyright and navigation links

All content sections use `.section` class for consistent styling.
Animated elements use `.reveal` class with incremental delays (`.reveal.d1` through `.reveal.d4`) for staggered appearance.

#### CSS Approach (`styles.css`)
- **CSS Variables**: Defined in `:root` for easy theming:
  - Color System: `--ink` (text), `--bone` (background), `--accent`/ `--accent-2` (highlights), `--rule` (dividers)
  - Font Stacks: `--serif` (Fraunces), `--sans` (Geist), `--mono` (JetBrains Mono)
- **Responsive Breakpoints**:
  - 520px: Why section to 1-column
  - 700px: Section headers stack vertically
  - 720px: Engagement section columns stack
  - 800px: Primary navigation hidden
  - 860px: Services grid 2→1 column
  - 900px: Why section 4→2 column
- **Layout Systems**: CSS Grid for services/why sections, Flexbox for alignment
- **Visual Enhancements**:
  - Grain texture via `body::before`
  - Animated crosshair in hero (CSS-only)
  - Smooth scrolling behavior
  - Hover transitions on interactive elements

#### JavaScript Functionality (`script.js`)
- **IntersectionObserver**: Efficient reveal-on-scroll implementation (~1KB)
- **Configuration**:
  - `threshold: 0.12` (12% visibility triggers)
  - `rootMargin: '0px 0px -40px 0px'` (triggers 40px before full viewport entry)
- **Performance**: Unobserves elements after animation to reduce overhead
- **Operation**: Adds `.in` class to trigger CSS transitions when elements enter viewport

### Design System
- **Typography**: Fluid heading sizes (`clamp()`), body text 17px-20px, fixed metadata sizes
- **Spacing**: `clamp()` for responsive padding/margins, 1px grid gaps for dividers
- **Component Patterns**:
  - Cards: Ink background with hover to ink-2 state
  - Buttons: Bone background with ink text, hover to accent-2
  - Ghost buttons: Transparent with bone text, hover to accent-2
- **Animation System**:
  - Reveal: `opacity` and `transform` transitions with staggered delays (0.08s-0.32s)
  - Hover: `.25s ease` transitions per component
  - Decorative: Hero crosshair rotates over 80 seconds via CSS `@keyframes`

### File Organization
Repository contains only:
- `index.html` - Complete website structure
- `styles.css` - All styling (variables, layout, animations, responsive design)
- `script.js` - Scroll reveal animation logic
- Standard Git files
- Basic README.md

No build configurations, asset directories, or external dependencies exist.

### Deployment
Deploy to any static hosting service:
- Vercel, Netlify, GitHub Pages, Cloudflare Pages, AWS S3, Firebase Hosting, etc.
- Simply upload/publish the three core files
- Ensure correct MIME types (text/html, text/css, application/javascript)
- For client-side routing (if added later), configure redirects to serve index.html for all paths
