import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CtaBand } from "@/components/site/CtaBand";
import { filters, projects, type FilterKey } from "@/data/projects";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects | SitesByKamo" },
      {
        name: "description",
        content:
          "Browse every SitesByKamo project by category: business websites, ecommerce stores, digital products, creator platforms, service businesses and experimental tooling.",
      },
      { property: "og:title", content: "Projects | SitesByKamo" },
      {
        property: "og:description",
        content:
          "Business websites, ecommerce, digital products, creator platforms and developer tooling.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<FilterKey>("ALL");
  const list = active === "ALL" ? projects : projects.filter((p) => p.filter === active);

  return (
    <>
      <header className="glow-top pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-page max-w-3xl">
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-primary" aria-hidden="true" />
            Projects
          </p>
          <h1 className="mt-6 text-[2.4rem] leading-[0.98] font-semibold text-balance sm:text-6xl">
            The full portfolio.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Client projects, products and concepts — each one labelled honestly so you
            know exactly what you're looking at.
          </p>
        </div>
      </header>

      <div className="sticky top-[68px] z-30 border-y border-line bg-background/85 backdrop-blur-xl">
        <div
          className="container-page flex gap-2 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="group"
          aria-label="Filter projects by category"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 font-display text-[11px] tracking-[0.16em] transition-colors",
                active === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-line text-muted-foreground hover:border-primary/60 hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <section className="container-page py-16 md:py-24">
        <p className="eyebrow">
          {list.length} {list.length === 1 ? "project" : "projects"}
        </p>
        <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              size="sm"
              priority={i < 3}
            />
          ))}
        </div>
      </section>

      <CtaBand title="Not seeing your kind of project?" description="Tell me what you need and I'll tell you exactly how I'd build it." />
    </>
  );
}