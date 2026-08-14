import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";
import { StatusBadge } from "./StatusBadge";
import { VideoPreview } from "./VideoPreview";

export function ProjectCard({
  project,
  size = "md",
  priority = false,
  className,
}: {
  project: Project;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
  className?: string;
}) {
  const media = {
    sm: "aspect-[4/3]",
    md: "aspect-[4/3] sm:aspect-[16/11]",
    lg: "aspect-[4/3] sm:aspect-[16/9]",
  }[size];

  return (
    <article className={cn("group relative", className)}>
      <Link
        to="/projects/$projectId"
        params={{ projectId: project.slug }}
        className="block focus:outline-none"
        aria-label={`View the ${project.name} project`}
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-lg border border-line bg-surface",
            media,
          )}
        >
          {project.video ? (
            <VideoPreview
              videoSrc={project.video}
              posterSrc={project.image}
              alt={project.imageAlt}
            />
          ) : (
            <img
              src={project.image}
              alt={project.imageAlt}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-80" />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {project.status.map((s) => (
              <StatusBadge key={s} status={s} />
            ))}
          </div>
          <span className="absolute right-4 bottom-4 grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>

        <div className="mt-5 grid gap-3">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3
              className={cn(
                "min-w-0 font-semibold",
                size === "lg" ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
              )}
            >
              {project.name}
            </h3>
            <span className="eyebrow shrink-0">{project.category}</span>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-2">
            {project.technologies.slice(0, 4).map((t) => (
              <span
                key={t}
                className="font-display text-[11px] tracking-[0.14em] text-muted-foreground/80"
              >
                {t.toUpperCase()}
              </span>
            ))}
          </div>
          <span className="mt-1 inline-flex items-center gap-2 font-display text-xs tracking-[0.18em] text-foreground">
            VIEW PROJECT
            <span className="h-px w-8 bg-primary transition-all duration-300 group-hover:w-14" />
          </span>
        </div>
      </Link>
    </article>
  );
}