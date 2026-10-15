# CLAUDE.md — Hangar Gyms Rebuild

## Scope: VISUAL + COPY PHASE (wireframe approved)

This is a rebuild of the Hangar Gyms website, sourced from the retro-spec
"HANGARGYMS — Website Spec & Rebuild Task Breakdown"
(https://docs.google.com/document/d/1UJcMVitqmNV3EH4i4OY1qN4LFa--W7dC_DxZklVraJg/edit?tab=t.0).
That doc is the source of truth for page-by-page detail, sitemap, component
inventory, forms spec, and content data model — this file is a scoped index,
not a duplicate.

The greyscale wireframe has been approved by the client. The current phase
takes the site to a "could be the final product" state:

- **Working CZ/EN switch** via next-intl. Czech is the default language
  (no URL prefix), English lives under `/en`, and URLs are translated.
- **Every link works.** No `href="#"`. If a real URL doesn't exist yet, hide
  the element and flag it — don't link to a placeholder.
- **Brand applied** from `HANGAR_Brand_Guidelines_2026.pdf` (repo root) and
  the assets in `public/brand/`.
- **Real copy** in Czech and English, based on the live sites
  (hangarbrno.cz, hangarostrava.cz) and rewritten in the brand's voice.
  Facts come from the live sites; anything they don't cover is flagged, not
  invented.
- **Forms still don't send.** Validation and success states stay; real
  submission handling is on the launch checklist.

The approved plan for this phase lives at
`~/.claude/plans/swift-stargazing-quail.md`.

## Hard rule: flag, don't guess

If any task, page, or component doesn't clearly match the spec, the brand
guidelines, or the live sites — an ambiguous field, missing data, a
conflicting instruction, something the sources are silent on — **stop and
flag it**. Don't silently resolve it, don't guess, don't pick the
"reasonable" default and move on. Cite the source in question when flagging.

## Brand rules (from the guidelines — don't re-litigate)

- **Colours:** Alabaster `#FAFAFA` and Cod Gray `#0D0D0D` carry surfaces and
  text. Electric Violet `#6034FF`, Trinidad `#F25D0D` and Orient `#006B8F`
  are signal accents only, never large fills. Secondary palette and
  gradients are for UI and campaign moments (saturated gradients for
  events/Challenger, soft ones for everyday UI). All branches share one
  accent system — no colour per branch (decided 15 Oct 2026).
- **Type:** N27 for headings and claims (Medium/Bold, −4% letter spacing);
  Geist for body, labels and UI (Regular/Medium, −2% letter spacing). Line
  height 120% for headings, 140% for body. **N27 is not on the site until a
  web licence is confirmed** — the Drive only has a desktop licence. Use
  Geist for headings too; the licence is on the launch checklist for the
  client to sort out.
- **Never** underline text, outline text, put gradients on text, or add
  drop shadows to text. Fix contrast on photos with exposure or a dark
  linear overlay, or put text on black.
- **Icons:** line icons with sharp corners and pointed stroke ends, no
  fills, no rounding. TDesign Icons is the named reference.
- **Logo:** respect the safe zone (50% of the "H" height on all sides) and
  minimum widths (primary 120 px, secondary 100 px, HNG 60 px). Don't
  recolour outside the palette, rotate, stretch, or apply gradients.
- **Rockets** is Hangar's kids' climbing team, a small sub-brand with its own
  violet logo. Use it only where the Rockets team itself is mentioned; it is
  not a theme for general kids' content and shouldn't appear often.

## Rebuild conventions (already decided — don't re-litigate)

- **File/type conventions follow this repo's `AGENTS.md`, not the spec's
  literal paths.** Use `src/lib/types/*.ts` (one file per content type, no
  `index.ts` barrel file) and `src/lib/data/*.ts` for content datasets.
- **No tRPC, Drizzle, or Postgres in this build.** Pages read directly from
  local typed data files. Leave the tRPC/DB scaffolding untouched.
- **Translations:** interface text lives in `messages/cs.json` and
  `messages/en.json`; content data in `src/lib/data/*.ts` uses localized
  `{ cs, en }` fields. Both languages must always be filled.
- **Price lists** (`src/lib/data/price-lists.ts`) are verified against the
  live sites cell for cell. Any change must be re-verified against
  https://hangarbrno.cz/cenik/, https://hangarbrno.cz/en/prices/ and
  https://hangarostrava.cz/cenik/.
- **One branch and one PR per phase.** Nothing is committed until the user
  has reviewed it.

## Phase checklists

### Phase 0 — Housekeeping

- [x] Update this file for the visual + copy phase.
- [x] Brand assets in `public/brand/`: logos (`logo/`), Rockets logos
      (`rockets/`), the 5 wall profiles with and without names (`profiles/`).
      The brand PDF stays local only (git-ignored, 18.8 MB).
- [x] N27 web licence: not available to us. Geist everywhere for now;
      the licence goes on the launch checklist.

### Phase 1 — Working CZ/EN switch

- [x] next-intl routing under `src/app/[locale]/`, Czech default without
      prefix, translated pathnames (Czech URLs as proposed in the plan,
      confirmed 15 Oct 2026).
- [x] Merge existing redirects with the next-intl middleware (now
      `src/proxy.ts`, Next 16's name for middleware).
- [x] Move interface text into `messages/*.json`; localize content data.
- [x] Language switcher that keeps the current page; `<html lang>`,
      translated metadata, hreflang alternates.

### Phase 2 — Copy

- [x] Pull facts from the live sites, rewrite CZ first, then EN.
- [x] Copy review doc (CZ/EN side by side, sources noted) for approval:
      `docs/copy-review.md` (+ shared page). Open flags listed there.

### Phase 3 — Links and URLs

- [x] Replace every `"#"` with a real URL, or hide the element and flag it.
      Link fields in `gyms.ts` are optional; a missing one hides its
      element (Plzeň, Ostrava directions video, Brno physio booking,
      cafe menus).
- [x] `pnpm check:links` script: no internal 404s, no `#` links. Run it
      against a running build (`pnpm start`, then
      `pnpm check:links --base=http://localhost:3000`).

### Phase 4 — Brand UI

- [x] 4a Tokens and type in `globals.css` (decided: page/section titles
      in capitals, square corners, form errors in black text with a
      Trinidad marker). Internal reference page: `/styleguide`.
- [x] 4b Components: restyle `src/components/ui/*`, TDesign icons (import
      from `@/components/ui/icons`, client-only), Logo, WallProfile,
      Sticker, BrandImage (`src/components/brand/`).
- [x] 4c Global layout: header, footer, hero, sections, 404. Photos in
      `public/photos/` are stand-ins taken from the live sites (one with a
      third-party photographer credit left out); replace with the final
      photography before launch.
- [x] 4d Pages: every page uses the brand components and the stand-in
      photos (`src/lib/types/photo.ts`). Team and physio portraits are
      initials on a pastel gradient (`Portrait`) until real photos arrive.

### Phase 5 — QA

- [x] Responsive (375 / 768 / 1280+), keyboard, contrast, both languages.
      Fixed: focus rings on buttons, accordions and form fields; a dark
      overlay on the saturated gradient blocks (white text ≥ 4.5:1); the
      contact page now renders on the server.
- [x] Links, build, Biome, tests; screenshots of every page in CZ and EN
      (shared QA page).

### Phase 6 — Launch checklist

- [x] `docs/launch-checklist.md` with owner, blocker and size for every item
      still needed before launch (form sending, company details, photos,
      legal review, cookie consent, analytics, Plzeň, hosting, N27 licence,
      CMS decision…).
