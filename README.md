# EMBER — Contemporary Fire-Grilled Restaurant

A portfolio-quality restaurant website built with Next.js, designed as a realistic
deliverable for a paying restaurant client. Dark, editorial, typography-led —
built around an open-fire concept.

## Stack

- **Next.js (App Router)** — server components by default; client components only
  where interactivity requires them (navbar, tabs, form, hero parallax)
- **TypeScript** — strict mode, typed data layer
- **Tailwind CSS v4** — design tokens defined in `globals.css` (`@theme`)
- **Framer Motion** — scroll reveals, hero entrance, mobile menu, tab underline
- **Lucide React** — interface icons (brand icons are inline SVG)

## Getting started

```bash
npm install
npm run dev        # development
npm run build      # production build (all routes prerender static)
npm run start      # serve the production build
```

## Project structure

```
src/
├── app/                  # Routes: / , /menu , /about , /contact
│   ├── layout.tsx        # Fonts, metadata, navbar/footer, JSON-LD
│   └── globals.css       # Design system: tokens, typography, utilities
├── components/
│   ├── home/             # Hero, Intro, SignatureDishes, MenuPreview,
│   │                     # Gallery, Story, Testimonials, Visit, ReservationCTA
│   ├── ui/               # Button, Container, Reveal, SectionHeading
│   ├── Navbar.tsx        # Sticky nav + animated mobile menu
│   ├── Footer.tsx
│   ├── ContactForm.tsx   # Client-side validation, accessible errors
│   ├── MapPlaceholder.tsx
│   └── PageHero.tsx      # Shared interior page header
├── data/                 # Menu, site info, testimonials, gallery — no UI
└── lib/                  # Motion tokens, JSON-LD schema
```

## Design system

| Token     | Value     | Use                          |
| --------- | --------- | ---------------------------- |
| `--ink`   | `#131009` | Background (warm near-black) |
| `--cream` | `#f2ebdd` | Primary text                 |
| `--sand`  | `#a39885` | Secondary text               |
| `--copper`| `#c98a4b` | Accent — used sparingly      |

Type pairing: **Fraunces** (display serif) + **Jost** (geometric sans).
Squared corners throughout — the brand never uses pills or heavy shadows.

## Notes

- Images are served locally from `public/images` (Unsplash-sourced placeholders
  sized for production; swap with client photography before launch)
- The contact form validates client-side and shows a success state; wire it to
  an API route or reservation service for a live deployment
- The map is a stylised placeholder; replace with Mapbox/Google Maps if desired
- Fully respects `prefers-reduced-motion` — the site is complete without animation
- Structured data (`schema.org/Restaurant`) is rendered in the root layout
