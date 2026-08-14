import { brand, technologies } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { TechnologyBadge } from "./TechnologyBadge";
import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <section className="border-t border-line" aria-labelledby="about-heading">
      <div className="container-page grid gap-14 py-20 md:py-28 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="About"
            title={<span id="about-heading">{brand.owner}</span>}
          />
          <p className="mt-4 font-display text-sm tracking-[0.16em] text-primary">
            {brand.role.toUpperCase()}
          </p>
          <div className="mt-6 grid gap-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I build websites and digital products for businesses, brands,
              entrepreneurs and creators — from service businesses that need to look
              credible online, to ecommerce brands selling through social media, to
              early-stage products that need to exist before they can be tested.
            </p>
            <p>
              My work sits between design and engineering: interface and experience on
              one side, product thinking, automation and technical problem solving on
              the other. That combination means a project doesn't stop at a nice-looking
              page — it gets built, tested and shipped as something practical the
              business can actually run on.
            </p>
          </div>
        </div>

        <Reveal delay={100}>
          <p className="eyebrow">Technologies used across these projects</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {technologies.map((t) => (
              <li key={t}>
                <TechnologyBadge label={t} />
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
            {[
              { value: "14", label: "Projects & products" },
              { value: "6", label: "Industries" },
              { value: "100%", label: "Mobile-first builds" },
            ].map((s) => (
              <div key={s.label} className="bg-background p-6">
                <p className="font-display text-3xl font-semibold">{s.value}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}