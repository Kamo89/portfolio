import { createFileRoute } from "@tanstack/react-router";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProcessSection } from "@/components/site/ProcessSection";
import { CtaBand } from "@/components/site/CtaBand";
import { TechnologyBadge } from "@/components/site/TechnologyBadge";
import { Reveal } from "@/components/site/Reveal";
import { services, technologies, whyItems, pricingTiers, addOnServices } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | SitesByKamo" },
      {
        name: "description",
        content:
          "Business websites, ecommerce stores, landing pages, UI/UX design, web applications, MVPs, redesigns and WhatsApp business integration.",
      },
      { property: "og:title", content: "Services | SitesByKamo" },
      {
        property: "og:description",
        content:
          "What SitesByKamo builds: websites, online stores, web apps, digital products and WhatsApp enquiry systems.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <header className="glow-top pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-primary" aria-hidden="true" />
            Services
          </p>
          <h1 className="mt-6 text-[2.4rem] leading-[0.98] font-semibold text-balance sm:text-6xl">
            Everything needed to get your business online properly.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Design, build and launch — handled by one person who works across the whole
            project rather than handing it between teams.
          </p>
        </div>
      </header>

      <section className="border-t border-line">
        <div className="container-page py-20 md:py-28">
          <SectionHeading eyebrow="Pricing" title="Packages to fit your budget" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier) => (
              <Reveal key={tier.name} className="rounded-lg border border-line bg-surface/50 p-7">
                <h3 className="font-display text-sm tracking-[0.16em]">
                  {tier.name.toUpperCase()}
                </h3>
                <p className="mt-3 text-2xl font-semibold text-primary">{tier.range}</p>
                <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
                  {tier.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <div className="mt-14">
            <h3 className="font-display text-sm tracking-[0.16em]">ADD-ONS</h3>
            <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-3">
              {addOnServices.map((s) => (
                <li key={s.name} className="flex justify-between border-b border-line/60 pb-2">
                  <span>{s.name}</span>
                  <span className="text-primary font-medium">{s.range}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-page py-20 md:py-28">
          <ul className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.number} {...s} delay={i * 50} />
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow="Why SitesByKamo"
            title="What you get working with me"
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

      <section className="border-t border-line">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow="Technology"
            title="Tools used across these projects"
            description="Chosen to fit the project — not to pad a list."
          />
          <ul className="mt-10 flex flex-wrap gap-2">
            {technologies.map((t) => (
              <li key={t}>
                <TechnologyBadge label={t} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Let's talk about your project." />
    </>
  );
}