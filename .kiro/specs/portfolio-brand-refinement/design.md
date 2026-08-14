# Design Document

## Overview

This feature is a brand refinement pass for the SitesByKamo portfolio website. It updates the colour system to hot pink, revises hero messaging, adds pricing tiers, integrates WhatsApp as the primary contact channel, simplifies navigation, refreshes about page copy, updates SEO titles, and adds a macOS start command script.

## Architecture

This feature is a brand refinement pass applied across multiple files in an existing TanStack Start + React + Tailwind CSS portfolio site. There is no new service or architectural layer — all changes touch existing components, data files, route definitions, and CSS custom properties.

**Change Categories:**

1. **Design tokens** — CSS custom property updates in `src/styles.css`
2. **Data layer** — Config and content updates in `src/data/site.ts`
3. **Component updates** — `Hero.tsx`, `Navbar.tsx` markup/logic changes
4. **Route updates** — `services.tsx`, `about.tsx`, `index.tsx`, `__root.tsx` content and head metadata
5. **New file** — macOS start command script at project root

All changes are local, file-level edits with no new dependencies or infrastructure.

---

## Components and Interfaces

### 1. Colour System (`src/styles.css`)

Update the `:root` custom properties to use the new brand palette. All values remain in oklch format.

| Variable | Hex Source | oklch Value |
|----------|-----------|-------------|
| `--primary` | #F43F8E | `oklch(0.65 0.25 350)` |
| `--accent` | #F43F8E | `oklch(0.65 0.25 350)` |
| `--ring` | #F43F8E | `oklch(0.65 0.25 350)` |
| `--background` | #050505 | `oklch(0.13 0 0)` |
| `--secondary` | #111111 | `oklch(0.18 0 0)` |
| `--card` | #181818 | `oklch(0.22 0 0)` |
| `--muted-foreground` | #A1A1AA | `oklch(0.71 0.015 265)` |

Additional variables that derive from these (e.g., `--primary-foreground`, `--chart-1`, sidebar variants) will be updated to maintain visual consistency with the new primary hue.

```css
:root {
  --primary: oklch(0.65 0.25 350);
  --primary-foreground: oklch(1 0 0);
  --accent: oklch(0.65 0.25 350);
  --accent-foreground: oklch(1 0 0);
  --ring: oklch(0.65 0.25 350);
  --background: oklch(0.13 0 0);
  --secondary: oklch(0.18 0 0);
  --secondary-foreground: oklch(0.965 0.004 265);
  --card: oklch(0.22 0 0);
  --card-foreground: oklch(0.965 0.004 265);
  --muted-foreground: oklch(0.71 0.015 265);
}
```

### 2. Data Layer (`src/data/site.ts`)

#### WhatsApp Config

```typescript
export const contactConfig = {
  email: "",
  whatsapp: "27718100711",
  instagram: "",
  linkedin: "",
  github: "https://github.com/Kamo89",
} as const;
```

#### Navigation Links

Remove "Projects" and keep the five links in order:

```typescript
export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;
```

#### Pricing Tiers Data

Add a new exported array for the services page pricing grid:

```typescript
export interface PricingTier {
  name: string;
  range: string;
  features: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    range: "R1,000 – R2,000",
    features: [
      "Single-page or landing page",
      "Mobile-responsive",
      "Contact form or WhatsApp link",
      "Basic SEO setup",
    ],
  },
  {
    name: "Business",
    range: "R2,500 – R5,000",
    features: [
      "Multi-page business website",
      "Custom design",
      "CMS or editable content",
      "SEO & analytics setup",
      "WhatsApp integration",
    ],
  },
  {
    name: "E-Commerce",
    range: "R4,500 – R8,000",
    features: [
      "Product catalogue / online store",
      "Payment integration",
      "Order management",
      "Inventory tracking",
      "Mobile-optimised checkout",
    ],
  },
  {
    name: "Web Apps",
    range: "R7,000+",
    features: [
      "Custom web application",
      "User authentication",
      "Database & API integration",
      "Admin dashboard",
      "Ongoing support available",
    ],
  },
];

export const addOnServices = [
  "Logo & brand identity design",
  "Copywriting & content creation",
  "Domain & hosting setup",
  "Monthly maintenance package",
  "WhatsApp Business automation",
  "Social media integration",
];
```

