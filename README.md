<div align="center">
  <h1>my-portfolio</h1>
  <p><strong>Single-page portfolio built with Next.js + Tailwind (monochrome, fast, and easy to maintain).</strong></p>

  <p><a href="https://bhuvan-malik.vercel.app/">Live site</a></p>

  <!-- Badges: update URLs/placeholders after first deploy -->
  <p>
    <img alt="License" src="https://img.shields.io/badge/License-MIT-0a0a0a" />
    <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16.1.1-0a0a0a" />
    <img alt="React" src="https://img.shields.io/badge/React-19.2.3-0a0a0a" />
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-0a0a0a" />
    <img alt="Lighthouse scores" src="https://img.shields.io/badge/Lighthouse-98%2F100%2F100%2F100-0a0a0a" />
    <!-- Replace with your Vercel status badge after deploy:
      https://vercel.com/docs/projects/overview#badges
    -->
    <img alt="Vercel Deploy" src="https://img.shields.io/badge/Vercel-deploy%20badge%20TBD-0a0a0a" />
  </p>
</div>

> **Why this stack?** Next.js App Router gives SEO-friendly static output and first-class performance primitives; Tailwind keeps the UI consistent and shippable without a heavy component framework.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Theming](#theming)
- [Performance](#performance)
- [Deployment](#deployment)
- [Design Decisions](#design-decisions)
- [License](#license)

## Features

- Single-page layout with anchor navigation + active section highlighting (scroll spy)
- Dark/light theme toggle (persisted via `next-themes`)
- “Glassy” floating navbar + mobile overlay menu
- Data-driven sections (update `data/*` — no component rewiring)
- Experience timeline with modal expansion (only when there’s more to read)
- Copy-to-clipboard email button
- Monochrome aesthetic with a subtle animated particle background

## Tech Stack

| Layer | What | Why |
|---|---|---|
| Framework | Next.js (App Router) | Static output, SEO, image/font optimizations, strong defaults |
| UI | Tailwind CSS v4 | Consistent design system without heavy runtime UI frameworks |
| Theme | `next-themes` | SSR-safe theme switching with persistence |
| Primitives | Radix Dropdown (shadcn/ui) | Accessible behavior for the theme menu with minimal styling lock-in |
| Animations | IntersectionObserver reveal | Keeps motion lightweight (no large animation runtime) |
| Icons | Lucide (non-brand) + inline SVG for GitHub/LinkedIn | Avoids deprecated Lucide brand icons + removes CDN/hydration flicker |

## Project Structure

High-level layout:

```
app/
  layout.tsx        # fonts, ThemeProvider, metadata, navbar + background
  page.tsx          # single-page composition
  globals.css       # theme tokens + utilities (glass, glass-nav, brand-ring)
components/
  nav/              # navbar + mobile menu behavior
  sections/         # page sections (hero/about/skills/experience/contact)
  experience/       # modal implementation
  skills/           # skill badge UI
  contact/          # copy-to-clipboard button
  background/       # particle field + overlays
  icons/            # inline SVG brand icons
data/
  meta.ts           # name, bio, socials, navbar sections, resume path
  skills.ts         # categorized skills list (icons optional)
  experience.ts     # work experience data
hooks/
  use-scroll-spy.ts # active nav section tracking
public/
  photo.jpeg        # hero image
  resume.pdf        # resume download (static asset)
PORTFOLIO_GUIDE.md  # deeper maintenance notes
```

If you want a more detailed “where everything is” guide, read `PORTFOLIO_GUIDE.md`.

## Getting Started

Install and run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Other useful scripts:

```bash
npm run lint
npm run build
```

Note: in some restricted environments, Turbopack builds may fail. If you hit that, you can run:

```bash
npm run build -- --webpack
```

## Customization

Most edits are “data-only”:

- **Name, role, hero tagline, bio, socials, resume link**: `data/meta.ts`
- **Skills**: `data/skills.ts`
  - If an icon is missing/broken, omit `icon` for that entry to show text-only.
- **Experience**: `data/experience.ts`
  - Cards show **2 bullets max** on the main timeline.
  - If a job has **more than 2 bullets**, the card becomes clickable, shows “Read more”, and opens a modal with the full list.
- **Hero photo**: replace `public/photo.jpeg` (keep it reasonably compressed)
- **Resume download**: replace `public/resume.pdf`

## Theming

Theme tokens and most visual tuning happens in `app/globals.css`:

- Light theme tokens: `:root { ... }`
- Dark theme tokens: `.dark { ... }`
- “Glass” utilities:
  - `.glass` for section surfaces/cards
  - `.glass-nav` for the navbar (separate to keep it visually “glassy”)

Theme switching is handled by:

- `components/theme-provider.tsx`
- `components/theme-toggle.tsx`

## Performance

This project is intentionally lightweight:

- App Router static output for the homepage
- `next/image` for the hero image
- Fonts loaded via Fontshare in `app/layout.tsx`
- Minimal UI primitives and no heavy component library runtime
- Brand icons are inline SVG (no CDN dependency or hydration flicker)

## Deployment

Recommended: **Vercel**

1. Push to GitHub
2. Import the repo in Vercel
3. Deploy (no env vars required by default)
4. Add a custom domain (optional)

Resume hosting:
- Keeping `resume.pdf` in `public/` is fast and does **not** slow the homepage—users download it only when clicking the button.

## Design Decisions

Non-obvious choices and tradeoffs (the “why”):

- **Single-page anchors vs multi-route site**: fast navigation, fewer moving parts, and easy maintenance for a personal portfolio.
- **Tailwind vs component frameworks (MUI/Chakra)**: avoids large runtime/style lock-in and keeps shipped CSS small.
- **Minimal Radix usage**: only where accessibility/behavior matters (theme dropdown), without adopting a full component library.
- **No CMS**: content changes are quick edits in `data/*`; no infra or editor workflow to maintain.
- **Experience modal gating**: only show “Read more” when it’s useful (more than 2 bullets).
- **Avoid deprecated brand icon packages**: use inline SVG for reliability and predictable theming.

## License

MIT — see `LICENSE`.
