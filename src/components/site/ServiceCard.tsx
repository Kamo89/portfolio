import { Reveal } from "./Reveal";

export function ServiceCard({
  number,
  title,
  description,
  delay = 0,
}: {
  number: string;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <Reveal
      as="li"
      delay={delay}
      className="group relative flex flex-col gap-3 border-t border-line py-8 transition-colors hover:border-primary"
    >
      <span className="font-display text-xs tracking-[0.2em] text-primary">{number}</span>
      <h3 className="text-xl font-semibold transition-transform duration-500 group-hover:translate-x-1 sm:text-2xl">
        {title}
      </h3>
      <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </Reveal>
  );
}