/**
 * Central configuration for SitesByKamo.
 * Contact details are intentionally EMPTY until real values are supplied.
 * Fill these in and every CTA across the site updates automatically.
 */
export const contactConfig = {
  email: "kamohelomosiya89@gmail.com",
  whatsapp: "27718100711",
  instagram: "https://www.instagram.com/sitesbykamo?utm_source=qr",
  linkedin: "https://www.linkedin.com/in/kamohelo-mosiya-772924221/",
  github: "https://github.com/Kamo89",
} as const;

export const brand = {
  name: "SitesByKamo",
  wordmark: "SITESBYKAMO",
  owner: "Kamohelo Mosiya",
  role: "Founder / Developer — SitesByKamo",
  positioning:
    "Modern websites and digital experiences built for businesses, brands and creators.",
  statement:
    "I design and build modern websites and digital products that help businesses look credible, attract customers and turn visitors into enquiries.",
  location: "Alberton, South Africa",
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const capabilities = [
  "WEB DEVELOPMENT",
  "UI/UX DESIGN",
  "ECOMMERCE",
  "RESPONSIVE DESIGN",
  "DIGITAL PRODUCTS",
  "BUSINESS WEBSITES",
];

export const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites for small businesses and companies that need to look credible from the first scroll.",
  },
  {
    number: "02",
    title: "Ecommerce Websites",
    description:
      "Modern online stores and product catalogues built around how your customers actually buy.",
  },
  {
    number: "03",
    title: "Landing Pages",
    description:
      "High-converting landing pages for businesses, products and campaigns.",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Modern responsive interfaces designed around usability and visual identity.",
  },
  {
    number: "05",
    title: "Web Applications",
    description: "Interactive web applications with real functionality behind them.",
  },
  {
    number: "06",
    title: "Digital Products / MVPs",
    description: "Rapid product development for startups and entrepreneurs.",
  },
  {
    number: "07",
    title: "Website Redesigns",
    description: "Modernising outdated websites and improving the experience end to end.",
  },
  {
    number: "08",
    title: "WhatsApp Business Integration",
    description:
      "Turn a website into a lead-generation and enquiry system through WhatsApp.",
  },
];

export const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Expo",
  "Python",
  "PHP",
  "SQL",
  "Firebase",
  "Selenium",
  "Playwright",
  "Appium",
  "Postman",
  "Jenkins",
];

export const whyItems = [
  {
    title: "Built around your business",
    description:
      "Every website is designed around the actual business rather than forcing the business into a generic template.",
  },
  {
    title: "Modern by default",
    description: "Clean, responsive and contemporary digital experiences.",
  },
  {
    title: "Mobile-first",
    description:
      "Designed for customers who discover businesses through their phones and social media.",
  },
  {
    title: "Built for conversion",
    description:
      "Clear calls-to-action, enquiries, bookings, WhatsApp integration and ecommerce flows.",
  },
  {
    title: "From idea to product",
    description:
      "From simple business websites through to digital products and full MVPs.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your business, audience and goals.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define the structure, features and user journey.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create the visual direction and responsive interface.",
  },
  {
    number: "04",
    title: "Build",
    description: "Develop and test the website or product.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploy, refine and hand over the finished product.",
  },
];

export const projectTypes = [
  "Business website",
  "Ecommerce website",
  "Landing page",
  "Web application",
  "Digital product / MVP",
  "Website redesign",
  "Not sure yet",
];

export const budgetRanges = [
  "Under R5 000",
  "R5 000 – R15 000",
  "R15 000 – R40 000",
  "R40 000+",
  "Prefer to discuss",
];

export const timelines = [
  "As soon as possible",
  "Within 2–4 weeks",
  "1–3 months",
  "Flexible",
];

export function buildWhatsAppLink(message: string): string | null {
  const number = contactConfig.whatsapp.replace(/[^\d]/g, "");
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function defaultWhatsAppMessage(business = "", description = "") {
  return [
    "Hi Kamo, I'd like to discuss a website/digital project.",
    "",
    "My business/project is:",
    business || "[BUSINESS]",
    "",
    "What I need:",
    description || "[PROJECT DESCRIPTION]",
    "",
    "Please let me know how we can get started.",
  ].join("\n");
}

export interface PricingTier {
  name: string;
  range: string;
  features: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Basic Website",
    range: "R1,000 – R2,000Test",
    features: ["1–3 pages", "Mobile responsive", "Simple & clean design", "WhatsApp integration", "Basic SEO setup"],
  },
  {
    name: "Business Website",
    range: "R2,500 – R5,000",
    features: ["Up to 5 pages", "Modern UI/UX design", "Contact / quote form", "Image gallery", "WhatsApp integration", "Basic SEO setup"],
  },
  {
    name: "E-Commerce Store",
    range: "R4,500 – R8,000",
    features: ["Product pages", "Add-to-cart functionality", "Checkout system/UI", "Product filtering", "Mobile optimized", "Basic SEO setup"],
  },
  {
    name: "Web Apps / Dashboards",
    range: "From R7,000+",
    features: ["Custom features", "Dashboard UI", "Data visualization", "Advanced functionality", "Responsive design", "Scalable & secure architecture"],
  },
];

export interface AddOnService {
  name: string;
  range: string;
}

export const addOnServices: AddOnService[] = [
  { name: "Website Maintenance", range: "R300 – R800/month" },
  { name: "Extra Page", range: "R500" },
  { name: "Speed Optimization", range: "R500 – R1,000" },
  { name: "SEO Setup", range: "R800 – R1,500" },
  { name: "Content Upload", range: "R300 – R700" },
  { name: "Logo Design", range: "R500 – R1,000" },
];