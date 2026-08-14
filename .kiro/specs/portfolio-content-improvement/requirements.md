# Requirements Document

## Introduction

This document specifies requirements for improving and correcting the SitesByKamo portfolio website's project content. The current site references non-existent image assets, includes projects that should not appear in the portfolio, and lacks video/gallery support. This improvement corrects the project data to reference actual local assets, removes out-of-scope projects, introduces video and gallery capabilities, and upgrades the project detail pages, homepage work section, and filtering system.

## Glossary

- **Portfolio_Site**: The SitesByKamo React + TanStack Router + Vite + Tailwind CSS portfolio website
- **Project_Data**: The centralized TypeScript data structure in `src/data/projects.ts` defining all portfolio projects
- **Project_Interface**: The TypeScript interface defining the shape of a single project entry
- **Project_Detail_Page**: The page rendered at `/projects/[slug]` displaying full information about a single project
- **Selected_Work_Section**: The homepage section showcasing portfolio projects in an editorial grid layout
- **Project_Card**: A reusable component displaying a project preview with image, name, category, and description
- **Filter_System**: The category-based filtering UI on the projects listing page
- **Asset_Folder**: A subdirectory within `src/assets/` containing screenshots and screen recordings for a specific project (e.g., `src/assets/AuraLink_pic&vid/`)
- **Video_Preview**: A muted, lazy-loaded video that plays on hover over a Project_Card
- **Gallery**: A collection of screenshots from a project's Asset_Folder displayed on the Project_Detail_Page
- **Contact_Config**: The centralized contact configuration object in `src/data/site.ts`

## Requirements

### Requirement 1: Project Data Restructuring

**User Story:** As a portfolio visitor, I want to see only legitimate completed projects, so that I get an accurate picture of the developer's work.

#### Acceptance Criteria

1. THE Project_Data SHALL contain exactly 9 projects: AuraLink, Empty, Extreme Ethics Clothing, PetPal, Private Location, Sole Society, Venta, WanPuck Upholstery V1, WanPuck Upholstery V2
2. THE Project_Data SHALL NOT contain entries for SLK Electrical, Aura Studio, HairGo, CapitalPilot, JetClean, Instagram Media Extractor, or Kiro Development Automation
3. WHEN the Project_Interface is defined, THE Portfolio_Site SHALL include fields for video source path, poster image path, and gallery image array
4. WHEN a project references an image asset, THE Project_Data SHALL use an import path pointing to an existing file in the corresponding Asset_Folder
5. WHEN a project references a video asset, THE Project_Data SHALL use an import path pointing to an existing `.mov` file in the corresponding Asset_Folder
6. THE Project_Data SHALL assign URL-safe slugs to each project: auralink, empty, extreme-ethics, petpal, private-location, sole-society, venta, wanpuck-v1, wanpuck-v2
7. THE Project_Data SHALL treat WanPuck Upholstery V1 and WanPuck Upholstery V2 as separate entries with distinct slugs, assets, and descriptions
8. WHEN describing WanPuck Upholstery V2, THE Project_Data SHALL reference the project as a redesign or iteration of V1

### Requirement 2: Project Detail Pages

**User Story:** As a potential client, I want to view a detailed project page for each portfolio entry, so that I can evaluate the quality and scope of completed work.

#### Acceptance Criteria

1. WHEN a visitor navigates to `/projects/[slug]`, THE Project_Detail_Page SHALL display the project name, category, status, overview description, key features list, and technologies list
2. WHEN a project has gallery images, THE Project_Detail_Page SHALL display them in a responsive gallery section with lazy loading and descriptive alt text
3. WHEN a project has a video asset, THE Project_Detail_Page SHALL render a video element with controls, poster image, playsInline attribute, responsive container, and preload set to "metadata"
4. WHEN a project video is rendered, THE Project_Detail_Page SHALL NOT autoplay the video
5. IF a video format is unsupported by the browser, THEN THE Project_Detail_Page SHALL display the poster image as a fallback

### Requirement 3: Homepage Selected Work Section

**User Story:** As a portfolio visitor, I want to see featured work on the homepage in an engaging editorial layout, so that I immediately understand the quality and range of projects.

#### Acceptance Criteria

1. THE Selected_Work_Section SHALL display all 9 projects in an editorial grid layout with visual variety including featured large cards, two-column rows, and full-width entries
2. THE Selected_Work_Section SHALL render project images at dimensions large enough to communicate visual quality on desktop viewports
3. WHEN displayed on mobile viewports, THE Selected_Work_Section SHALL stack projects into a single-column layout with consistent spacing

### Requirement 4: Project Cards

**User Story:** As a portfolio visitor, I want project cards that give me a quick preview of each project, so that I can decide which projects to explore in detail.

#### Acceptance Criteria

1. THE Project_Card SHALL display the project image, name, category, short description, status badge, and a "View Project" link
2. WHEN a visitor hovers over a Project_Card that has a video asset, THE Project_Card SHALL play a muted video preview
3. WHEN displaying a video preview on hover, THE Project_Card SHALL lazy-load the video and set it to muted with no audio output
4. THE Project_Card SHALL NOT autoplay video previews on page load for any project

### Requirement 5: Project Filtering

**User Story:** As a portfolio visitor, I want to filter projects by category, so that I can find work relevant to my needs.

#### Acceptance Criteria

1. THE Filter_System SHALL provide category options: ALL, WEBSITES, ECOMMERCE, DIGITAL PRODUCTS, BUSINESS, FASHION
2. WHEN a visitor selects a category filter, THE Filter_System SHALL display only projects whose category matches the selected filter
3. WHEN the ALL filter is selected, THE Filter_System SHALL display all 9 projects
4. THE Filter_System SHALL function on the projects listing page at `/projects`

