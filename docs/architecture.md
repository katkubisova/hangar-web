# Architecture — Wireframe Phase

This describes how the site is put together during the current **wireframes-only**
build phase. See [`CLAUDE.md`](../CLAUDE.md) for the phase scope and rules.

## Data layer

There is no CMS or database wired up yet. Every page reads from a local,
typed placeholder data layer:

- `src/lib/types/*.ts` — one file per content type (`Gym`, `Article`,
  `TeamMember`, `Position`, `FaqItem`, `ActivityCategory`, `BenefitCard`,
  `GlobalSettings`). No `index.ts` barrel file — import directly from the
  specific type file, per [`AGENTS.md`](../AGENTS.md).
- `src/lib/data/*.ts` — placeholder datasets matching those types, with enough
  variation to exercise real UI states: an open location, a coming-soon
  location, a physio-enabled vs. physio-disabled location, a news category
  with no articles, a closed position that must not render, and a team group
  with no members (which should hide itself).

Pages and components import from these files directly
(e.g. `import { gyms } from "@/lib/data/gyms"`). This data layer is designed
to map cleanly onto a real CMS later without changing consuming components —
only the data source swaps out.

## What's intentionally not in use yet

This repo has tRPC, Drizzle, and Postgres installed and documented in
`AGENTS.md`/`docs/trpc.md`/`docs/database-setup.md`, and `next-intl` is
installed with `messages/en.json` / `messages/cs.json`. None of this is used
during the wireframe phase:

- **No tRPC/DB calls.** Pages read local data files directly. The
  spec explicitly defers real form submission and live data integrations to
  a later phase.
- **No next-intl routing.** All placeholder copy is authored in English.
  The CZ/EN switcher in the navbar renders but doesn't switch content.

Both will be wired up in a later, non-wireframe phase.

## Design tokens

`src/app/globals.css` already used an achromatic (`oklch(x 0 0)`) shadcn
"neutral" palette for nearly every token. For this phase, the remaining
non-neutral tokens (`--destructive`, and the unused dark-mode
`--sidebar-primary`) were flattened to greyscale too, so nothing in the base
UI kit relies on hue. Error/destructive states should read through
lightness/weight/iconography, not color, until the visual design phase.

Typography was simplified to a single system typeface (Geist, via
`--font-sans`, also aliased as `--font-heading`) — no decorative serif/slab
fonts — consistent with "no typography system yet." The existing Tailwind
spacing and type scale (`text-xs`…`text-6xl`, the default spacing scale) is
used as-is rather than introducing a second parallel scale.

## Component primitives

`src/components/ui/*` (button, input, textarea, checkbox, select, tabs,
accordion, badge, card, etc.) are shadcn-generated and reused as-is —
restyled greyscale via the token changes above, not replaced.
`src/components/ui/placeholder-image.tsx` is new: a labelled grey box
(e.g. "Gym photo", "Gallery image") standing in for real imagery anywhere
the spec calls for a photo, matching how the original prototype represents
images.
