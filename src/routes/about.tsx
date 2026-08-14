import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/site/AboutSection";
import { ProcessSection } from "@/components/site/ProcessSection";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { whyItems } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kamohelo Mosiya | SitesByKamo" },
      {
        name: "description",
        content:
          "Kamohelo Mosiya is the founder and developer behind SitesByKamo, building websites and digital products for businesses, brands, entrepreneurs and creators.",
      },
      { property: "og:title", content: "About Kamohelo Mosiya | SitesByKamo" },
      {
        property: "og:description",
        content:
          "Founder and developer behind SitesByKamo — web development, UI/UX, product thinking and automation.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <header className="glow-top pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-primary" aria-hidden="true" />
            About
          </p>
          <h1 className="mt-6 text-[2.4rem] leading-[0.98] font-semibold text-balance sm:text-6xl">
            Hi, I'm Kamo — the creator behind SitesByKamo.
          </h1>
        </div>
      </header>

      <AboutSection />

      <section className="border-t border-line">
        <div className="container-page py-20 md:py-28">
          <SectionHeading eyebrow="Approach" title="How I work" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 70}
                className="rounded-lg border border-line bg-surface/50 p-7"
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
      <CtaBand />
    </>
  );
}