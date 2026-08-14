import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { brand, navLinks, buildWhatsAppLink, defaultWhatsAppMessage } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const waLink = buildWhatsAppLink(defaultWhatsAppMessage());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-line bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:flex lg:justify-between"
      >
        <Link
          to="/"
          className="min-w-0 font-display text-base font-bold tracking-[0.2em] whitespace-nowrap"
        >
          {brand.wordmark}
          <span className="text-primary">.</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="font-display text-xs tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              >
                {l.label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {waLink && (
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden rounded-full bg-primary px-5 py-2.5 font-display text-xs tracking-[0.16em] text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              LET'S TALK
            </a>
          )}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={cn(
                  "absolute left-0 block h-px w-5 bg-foreground transition-transform duration-300",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-px w-5 bg-foreground transition-transform duration-300",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-background lg:hidden"
      >
        <ul className="container-page grid gap-1 py-6">
          {navLinks.map((l, i) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                style={{ transitionDelay: `${i * 30}ms` }}
                className="block border-b border-line/60 py-4 font-display text-2xl tracking-tight text-muted-foreground transition-colors data-[status=active]:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            {waLink && (
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-4 font-display text-xs tracking-[0.16em] text-primary-foreground"
              >
                LET'S TALK
              </a>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}