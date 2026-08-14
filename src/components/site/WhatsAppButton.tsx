import { MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/data/site";

export function WhatsAppButton() {
  const href = buildWhatsAppLink(defaultWhatsAppMessage());

  const content = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-foreground/15">
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="hidden max-w-0 overflow-hidden font-display text-xs tracking-[0.16em] whitespace-nowrap transition-all duration-500 group-hover:max-w-[16rem] group-hover:pr-2 group-focus-visible:max-w-[16rem] sm:inline">
        START A PROJECT ON WHATSAPP
      </span>
    </>
  );

  const classes =
    "group fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-primary p-1.5 text-primary-foreground shadow-[0_20px_45px_-18px_oklch(0_0_0/0.9)] transition-transform hover:scale-[1.03] sm:right-6 sm:bottom-6";

  if (!href) {
    return (
      <Link
        to="/contact"
        className={classes}
        aria-label="Start a project — WhatsApp number not configured yet, opens the contact page"
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={classes}
      aria-label="Start a project on WhatsApp"
    >
      {content}
    </a>
  );
}