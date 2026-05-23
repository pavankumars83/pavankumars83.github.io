# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview
This is a static website for Saahvan Solutions, a technology advisory company. The site consists of three core files:
- `index.html`: Main HTML file with semantic structure and content
- `styles.css`: Stylesheet containing all CSS including variables, layout, animations, and responsive design
- `script.js`: Minimal JavaScript (IntersectionObserver) for scroll-triggered reveal animations
- No build system, frameworks, or external dependencies
- Pure HTML/CSS/JS implementation

## Development Commands

### Viewing the Site
Since this is a static site, you can view it by:
- Opening `index.html` directly in a web browser (double-click or `open index.html` on macOS)
- Using any static file server:
  - Python: `python -m http.server 8000` then visit `http://localhost:8000`
  - Node.js: `npx serve` or `npx http-server`
  - VS Code: Install "Live Server" extension and click "Go Live"

### Common Development Tasks
- **Content updates**: Edit text directly in HTML elements in `index.html`
  - Update hero text, service descriptions, about us placeholder, etc.
  - Modify navigation links if adding/removing sections
  - Update contact information in the footer and contact section

- **Styling changes**:
  - **Theme modifications**: Edit CSS variables in `:root` in `styles.css`
    - Change `--ink`, `--bone`, `--accent`, `--accent-2` for color scheme
    - Adjust `--bone-dim`, `--bone-faint` for text variations
    - Modify font stacks if needed (`--serif`, `--sans`, `--mono`)
  - **Component styling**: Find and edit specific rules in `styles.css`
    - Look for component classes: `.hero`, `.service`, `.why-card`, `.engage-card`, etc.
    - Maintain existing spacing and proportion systems
  - **Layout adjustments**: Modify grid-template-columns or flex properties
    - Services section: `.services` (currently 2-col on desktop, 1-col on mobile)
    - Why section: `.why-grid` (4-col → 2-col → 1-col based on viewport)
    - Engagement section: `.engage-grid` (2-col → 1-col)

- **JavaScript behavior**: Modify the IntersectionObserver in `script.js`
  - Adjust `threshold` (current: 0.12) to change when elements trigger
  - Modify `rootMargin` (current: '0px 0px -40px 0px') to change trigger offset
  - The script observes all elements with class `.reveal` and adds `.in` class when visible

- **Animation tweaks**: Adjust transition delays in `styles.css`
  - `.reveal.d1` through `.reveal.d4` control staggered reveal timing
  - Modify transition duration/easing in the `.reveal` rule
  - Hover animations are defined in individual component rules

- **Adding new sections**: Follow existing patterns
  1. Add semantic section in `index.html` with appropriate ID and classes
  2. Include `.reveal` class with delay (`.reveal.d1`, `.reveal.d2`, etc.) on elements
  3. Add corresponding CSS in `styles.css` following existing naming conventions
  4. For grid-based content (services, why-section), extend existing grid structures

### No Build Steps Required
This site requires no compilation, transpilation, or build process. Changes take effect immediately when the HTML file is reloaded in a browser.

## Code Structure & Architecture

### HTML Structure (`index.html`)
The site follows a traditional single-page layout with semantic sections:
1. `<header>`: Site navigation (horizontal on desktop, hidden on mobile), branding, and primary CTA
2. `<section class="hero" id="top">`: Main headline, subheading, description, and dual CTAs
3. `<section class="section why" id="why">`: Four differentiator cards in a responsive grid
4. `<section class="section" id="about-us">`: Company information (currently placeholder content)
5. `<section class="section" id="advisory">`: Positioning statement about architectural focus
6. `<section class="section" id="services">`: Four service offerings in a responsive grid
7. `<section class="section engage" id="engage">`: Two engagement models (Sprint & Retainer)
8. `<section class="section contact" id="contact">`: Contact information and final CTA
9. `<footer>`: Site footer with copyright and navigation links

Each content section uses the `.section` class for consistent padding and border styling.
All animated elements use the `.reveal` class with incremental delays (d1-d4) for staggered appearance.

### CSS Approach (`styles.css`)
- **CSS Custom Properties**: Defined in `:root` for centralized theming and easy updates:
  - Color System:
    * `--ink`: #0E0D0B (Primary text - near black)
    * `--ink-2`: #16140F (Hover state variant)
    * `--bone`: #EDE6D6 (Background - warm off-white)
    * `--bone-dim`: #B7B0A0 (Secondary text)
    * `--bone-faint`: #6E6A60 (Metadata/muted text)
    * `--accent`: #D9612A (Primary accent - burnt amber)
    * `--accent-2`: #E8B259 (Secondary accent - gilded)
    * `--rule`: rgba(237,230,214,0.12) (Subtle borders/grids)
    * `--rule-soft`: rgba(237,230,214,0.06) (Even softer variant)
  - Font Stacks:
    * `--serif`: "Fraunces", serif (Headings, emphasis)
    * `--sans`: "Geist", sans-serif (Body, navigation)
    * `--mono`: "JetBrains Mono", monospace (UI elements, labels, metadata)
