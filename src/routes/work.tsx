import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CtaBand } from "@/components/site/CtaBand";
import { Marquee } from "@/components/site/Marquee";
import { capabilities } from "@/data/site";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work | SitesByKamo" },
      {
        name: "description",
        content:
          "Selected websites, ecommerce experiences and digital products built by SitesByKamo for businesses, brands and creators.",
      },
      { property: "og:title", content: "Selected Work | SitesByKamo" },
      {
        property: "og:description",
        content:
          "Client websites, ecommerce stores, service businesses and digital products — see the work.",
      },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  const withImages = projects.filter((p) => p.image);

  return (
    <>
      <header className="glow-top pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-primary" aria-hidden="true" />
            Selected work
          </p>
          <h1 className="mt-6 text-[2.4rem] leading-[0.98] font-semibold text-balance sm:text-6xl">
            Real businesses. Real products.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A closer look at the websites, stores and products I've designed and built —
            what the business needed, and what the work does for it.
          </p>
        </div>
      </header>

      <Marquee items={capabilities} />

      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Portfolio"
          title="Every project, in full"
          description="Client work is labelled as client work. Concepts and prototypes are labelled as concepts and prototypes."
        />
        <div className="mt-14 grid gap-x-8 gap-y-16 lg:grid-cols-12">
          {withImages.map((project, i) => {
            const pattern = i % 5;
            const span =
              pattern === 0
                ? "lg:col-span-12"
                : pattern === 1 || pattern === 4
                  ? "lg:col-span-7"
                  : "lg:col-span-5";
            return (
              <ProjectCard
                key={project.slug}
                project={project}
                size={pattern === 0 ? "lg" : pattern === 2 ? "sm" : "md"}
                priority={i === 0}
                className={span}
              />
            );
          })}
        </div>
      </section>

      <CtaBand title="Want something like this for your business?" />
    </>
  );
}