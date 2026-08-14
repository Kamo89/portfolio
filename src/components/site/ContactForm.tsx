import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  budgetRanges,
  buildWhatsAppLink,
  defaultWhatsAppMessage,
  projectTypes,
  timelines,
} from "@/data/site";

const fieldClass =
  "w-full rounded-md border border-line bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none";
const labelClass = "eyebrow block";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const business = String(data.get("business") ?? "");
    const description = String(data.get("description") ?? "");

    setSubmitting(true);

    const wa = buildWhatsAppLink(defaultWhatsAppMessage(business, description));
    if (wa) {
      window.open(wa, "_blank", "noopener,noreferrer");
      toast.success("Opening WhatsApp with your enquiry.");
    } else {
      toast.success("Enquiry captured", {
        description:
          "No email or WhatsApp destination is connected yet, so nothing was sent. Add the contact details in the site configuration to enable delivery.",
      });
    }

    form.reset();
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
        </div>
        <div className="grid gap-2">
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="you@business.com"
          />
        </div>
        <div className="grid gap-2">
          <label className={labelClass} htmlFor="whatsapp">
            WhatsApp number
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            inputMode="tel"
            className={fieldClass}
            placeholder="+27 ..."
          />
        </div>
        <div className="grid gap-2">
          <label className={labelClass} htmlFor="business">
            Business / Company
          </label>
          <input
            id="business"
            name="business"
            className={fieldClass}
            placeholder="Business name"
          />
        </div>
        <div className="grid gap-2">
          <label className={labelClass} htmlFor="projectType">
            Project type
          </label>
          <select id="projectType" name="projectType" required className={fieldClass}>
            <option value="">Select a project type</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <label className={labelClass} htmlFor="budget">
            Budget range (optional)
          </label>
          <select id="budget" name="budget" className={fieldClass}>
            <option value="">Select a range</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <label className={labelClass} htmlFor="timeline">
            Timeline (optional)
          </label>
          <select id="timeline" name="timeline" className={fieldClass}>
            <option value="">Select a timeline</option>
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-2">
        <label className={labelClass} htmlFor="description">
          Project description
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className={fieldClass}
          placeholder="What are you building, and what should it do for your business?"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 font-display text-xs tracking-[0.16em] text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        SEND PROJECT ENQUIRY
      </button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        This form is not connected to an email service yet. Submitting composes your
        enquiry into WhatsApp once a WhatsApp number is configured.
      </p>
    </form>
  );
}