- **Responsive Design**:
  - Fluid typography using `clamp()` for headings and body text
  - Mobile-first breakpoints:
    * 700px: Section headers stack vertically (label above title)
    * 720px: Engagement section columns stack vertically
    * 800px: Primary navigation hidden (mobile menu would be needed for real nav)
    * 860px: Services grid changes from 2-column to 1-column
    * 900px: Why section changes from 4-column to 2-column
    * 520px: Why section changes to 1-column
- **Layout Systems**:
  - CSS Grid: Used for service offerings (`.services`) and differentiators (`.why-grid`)
  - Flexbox: Used for alignment in headers, hero actions, contact row, etc.
  - Gap property: Used for consistent spacing in grids (1px gap creates visible divider effect)
- **Visual Enhancements**:
  - Subtle grain texture via `body::before` with SVG data URI
  - Decorative animated crosshair in hero section (CSS-only animation)
  - Smooth scrolling behavior (`html { scroll-behavior: smooth; }`)
  - Hover transitions on interactive elements (buttons, service cards, why cards, list items)
  - Active states and focus indicators maintained through CSS

### JavaScript Functionality (`script.js`)
- **IntersectionObserver**: Lightweight (~1KB) implementation for performant reveal-on-scroll
- **Configuration**:
  - `threshold: 0.12` - Element considered visible when 12% is in viewport
  - `rootMargin: '0px 0px -40px 0px'` - Triggers reveal 40px before element fully enters viewport
  - This creates a natural reveal animation as users scroll down the page
- **Operation**:
  ```javascript
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting){
        e.target.classList.add('in');  // Triggers CSS transition
        io.unobserve(e.target);        // Stop observing after animation
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  ```
- **Performance**: Efficient because it unobserves elements after they animate, reducing observer overhead

### Design Tokens & Styling Patterns
- **Color Usage**:
  - Text: Primarily `var(--ink)` on `var(--bone)` background, or `var(--bone)` on `var(--ink)` backgrounds
  - Accents: Used for buttons, icons, highlights, and hover states
  - Dividers: `var(--rule)` and `var(--rule-soft)` used for subtle section dividers and grid gaps
  - States: Hover states use `var(--accent-2)` or background color shifts (`var(--ink)` → `var(--ink-2)`)
- **Spacing System**:
  - Uses `clamp()` for fluid padding and margins in sections
  - Gap property in grids creates consistent 1px dividers
  - Padding values use `clamp(min, vw, max)` for responsive spacing
- **Typography Scale**:
  - Headings: Use `clamp()` for fluid sizing (h1: 48px-132px, h2: 32px-64px, h3: 22px-28px)
  - Body: Fluid sizing (17px-20px) with line-height 1.5
  - Metadata/Caption: Fixed sizes (11px-14px) with letter-spacing and text-transform
- **Component Patterns**:
  - Cards (service, why, engage): Ink background with hover to ink-2, transitions on hover
  - Buttons: `.cta-btn` class with bone background, ink text, hover to accent-2
  - Ghost buttons: `.cta-btn.ghost` with transparent background, bone text, accent-2 on hover
  - Grids: Use 1px gap with background color to create divider effect between cells

### Animation System
- **Reveal Animations**: Controlled by `.reveal` class in CSS
  - Initial state: `opacity: 0; transform: translateY(24px);`
  - Animated state (`.in`): `opacity: 1; transform: none;`
  - Transition: `opacity 1s cubic-bezier(.2,.7,.2,1), transform 1s cubic-bezier(.2,.7,.2,1);`
  - Staggered delays: `.reveal.d1` (0.08s), `.reveal.d2` (0.16s), `.reveal.d3` (0.24s), `.reveal.d4` (0.32s)
- **Hover Animations**: Defined per-component with `transition: property .25s ease;` patterns
  - Buttons: background and transform transitions
  - Cards: background and icon color/transform transitions
  - Links and list items: color and padding transitions
- **Decorative Animations**:
  - Hero crosshair: `@keyframes spin` rotating over 80 seconds
  - No JavaScript required for decorative animations - all CSS-based

## Working with This Codebase

