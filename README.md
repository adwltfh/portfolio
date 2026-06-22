# Adawiyyah Latifah — Portfolio

Next.js (App Router) + TypeScript + Tailwind recreation of the design handoff
(`../design_handoff_portfolio/`), built with an atomic component architecture.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Architecture

```
src/
  app/                 layout (SEO metadata, JSON-LD), page, globals.css,
                       fonts, sitemap.ts, robots.ts, opengraph-image.tsx
  lib/
    data.ts            all content — single source of truth (typed)
    types.ts           content types
    theme/             time-based light/dark (auto 7pm–7am) + no-flash script
    hooks/             useScrollSpy, useScrollLock, useIsScrolled
  components/
    atoms/             Spark, Chip, Button, Eyebrow, IconButton,
                       AvailabilityBadge, Highlight, ImageSlot, JsonLd
    molecules/         Reveal, SectionHead, BrowserMockup, ContactField,
                       MetricCard, SkillTile, Modal, ProjectGallery, Lightbox
    organisms/         Nav, Hero, CodeEditor, Marquee, Featured, FeatureRow,
                       CaseStudyModal, Projects, ProjectModal, Skills,
                       Experience, Contact, Footer, BackgroundField
    templates/         PortfolioPage (full section composition)
```

Design tokens live as CSS variables in `app/globals.css` (the handoff's
`styles.css` is the styling source of truth) and are mirrored into
`tailwind.config.ts` for utility access. Fonts load via `next/font/google`
(Gloock / Plus Jakarta Sans / Space Mono).

## Decisions baked in (from the handoff's "pick one" options)

- **Skills layout:** minimal mono grid (colour washes in on hover).
- **Hero object:** self-typing code editor (`CodeEditor`).
- **Featured:** all three `data.ts` entries shipped (Shoply + two templates).
- **Theme:** auto by time of day, with an explicit toggle in the nav.
- The prototype's **Tweaks panel is not shipped** (handoff guidance).

## SEO

Metadata API in `app/layout.tsx`, JSON-LD Person schema, one `<h1>` (hero) +
one `<h2>` per section, semantic landmarks, `app/sitemap.ts`, `app/robots.ts`,
and a generated `/opengraph-image`.

## Screenshots

No raster assets ship with the design. `ImageSlot` renders a labelled striped
placeholder when no `src` is given; drop screenshots into `public/` and pass
`src` to swap in an optimised `next/image` (the gallery enables fullscreen zoom
once real images exist). Update `site.url` in `src/lib/data.ts` for the live
domain (currently `https://cikin.dev`).
