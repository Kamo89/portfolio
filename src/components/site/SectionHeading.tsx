import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end",
        align === "center" && "md:grid-cols-1 md:justify-items-center md:text-center",
        className,
      )}
    >
      <div className={cn("min-w-0 max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow ? (
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-primary" aria-hidden="true" />
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-4 text-3xl leading-[1.05] font-semibold text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </Reveal>
  );
}