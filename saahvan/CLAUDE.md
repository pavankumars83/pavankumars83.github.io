# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands (run from `saahvan/`)

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # static export — all pages prerendered to /out
npm run lint     # eslint
```

No test suite configured.

## Next.js 16 Breaking Changes

> Before writing any Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/`.

- **`params` is a Promise** in dynamic route segments — always `await params`:
  ```ts
  export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
  }
  ```
- `generateStaticParams` must return an array of plain objects (no async iterators).
- App Router only — no Pages Router.

## Architecture

**Stack**: Next.js 16.2.6 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide Icons

**Routing**: `src/app/` uses App Router. All components are server components by default — add `'use client'` only when needed (event handlers, hooks, Framer Motion animations).

**Root layout** (`src/app/layout.tsx`) wraps every page with `<Navbar>` + `<Footer>`. The `<main>` is `flex-1` inside a flex column body.

**Content layer** — single source of truth, no CMS:
- `src/content/services.ts` — 8 services (slugs: `enterprise-architecture`, `ai-automation`, `cloud-transformation`, `data-engineering`, `cybersecurity`, `application-modernization`, `erp-crm-consulting`, `managed-services`)
- `src/content/industries.ts` — 6 industries
- `src/types/index.ts` — shared TypeScript interfaces

**Dynamic route**: `src/app/services/[slug]/page.tsx` — uses `generateStaticParams` to pre-render all 8 service pages.

**Shared components**:
- `src/components/shared/AnimateIn.tsx` — Framer Motion `useInView` scroll-reveal wrapper (`'use client'`)
- `src/components/ui/Button.tsx`, `Badge.tsx` — primitive UI components
- `src/components/layout/Navbar.tsx`, `Footer.tsx`
- `src/components/sections/` — page sections (Hero, ServicesGrid, WhySaahvan, IndustriesSection, CaseStudiesPreview, InsightsSection, CTABanner, TrustBar)

## Design System (`src/app/globals.css`)

Tailwind v4 uses `@theme inline` — CSS variables become utility classes automatically.

**Color tokens** (use as `bg-*`, `text-*`, `border-*`):
| Variable | Hex | Notes |
|---|---|---|
| `--color-ink` | `#0F0F0E` | Primary text / dark backgrounds |
| `--color-ink-2` | `#1C1C1A` | Secondary dark |
| `--color-bone` | `#F9F8F6` | Default page background |
| `--color-bone-2` | `#F1F0EC` | Subtle surface variant |
| `--color-surface` | `#FFFFFF` | Cards / overlays |
| `--color-accent` | `#1847D0` | CTA blue |
| `--color-accent-dark` | `#1239AA` | Hover state for accent |
| `--color-accent-light` | `#EEF2FF` | Tinted accent background |
| `--color-muted` | `#6B7280` | Secondary text |
| `--color-border` | `#E4E2DD` | Dividers and outlines |

**Fonts** (CSS variables → Tailwind `font-*` utilities):
- `font-serif` → Fraunces — headings (`h1`–`h6` default to this, `font-weight: 300`)
- `font-sans` → Geist Sans — body text
- `font-mono` → Geist Mono — code, `.label` eyebrows

Font loading: use explicit `weight` array (e.g. `["300","400"]`), NOT `axes` with `weight: "variable"`.

**Custom CSS utilities** (defined in globals.css, not Tailwind classes):
- `.container-xl` / `.container` / `.container-md` / `.container-sm` — responsive max-width + padding via `clamp()`
- `.section-py` / `.section-py-sm` / `.section-py-xs` — block padding via `clamp()`
- `.label` — monospace eyebrow text (uppercase, tracked, 0.6875rem)
- `.link-hover` — animated underline on hover (pseudo-element `width` transition)
- `.rule` — 1px `border-top` divider using `--color-border`
- `.text-balance` / `.text-pretty` — `text-wrap` utilities

**Grain overlay**: `body::before` is a fixed SVG noise texture (opacity 0.022, z-index 9999, pointer-events none) — do not remove or it will break the visual identity.
