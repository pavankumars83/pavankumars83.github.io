# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This repo hosts two distinct projects:

- **`saahvan/`** — Saahvan Solutions website (Next.js 16, primary active project)
- **`saahvan-new/`** — Static HTML/CSS/JS prototype of the same site (no build system)

---

## saahvan/ — Next.js App

### Commands (run from `saahvan/`)

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # static export (all pages prerendered)
npm run lint     # eslint
```

No test suite is configured.

### Architecture

**Stack**: Next.js 16.2.6, React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide Icons

**App Router** with server components by default; add `'use client'` only for interactive parts.

**Key directories**:
- `src/app/` — pages and route segments (layout.tsx wraps all pages with Navbar + Footer)
- `src/components/layout/` — Navbar, Footer
- `src/components/sections/` — Hero, ServicesGrid, WhySaahvan, IndustriesSection, etc.
- `src/components/shared/AnimateIn.tsx` — Framer Motion `useInView` scroll-reveal wrapper
- `src/components/ui/` — Button, Badge primitives
- `src/content/services.ts` — 8 services with full data (source of truth for service pages)
- `src/content/industries.ts` — 6 industries
- `src/types/index.ts` — shared TypeScript interfaces

**Dynamic routes**: `src/app/services/[slug]/page.tsx` — `params` is a `Promise<{slug}>`, must `await params` (Next.js 16 breaking change).

**Fonts**: Fraunces (serif/headings via `next/font/google`), Geist (body), Geist Mono. Use explicit `weight` values (e.g. `["300","400"]`), NOT `axes` with `weight: "variable"`.

### Design System (`src/app/globals.css`)

Tailwind v4 uses `@theme inline` — CSS variables become utilities automatically:

| Token | Value | Utility |
|---|---|---|
| `--color-ink` | `#0F0F0E` | `text-ink`, `bg-ink` |
| `--color-bone` | `#F9F8F6` | `bg-bone` |
| `--color-accent` | `#1847D0` | `bg-accent`, `text-accent` |
| `--color-muted` | `#6B7280` | `text-muted` |
| `--color-border` | `#E4E2DD` | `border-border` |

Custom CSS utilities defined in globals.css (not Tailwind classes):
- `.container` / `.container-md` / `.container-sm` / `.container-xl` — max-width + responsive padding
- `.section-py` / `.section-py-sm` / `.section-py-xs` — block padding via `clamp()`
- `.label` — monospace eyebrow text (uppercase, tracked)
- `.link-hover` — animated underline on hover
- `.rule` — 1px horizontal divider

Body has a grain texture overlay via `body::before` SVG filter (z-index 9999, pointer-events none).

---

## saahvan-new/ — Static Site

Three files: `index.html`, `styles.css`, `script.js`. No build process — edit and refresh.

To preview: `open saahvan-new/index.html` or `python -m http.server 8000` from that directory.

`script.js` uses `IntersectionObserver` to add `.in` class to `.reveal` elements for scroll animations.
