# Implementation Plan: Portfolio Content Improvement

## Overview

This plan covers two changes: (1) replacing the About section biography with updated 5-paragraph text, and (2) converting the contact form from WhatsApp redirect to email delivery via the Web3Forms API. Implementation uses TypeScript/React with Vitest + fast-check for testing.

## Tasks

- [ ] 1. Update About Section biography text
  - [x] 1.1 Replace biography content in AboutSection component
    - Open `src/components/site/AboutSection.tsx`
    - Replace the two existing `<p>` elements inside the `div.grid.gap-4` container with the five new paragraphs defined in Requirement 1, AC 1
    - Each paragraph is a separate `<p>` element within the existing `gap-4` grid container (gives 16px spacing via Tailwind)
    - Remove all traces of the old 2-paragraph text
    - _Requirements: 1.1, 1.2, 1.3_

  - [ ]* 1.2 Write unit tests for AboutSection content
    - Install Vitest + React Testing Library + jsdom if not already present (`vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`)
    - Add a `vitest.config.ts` at root if one doesn't exist (use jsdom environment)
    - Create `src/components/site/__tests__/AboutSection.test.tsx`
    - Test that all 5 paragraphs render in order (check text content of each `<p>`)
    - Test that no old biography text is present in the rendered output
    - Test that paragraphs are rendered as `<p>` elements within a container that has `gap-4` class
    - _Requirements: 1.1, 1.2, 1.3_

- [ ] 2. Set up Web3Forms integration
  - [ ] 2.1 Generate Web3Forms access key and add to project
    - Go to https://web3forms.com and generate an access key for kamohelomosiya89@gmail.com
    - Create `src/config/web3forms.ts` exporting the access key constant and endpoint URL:
      ```typescript
      export const WEB3FORMS_ACCESS_KEY = "<paste-key-here>";
      export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
      ```
    - _Requirements: 2.1_

  - [ ] 2.2 Implement form validation utility
    - Create `src/utils/contactFormValidation.ts`
    - Export a `validateContactForm` function that accepts form field values and returns a `Record<string, string>` of field-name → error-message
    - Validate: Name (non-whitespace), Email (non-whitespace + valid email format), Project Type (non-empty selection), Project Description (non-whitespace)
    - Return empty object if all valid
    - _Requirements: 2.7, 2.8_

  - [ ]* 2.3 Write property tests for validation utility
    - Install `fast-check` as a dev dependency
    - Create `src/utils/__tests__/contactFormValidation.test.ts`
    - **Property 2: Whitespace-only required fields are rejected** — Generate random whitespace-only strings via `fc.stringOf(fc.constantFrom(' ', '\t', '\n', '\r'))`, pass into each required field, assert validation returns an error for that field. Min 100 iterations.
    - **Property 3: Invalid email formats are rejected** — Generate random strings without `@` or with invalid domain structure, assert validation returns email error. Min 100 iterations.
    - **Validates: Requirements 2.7**
    - _Requirements: 2.7, 2.8_

- [ ] 3. Checkpoint — Validate foundation
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 4. Rewrite ContactForm to use Web3Forms
  - [ ] 4.1 Replace WhatsApp submission with Web3Forms POST
    - Open `src/components/site/ContactForm.tsx`
    - Remove imports: `buildWhatsAppLink`, `defaultWhatsAppMessage`
    - Add imports: `WEB3FORMS_ACCESS_KEY`, `WEB3FORMS_ENDPOINT` from `src/config/web3forms.ts` and `validateContactForm` from `src/utils/contactFormValidation.ts`
    - Add state for `errors: Record<string, string>` and `submitting: boolean`
    - Rewrite `handleSubmit` as an async function that:
      1. Calls `validateContactForm` — if errors exist, set error state, show inline errors, prevent submission
      2. Sets `submitting = true`
      3. POSTs JSON to Web3Forms endpoint with access_key, subject ("New Project Enquiry — SitesByKamo"), and all form fields
      4. On success (`response.ok` and `body.success === true`): show success toast "Enquiry sent — I'll be in touch", clear form, reset errors
      5. On failure: show error toast "Submission failed — please try again", preserve form data
      6. Sets `submitting = false` in finally block
    - _Requirements: 2.1, 2.3, 2.4, 2.5_

  - [ ] 4.2 Add inline validation error display
    - Below each required field (`name`, `email`, `projectType`, `description`), render a conditional `<span>` with the error message from `errors` state
    - Style error spans: `text-xs text-red-500 mt-1`
    - Add `aria-invalid` and `aria-describedby` attributes to fields when they have errors for accessibility
    - Trigger validation on blur for each required field (immediate feedback per Requirement 2.8)
    - _Requirements: 2.7, 2.8_

  - [ ] 4.3 Remove WhatsApp disclaimer text
    - Remove the `<p>` element at the bottom of the form that says "This form is not connected to an email service yet..."
    - _Requirements: 2.5, 2.6_

  - [ ]* 4.4 Write property test for payload completeness
    - Create `src/components/site/__tests__/ContactForm.payloadProperty.test.ts`
    - **Property 1: Email payload completeness** — Generate random valid form data (non-empty name, valid email, project type from list, non-empty description, optional fields as arbitrary strings). Build the payload object the same way `handleSubmit` does. Assert all field values appear in the payload without truncation. Min 100 iterations.
    - **Validates: Requirements 2.2**
    - _Requirements: 2.2_

  - [ ]* 4.5 Write unit tests for ContactForm behaviour
    - Create `src/components/site/__tests__/ContactForm.test.tsx`
    - Mock `fetch` globally
    - Test success flow: fill valid data, submit, mock 200 response → verify toast + fields cleared
    - Test error flow: fill valid data, submit, mock network error → verify error toast + fields preserved
    - Test validation: submit with empty required fields → verify inline errors shown, no fetch call made
    - Test WhatsApp removal: verify no `window.open` call to wa.me on submit
    - Test disclaimer removal: verify disclaimer text is absent from render
    - _Requirements: 2.1, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8_

- [ ] 5. Verify contact page structure is preserved
  - [ ] 5.1 Confirm contact page layout integrity
    - Open `src/routes/contact.tsx` and verify no changes are needed
    - Confirm the mailto link, WhatsApp chat link, and "What Happens Next" section remain intact
    - Ensure form fields render in the correct order (Name, Email, WhatsApp Number, Business/Company, Project Type, Budget Range, Timeline, Project Description)
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [ ]* 5.2 Write integration tests for contact page links
    - Create `src/routes/__tests__/contact.test.tsx`
    - Render the contact page and verify: mailto link href contains `kamohelomosiya89@gmail.com`, WhatsApp link href points to `wa.me/27718100711` with target `_blank`
    - Verify "What Happens Next" section renders 3 numbered steps
    - _Requirements: 3.2, 3.3, 3.4, 3.5_

- [ ] 6. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- The Web3Forms access key must be generated manually by the site owner at https://web3forms.com before task 2.1 can be completed
- The access key is safe to include client-side (it only routes submissions to the configured inbox)
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- `buildWhatsAppLink` and `defaultWhatsAppMessage` in `src/data/site.ts` are NOT removed — they're still used by the WhatsApp chat link on the contact page

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "2.1"] },
    { "id": 1, "tasks": ["1.2", "2.2"] },
    { "id": 2, "tasks": ["2.3", "4.1"] },
    { "id": 3, "tasks": ["4.2", "4.3"] },
    { "id": 4, "tasks": ["4.4", "4.5", "5.1"] },
    { "id": 5, "tasks": ["5.2"] }
  ]
}
```
