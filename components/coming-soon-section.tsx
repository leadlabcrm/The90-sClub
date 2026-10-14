import { ArrowRight, Bell } from "lucide-react";

import { TypographicCard } from "@/components/typographic-card";
import { WhatsappSubscribe } from "@/components/whatsapp-subscribe";
import { WhatsAppIcon } from "@/components/social-icons";
import { whatsappHref } from "@/lib/site";

/** 14 Coming soon & updates. */
export function ComingSoonSection() {
  return (
    <section className="bg-ivory pb-16 lg:pb-24">
      <div className="lux-container grid gap-6 lg:grid-cols-2">
        <div className="grid gap-6 rounded-[var(--radius-card)] border border-line bg-white p-6 sm:grid-cols-[180px_minmax(0,1fr)] sm:p-8">
          <TypographicCard title="Mangalorean" kicker="Preview" tone="dark" aspect="photo" className="sm:aspect-square" />
          <div>
            <span className="rounded-full border border-gold bg-gold/15 px-3 py-1 text-[0.65rem] tracking-[0.14em] text-gold-ink uppercase">
              Coming soon
            </span>
            <h2 className="mt-4 font-heading text-[1.9rem] leading-tight font-medium text-ink">Mangalorean Specials</h2>
            <p className="mt-3 text-sm leading-6 text-ink-soft">
              Coastal plates from Mangalore are joining the Kerala card in the next few months: ghee roasts, neer dosa
              and coconut-forward curries, cooked the way the coast does them.
            </p>
            <a
              href={whatsappHref("Hi The 90s Club, let me know when the Mangalorean specials launch.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-gold-ink"
            >
              <Bell aria-hidden="true" className="size-4" />
              Get notified
              <ArrowRight aria-hidden="true" className="size-4" />
              <span className="sr-only"> (opens WhatsApp in a new tab)</span>
            </a>
          </div>
        </div>
        <div className="rounded-[var(--radius-card)] border border-line bg-white p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold-ink">
              <WhatsAppIcon className="size-5" />
            </span>
            <div>
              <h2 className="font-heading text-[1.9rem] leading-tight font-medium text-ink">
                Offers & event nights on WhatsApp
              </h2>
              <p className="mt-2 text-sm leading-6 text-ink-soft">
                Weekly deals and new menu alerts, straight to your phone.
              </p>
            </div>
          </div>
          <WhatsappSubscribe />
          <p className="mt-3 text-xs text-ink-soft">Opens WhatsApp with an opt-in message. Reply STOP any time.</p>
        </div>
      </div>
    </section>
  );
}
