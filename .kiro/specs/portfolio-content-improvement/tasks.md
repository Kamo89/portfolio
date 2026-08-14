# Implementation Plan: Portfolio Content Improvement

## Overview

Restructure the SitesByKamo portfolio to reference real local assets, remove non-existent projects, introduce video and gallery support, update the homepage editorial grid, revise filtering categories, and ensure the build passes cleanly. Tasks are ordered so that foundational data changes come first, followed by reusable components, then page-level integrations.

## Tasks

- [x] 1. Create asset manifest and update project data model
  - [x] 1.1 Create `src/data/assets.ts` with all asset imports
    - Import all 9 screenshot `.png` files from their respective `src/assets/[Name]_pic&vid/` folders
    - Import all 9 video `.mov` files from their respective `src/assets/[Name]_pic&vid/` folders
    - Export a `projectAssets` record keyed by project slug with `{ screenshot, video }` shape
    - Export the `ProjectAssets` interface
    - _Requirements: 1.4, 1.5, 7.1, 6.1_

  - [x] 1.2 Rewrite `src/data/projects.ts` with new interface and data
    - Update `ProjectStatus` type to include LIVE, CLIENT PROJECT, CONCEPT, PROTOTYPE, REDESIGN, EXPERIMENTAL
    - Update `FilterKey` type to ALL, WEBSITES, ECOMMERCE, DIGITAL PRODUCTS, BUSINESS, FASHION
    - Update `Project` interface: rename `id` to `slug`, add `video?: string`, add `gallery: string[]`, make `image` required, change `featured` to boolean
    - Remove old image imports (wanpuck.jpg, solesociety.jpg, etc.)
    - Import assets from `src/data/assets.ts` and populate the `projects` array with exactly 9 entries
    - Each project entry uses the screenshot as `image` and `gallery[0]`, and video as `video`
    - WanPuck V2 description references it as a redesign of V1
    - Private Location categorized under BUSINESS with no fabricated results
    - No fabricated testimonials, revenue figures, or user numbers on any project
    - Update `getProject()` to find by `slug`
    - Update `filters` array to new categories
    - Remove `featuredProjects` export (replaced by `featured` boolean flag)
    - _Requirements: 1.1, 1.2, 1.3, 1.6, 1.7, 1.8, 5.1, 11.1, 11.2, 11.3, 12.1, 12.2, 12.3, 12.4, 13.1, 13.2, 13.3_

- [x] 2. Build reusable video and gallery components
  - [x] 2.1 Create `src/components/site/VideoPlayer.tsx`
    - Accept props: `src`, `poster`, `alt`, `controls`, `muted`, `autoPlay`, `loop`, `className`, `lazy`
    - Render `<video>` with `playsInline`, `preload="metadata"`, responsive width (`w-full`), `poster` attribute
    - Add `onError` handler that hides video and shows poster image as fallback
    - Never autoplay unless `autoPlay` prop is explicitly true
    - Add descriptive `aria-label` using the `alt` prop
    - _Requirements: 2.3, 2.4, 2.5, 6.2, 6.3, 6.4, 9.2_

  - [x] 2.2 Create `src/components/site/ProjectGallery.tsx`
    - Accept props: `images` array of `{ src, alt }`, `projectName`
    - Render responsive grid: 1 column on mobile, 2 columns on `md:` breakpoint
    - All images use `loading="lazy"`, `decoding="async"`, consistent `aspect-video` ratio
    - Include descriptive alt text on each image
    - _Requirements: 2.2, 7.2, 7.3, 7.4, 9.4_

  - [x] 2.3 Create `src/components/site/VideoPreview.tsx`
    - Accept props: `videoSrc`, `posterSrc`, `alt`
    - On mouse enter: set video `src`, call `play()` (muted, loop, no controls)
    - On mouse leave: call `pause()`, reset `currentTime`, remove src to free memory
    - Use `preload="none"` to prevent loading until hover
    - On error or touch-only devices: show poster image only
    - _Requirements: 4.2, 4.3, 4.4, 6.3, 9.3_

- [x] 3. Update ProjectCard with video preview support
  - [x] 3.1 Modify `src/components/site/ProjectCard.tsx`
    - Import and integrate `VideoPreview` component
    - When project has `video` field: render `VideoPreview` overlaid on the image, activated on hover
    - When project has no `video`: keep current image-only behavior
    - Update the `Link` `params` from `projectId: project.id` to `projectId: project.slug`
    - Add "View Project" link text in card footer
    - Keep existing status badge, category, summary, and technology display
    - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [x] 4. Update project detail page
  - [x] 4.1 Modify `src/routes/projects.$projectId.tsx`
    - Update `getProject()` call to use slug lookup (already compatible after data change)
    - Import and render `VideoPlayer` component when `project.video` exists, placed below the header image
    - Import and render `ProjectGallery` when `project.gallery` has items
    - Ensure video has `controls`, is not autoplaying, has poster set to `project.image`
    - Update `related` projects filter to use `project.slug` instead of `project.id`
    - Keep existing layout sections: header, challenge/solution, features, technology, related projects, CTA
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 14.3_

