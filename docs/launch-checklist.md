# Launch checklist — Hangar web

Everything the site still needs before it replaces hangarbrno.cz and
hangarostrava.cz. State as of 15 Oct 2026, after the visual + copy phase
(PRs #11 onward).

**Owner:** Client (Hangar), Agency (Blackfish PM/design), Dev.
**Blocker:** Yes = the site can't go live without it.
**Size:** XS < 2 h · S half day · M 1–2 days · L 3–5 days · XL 1+ week (split first).

## 1. Forms and email

| # | Item | Owner | Blocker | Size |
|---|------|-------|---------|------|
| 1.1 | **Decide the recipient inbox for each form.** The contact, physio and job-application forms all need recipients. The open question is whether each branch gets its own inbox or everything goes to one shared inbox (spec Open Question 3). | Client | Yes | XS |
| 1.2 | **Make the forms actually send.** Choose an email service (e.g. Resend or Postmark), add server-side sending, show a clear error state if sending fails, and send the visitor a confirmation email. Today the forms only validate and show a success message. | Dev | Yes | M |
| 1.3 | **Spam protection on all forms.** Add a honeypot field (a hidden field bots fill in) plus rate limiting, or Cloudflare Turnstile (a CAPTCHA alternative). | Dev | Yes | S |
| 1.4 | **Storage for CV uploads.** Decide where uploaded CVs live and how long they are kept (GDPR), then wire up the upload. | Client + Dev | Yes | M |
| 1.5 | **Contact page form.** It currently says "coming soon". Turn it on once 1.1–1.3 are done. | Dev | Yes | XS |

## 2. Company and contact details

| # | Item | Owner | Blocker | Size |
|---|------|-------|---------|------|
| 2.1 | **Network-wide entity, email and phone.** Should a "HangarGyms" company, general email or general phone appear on the site? Today the footer lists each branch's operator, VerticalBlock s.r.o. (Brno) and CLIMBING GYM s.r.o. (Ostrava). The placeholders in `global-settings.ts` aren't shown anywhere. (Copy flag 8.) | Client | No | XS |
| 2.2 | **Team page.** Confirm the email addresses, grouping and shortened bios with the people listed. (Copy flag 9.) | Client | No | S |

## 3. Copy

| # | Item | Owner | Blocker | Size |
|---|------|-------|---------|------|
| 3.1 | **Approve the copy review.** See `docs/copy-review.md` and the shared review page. It has 13 open flags (listed in 3.2). | Client | Yes | S |
| 3.2 | **Answer the 13 copy flags:** Brno total area · Brno student 12-month price (15 920 vs 15 290 Kč) · Challenge format · Challenger dates · yoga card · Ostrava physio package prices · online single entries · network entity · team emails · "ty" vs "vy" · legal texts · cafe menu · Plzeň. Then a follow-up PR applies the answers. | Client, then Dev | Yes | S |
| 3.3 | **New interface text from the design phase** (eyebrows, photo descriptions, stat labels such as "300+ boulderů"). Add it to the copy review. | Agency | No | XS |
| 3.4 | **Challenger dates go stale every year.** Someone has to own updating them, or they move into a CMS (see 9.1). | Client | No | XS |

## 4. Photos and media

| # | Item | Owner | Blocker | Size |
|---|------|-------|---------|------|
| 4.1 | **Final photography.** The 20 photos in `public/photos/` are stand-ins taken from the live sites. Replace them with the final shoot, processed in the brand's photo style. | Client + Agency | Yes | L |
| 4.2 | **Image rights.** Confirm the site may use every photo. The Adam Ondra photo credited to Heinz Zak was deliberately left out. | Client | Yes | XS |
| 4.3 | **Team and physio portraits.** Initials stand in for them today. | Client | No | S |
| 4.4 | **Ostrava directions video.** Only Brno has one; Ostrava shows directions as text only. | Client | No | S |
| 4.5 | **Cafe menus.** The "Download menu" buttons are hidden because the menus are web tables, not PDFs (copy flag 12). Either supply PDFs, or decide to show the menu on the page. | Client | No | S |

## 5. Third-party links and systems

| # | Item | Owner | Blocker | Size |
|---|------|-------|---------|------|
| 5.1 | **Move the PDFs to the new site.** The consent forms and visitor rules still link to files on hangarbrno.cz and hangarostrava.cz, which disappear when those sites are switched off. Copy the PDFs into the new site, or into a CMS. | Dev | Yes | XS |
| 5.2 | **Brno physio booking.** Brno books through a Bookly widget on the old site, which has no URL of its own, so the "Book now" button is hidden for Brno. Pick a booking tool that has a link, or keep booking by phone. | Client | No | S |
| 5.3 | **Brno reservation system is unreachable from our network.** rezervace.hangarbrno.cz timed out in our checks on 15 Oct (Ostrava's works). The URLs match the live site. Check it works for visitors. | Client | Yes | XS |
| 5.4 | **Live occupancy.** The branch pages show "occupancy data isn't available yet". Is there a data source? (Spec Open Question 2.) | Client, then Dev | No | M |
| 5.5 | **Activity cards: one "Find out more" button.** On the client's request, deferred: each card would get one button instead of the per-branch booking buttons. Decide where it leads: a branch-picker menu, the booking-system pages, a new detail page, or hidden. | Client, then Dev | No | S |

## 6. Legal and privacy

| # | Item | Owner | Blocker | Size |
|---|------|-------|---------|------|
| 6.1 | **Legal texts reviewed by a lawyer** (privacy policy, cookie policy, visitor rules). Today they are interim summaries. (Copy flag 11.) | Client | Yes | M |
| 6.2 | **Cookie consent banner.** The Google Maps and YouTube embeds on the contact page set third-party cookies, so they need consent first, or a click-to-load placeholder. Analytics needs consent too. | Dev | Yes | M |
| 6.3 | **Analytics.** Choose a tool (e.g. Plausible, which is cookieless, or GA4 with consent) and decide which events to track (booking clicks, form sends). | Client + Dev | No | S |

## 7. Brand and licences

| # | Item | Owner | Blocker | Size |
|---|------|-------|---------|------|
| 7.1 | **N27 web licence.** Only a desktop licence exists, so Geist stands in for headings. With a web licence, swapping N27 in is a one-line change in `globals.css`. | Client | No | XS |
| 7.2 | **Logo file.** `hangar-full.svg` has the tagline to the left of the wordmark; the guide says it should always be on the right. Confirm or supply a corrected file. | Agency | No | XS |
| 7.3 | **Icon substitutes.** TDesign has no dumbbell, flower or tent icon, so courses, yoga and camps use the closest line icons. Approve them. | Agency | No | XS |

## 8. Plzeň

| # | Item | Owner | Blocker | Size |
|---|------|-------|---------|------|
| 8.1 | **Plzeň branch content:** address, hours, prices, operator, contacts, photos, booking links and socials. Until then it appears only as a "coming soon" card. (Copy flag 13.) | Client, then Dev | No | M |

## 9. Platform and launch

| # | Item | Owner | Blocker | Size |
|---|------|-------|---------|------|
| 9.1 | **CMS decision.** Does Hangar need to edit content themselves (prices, team, jobs, Challenger dates, legal texts)? If yes, choose a CMS and move the data files into it. | Client + Agency | No | L–XL (split) |
| 9.2 | **Hosting and deployment** (e.g. Vercel), with a preview environment for client review. | Dev | Yes | S |
| 9.3 | **Domains and redirects.** Decide the final domain, and redirect every old hangarbrno.cz / hangarostrava.cz URL (including /en/…) to its new page, so search rankings and bookmarks survive. | Client + Dev | Yes | M |
| 9.4 | **Set `SITE_URL`** to the live domain, so canonical links, hreflang tags and social previews are right. | Dev | Yes | XS |
| 9.5 | **SEO basics:** sitemap.xml, robots.txt and a social share image. | Dev | No | S |
| 9.6 | **Remove or protect `/styleguide`.** It's the internal design reference page; it's already noindex and unlinked. | Dev | No | XS |

## 10. Code housekeeping

| # | Item | Owner | Blocker | Size |
|---|------|-------|---------|------|
| 10.1 | **Button-styled links → plain links.** Base UI logs "expected a native button" warnings, and screen readers get a redundant tabindex. Separate chore PR. | Dev | No | S |
| 10.2 | **Pre-commit hook fails on commits with no Biome-checkable files.** Add `--no-errors-on-unmatched` to the lint-staged command. | Dev | No | XS |
| 10.3 | **Leftover scaffolding.** Remove the tRPC/Drizzle/Postgres setup if no backend is planned, or keep it for forms and CMS work. | Dev | No | S |

## Count

Blockers: 16 · Total: 37 items.
