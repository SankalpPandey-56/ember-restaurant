# Design Rationale

Notes on the deliberate decisions behind EMBER — useful for anyone extending
the site, and a record of why things look the way they do.

## Concept

EMBER is a contemporary fire-grilled restaurant. The site treats that literally:
one warm near-black ground, cream typography, and a single copper accent that
behaves like an ember — small, warm, never dominant.

## Typography

| Role         | Face       | Notes                                        |
| ------------ | ---------- | -------------------------------------------- |
| Display      | Fraunces   | Light weights, soft optical axes, tight lead |
| Body / UI    | Jost       | Geometric sans, weight 300 base              |
| Labels       | Jost       | 11px caps, +0.26em tracking, copper          |

The serif carries every heading; the sans does all the quiet work. Display
sizes scale from 42px on a 320px phone to 72px on the hero without ever
shouting — hierarchy comes from the eyebrow label, not from volume.

## Color

- `--ink #131009` — background. Warm, never pure black; photographs sit on it.
- `--cream #f2ebdd` — primary text.
- `--sand #a39885` — secondary text and metadata.
- `--copper #c98a4b` — eyebrows, prices, hover states, active tab underline.
- `--line #2b2519` — hairlines that divide editorial blocks.

Contrast: cream on ink is ~14:1; sand on ink is ~7:1; copper is reserved for
larger or decorative elements to keep small text compliant.

## Composition

Sections alternate asymmetric grids (5/7 and 6/6 with offsets) and alternate
between ink and raised panels for rhythm. Photography interacts with the
layout — full-bleed hero, offset columns, overlapping margins on desktop —
rather than sitting in identically-sized cards. Corners are square everywhere;
the brand never uses pills, gradients or shadows.

## Motion

One easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`) drives everything: reveals
rise 28px over 900ms, hovers change color in 300ms, the mobile drawer is 450ms.
Every animation has a reduced-motion fallback and the site is fully usable
with animation disabled.
