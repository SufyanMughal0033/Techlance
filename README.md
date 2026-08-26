# Techlance — Premium Digital Agency Website

A production-quality Next.js 14 (App Router) marketing site for Techlance, built with TypeScript, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Editing content

All editable content lives in `data/`, separate from the UI:

- `data/site.ts` — company name, tagline, WhatsApp number, social links (currently `null` placeholders — add real URLs here)
- `data/services.ts` — web development & digital marketing services
- `data/portfolio.ts` — the 5 placeholder "Selected Work" projects (add real project name, `image`, `url`, `description`, `technologies` per item)
- `data/founders.ts` — Founder & CEO bios
- `data/process.ts` — the "How We Work" steps
- `data/values.ts` — company values
- `data/nav.ts` — header navigation links

## Replacing the logo

The header uses a temporary text wordmark in `components/Logo.tsx`. Swap its contents for the real logo (e.g. an `<Image>` component) once it's ready — the header layout does not need to change.

## Theme

Dark/light mode is handled by `components/ThemeProvider.tsx` plus the color tokens defined in `app/globals.css` (`:root` for light, `.dark` for dark). The user's choice is remembered in `localStorage` and applied before paint via an inline script in `app/layout.tsx`, so there's no flash of the wrong theme.

## Portfolio & founder images

Until real photography/screenshots are available, `PortfolioCard` and `FounderCard` render sophisticated CSS-based placeholders instead of stock photos. Once you have real assets, drop them in `public/` and swap the placeholder markup for a Next.js `<Image>`.

## Fonts

Type is self-hosted via `@fontsource-variable/inter` (body) and `@fontsource-variable/inter-tight` (display/headings) — no external font requests at build or runtime.

## Tech stack

Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · lucide-react