- [x] 5. Update homepage Selected Work editorial grid
  - [x] 5.1 Modify `src/routes/index.tsx` Selected Work section
    - Replace `homeFeatured` array with all 9 project slugs
    - Update the `LAYOUT` array to accommodate 9 projects in an editorial grid:
      - Row 1: full-width (col-span-12) — 1 project
      - Row 2: 7/5 split — 2 projects
      - Row 3: 5/7 split — 2 projects
      - Row 4: full-width (col-span-12) — 1 project
      - Row 5: 4/4/4 three-column — 3 projects
    - Update project lookup from `projects.find(p => p.id === id)` to `projects.find(p => p.slug === id)`
    - Ensure images render at sizes large enough for visual quality on desktop
    - On mobile, grid collapses to single-column (already handled by `lg:grid-cols-12` pattern)
    - _Requirements: 3.1, 3.2, 3.3, 14.1, 14.2_

- [x] 6. Update project filtering on /projects page
  - [x] 6.1 Modify `src/routes/projects.index.tsx`
    - Import updated `filters` array from `src/data/projects.ts` (now: ALL, WEBSITES, ECOMMERCE, DIGITAL PRODUCTS, BUSINESS, FASHION)
    - Update type reference from old `FilterKey` to new `FilterKey`
    - Ensure "ALL" shows all 9 projects
    - Update `ProjectCard` link params to use `slug`
    - Verify filter buttons render with new category names
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [x] 7. Checkpoint - Verify core functionality
  - Ensure `bun run dev` starts without TypeScript errors
  - Ensure all 9 projects appear on `/projects` page
  - Ensure each project detail page loads at `/projects/[slug]`
  - Ensure video plays on detail pages
  - Ensure hover video preview works on project cards
  - Ensure all filters work correctly
  - Ask the user if questions arise.

- [x] 8. SEO metadata updates
  - [x] 8.1 Update root route SEO title
    - In `src/routes/__root.tsx`, change the `<title>` meta tag to "SitesByKamo | Web Development & Digital Products"
    - Keep existing OG tags and structured data
    - _Requirements: 8.1_

  - [x] 8.2 Verify project detail page SEO (already implemented)
    - Confirm `head()` in `projects.$projectId.tsx` sets title to `"[Project Name] — [Category] | SitesByKamo"` format
    - Confirm meta description uses `project.summary`
    - No code changes needed if already correct — just verify
    - _Requirements: 8.2, 8.3_

- [x] 9. Performance and lazy loading verification
  - [x] 9.1 Ensure lazy loading is applied consistently
    - Verify all project images below fold use `loading="lazy"`
    - Verify all videos use `preload="metadata"` or `preload="none"` (for hover previews)
    - Verify `VideoPreview` uses `preload="none"` so no video files load on page render
    - Verify `ProjectGallery` images use `loading="lazy"` and `decoding="async"`
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

- [x] 10. Final checkpoint - Build verification
  - Run `bun run build` and confirm it completes without errors
  - Run `bun run lint` and fix any linting issues
  - Confirm no import references to non-existent asset files
  - Confirm the existing design system (Tailwind, shadcn, TanStack Router) is preserved
  - Ask the user if questions arise.
  - _Requirements: 15.1, 15.2, 15.3_

## Task Dependency Graph

```json
{
  "waves": [
    {
      "wave": 1,
      "description": "Foundation - asset manifest and project data model",
      "tasks": ["1.1", "1.2"]
    },
    {
      "wave": 2,
      "description": "Reusable components - video player, gallery, video preview",
      "tasks": ["2.1", "2.2", "2.3"]
    },
    {
      "wave": 3,
      "description": "Page integrations - card update, detail page, homepage grid, filters",
      "tasks": ["3.1", "4.1", "5.1", "6.1"]
    },
    {
      "wave": 4,
      "description": "Verification checkpoint",
      "tasks": ["7"]
    },
    {
      "wave": 5,
      "description": "Polish - SEO and performance",
      "tasks": ["8.1", "8.2", "9.1"]
    },
    {
      "wave": 6,
      "description": "Final build verification",
      "tasks": ["10"]
    }
  ]
}
```

## Notes

- All tasks reference specific requirements for traceability
- No property-based tests are included — this feature is UI rendering and data restructuring, not algorithmic logic
- Build verification (`bun run build`) serves as the primary correctness check: if all imports resolve and TypeScript compiles, the data model is correct
- The existing `projects.$projectId.tsx` route file name stays the same — only internal logic changes
- Video files are `.mov` format (QuickTime/H.264) — supported in Safari and Chromium; poster fallback covers other browsers
