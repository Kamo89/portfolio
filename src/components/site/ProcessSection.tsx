import { processSteps } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function ProcessSection() {
  return (
    <section className="border-t border-line" aria-labelledby="process-heading">
      <div className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Process"
          title={<span id="process-heading">How a project runs</span>}
          description="A clear, five-step path from first conversation to a live product."
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              delay={i * 80}
              className="group relative bg-background p-7 transition-colors hover:bg-surface"
            >
              <span className="font-display text-4xl leading-none font-semibold text-line transition-colors duration-500 group-hover:text-primary">
                {step.number}
              </span>
              <h3 className="mt-6 font-display text-sm tracking-[0.16em]">
                {step.title.toUpperCase()}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}