export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="hairline group relative overflow-hidden border-b border-line bg-surface/40 py-5"
      aria-label="Capabilities"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />
      <div className="animate-marquee flex w-max items-center gap-10 group-hover:[animation-play-state:paused] sm:gap-16">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10 font-display text-xs tracking-[0.28em] text-muted-foreground sm:gap-16 sm:text-sm"
          >
            {item}
            <span className="h-1.5 w-1.5 rotate-45 bg-primary" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}