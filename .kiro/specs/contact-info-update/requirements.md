# Requirements Document

## Introduction

Update the contact information on the SitesbyKamo portfolio website to reflect accurate social media links, email address, and physical location. The site uses a central configuration file (`src/data/site.ts`) that feeds all CTAs, footer icons, and the "DIRECT" contact section across the site.

## Glossary

- **Site_Configuration**: The central `contactConfig` and `brand` objects in `src/data/site.ts` that supply contact details to all components across the website.
- **Footer**: The website footer component displaying social media icon links (GitHub, LinkedIn, Instagram, WhatsApp, Email) and the "DIRECT" contact section.
- **DIRECT_Section**: The contact section in the footer displaying the email address, WhatsApp chat link, and physical location.

## Requirements

### Requirement 1: Configure Instagram Link

**User Story:** As a site visitor, I want the Instagram icon in the footer to link to the correct SitesbyKamo Instagram profile, so that I can follow and engage with the business on Instagram.

#### Acceptance Criteria

1. WHEN the Instagram icon is clicked, THE Site_Configuration SHALL open `https://www.instagram.com/sitesbykamo?utm_source=qr` in a new browser tab
2. THE Site_Configuration SHALL store the value `https://www.instagram.com/sitesbykamo?utm_source=qr` in the `instagram` field of `contactConfig`
3. IF the `instagram` field of `contactConfig` contains a non-empty string, THEN THE Site_Configuration SHALL render the Instagram icon as a clickable link rather than a disabled placeholder

### Requirement 2: Configure Email Address

**User Story:** As a site visitor, I want the email link in the footer and DIRECT section to open my mail client addressed to the correct business email, so that I can send an enquiry directly.

#### Acceptance Criteria

1. WHEN the email link is activated in the Footer or DIRECT_Section, THE Site_Configuration SHALL open a `mailto:` link addressed to `kamohelomosiya89@gmail.com`
2. THE Site_Configuration SHALL store the value `kamohelomosiya89@gmail.com` as a non-empty string in the `email` field of `contactConfig`
3. THE DIRECT_Section SHALL display the configured email address as a clickable link instead of the placeholder text "Email address to be configured"
4. THE Footer SHALL display the configured email address as a clickable link instead of the placeholder text "Email — to be configured"

### Requirement 3: Update Physical Location

**User Story:** As a site visitor, I want to see the correct business location displayed on the site, so that I know where the business is based.

#### Acceptance Criteria

1. THE Site_Configuration SHALL store the string value `Alberton, South Africa` in the `location` field of the `brand` object, replacing any previously configured value
2. WHEN the contact page loads, THE DIRECT_Section SHALL display the text `Alberton, South Africa` adjacent to the map-pin icon as the business location
3. WHEN any other page or component references the `brand.location` value, THE System SHALL render `Alberton, South Africa` consistently across all instances
