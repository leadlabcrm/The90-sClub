import { Beer, Briefcase, Sparkles } from "lucide-react";

import { PillLink } from "@/components/pill";
import { offers } from "@/lib/offers";
import { whatsappHref, whatsappMessages } from "@/lib/site";

const icons = {
  "bucket-beer-combo": Beer,
  "bogo-drinks": Sparkles,
  "weekday-team-lunch": Briefcase,
} as const;

/** 06 Offers & deals. Each claim opens WhatsApp with the offer named. */
export function OffersSection() {
  return (
    <section id="offers" className="lux-section scroll-mt-24 bg-black text-ivory">
      <div className="lux-container">
        <p className="eyebrow text-center text-gold-highlight">This week at The 90s Club</p>
        <h2 className="lux-h2 mt-3 text-center">
          Offers & <em>happy deals</em>
        </h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {offers.map((offer) => {
            const Icon = icons[offer.id as keyof typeof icons] ?? Sparkles;
            return (
              <li
                key={offer.id}
                className="flex flex-col rounded-[var(--radius-card)] border border-gold/30 bg-charcoal p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-12 items-center justify-center rounded-full border border-gold/50 text-gold">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.6} />
                  </span>
                  {offer.note ? (
                    <span className="rounded-full border border-ivory/25 px-3 py-1 text-[0.65rem] tracking-[0.14em] text-ivory/80 uppercase">
                      {offer.note}
                    </span>
                  ) : null}
                </div>
                <p className="mt-6 font-heading text-[2.5rem] leading-none font-semibold text-gold-highlight tabular-nums">
                  {offer.headline}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{offer.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ivory/80">{offer.copy}</p>
                <PillLink
                  href={whatsappHref(whatsappMessages.offer(offer.title))}
                  tone="outlineLight"
                  external
                  className="mt-6 w-fit"
                >
                  Claim offer
                </PillLink>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-center text-xs text-ivory/60">
          Offers change week to week and are confirmed by the team on the day. Please drink responsibly.
        </p>
      </div>
    </section>
  );
}
