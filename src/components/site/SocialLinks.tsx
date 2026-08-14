import { Github, Linkedin, Instagram, MessageCircle, Mail } from "lucide-react";
import { contactConfig, buildWhatsAppLink, defaultWhatsAppMessage } from "@/data/site";
import { cn } from "@/lib/utils";

export function SocialLinks({ className }: { className?: string }) {
  const wa = buildWhatsAppLink(defaultWhatsAppMessage());
  const items = [
    { label: "GitHub", href: contactConfig.github, Icon: Github },
    { label: "LinkedIn", href: contactConfig.linkedin, Icon: Linkedin },
    { label: "Instagram", href: contactConfig.instagram, Icon: Instagram },
    { label: "WhatsApp", href: wa ?? "", Icon: MessageCircle },
    {
      label: "Email",
      href: contactConfig.email ? `mailto:${contactConfig.email}` : "",
      Icon: Mail,
    },
  ];

  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      {items.map(({ label, href, Icon }) =>
        href ? (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        ) : (
          <li key={label}>
            <span
              title={`${label} link not configured yet`}
              className="grid h-11 w-11 cursor-not-allowed place-items-center rounded-full border border-dashed border-line text-muted-foreground/40"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">{label} — not configured</span>
            </span>
          </li>
        ),
      )}
    </ul>
  );
}