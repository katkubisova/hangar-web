# CLAUDE.md — Hangar Gyms Rebuild

## Scope: WIREFRAMES ONLY (for now)

This is a rebuild of the Hangar Gyms website, sourced from the retro-spec
"HANGARGYMS — Website Spec & Rebuild Task Breakdown"
(https://docs.google.com/document/d/1UJcMVitqmNV3EH4i4OY1qN4LFa--W7dC_DxZklVraJg/edit?tab=t.0).
That doc is the source of truth for page-by-page detail, sitemap, component
inventory, forms spec, and content data model — this file is a scoped index,
not a duplicate.

The current build phase is **wireframes only**:

- Greyscale layout. No color system, no typography system, no brand assets.
- Placeholder text and placeholder image blocks everywhere (e.g. "Gym photo",
  "Gallery image" — consistent with how the current prototype represents
  images).
- **Full functional parity is still required.** Every selector, form, filter,
  tab, and accordion must genuinely work — real state, real filtering, real
  client-side validation, real empty states — even though nothing submits to
  a real backend yet. "Wireframe" describes the visuals, not the behavior.
- Visual design (branding, color, typography, real imagery) is a later
  phase and is explicitly out of scope right now.

## Hard rule: flag, don't guess

If any task, page, or component doesn't clearly match the spec — an
ambiguous field, missing data, a conflicting instruction, something the spec
is silent on — **stop and flag it**. Don't silently resolve it, don't guess,
don't pick the "reasonable" default and move on. Cite the spec section in
question when flagging.

## Rebuild conventions (already decided — don't re-litigate)

These resolve conflicts between the spec's literal wording and this repo's
existing setup. They're settled; treat them as fixed unless the user says
otherwise.

- **File/type conventions follow this repo's `AGENTS.md`, not the spec's
  literal paths.** The spec says `lib/types/index.ts` and `lib/data/*.ts` —
  instead use `src/lib/types/*.ts` (one file per content type, no `index.ts`
  barrel file) and `src/lib/data/*.ts` for placeholder datasets.
- **No tRPC, Drizzle, or Postgres in this build.** Even though they're
  already installed and documented in `AGENTS.md`, every page in this phase
  reads directly from local typed placeholder data files. Leave the
  tRPC/DB scaffolding untouched until a later, non-wireframe phase.
- **No next-intl routing.** Even though `next-intl` is installed with
  `messages/en.json` / `messages/cs.json`, don't wire it up yet. All
  placeholder copy is authored in **English**. The CZ/EN switcher renders in
  the navbar as a structural placeholder only — it does not switch content.
- **The existing `src/app/page.tsx`, `src/components/shared/header.tsx`,
  `footer.tsx`, and `hero-section.tsx` are throwaway demo scaffolding** from
  an unrelated prior build (single-location, fully colored/branded "HANGAR"
  site, wrong nav items, wrong locations). Rebuild them to match the spec
  exactly. The generic primitives in `src/components/ui/*` (button, card,
  accordion, tabs, checkbox, select, etc.) are reusable — restyle them
  greyscale rather than replacing them.

## Phase checklists

Six phases, from Part 2 of the spec. Complete each phase before starting the
next; tasks within a phase can run in parallel.

### Phase 0 — Repo & Foundation Setup

- [ ] Set up a minimal greyscale wireframe design system: spacing scale,
      type scale, placeholder image component, base UI primitives (button,
      input, textarea, checkbox, select, tabs, accordion, badge, card).
- [ ] Write `src/lib/types/*.ts` covering every content type in the spec's
      content/data model section (Gym/Location, Article, TeamMember,
      Position, FAQItem, ActivityCategory, BenefitCard, Global settings).
- [ ] Write `src/lib/data/*.ts` placeholder datasets for gyms, articles,
      team, positions, activity categories, FAQ, benefit cards — enough
      realistic sample data to exercise every UI state (open location,
      coming-soon location, empty news category, zero open positions, etc.).
- [ ] Set up the repo README / architecture doc so future contributors have
      the same reference this spec provides.

### Phase 1 — Global Components

- [ ] Build Navbar: dropdowns, active-state logic, mobile hamburger menu,
      language toggle placeholder, E-shop external link.
- [ ] Build Footer: 4-column layout, legal links, dynamic copyright.
- [ ] Build LocationSelector: pill/tab component, disables + labels
      coming-soon locations, syncs selection to a URL query param.
- [ ] Build shared primitives not covered by the base UI kit: EmptyState,
      Accordion-based FAQ/Prices blocks, ArticleCard, LocationCard.
- [ ] Build the 404 page.

### Phase 2 — Core Pages (no forms, no location awareness)

- [ ] Home (`/`) — including a genuinely shared news-teaser data source with
      `/news`, not a separate hardcoded set.
- [ ] Hangar Challenge (`/hangar-challenge`)
- [ ] Legal pages (`/privacy-policy`, `/cookie-policy`, `/visitor-rules`)
- [ ] About redirect (`/about` → `/about/team`)

### Phase 3 — Location-Aware Pages

- [ ] Visit Us (`/visit`) — including occupancy placeholder + fallback
      state, prices accordion, FAQ accordion with location tagging.
- [ ] Cafe (`/cafe`)
- [ ] Physio (`/physio`) — including the location filter restricted to
      physio-enabled locations.
- [ ] Contact (`/contact`) — including the sticky selector behaviour.
- [ ] Events (`/events`) — per-location card pattern, activity type grid,
      Hangar Challenge promo band.

### Phase 4 — Content-Driven Pages

- [ ] News list (`/news`) with real category filtering and a genuine empty
      state.
- [ ] News article detail (`/news/[slug]`) reading from the same article
      data source as the list.
- [ ] Our Team (`/about/team`) with self-hiding empty sections.
- [ ] Careers list (`/about/careers`) with benefit cards and a genuine
      empty state.
- [ ] Careers position detail (`/about/careers/[slug]`).

### Phase 5 — Forms

- [ ] Contact form — build with full client-side validation (not just the
      consent checkbox gating submit) and a clear success state.
- [ ] Careers application form — including the file-upload control and its
      accepted-format/size constraints.
- [ ] Physio booking form — including the date/time picker and the
      reset-on-location-change behaviour.
- [ ] Decide and document real submission handling (the relevant open
      questions in the spec's Open Questions section) even if not wired up
      yet at this stage.

### Phase 6 — QA & Handoff

- [ ] Cross-check every page against the spec's page-by-page section for
      content-block and interaction completeness.
- [ ] Responsive pass at all three breakpoints (desktop ≥1280px, tablet
      768–1279px, mobile 320–767px).
- [ ] Keyboard-navigation and basic accessibility pass on every form and
      accordion.
- [ ] Resolve or explicitly re-flag every item in the spec's Open Questions
      section before moving past wireframes into visual design.
- [ ] Walkthrough with the client comparing the rebuild against the spec,
      sign-off, then hand off to the visual design phase.
