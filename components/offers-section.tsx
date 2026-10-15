import { ArrowRight } from "lucide-react";

import { offers } from "@/lib/offers";
import { whatsappHref, whatsappMessages } from "@/lib/site";

/** 06 Offers & deals. Hairline cards, serif numerals, text-link claims. */
export function OffersSection({ eyebrow = "04 — Offers" }: { eyebrow?: string }) {
  return (
    <section id="offers" className="lux-section scroll-mt-24 bg-ivory">
      <div className="lux-container">
        <p className="eyebrow text-center text-gold-ink">{eyebrow}</p>
        <h2 className="lux-h2 mt-4 text-center text-ink">
          Offers & <em>happy deals</em>
        </h2>
        <p className="mx-auto mt-3 max-w-[48ch] text-center font-heading text-[1.35rem] text-ink-soft">This week at The 90s Club. Claim on WhatsApp, confirmed on the day.</p>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line md:grid-cols-3">
          {offers.map((offer) => (
            <li key={offer.id} className="flex flex-col bg-ivory px-8 py-10 lg:px-10 lg:py-12">
              {offer.note ? <p className="eyebrow text-gold-ink">{offer.note}</p> : null}
              <p className="mt-6 font-heading text-[clamp(3rem,2rem+3vw,4.5rem)] leading-none font-medium text-ink tabular-nums">
                {offer.headline}
              </p>
              <h3 className="lux-h3 mt-4 text-ink">{offer.title}</h3>
              <p className="prose-body mt-3 flex-1 text-ink-soft">{offer.copy}</p>
              <a
                href={whatsappHref(whatsappMessages.offer(offer.title))}
                target="_blank"
                rel="noopener noreferrer"
                className="lux-link mt-8 w-fit"
              >
                Claim offer
                <ArrowRight aria-hidden="true" className="size-4" />
                <span className="sr-only"> (opens WhatsApp in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