### 3. Hero Component (`src/components/site/Hero.tsx`)

**Changes:**
- Headline → "Websites that work. Designs that impact."
- Supporting copy → Retains positioning about businesses, brands, entrepreneurs
- Primary CTA → "VIEW MY WORK" linking to `/work` (unchanged)
- Secondary CTA → "LET'S WORK TOGETHER" using `buildWhatsAppLink(defaultWhatsAppMessage())` as an external `<a>` link instead of a `<Link>` to `/contact`

```tsx
import { Link } from "@tanstack/react-router";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/data/site";

// Inside the CTA section:
const waLink = buildWhatsAppLink(defaultWhatsAppMessage());

<Link to="/work" className="...">VIEW MY WORK</Link>

{waLink && (
  <a
    href={waLink}
    target="_blank"
    rel="noreferrer noopener"
    className="inline-flex items-center rounded-full border border-line px-6 py-3.5 font-display text-xs tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
  >
    LET'S WORK TOGETHER
  </a>
)}
```

### 4. Navbar Component (`src/components/site/Navbar.tsx`)

**Changes:**
- Replace "START A PROJECT" `<Link to="/contact">` with "LET'S TALK" `<a>` pointing to `buildWhatsAppLink(defaultWhatsAppMessage())`
- Same change in both desktop and mobile menu CTA slots

```tsx
import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/data/site";

// Desktop CTA:
const waLink = buildWhatsAppLink(defaultWhatsAppMessage());

{waLink && (
  <a
    href={waLink}
    target="_blank"
    rel="noreferrer noopener"
    className="hidden rounded-full bg-primary px-5 py-2.5 font-display text-xs tracking-[0.16em] text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
  >
    LET'S TALK
  </a>
)}
```

### 5. Services Page (`src/routes/services.tsx`)

**Changes:**
- Import `pricingTiers` and `addOnServices` from `@/data/site`
- Add a pricing grid section **before** the existing services detail list
- Render each tier as a card in a responsive grid (1-col mobile, 2-col md, 4-col lg)
- Add an add-on services list below the tiers

```tsx
<section className="border-t border-line">
  <div className="container-page py-20 md:py-28">
    <SectionHeading eyebrow="Pricing" title="Packages to fit your budget" />
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {pricingTiers.map((tier) => (
        <div key={tier.name} className="rounded-lg border border-line bg-surface/50 p-7">
          <h3 className="font-display text-sm tracking-[0.16em]">{tier.name.toUpperCase()}</h3>
          <p className="mt-3 text-2xl font-semibold text-primary">{tier.range}</p>
          <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
            {tier.features.map((f) => <li key={f}>• {f}</li>)}
          </ul>
        </div>
      ))}
    </div>
    {/* Add-ons */}
    <div className="mt-14">
      <h3 className="font-display text-sm tracking-[0.16em]">ADD-ONS</h3>
      <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-3">
        {addOnServices.map((s) => <li key={s}>• {s}</li>)}
      </ul>
    </div>
  </div>
</section>
```

### 6. About Page (`src/routes/about.tsx`)

**Changes:**
- Update the `<h1>` intro line to "Hi, I'm Kamo — the creator behind SitesByKamo."
- Keep the remainder of the page structure (AboutSection, approach cards, process, CTA)

### 7. SEO / Head Metadata

**`src/routes/index.tsx` head():**
```typescript
{ title: "SitesByKamo | Websites That Work. Designs That Impact." },
{ property: "og:title", content: "SitesByKamo | Websites That Work. Designs That Impact." },
```

