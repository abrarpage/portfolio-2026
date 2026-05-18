# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working in this repository.

@AGENTS.md

## Commands

```bash
bun dev          # Start dev server on port 3001
bun build        # Production build
bun lint         # Run ESLint
```

No test suite is configured.

## Stack

- **Next.js 16** (App Router) — check `node_modules/next/dist/docs/` before writing Next.js code; APIs differ from earlier versions
- **React 19** with TypeScript
- **Tailwind CSS v4** — configured via `postcss.config.mjs`; uses `@import "tailwindcss"` (not `@tailwind` directives)
- **Framer Motion** — for all animations
- **Ark UI (`@ark-ui/react`)** — headless component primitives (e.g. Carousel in ProjectCard)
- **Kanit** (Google Font) — sole typeface, loaded in `app/layout.tsx`

## Architecture

The site is a single-page portfolio with no routing beyond `/`. All content lives in one scroll flow.

**Entry point chain:**
`app/page.tsx` → `app/home/index.tsx` → section components in `components/`

**Section order** (rendered in `app/home/index.tsx`):
1. `HeroSection` — full-viewport hero with portrait, animated heading, contact CTA
2. `MarqueeSection` — scrolling ticker
3. `AboutSection`
4. `ServicesSection`
5. `ProjectsSection` — stacked sticky cards with scroll-driven scale via `useScroll`

**Shared animation primitives:**
- `FadeIn` — `"use client"` wrapper around `motion.create()`, uses `whileInView` with `viewport={{ once: true }}`
- `Magnet` — `"use client"` mouse-tracking magnetic pull effect; wraps elements in `HeroSection`

**Client boundary pattern:** All interactive/animated components carry `"use client"`. Section components that only compose these (e.g. `HeroSection`) are Server Components by default.

**Project data** is co-located as a const array inside `ProjectsSection.tsx` — not in a separate data file.

## Styling conventions

- Dark background: `#0C0C0C` applied both in `globals.css` and inline `style` props on sections
- Primary text color: `#D7E2EA`
- Reusable CSS classes defined in `globals.css`: `.wrapper` (max-width container), `.hero-heading` (gradient text clip), `.contact-btn` (gradient button)
- Responsive sizing uses `clamp()` for fluid typography; Tailwind breakpoints (`sm:`, `md:`) for layout shifts
- `overflowX: 'clip'` (not `hidden`) used intentionally on sections to avoid scroll container interference with sticky positioning
