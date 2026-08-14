import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/data/projects";

const tone: Record<ProjectStatus, string> = {
  LIVE: "border-emerald-400/40 text-emerald-300",
  "CLIENT PROJECT": "border-primary/50 text-primary",
  PROTOTYPE: "border-violet-400/40 text-violet-300",
  CONCEPT: "border-line text-muted-foreground",
  REDESIGN: "border-sky-400/40 text-sky-300",
  EXPERIMENTAL: "border-line text-muted-foreground",
};

export function StatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border bg-background/60 px-2.5 py-1 font-display text-[10px] tracking-[0.16em] backdrop-blur-sm",
        tone[status],
        className,
      )}
    >
      {status}
    </span>
  );
}