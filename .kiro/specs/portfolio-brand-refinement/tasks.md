# Implementation Plan: Portfolio Brand Refinement

## Overview

Apply a brand refinement pass across the SitesByKamo portfolio: update the colour system to hot pink, revise hero messaging, add pricing tiers, integrate WhatsApp as primary CTA, simplify navigation, refresh about copy, update SEO titles, and add a macOS start command script.

## Tasks

- [ ] 1. Update CSS custom properties (colour system)
  - [ ] 1.1 Replace colour variables in `src/styles.css` `:root` block
    - Set `--primary` to `oklch(0.65 0.25 350)`
    - Set `--accent` to `oklch(0.65 0.25 350)`
    - Set `--ring` to `oklch(0.65 0.25 350)`
    - Set `--primary-foreground` to `oklch(1 0 0)`
    - Set `--accent-foreground` to `oklch(1 0 0)`
    - Set `--background` to `oklch(0.13 0 0)`
    - Set `--secondary` to `oklch(0.18 0 0)`
    - Set `--card` to `oklch(0.22 0 0)`
    - Set `--muted-foreground` to `oklch(0.71 0.015 265)`
    - Update sidebar and chart variables that reference the old primary hue to use the new pink values
    - Ensure all colour values remain in oklch format
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8_

- [ ] 2. Update data layer (`src/data/site.ts`)
  - [ ] 2.1 Set WhatsApp number and update navLinks
    - Set `contactConfig.whatsapp` to `"27718100711"`
    - Remove the "Projects" entry from `navLinks` array, keeping Home, Work, Services, About, Contact in order
    - _Requirements: 4.1, 7.1, 7.2_

  - [ ] 2.2 Add pricing tiers and add-on services data
    - Export `PricingTier` interface with `name`, `range`, and `features` fields
    - Export `pricingTiers` array with Basic (R1,000–R2,000), Business (R2,500–R5,000), E-Commerce (R4,500–R8,000), Web Apps (R7,000+) tiers and their feature lists
    - Export `addOnServices` string array with six add-on items
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ] 3. Update Hero component (`src/components/site/Hero.tsx`)
  - [ ] 3.1 Update headline and CTAs
    - Change headline to "Websites that work. Designs that impact."
    - Keep supporting copy about businesses, brands, and entrepreneurs
    - Keep primary CTA "VIEW MY WORK" linking to `/work`
    - Replace secondary CTA: change from `<Link to="/contact">START A PROJECT</Link>` to `<a href={waLink}>LET'S WORK TOGETHER</a>` using `buildWhatsAppLink(defaultWhatsAppMessage())`
    - Import `buildWhatsAppLink` and `defaultWhatsAppMessage` from `@/data/site`
    - Conditionally render WhatsApp CTA only when link is non-null
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ] 4. Update Navbar component (`src/components/site/Navbar.tsx`)
  - [ ] 4.1 Replace "START A PROJECT" CTA with WhatsApp "LET'S TALK" CTA
    - Import `buildWhatsAppLink` and `defaultWhatsAppMessage` from `@/data/site`
    - Replace desktop CTA `<Link to="/contact">START A PROJECT</Link>` with `<a href={waLink}>LET'S TALK</a>` (target="_blank", rel="noreferrer noopener")
    - Replace mobile menu CTA similarly with "LET'S TALK" WhatsApp link
    - Conditionally render only when `buildWhatsAppLink` returns non-null
    - _Requirements: 4.3, 4.4, 4.5, 7.4_

- [ ] 5. Checkpoint
  - Ensure the app builds without errors, ask the user if questions arise.

- [ ] 6. Update Services page (`src/routes/services.tsx`)
  - [ ] 6.1 Add pricing grid and add-ons section
    - Import `pricingTiers` and `addOnServices` from `@/data/site`
    - Add a new pricing section **before** the existing services list section
    - Render pricing tiers in a responsive grid (1-col mobile, 2-col md, 4-col lg)
    - Each tier card shows name (uppercase), price range in primary colour, and bullet features
    - Add an "ADD-ONS" sub-section below the tiers listing supplementary services
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

- [ ] 7. Update About page (`src/routes/about.tsx`)
  - [ ] 7.1 Update introductory headline
    - Change the `<h1>` from `{brand.statement}` to the static string "Hi, I'm Kamo — the creator behind SitesByKamo."
    - _Requirements: 5.1, 5.2, 5.3_

- [ ] 8. Update SEO titles (`src/routes/index.tsx` and `src/routes/__root.tsx`)
  - [ ] 8.1 Update home page and root title metadata
    - In `src/routes/index.tsx` head(): set title to "SitesByKamo | Websites That Work. Designs That Impact."
    - In `src/routes/index.tsx` head(): set og:title to the same string
    - In `src/routes/__root.tsx` head(): set the default title to "SitesByKamo | Websites That Work. Designs That Impact."
    - _Requirements: 6.1, 6.2_

- [ ] 9. Create `start.command` file at project root
  - [ ] 9.1 Create macOS start command script
    - Create `start.command` at project root
    - Add shebang `#!/bin/bash`
    - `cd "$(dirname "$0")"` to navigate to project directory
    - Conditional install: only run `npm install` if `node_modules` is missing or `package-lock.json` is newer than `node_modules/.package-lock.json`
    - Run `npm run dev` to start the development server
    - Set file as executable (`chmod +x start.command`)
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [ ] 10. Build verification
  - [ ] 10.1 Run production build and verify no errors
    - Run `npm run build` to confirm all changes compile without errors
    - Fix any TypeScript or build errors that arise
    - _Requirements: All_

- [ ] 11. Final checkpoint
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- All changes are local file edits with no new dependencies or infrastructure
- The colour system uses oklch format exclusively — no hex or rgb values in `:root`
- WhatsApp CTA buttons conditionally render only when `buildWhatsAppLink` returns a non-null link
- The pricing data lives in `src/data/site.ts` so it can be reused across pages if needed
- The `start.command` file requires executable permission to work on macOS

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "2.1", "2.2"] },
    { "id": 1, "tasks": ["3.1", "4.1", "6.1", "7.1", "8.1", "9.1"] },
    { "id": 2, "tasks": ["10.1"] }
  ]
}
```
