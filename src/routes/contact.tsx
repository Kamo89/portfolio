import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { SocialLinks } from "@/components/site/SocialLinks";
import { Reveal } from "@/components/site/Reveal";
import {
  brand,
  buildWhatsAppLink,
  contactConfig,
  defaultWhatsAppMessage,
} from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Start a Project | SitesByKamo" },
      {
        name: "description",
        content:
          "Tell SitesByKamo what you're building, what your business needs, or what you'd like to improve. Send a project enquiry or chat on WhatsApp.",
      },
      { property: "og:title", content: "Start a Project | SitesByKamo" },
      {
        property: "og:description",
        content:
          "Send a project enquiry for a website, online store or digital product.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const wa = buildWhatsAppLink(defaultWhatsAppMessage());

  return (
    <>
      <header className="glow-top pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-page max-w-3xl">
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-primary" aria-hidden="true" />
            Contact
          </p>
          <h1 className="mt-6 text-[2.4rem] leading-[0.98] font-semibold text-balance sm:text-6xl">
            Have a project in mind?
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell me what you're building, what your business needs, or what you'd like to
            improve.
          </p>
        </div>
      </header>

      <section className="container-page grid gap-14 pb-24 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <Reveal className="rounded-lg border border-line bg-surface/40 p-6 sm:p-10">
          <ContactForm />
        </Reveal>

        <Reveal delay={120} className="grid content-start gap-8">
          <div>
            <p className="eyebrow">Direct</p>
            <ul className="mt-5 grid gap-4">
              <li className="flex items-start gap-3 text-sm">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {contactConfig.email ? (
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="transition-colors hover:text-primary"
                  >
                    {contactConfig.email}
                  </a>
                ) : (
                  <span className="text-muted-foreground">
                    Email address to be configured
                  </span>
                )}
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MessageCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {wa ? (
                  <a
                    href={wa}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="transition-colors hover:text-primary"
                  >
                    Chat on WhatsApp
                  </a>
                ) : (
                  <span className="text-muted-foreground">
                    WhatsApp number to be configured
                  </span>
                )}
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {brand.location}
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Elsewhere</p>
            <SocialLinks className="mt-5" />
          </div>

          <div className="rounded-lg border border-line bg-surface/40 p-6">
            <p className="font-display text-sm tracking-[0.16em]">WHAT HAPPENS NEXT</p>
            <ol className="mt-4 grid gap-3 text-sm text-muted-foreground">
              <li>1 — I read your enquiry and come back with questions.</li>
              <li>2 — We agree on scope, timeline and cost.</li>
              <li>3 — Design, build, review, launch.</li>
            </ol>
          </div>
        </Reveal>
      </section>
    </>
  );
}