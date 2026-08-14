import { projectAssets } from "@/data/assets";

export type ProjectStatus =
  | "LIVE"
  | "CLIENT PROJECT"
  | "CONCEPT"
  | "PROTOTYPE"
  | "REDESIGN"
  | "EXPERIMENTAL";

export type FilterKey =
  | "ALL"
  | "WEBSITES"
  | "ECOMMERCE"
  | "DIGITAL PRODUCTS"
  | "BUSINESS"
  | "FASHION";

export interface Project {
  slug: string;
  name: string;
  category: string;
  filter: Exclude<FilterKey, "ALL">;
  status: ProjectStatus[];
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  result?: string;
  features: string[];
  technologies: string[];
  image: string;
  video?: string;
  gallery: string[];
  imageAlt: string;
  accent?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const filters: FilterKey[] = [
  "ALL",
  "WEBSITES",
  "ECOMMERCE",
  "DIGITAL PRODUCTS",
  "BUSINESS",
  "FASHION",
];

export const projects: Project[] = [
  {
    slug: "auralink",
    name: "AuraLink",
    category: "Digital Product / Creator Platform",
    filter: "DIGITAL PRODUCTS",
    status: ["CONCEPT"],
    summary:
      "A creator portfolio and media-kit platform giving creators a professional digital presence.",
    description:
      "AuraLink is a creator portfolio and media-kit platform designed to give creators a professional digital presence where they can showcase their identity, content, collaborations and social media presence.",
    challenge:
      "Creators pitch brands with screenshots and scattered links. There is no single, professional place that represents who they are, what they make and who they reach.",
    solution:
      "A product where a creator builds one profile that works as both a public page and a media kit — identity, content showcase, collaboration history and social presence in a single shareable link.",
    features: [
      "Creator profiles",
      "Social media links",
      "Content showcase",
      "Collaboration information",
      "Personal branding",
      "Media-kit presentation",
    ],
    technologies: ["React", "TypeScript", "Firebase"],
    image: projectAssets["auralink"].screenshot,
    video: projectAssets["auralink"].video,
    gallery: [projectAssets["auralink"].screenshot],
    imageAlt:
      "AuraLink creator media-kit platform dashboard on desktop and mobile",
    featured: true,
  },
  {
    slug: "empty",
    name: "Empty",
    category: "Fashion / Ecommerce",
    filter: "FASHION",
    status: ["CONCEPT"],
    summary:
      "A fashion ecommerce concept built on a strict black, grey and white visual system.",
    description:
      "A fashion ecommerce concept with a minimal black, grey and white visual identity where the restraint is the brand.",
    challenge:
      "Minimal fashion brands lose their identity the moment a store template adds badges, banners and colour.",
    solution:
      "A deliberately reduced visual system — one typeface, three tones, disciplined spacing — where product photography is the only colour on the page.",
    features: [
      "Product presentation",
      "Fashion catalogue",
      "Ecommerce layout",
      "Clean visual design",
      "Responsive design",
    ],
    technologies: ["React", "TypeScript", "CSS"],
    image: projectAssets["empty"].screenshot,
    video: projectAssets["empty"].video,
    gallery: [projectAssets["empty"].screenshot],
    imageAlt:
      "Empty minimal black and white fashion ecommerce catalogue layout",
  },
  {
    slug: "extreme-ethics",
    name: "Extreme Ethics Clothing",
    category: "Fashion / Ecommerce",
    filter: "FASHION",
    status: ["CLIENT PROJECT"],
    summary:
      "A premium fashion catalogue with a full cart that sends completed orders straight to WhatsApp.",
    description:
      "A premium fashion catalogue and ecommerce-style website for Extreme Ethics Clothing. Customers browse products, view images and Reels, select variants, add to cart, review the order and send the enquiry through to WhatsApp. Prices are not displayed on the site — WhatsApp is the sales and order communication channel.",
    challenge:
      "The brand sold entirely through Instagram. Products lived in posts and Reels, orders arrived as fragmented DMs, and there was no catalogue a customer could browse properly — but the brand did not want prices published on the open web.",
    solution:
      "A full catalogue experience with variants, galleries and Reel content, backed by a real cart. At checkout the order is composed into a structured WhatsApp message instead of a payment gateway, so the brand keeps the conversation and the pricing private while the customer gets a proper shopping experience.",
    result:
      "Customers browse a real catalogue and arrive in WhatsApp with a complete, itemised order instead of a screenshot and a question.",
    features: [
      "Product catalogue",
      "Shopping cart",
      "Product variants",
      "Product galleries",
      "Video / Reel content",
      "Lookbook",
      "WhatsApp order flow",
      "Responsive design",
    ],
    technologies: ["React", "TypeScript", "Playwright", "CSS"],
    image: projectAssets["extreme-ethics"].screenshot,
    video: projectAssets["extreme-ethics"].video,
    gallery: [projectAssets["extreme-ethics"].screenshot],
    imageAlt:
      "Extreme Ethics Clothing fashion catalogue with lookbook grid and product pages",
    featured: true,
  },
  {
    slug: "petpal",
    name: "PetPal",
    category: "Pet Care / Service Business",
    filter: "WEBSITES",
    status: ["PROTOTYPE"],
    summary:
      "A digital experience for a pet care and grooming business, built around services and bookings.",
    description:
      "A modern digital experience for a pet care and grooming business, presenting services clearly and making it easy for pet owners to enquire about grooming and care.",
    challenge:
      "Pet owners choose a groomer on trust. Without visible services, social proof or a simple way to book, most enquiries never get made.",
    solution:
      "A warm, service-led website that puts the services and information up front, uses trust-building presentation, and makes enquiring a simple action on mobile.",
    features: [
      "Services overview",
      "Business information",
      "Customer enquiries",
      "Booking / service discovery",
      "Trust-building presentation",
      "Responsive design",
    ],
    technologies: ["React", "TypeScript", "CSS"],
    image: projectAssets["petpal"].screenshot,
    video: projectAssets["petpal"].video,
    gallery: [projectAssets["petpal"].screenshot],
    imageAlt:
      "PetPal pet care and grooming service website shown on tablet",
    featured: true,
  },
  {
    slug: "private-location",
    name: "Private Location",
    category: "Business / Service / Hospitality",
    filter: "BUSINESS",
    status: ["CONCEPT"],
    summary:
      "A venue and hospitality website concept focused on atmosphere and location presentation.",
    description:
      "A website concept for a venue or hospitality location, designed to present the space, atmosphere and services in a way that communicates the experience before a visitor arrives.",
    challenge:
      "Venues depend on atmosphere, but a website often reduces a space to a list of features. The challenge is translating a physical experience into a digital impression.",
    solution:
      "A visually-led layout that prioritises imagery and spatial presentation over text, letting the photography and layout communicate the feel of the space.",
    features: [
      "Venue presentation",
      "Location information",
      "Service overview",
      "Atmosphere-driven design",
      "Contact / enquiry functionality",
      "Responsive design",
    ],
    technologies: ["React", "TypeScript", "CSS"],
    image: projectAssets["private-location"].screenshot,
    video: projectAssets["private-location"].video,
    gallery: [projectAssets["private-location"].screenshot],
    imageAlt:
      "Private Location venue and hospitality website concept with atmospheric imagery",
  },
  {
    slug: "sole-society",
    name: "Sole Society",
    category: "Ecommerce / Footwear",
    filter: "ECOMMERCE",
    status: ["PROTOTYPE"],
    summary:
      "A footwear ecommerce experience focused on clear product presentation and a clean shopping journey.",
    description:
      "A modern footwear ecommerce experience focused on presenting products clearly and creating a clean shopping experience across sneakers, slides and socks.",
    challenge:
      "Small footwear sellers usually sell through social media posts, where products are hard to browse, sizes get lost in the comments and nothing is filterable.",
    solution:
      "A structured storefront with proper product listings, categories and filtering, paired with a clean ecommerce UI that makes browsing and product discovery straightforward.",
    features: [
      "Product listings",
      "Product categories",
      "Product filtering",
      "Ecommerce UI",
      "Product presentation",
      "Responsive design",
    ],
    technologies: ["React", "TypeScript", "CSS"],
    image: projectAssets["sole-society"].screenshot,
    video: projectAssets["sole-society"].video,
    gallery: [projectAssets["sole-society"].screenshot],
    imageAlt: "Sole Society sneaker ecommerce store product grid interface",
    featured: true,
  },
  {
    slug: "venta",
    name: "Venta",
    category: "Fashion / Ecommerce",
    filter: "ECOMMERCE",
    status: ["CONCEPT"],
    summary:
      "A fashion ecommerce concept built around strong visual branding and modern presentation.",
    description:
      "A modern fashion ecommerce concept focused on strong visual branding, fashion presentation and a contemporary shopping experience.",
    challenge:
      "Fashion brands live or die on presentation. A default store template flattens a brand into a product grid and removes everything that makes it worth buying into.",
    solution:
      "A high-contrast, editorial storefront where photography carries the layout, typography sets the tone and the shopping experience stays out of the way of the brand.",
    features: [
      "Fashion-focused UI",
      "Product presentation",
      "Product discovery",
      "Modern ecommerce UI",
      "Responsive layouts",
    ],
    technologies: ["React", "TypeScript", "CSS"],
    image: projectAssets["venta"].screenshot,
    video: projectAssets["venta"].video,
    gallery: [projectAssets["venta"].screenshot],
    imageAlt:
      "Venta fashion ecommerce concept with editorial layout",
  },
  {
    slug: "wanpuck-v1",
    name: "WanPuck Upholstery V1",
    category: "Business Website",
    filter: "WEBSITES",
    status: ["CLIENT PROJECT"],
    summary:
      "A modern website for a professional upholstery business, built to showcase craftsmanship and generate quotation enquiries.",
    description:
      "A modern website for a professional upholstery business based in Midrand, South Africa, designed to showcase services, completed work and customer trust while generating quotation enquiries.",
    challenge:
      "An established upholstery business with real craftsmanship had no online presence customers could point to. Enquiries depended entirely on word of mouth, and there was no way for a potential customer to see previous work before calling.",
    solution:
      "A clean, image-led website that leads with completed upholstery work, explains the services clearly and routes every enquiry into a single WhatsApp quotation flow — so the business owner receives the enquiry where they already work.",
    result:
      "The business now has a credible online presence it can share directly with customers, and quotation requests arrive with context instead of a cold phone call.",
    features: [
      "Services presentation",
      "Upholstery portfolio / gallery",
      "Business credibility",
      "Customer enquiries",
      "WhatsApp quotation flow",
      "Responsive design",
    ],
    technologies: ["React", "TypeScript", "CSS"],
    image: projectAssets["wanpuck-v1"].screenshot,
    video: projectAssets["wanpuck-v1"].video,
    gallery: [projectAssets["wanpuck-v1"].screenshot],
    imageAlt:
      "WanPuck Upholstery V1 website showing services and upholstery work portfolio",
  },
  {
    slug: "wanpuck-v2",
    name: "WanPuck Upholstery V2",
    category: "Business Website / Redesign",
    filter: "WEBSITES",
    status: ["REDESIGN"],
    summary:
      "A redesign of the WanPuck Upholstery website with improved visual presentation and modernized UX.",
    description:
      "A redesign and iteration of the original WanPuck Upholstery V1 website, featuring improved visual presentation, modernized UX patterns, updated service presentation and an enhanced portfolio gallery. Built on the learnings from V1 to better serve the business's growing needs.",
    challenge:
      "The original V1 website served its purpose but needed a visual refresh and UX improvements to keep up with the business's growth and evolving customer expectations.",
    solution:
      "A ground-up redesign retaining the proven structure of V1 — services, portfolio, WhatsApp enquiries — while modernizing the visual language, improving the gallery experience and tightening the information hierarchy.",
    features: [
      "Improved visual presentation",
      "Modernized UX",
      "Service presentation",
      "Portfolio / gallery",
      "Customer enquiries",
      "Responsive design",
    ],
    technologies: ["React", "TypeScript", "CSS"],
    image: projectAssets["wanpuck-v2"].screenshot,
    video: projectAssets["wanpuck-v2"].video,
    gallery: [projectAssets["wanpuck-v2"].screenshot],
    imageAlt:
      "WanPuck Upholstery V2 redesigned website with modern layout and gallery",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByFilter(filter: FilterKey): Project[] {
  if (filter === "ALL") return projects;
  return projects.filter((p) => p.filter === filter);
}