### Requirement 6: Video Implementation

**User Story:** As a portfolio visitor, I want project videos to load efficiently and play reliably, so that I can view project demonstrations without performance issues.

#### Acceptance Criteria

1. WHEN rendering project videos, THE Portfolio_Site SHALL use local video files imported from Asset_Folders
2. THE Portfolio_Site SHALL render video elements with responsive width, poster image, playsInline attribute, controls, and preload set to "metadata"
3. THE Portfolio_Site SHALL lazy-load video elements so that videos outside the viewport are not loaded on initial page render
4. IF a video fails to load or the format is unsupported, THEN THE Portfolio_Site SHALL display the project poster image as a fallback

### Requirement 7: Image Implementation

**User Story:** As a portfolio visitor, I want project images to load quickly and display properly, so that I can evaluate project quality without waiting.

#### Acceptance Criteria

1. WHEN rendering project images, THE Portfolio_Site SHALL use actual local image files imported from Asset_Folders
2. THE Portfolio_Site SHALL apply lazy loading to all project images below the initial viewport fold
3. THE Portfolio_Site SHALL render images with responsive sizing, appropriate object-fit, and consistent aspect ratios
4. THE Portfolio_Site SHALL include descriptive alt text on all project images

### Requirement 8: SEO Metadata

**User Story:** As the portfolio owner, I want proper SEO metadata on all pages, so that the site ranks well in search engines and displays correctly in social sharing.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL use the title "SitesByKamo | Web Development & Digital Products" as the primary site title
2. WHEN a visitor navigates to a Project_Detail_Page, THE Portfolio_Site SHALL set the page title to the format "[Project Name] — [Category] | SitesByKamo"
3. WHEN a visitor navigates to a Project_Detail_Page, THE Portfolio_Site SHALL set the meta description to the project summary

### Requirement 9: Performance

**User Story:** As a portfolio visitor, I want pages to load quickly regardless of the number of projects, so that I have a smooth browsing experience.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL lazy-load all project images and videos that are below the initial viewport fold
2. THE Portfolio_Site SHALL set video preload to "metadata" to avoid downloading full video files on page load
3. THE Portfolio_Site SHALL NOT load video source files for all projects simultaneously on any single page
4. THE Portfolio_Site SHALL implement video and gallery display through reusable components

### Requirement 10: Contact Configuration

**User Story:** As the portfolio owner, I want my contact details managed centrally, so that updating one file updates all contact references across the site.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL read all contact details from the centralized Contact_Config in `src/data/site.ts`
2. THE Contact_Config SHALL include the GitHub URL set to "https://github.com/Kamo89"

### Requirement 11: Private Location Project

**User Story:** As a portfolio visitor, I want accurate information about the Private Location project, so that I understand the project without encountering fabricated claims.

#### Acceptance Criteria

1. THE Project_Data SHALL categorize Private Location under Business, Service, or Hospitality
2. THE Project_Data SHALL reference images and video from `src/assets/PrivateLocation_pic&vid/`
3. THE Project_Data SHALL NOT contain fabricated business results, client testimonials, revenue figures, or user numbers for Private Location

### Requirement 12: WanPuck V1 and V2 Separation

**User Story:** As a portfolio visitor, I want to see both versions of the WanPuck Upholstery project as separate entries, so that I can understand the design evolution.

#### Acceptance Criteria

1. THE Project_Data SHALL contain separate entries for WanPuck Upholstery V1 and WanPuck Upholstery V2
2. THE Project_Data SHALL assign slug "wanpuck-v1" to WanPuck Upholstery V1 and slug "wanpuck-v2" to WanPuck Upholstery V2
3. THE Project_Data SHALL reference WanPuck V1 assets from `src/assets/WanPuckv1_pic&vid/` and WanPuck V2 assets from `src/assets/WanPuckv2_pic&vid/`
4. WHEN describing WanPuck Upholstery V2, THE Project_Data SHALL describe the project as a redesign or iteration of V1

### Requirement 13: Project Content Accuracy

**User Story:** As a portfolio visitor, I want honest project descriptions, so that I can trust the portfolio as a genuine representation of the developer's work.

#### Acceptance Criteria

1. THE Project_Data SHALL NOT contain fabricated business results, client counts, revenue figures, user numbers, or testimonials for any project
2. THE Project_Data SHALL use status labels from the set: LIVE, CLIENT PROJECT, CONCEPT, PROTOTYPE, REDESIGN, EXPERIMENTAL
3. WHEN the live status of a project is uncertain, THE Project_Data SHALL use CONCEPT or PROTOTYPE as the status label

### Requirement 14: Responsive Design

**User Story:** As a portfolio visitor using any device, I want the site to display correctly on my screen, so that I can browse the portfolio comfortably.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL render correctly on desktop, laptop, tablet, and mobile viewports
2. WHEN displayed on small viewports, THE Portfolio_Site SHALL reflow grid layouts into single-column stacks with appropriate spacing
3. THE Portfolio_Site SHALL render all video elements with responsive width that adapts to the container

### Requirement 15: Build Integrity

**User Story:** As a developer, I want the project to build without errors, so that changes can be deployed reliably.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL build successfully with `bun run dev` without TypeScript errors
2. THE Portfolio_Site SHALL NOT contain import references to non-existent asset files
3. THE Portfolio_Site SHALL preserve the existing design system including Tailwind CSS configuration, shadcn/ui components, and TanStack Router setup
