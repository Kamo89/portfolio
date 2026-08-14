# Requirements Document

## Introduction

A comprehensive brand refinement of the SitesByKamo portfolio website. The update introduces a hot pink (#F43F8E) primary colour palette with dark backgrounds, revised hero messaging, pricing tiers on the services page, WhatsApp as the primary contact channel, updated about copy, SEO title changes, simplified navigation, and a macOS start command script for local development.

## Glossary

- **Site**: The SitesByKamo portfolio website built with TanStack Start, React, and Tailwind CSS.
- **CSS_Custom_Properties**: The oklch-based CSS variables defined in `src/styles.css` that control the design system colours.
- **Hero_Section**: The prominent introductory section displayed at the top of the home page.
- **Services_Page**: The route at `/services` presenting offered services, pricing, and add-ons.
- **Pricing_Tier**: A named service package with a defined price range displayed on the Services_Page.
- **Add_On_Service**: An optional supplementary service item listed alongside Pricing_Tiers on the Services_Page.
- **Navigation_Bar**: The fixed header component rendering primary navigation links and the CTA button.
- **WhatsApp_CTA**: A call-to-action element that opens a WhatsApp chat with a pre-filled message to the number 27718100711.
- **Contact_Config**: The `contactConfig` object in `src/data/site.ts` storing contact channel details.
- **About_Page**: The route at `/about` presenting information about the creator behind SitesByKamo.
- **SEO_Title**: The HTML `<title>` tag content rendered for the home page.
- **Start_Command_File**: An executable macOS shell script at the project root that automates local development setup.

## Requirements

### Requirement 1: Primary Colour Update

**User Story:** As a site visitor, I want to see a consistent hot pink brand colour throughout the site, so that the visual identity feels modern and intentional.

#### Acceptance Criteria

1. THE CSS_Custom_Properties SHALL define `--primary` using the oklch equivalent of hex #F43F8E.
2. THE CSS_Custom_Properties SHALL define `--accent` using the same oklch value as `--primary`.
3. THE CSS_Custom_Properties SHALL define `--ring` using the same oklch value as `--primary`.
4. THE CSS_Custom_Properties SHALL define `--background` using the oklch equivalent of hex #050505.
5. THE CSS_Custom_Properties SHALL define `--secondary` using the oklch equivalent of hex #111111.
6. THE CSS_Custom_Properties SHALL define `--card` using the oklch equivalent of hex #181818.
7. THE CSS_Custom_Properties SHALL define `--muted-foreground` using the oklch equivalent of hex #A1A1AA.
8. WHEN the colour variables are updated, THE Site SHALL maintain oklch format for all colour values.

### Requirement 2: Hero Section Content

**User Story:** As a site visitor, I want to immediately understand what SitesByKamo offers, so that I can decide whether to explore further.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the headline "Websites that work. Designs that impact."
2. THE Hero_Section SHALL display supporting copy communicating that SitesByKamo builds modern websites for businesses, brands, and entrepreneurs.
3. THE Hero_Section SHALL display a primary CTA button labelled "View My Work" that navigates to the `/work` route.
4. THE Hero_Section SHALL display a secondary CTA button labelled "Let's Work Together" that opens a WhatsApp chat link.
5. WHEN a visitor clicks the "Let's Work Together" button, THE Site SHALL open the WhatsApp link with a pre-filled message using the number defined in Contact_Config.

### Requirement 3: Services Page Pricing Tiers

**User Story:** As a potential client, I want to see clear pricing tiers for services, so that I can understand what is available within my budget.

#### Acceptance Criteria

1. THE Services_Page SHALL display a "Basic" pricing tier with a range of R1,000 to R2,000.
2. THE Services_Page SHALL display a "Business" pricing tier with a range of R2,500 to R5,000.
3. THE Services_Page SHALL display an "E-Commerce" pricing tier with a range of R4,500 to R8,000.
4. THE Services_Page SHALL display a "Web Apps" pricing tier with a starting price of R7,000+.
5. THE Services_Page SHALL display an add-on services section listing supplementary services available alongside the pricing tiers.
6. WHEN a visitor views the Services_Page, THE Services_Page SHALL present pricing tiers before the existing services detail section.

### Requirement 4: WhatsApp Integration

**User Story:** As a potential client, I want to reach the developer instantly via WhatsApp, so that I can start a conversation without filling out a form.

#### Acceptance Criteria

1. THE Contact_Config SHALL store the WhatsApp number as "27718100711".
2. WHEN a WhatsApp link is generated, THE Site SHALL include a pre-filled message introducing the conversation context.
3. THE Navigation_Bar SHALL display a "LET'S TALK" CTA button that opens the WhatsApp chat link directly.
4. WHEN a visitor clicks the "LET'S TALK" button, THE Site SHALL open `https://wa.me/27718100711` with an encoded pre-filled message.
5. THE Navigation_Bar SHALL replace the existing "START A PROJECT" CTA with the "LET'S TALK" WhatsApp CTA.

### Requirement 5: About Page Content

**User Story:** As a visitor, I want to learn who is behind SitesByKamo, so that I can decide whether to trust the developer with my project.

#### Acceptance Criteria

1. THE About_Page SHALL display the introductory line "Hi, I'm Kamo — the creator behind SitesByKamo."
2. THE About_Page SHALL present only factual, verifiable information about the creator.
3. THE About_Page SHALL not include fabricated claims about experience, awards, or credentials.

### Requirement 6: SEO Title Update

**User Story:** As the site owner, I want the home page title to reflect the brand tagline, so that search engine results communicate the brand message.

#### Acceptance Criteria

1. THE Site SHALL render the home page HTML title as "SitesByKamo | Websites That Work. Designs That Impact."
2. THE Site SHALL use the same title string in the `og:title` meta property for the home page.

### Requirement 7: Navigation Simplification

**User Story:** As a visitor, I want a streamlined navigation menu, so that I can find key pages without confusion.

#### Acceptance Criteria

1. THE Navigation_Bar SHALL display links in the order: HOME, WORK, SERVICES, ABOUT, CONTACT.
2. THE Navigation_Bar SHALL not include a "Projects" link.
3. THE Navigation_Bar SHALL display the link labels in uppercase.
4. WHEN the mobile menu is open, THE Navigation_Bar SHALL display the same five links plus the "LET'S TALK" WhatsApp CTA.

### Requirement 8: Start Command Script

**User Story:** As the developer, I want a single executable script to launch my development environment, so that I can start working with one command.

#### Acceptance Criteria

1. THE Start_Command_File SHALL be located at the project root as an executable file.
2. WHEN executed on macOS, THE Start_Command_File SHALL navigate to the project directory.
3. WHEN dependencies are missing or outdated, THE Start_Command_File SHALL install dependencies before starting the development server.
4. WHEN dependencies are present and up-to-date, THE Start_Command_File SHALL start the development server without reinstalling.
5. THE Start_Command_File SHALL use the appropriate package manager command (`npm run dev`) to start the development server.
