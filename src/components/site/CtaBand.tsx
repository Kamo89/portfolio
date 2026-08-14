import { Link } from "@tanstack/react-router";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/data/site";
import { Reveal } from "./Reveal";

export function CtaBand({
  title = "Have a project in mind?",
  description = "Tell me what you're building, what your business needs, or what you'd like to improve.",
}: {
  title?: string;
  description?: string;
}) {
  const wa = buildWhatsAppLink(defaultWhatsAppMessage());

  return (
    <section className="border-t border-line">
      <div className="container-page py-20 md:py-28">
        <Reveal className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-4xl leading-[1.03] font-semibold text-balance sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3.5 font-display text-xs tracking-[0.16em] text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              START A PROJECT
            </Link>
            {wa ? (
              <a
                href={wa}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center rounded-full border border-line px-6 py-3.5 font-display text-xs tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
              >
                CHAT ON WHATSAPP
              </a>
            ) : (
              <Link
                to="/work"
                className="inline-flex items-center rounded-full border border-line px-6 py-3.5 font-display text-xs tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
              >
                VIEW MY WORK
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}