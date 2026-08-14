import { Link } from "@tanstack/react-router";
import { brand, navLinks, contactConfig } from "@/data/site";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/30">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div className="max-w-sm">
          <p className="font-display text-lg font-bold tracking-[0.2em]">
            {brand.wordmark}
            <span className="text-primary">.</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Modern websites and digital experiences for businesses, brands and
            entrepreneurs.
          </p>
          <SocialLinks className="mt-6" />
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow">Navigation</p>
          <ul className="mt-5 grid gap-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
            <li>
              {contactConfig.email ? (
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {contactConfig.email}
                </a>
              ) : (
                <span className="text-muted-foreground/60">
                  Email — to be configured
                </span>
              )}
            </li>
            <li>
              {contactConfig.whatsapp ? (
                <span>{contactConfig.whatsapp}</span>
              ) : (
                <span className="text-muted-foreground/60">
                  WhatsApp — to be configured
                </span>
              )}
            </li>
            <li>{brand.location}</li>
            <li className="pt-2">
              <Link
                to="/contact"
                className="font-display text-xs tracking-[0.16em] text-foreground"
              >
                START A PROJECT →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SitesByKamo</p>
          <p>Designed &amp; built by {brand.owner}</p>
        </div>
      </div>
    </footer>
  );
}