**`src/routes/__root.tsx` head():**
```typescript
{ title: "SitesByKamo | Websites That Work. Designs That Impact." },
```

### 8. Start Command Script (`start.command`)

A macOS `.command` file at the project root. When double-clicked in Finder or executed in Terminal it opens the project directory, conditionally installs dependencies, and starts the dev server.

```bash
#!/bin/bash
cd "$(dirname "$0")" || exit 1

# Install if node_modules missing or package-lock changed
if [ ! -d "node_modules" ] || [ "package-lock.json" -nt "node_modules/.package-lock.json" ]; then
  echo "Installing dependencies..."
  npm install
fi

echo "Starting development server..."
npm run dev
```

File must have executable permission (`chmod +x start.command`).

---

## Interfaces

### `PricingTier`

```typescript
interface PricingTier {
  name: string;    // Tier display name: "Basic", "Business", "E-Commerce", "Web Apps"
  range: string;   // Price range display string: "R1,000 – R2,000"
  features: string[]; // Bullet-point feature descriptions
}
```

### `buildWhatsAppLink(message: string): string | null`

Already exists in `src/data/site.ts`. Returns `null` when `contactConfig.whatsapp` is empty, otherwise returns `https://wa.me/{number}?text={encodedMessage}`.

### `navLinks` type

```typescript
readonly { label: string; to: string }[]
```

---

## Data Models

No database or persistent storage changes. All data is static configuration in `src/data/site.ts`.

---

## Error Handling

| Scenario | Handling |
|----------|----------|
| `contactConfig.whatsapp` is empty | `buildWhatsAppLink` returns `null`; CTA buttons conditionally render only when link is non-null |
| `pricingTiers` array is empty | Services page pricing section renders nothing (map over empty array) |
| `start.command` run on non-macOS | Script uses `/bin/bash` which is available on Linux/macOS; Windows users should use `npm run dev` directly |

---

## Testing Strategy

**Unit Tests (example-based):**
- Verify each CSS custom property holds the correct oklch value (Requirements 1.1–1.7)
- Verify Hero headline, supporting copy, and CTA labels/targets (Requirements 2.1–2.4)
- Verify pricing tiers render with correct names and ranges (Requirements 3.1–3.5)
- Verify navLinks order, absence of "Projects", and CTA button labels (Requirements 7.1, 7.2, 7.4)
- Verify contactConfig.whatsapp value (Requirement 4.1)
- Verify SEO title strings (Requirements 6.1, 6.2)
- Verify start.command contains expected commands (Requirements 8.2, 8.5)

**Property Tests (100+ iterations each):**
- CSS colour format compliance across all variables
- WhatsApp link generation correctness for arbitrary message strings
- Navigation label uppercase transformation

**Integration / Smoke:**
- start.command file exists with executable permission (Requirement 8.1)
- start.command conditional install logic (Requirements 8.3, 8.4)

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: All colour custom properties use oklch format

*For any* CSS custom property defined in the `:root` block of `src/styles.css` that represents a colour value, the value SHALL be expressed in oklch() format (or a function that wraps oklch, such as `color-mix(in oklab, ...)`).

**Validates: Requirements 1.8**

### Property 2: WhatsApp link generation produces valid URL with encoded message

*For any* non-empty message string passed to `buildWhatsAppLink`, when `contactConfig.whatsapp` contains a valid number, the returned string SHALL be a valid URL matching the pattern `https://wa.me/{digits}?text={encodedMessage}` where `{digits}` equals the sanitised whatsapp number and `{encodedMessage}` equals `encodeURIComponent(message)`.

**Validates: Requirements 2.5, 4.2, 4.4**

### Property 3: Navigation link labels render as uppercase

*For any* link entry in the `navLinks` array, the text displayed in the navigation bar SHALL equal `label.toUpperCase()`.

**Validates: Requirements 7.3**
