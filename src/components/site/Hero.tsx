import { Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/data/site";
import { Reveal } from "./Reveal";

export function Hero() {
  const collage = projects.filter((p) => p.featured && p.image).slice(0, 6);
  const waLink = buildWhatsAppLink(defaultWhatsAppMessage());

  return (
    <section className="glow-top relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-page relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div className="relative z-10 max-w-2xl">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-primary" aria-hidden="true" />
              Independent digital studio
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[0.95] font-semibold text-balance sm:text-6xl lg:text-7xl">
              Websites that work.
              <br />
              <span className="text-primary">Designs that impact.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              SitesByKamo designs and builds modern websites, ecommerce experiences and
              digital products for businesses, brands and entrepreneurs.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3.5 font-display text-xs tracking-[0.16em] text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                VIEW MY WORK
              </Link>
              {waLink && (
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center rounded-full border border-line px-6 py-3.5 font-display text-xs tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
                >
                  LET'S WORK TOGETHER
                </a>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="grid gap-3 sm:gap-4">
              {collage.slice(0, 3).map((p, i) => (
                <figure
                  key={p.slug}
                  className="animate-float overflow-hidden rounded-lg border border-line bg-surface"
                  style={{ animationDelay: `${i * 1.4}s` }}
                >
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                  />
                </figure>
              ))}
            </div>
            <div className="grid gap-3 pt-10 sm:gap-4 sm:pt-16">
              {collage.slice(3, 6).map((p, i) => (
                <figure
                  key={p.slug}
                  className="animate-float overflow-hidden rounded-lg border border-line bg-surface"
                  style={{ animationDelay: `${i * 1.4 + 0.7}s` }}
                >
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                  />
                </figure>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </Reveal>
      </div>
    </section>
  );
}