### Making Changes
1. **Content Updates**:
   - Edit text directly within HTML elements in `index.html`
   - Update the "About Us" section placeholder with actual company information
   - Modify service descriptions, differentiators, or engagement models as needed
   - Update navigation if site structure changes (add/remove sections)
   - Update contact information in both contact section and footer

2. **Style Modifications**:
   - **Global Theme**: Edit variables in `:root` in `styles.css`
     - Change color scheme by modifying the 4 base color variables
     - Update fonts by changing the font stack variables
     - Adjust spacing system by modifying clamp() values if needed
   - **Component-Level Styling**:
     - Find the relevant component section in `styles.css` (look for comments like `/* ---------- hero ---------- */`)
     - Modify existing rules while maintaining the overall design language
     - For new variants, extend existing patterns rather than creating from scratch
   - **Layout Changes**:
     - To change column counts: modify `grid-template-columns` values
     - To adjust spacing: modify `gap`, `padding`, or `margin` values
     - To change breakpoints: adjust media query values
   - **Animation Adjustments**:
     - Reveal timing: modify transition-delay values in `.reveal.d1` through `.reveal.d4`
     - Reveal duration/easing: edit the `.reveal` transition property
     - Hover effects: adjust individual component transition properties

3. **Adding New Content**:
   - **New Section**:
     1. Add `<section class="section" id="new-section">` in `index.html` after an existing section
     2. Follow the pattern: `<div class="wrap">` → content with appropriate classes
     3. Add `.reveal` class with delay (`.reveal.d1`, `.reveal.d2`, etc.) to elements that should animate
     4. Add corresponding CSS in `styles.css` following the `/* ---------- [section-name] ---------- */` pattern
   - **New Grid Item** (service, why-card, etc.):
     1. Duplicate an existing item in the HTML grid
     2. Update the content (icon, heading, description, etc.)
     3. Ensure it follows the same class structure for consistent styling
     4. The CSS will automatically apply due to the shared class names
   - **New Component Type**:
     1. Create the HTML structure in `index.html`
     2. Add appropriate classes (follow naming conventions: kebab-case, descriptive)
     3. Add CSS rules in `styles.css` following the existing pattern structure
     4. Use existing variables for colors, fonts, and spacing to maintain consistency

### Best Practices
- **Maintain CSS Variable System**: Always use `var(--variable-name)` for colors, fonts, and spacing values to ensure theme consistency and easy updates
- **Preserve Responsive Behavior**: Test changes at all defined breakpoints (700px, 720px, 800px, 860px, 900px, 520px) using browser dev tools
- **Preserve Reveal Animation**: Ensure new elements use the `.reveal` class with appropriate delay (d1-d4) for consistent staggered reveal UX
- **Performance Conscious**:
  - Keep JavaScript minimal - the current implementation is already optimized
  - Avoid adding unnecessary libraries or complex JavaScript logic
  - Optimize any new assets (though current site uses SVG/CSS for all graphics)
  - Use efficient CSS selectors and avoid over-qualification
- **Accessibility Considerations**:
  - Maintain sufficient color contrast (test `var(--ink)` on `var(--bone)` and vice versa - approximately 15.6:1 ratio)
  - Ensure interactive elements have clear visual feedback (hover, focus, active states)
  - Use semantic HTML elements appropriately (header, nav, section, footer, article)
  - Preserve keyboard navigability and logical tab order
  - Maintain skip-to-content functionality via anchor links (used in header navigation)
- **Code Organization**:
  - Keep related styles together in `styles.css` following the existing comment sections
  - Follow existing naming conventions (kebab-case for classes and IDs, semantic HTML)
  - Add comments for complex CSS sections when making significant changes
  - Maintain the mobile-first approach - specify mobile styles first, then override at breakpoints
  - When adding new CSS, follow the existing order in the file for consistency

### File Organization
This repository contains:
- `index.html` - The complete website structure with semantic HTML and content
- `styles.css` - All styling including variables, layout, animations, responsive design, and visual enhancements
- `script.js` - Minimal JavaScript (IntersectionObserver) for scroll-triggered reveal animations (~1KB gzipped)
- Standard Git files (.git/)
- README.md - Basic project description

There are no separate build configurations, asset directories, or external dependencies. All code is self-contained in these three files, making it easy to understand, modify, and deploy.

### Deployment
Since this is a static site, it can be deployed to any static hosting service:
- Vercel, Netlify, GitHub Pages, Cloudflare Pages, AWS S3, Firebase Hosting, etc.
- No build step required - simply upload/publish the three core files
- Ensure proper MIME types are served (text/html for .html, text/css for .css, application/javascript for .js)
- For client-side routing (if ever added), configure redirects to serve index.html for all paths