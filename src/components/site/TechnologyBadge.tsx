export function TechnologyBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1.5 font-display text-xs tracking-wide text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground">
      {label}
    </span>
  );
}