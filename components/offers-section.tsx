import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { offers } from "@/lib/offers";
import { stock, type Photo } from "@/lib/photos";
import { whatsappHref, whatsappMessages } from "@/lib/site";

const offerPhotos: Record<string, Photo> = {
  "bucket-beer-combo": stock.beerBucket,
  "bogo-drinks": stock.beerPour,
  "weekday-team-lunch": stock.teamLunch,
};

/** 06 Offers & deals. Hairline cards with a photo, serif numerals, text-link claims. */
export function OffersSection() {
  return (
    <section id="offers" className="lux-section scroll-mt-24 bg-ivory">
      <div className="lux-container">
        <p className="eyebrow text-center text-gold-ink">04 — Offers</p>
        <h2 className="lux-h2 mt-4 text-center text-ink">
          Offers & <em>happy deals</em>
        </h2>
        <p className="mx-auto mt-3 max-w-[48ch] text-center font-heading text-[1.35rem] text-ink-soft">This week at The 90s Club. Claim on WhatsApp, confirmed on the day.</p>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line md:grid-cols-3">
          {offers.map((offer) => (
            <li key={offer.id} className="flex flex-col bg-ivory">
              {offerPhotos[offer.id] ? (
                <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
                  <Image
                    src={offerPhotos[offer.id].src}
                    alt={offerPhotos[offer.id].alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                    style={offerPhotos[offer.id].position ? { objectPosition: offerPhotos[offer.id].position } : undefined}
                  />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col px-8 py-9 lg:px-10 lg:py-10">
              {offer.note ? <p className="eyebrow text-gold-ink">{offer.note}</p> : null}
              <p className="mt-5 font-heading text-[clamp(2.75rem,2rem+2.5vw,4rem)] leading-none font-medium text-ink tabular-nums">
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
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs tracking-wide text-ink-soft">
          Offers change week to week and are confirmed by the team on the day. Please drink responsibly.
        </p>
      </div>
    </section>
  );
}
