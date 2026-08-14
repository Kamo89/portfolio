# Implementation Plan: Contact Info Update

## Overview

Update three static string values in `src/data/site.ts` to configure the Instagram link, email address, and business location. This is a single-file change — the consuming components already handle the transition from placeholder to active state.

## Tasks

- [x] 1. Update contact configuration values in site.ts
  - [x] 1.1 Set the Instagram URL in contactConfig
    - Change `contactConfig.instagram` from `""` to `"https://www.instagram.com/sitesbykamo?utm_source=qr"`
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 1.2 Set the email address in contactConfig
    - Change `contactConfig.email` from `""` to `"kamohelomosiya89@gmail.com"`
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [x] 1.3 Update the business location in brand
    - Change `brand.location` from `"Midrand, South Africa"` to `"Alberton, South Africa"`
    - _Requirements: 3.1, 3.2, 3.3_

- [x] 2. Verify the build succeeds
  - [x] 2.1 Run the project build command to confirm TypeScript compilation passes with no errors
    - Run `npm run build` and confirm zero type errors
    - Ensure all tests pass, ask the user if questions arise.
    - _Requirements: 1.2, 2.2, 3.1_

## Notes

- This is a configuration-only change — no structural or logic modifications are needed
- All consuming components (`SocialLinks.tsx`, `Footer.tsx`, `contact.tsx`) already conditionally render active links vs disabled placeholders based on whether values are non-empty
- Property-based testing is not applicable — the change involves static string literals with no transformation logic
- The highest-value verification is a successful build plus visual confirmation by the user

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "1.3"] },
    { "id": 1, "tasks": ["2.1"] }
  ]
}
```
