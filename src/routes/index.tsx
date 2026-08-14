import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ServiceCard } from "@/components/site/ServiceCard";
import { ProcessSection } from "@/components/site/ProcessSection";
import { AboutSection } from "@/components/site/AboutSection";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { capabilities, services, whyItems } from "@/data/site";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SitesByKamo | Websites That Work. Designs That Impact." },
      {
        name: "description",
        content:
          "SitesByKamo builds modern websites, ecommerce experiences and digital products for businesses, brands, creators and entrepreneurs.",
      },
      {
        property: "og:title",
        content: "SitesByKamo | Websites That Work. Designs That Impact.",
      },
      {
        property: "og:description",
        content:
          "Modern websites, ecommerce experiences and digital products built to turn visitors into enquiries.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const homeFeatured = [
  "extreme-ethics",
  "wanpuck-v2",
  "auralink",
  "sole-society",
  "venta",
  "empty",
  "petpal",
  "wanpuck-v1",
  "private-location",
];

const LAYOUT = [
  { span: "lg:col-span-12", size: "lg" },      // Row 1: full-width — 1 project
  { span: "lg:col-span-7", size: "md" },       // Row 2: 7/5 split — 2 projects
  { span: "lg:col-span-5", size: "sm" },
  { span: "lg:col-span-5", size: "sm" },       // Row 3: 5/7 split — 2 projects
  { span: "lg:col-span-7", size: "md" },
  { span: "lg:col-span-12", size: "lg" },      // Row 4: full-width — 1 project
  { span: "lg:col-span-4", size: "sm" },       // Row 5: 4/4/4 three-column — 3 projects
  { span: "lg:col-span-4", size: "sm" },
  { span: "lg:col-span-4", size: "sm" },
] as const;

function Index() {
  const selected = homeFeatured
    .map((id) => projects.find((p) => p.slug === id))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  return (
    <>
      <Hero />
      <Marquee items={capabilities} />

      <section className="border-t border-line" aria-labelledby="work-heading">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow="Selected work"
            title={<span id="work-heading">Work that earns the enquiry</span>}
            description="Client websites, ecommerce experiences and digital products — built around what the business actually needs to happen."
            action={
              <Link
                to="/projects"
                className="inline-flex items-center rounded-full border border-line px-5 py-3 font-display text-xs tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
              >
                ALL PROJECTS
              </Link>
            }
          />

          <div className="mt-14 grid gap-x-8 gap-y-16 lg:grid-cols-12">
            {selected.map((project, i) => {
              const layout = LAYOUT[i % LAYOUT.length] ?? LAYOUT[0];
              return (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  size={layout.size}
                  priority={i === 0}
                  className={layout.span}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="services-heading">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow="Services"
            title={<span id="services-heading">What I build</span>}
            description="From a first business website to a working product prototype."
            action={
              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-line px-5 py-3 font-display text-xs tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
              >
                ALL SERVICES
              </Link>
            }
          />
          <ul className="mt-12 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.number} {...s} delay={i * 60} />
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="why-heading">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow="Why SitesByKamo"
            title={<span id="why-heading">Built for the business, not the template</span>}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 70}
                className="rounded-lg border border-line bg-surface/50 p-7 transition-colors hover:border-primary/50"
              >
                <h3 className="font-display text-sm tracking-[0.16em]">
                  {item.title.toUpperCase()}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <AboutSection />
      <CtaBand />
    </>
  );
}