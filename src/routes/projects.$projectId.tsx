import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects, type Project } from "@/data/projects";
import { StatusBadge } from "@/components/site/StatusBadge";
import { TechnologyBadge } from "@/components/site/TechnologyBadge";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { VideoPlayer } from "@/components/site/VideoPlayer";
import { ProjectGallery } from "@/components/site/ProjectGallery";

export const Route = createFileRoute("/projects/$projectId")({
  loader: ({ params }) => {
    const project = getProject(params.projectId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project unavailable | SitesByKamo" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} — ${project.category} | SitesByKamo`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.projectId}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.projectId}` }],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <div className="container-page py-40 text-center">
      <h1 className="text-4xl font-semibold">Project not found</h1>
      <p className="mt-4 text-muted-foreground">
        That project doesn't exist or has been renamed.
      </p>
      <Link
        to="/projects"
        className="mt-8 inline-flex rounded-full bg-primary px-6 py-3.5 font-display text-xs tracking-[0.16em] text-primary-foreground"
      >
        ALL PROJECTS
      </Link>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const related = projects
    .filter((p) => p.slug !== project.slug && p.filter === project.filter && p.image)
    .slice(0, 3);

  const links = [
    { label: "LIVE WEBSITE", href: project.liveUrl },
    { label: "GITHUB", href: project.githubUrl },
  ].filter((l) => Boolean(l.href));

  return (
    <>
      <header className="glow-top pt-28 pb-12 md:pt-36">
        <div className="container-page">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-display text-xs tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            ALL PROJECTS
          </Link>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
            <div className="min-w-0">
              <div className="flex flex-wrap gap-2">
                {project.status.map((s) => (
                  <StatusBadge key={s} status={s} />
                ))}
              </div>
              <h1 className="mt-5 text-[2.4rem] leading-[0.98] font-semibold text-balance sm:text-6xl">
                {project.name}
              </h1>
              <p className="eyebrow mt-5">{project.category}</p>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>
        </div>
      </header>

      {project.image ? (
        <div className="container-page">
          <Reveal className="overflow-hidden rounded-lg border border-line bg-surface">
            <img
              src={project.image}
              alt={project.imageAlt}
              width={1200}
              decoding="async"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      ) : null}

      {project.video ? (
        <div className="container-page mt-12">
          <Reveal>
            <VideoPlayer
              src={project.video}
              poster={project.image}
              alt={project.imageAlt}
              controls
              autoPlay={false}
            />
          </Reveal>
        </div>
      ) : null}

      {project.gallery.length > 0 ? (
        <div className="container-page mt-12">
          <Reveal>
            <ProjectGallery
              images={project.gallery.map((src) => ({ src, alt: project.imageAlt }))}
              projectName={project.name}
            />
          </Reveal>
        </div>
      ) : null}

      <section className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">The challenge</p>
          <p className="mt-5 text-lg leading-relaxed text-balance">{project.challenge}</p>
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow">The solution</p>
          <p className="mt-5 text-lg leading-relaxed text-balance">{project.solution}</p>
        </Reveal>
      </section>

      <section className="border-t border-line">
        <div className="container-page py-20 md:py-28">
          <SectionHeading eyebrow="Key features" title="What's inside" />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((f, i) => (
              <Reveal
                as="li"
                key={f}
                delay={i * 40}
                className="flex items-start gap-4 bg-background p-6"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" aria-hidden="true" />
                <span className="text-sm leading-relaxed">{f}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Technology</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <li key={t}>
                  <TechnologyBadge label={t} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Result / purpose</p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {project.result ?? project.summary}
            </p>
            {links.length > 0 ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 font-display text-xs tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
                  >
                    {l.label}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            ) : (
              <p className="mt-8 text-xs text-muted-foreground/70">
                No public links available for this project.
              </p>
            )}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-line">
          <div className="container-page py-20 md:py-28">
            <SectionHeading eyebrow="Related" title="More in this category" />
            <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} size="sm" />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand title="Want something built like this?" />
    </>
  );
}