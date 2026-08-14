# Requirements Document

## Introduction

This feature covers two improvements to the SitesByKamo portfolio website: (1) updating the About section text to reflect a more complete professional background including software testing, and (2) replacing the WhatsApp-based enquiry form submission with email delivery to kamohelomosiya89@gmail.com.

## Glossary

- **About_Section**: The section of the About page that displays the site owner's professional biography and background text.
- **Contact_Form**: The enquiry form on the Contact page that collects project details from prospective clients.
- **Email_Service**: A backend or third-party service that delivers form submissions as emails to a configured recipient address.
- **Enquiry_Email**: An email message containing the structured form data submitted by a visitor through the Contact_Form.

## Requirements

### Requirement 1: Update About Section Biography Text

**User Story:** As the site owner, I want the About section to display my updated professional biography, so that visitors see an accurate representation of my background in development and software testing.

#### Acceptance Criteria

1. THE About_Section SHALL display the following five paragraphs as the biography text, rendered in this exact order from top to bottom:
   - Paragraph 1: "I'm a developer and software tester who enjoys turning ideas into things people can actually use. Through SitesByKamo, I build websites and digital products for businesses, entrepreneurs, brands and early-stage ideas — from professional business websites and ecommerce experiences to products that need to be designed, built and tested from the ground up."
   - Paragraph 2: "My background in software testing has shaped the way I build. I don't just think about how something looks; I think about how it works, what could break, how people will use it, and whether it solves the problem it was created for. That means bringing together development, UI/UX, automation, testing and problem-solving throughout the process."
   - Paragraph 3: "I've worked across web development and software testing, building with technologies such as HTML, CSS, JavaScript, Java, Python, SQL, Selenium and Appium, while also exploring modern tools and frameworks to turn ideas into working products."
   - Paragraph 4: "SitesByKamo is where I bring all of that together."
   - Paragraph 5: "Whether I'm building a website for a business, developing a digital product like HairGo, creating an ecommerce experience, or experimenting with a new idea, my goal is the same: build something useful, make it work properly, and make it feel like a real product, not just another nice-looking website."
2. THE About_Section SHALL render each paragraph as a separate block-level element with uniform vertical spacing of 16px between consecutive paragraphs.
3. WHEN the new biography text is deployed, THE About_Section SHALL remove the previous two-paragraph biography text entirely, so that no portion of the old biography content remains visible in the rendered output. IF the new biography is not yet available, THEN THE About_Section SHALL continue to display the existing content until the replacement is ready.

### Requirement 2: Send Enquiry Form Data via Email

**User Story:** As the site owner, I want the contact form to send enquiries to my email address, so that I receive project enquiries directly in my inbox instead of through WhatsApp.

#### Acceptance Criteria

1. WHEN a visitor submits the Contact_Form, THE Email_Service SHALL deliver an Enquiry_Email to kamohelomosiya89@gmail.com containing all submitted form fields. IF delivery succeeds after any duration, THE Contact_Form SHALL still display the success message and clear form fields.
2. THE Enquiry_Email SHALL include the following fields from the Contact_Form: Name, Email, WhatsApp Number, Business/Company, Project Type, Budget Range, Timeline, and Project Description.
3. WHEN the Email_Service successfully delivers the Enquiry_Email, THE Contact_Form SHALL display a visible success message indicating that the enquiry has been sent, and SHALL clear all form fields.
4. IF the Email_Service fails to deliver the Enquiry_Email, THEN THE Contact_Form SHALL display a visible error message indicating that submission failed and the visitor should try again, and SHALL preserve the visitor's entered data in all form fields.
5. THE Contact_Form SHALL remove the WhatsApp redirect behaviour on submission.
6. THE Contact_Form SHALL remove the disclaimer text that states the form is not connected to an email service.
7. WHEN a visitor submits the Contact_Form, THE Contact_Form SHALL validate that required fields (Name, Email, Project Type, Project Description) contain non-whitespace content and that the Email field contains a valid email format before sending.
8. IF any required field fails validation, THEN THE Contact_Form SHALL prevent submission and SHALL display inline error messages immediately as the visitor interacts with each field, indicating which fields require correction.

### Requirement 3: Preserve Existing Contact Page Structure

**User Story:** As a visitor, I want the contact page layout and direct contact links to remain unchanged, so that I can still reach the site owner through WhatsApp or email links displayed on the page.

#### Acceptance Criteria

1. THE Contact_Form SHALL display all of the following form fields in order: Name (required, text input), Email (required, email input), WhatsApp Number (optional, tel input), Business/Company (optional, text input), Project Type (required, select dropdown), Budget Range (optional, select dropdown), Timeline (optional, select dropdown), and Project Description (required, textarea).
2. THE Contact page SHALL display a clickable email link (mailto: href) and a clickable WhatsApp chat link (external href opening WhatsApp) in the contact details column adjacent to the form.
3. THE Contact page SHALL display the "What Happens Next" section containing a numbered list of 3 steps describing the enquiry process.
4. WHEN a visitor clicks the email link, THE Contact page SHALL open the user's default mail client with the configured email address pre-filled in the recipient field.
5. WHEN a visitor clicks the WhatsApp chat link, THE Contact page SHALL open WhatsApp (or WhatsApp Web) in a new browser tab directed to the configured phone number.
