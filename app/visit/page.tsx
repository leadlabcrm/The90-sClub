import { Phone } from "lucide-react";

import { ClosingBand } from "@/components/closing-band";
import { IconCircle } from "@/components/icon-circle";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { MapEmbed } from "@/components/map-embed";
import { PageHero } from "@/components/page-hero";
import { PillLink } from "@/components/pill";
import { TextLink } from "@/components/text-link";
import { visitFaqs } from "@/lib/faq";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { faqPageJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { address, areas, hours, links, metro, phone, whatsappHref, whatsappMessages } from "@/lib/site";

export const metadata = pageMetadata(seo.visit);

export default function VisitPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(visitFaqs)} />
      <PageHero
        eyebrow="Electronic City · Hebbagodi"
        title="Find The 90s Club"
        lede="Millennium Plaza on Hosur Road, Hebbagodi. Open daily noon to midnight, parking on site, Biocon Hebbagodi metro nearby."
        photo={photos.streetSign}
      />

      <section className="lux-section bg-ivory">
        <div className="lux-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="eyebrow text-gold-ink">01 — Address</p>
            <h2 className="lux-h2 mt-4 text-ink">Address</h2>
            <address className="prose-body mt-6 space-y-1 not-italic text-ink">
              <span className="block">{address.line1}</span>
              <span className="block">{address.line2}</span>
              <span className="block">{address.line3}</span>
              <span className="block">{address.line4}</span>
            </address>
            <p className="mt-5 text-sm leading-6 text-ink-soft">
              Millennium Plaza is on Hosur Road, next to the Biocon campus. Nearest metro: {metro.station},{" "}
              {metro.line}.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PillLink href={links.directions} tone="gold" external>
                Get directions
              </PillLink>
              <IconCircle href={phone.href} label={`Call ${phone.display}`} Icon={Phone} />
            </div>
          </div>
          <MapEmbed className="min-h-[24rem] rounded-[var(--radius-photo)]" />
        </div>
      </section>


      <section className="bg-ivory pb-[var(--section-y)]">
        <div className="lux-container grid gap-12 md:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow text-gold-ink">02 — Hours</p>
            <h2 className="lux-h2 mt-4 text-ink">Hours</h2>
            <table className="mt-8 w-full text-left text-sm">
              <caption className="sr-only">Opening hours, Monday to Sunday</caption>
              <tbody>
                {hours.days.map((day) => (
                  <tr key={day} className="border-b border-line">
                    <th scope="row" className="py-3 pr-4 font-medium text-ink">
                      {day}
                    </th>
                    <td className="py-3 text-ink-soft tabular-nums">{hours.short}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-sm leading-6 text-ink-soft">{hours.eventNights}. Thursday to Saturday are the busy nights.</p>
          </div>
          <div>
            <p className="eyebrow text-gold-ink">03 — Contact</p>
            <h2 className="lux-h2 mt-4 text-ink">Phone and WhatsApp</h2>
            <p className="mt-6 font-heading text-[2rem] text-gold-ink tabular-nums">
              <a className="underline decoration-gold/50 underline-offset-8 hover:text-gold" href={phone.href}>
                {phone.display}
              </a>
            </p>
            <p className="mt-3 text-sm leading-6 text-ink-soft">
              One number for calls and WhatsApp, answered whenever the taproom is open. For a group, send the date,
              headcount and time through the <TextLink href="/occasions">party enquiry form</TextLink>.
            </p>
            <h3 className="lux-h3 mt-10 text-ink">Parking</h3>
            <p className="mt-2 text-sm leading-6 text-ink-soft">Parking is available at Millennium Plaza.</p>
            <h3 className="lux-h3 mt-8 text-ink">Who comes here</h3>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              Guests from {areas.join(", ")}, and the office crowd from E-City Phase 1 and Phase 2, about two kilometres
              up Hosur Road.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-[var(--section-y)]">
        <div className="lux-container">
          <FaqList items={visitFaqs} eyebrow="04 — FAQ" />
        </div>
      </section>

      <ClosingBand
        eyebrow="05 — Get in Touch"
        title={<>Contact <em>The 90s Club</em></>}
        items={["whatsapp", "call", "instagram", "directions"]}
        whatsappMessage={whatsappMessages.visit}
        callLabel={`Call ${phone.display}`}
      >
        <p>
          WhatsApp for a table, call for anything else, and follow {links.instagramHandle} on Instagram for event
          nights, live music, karaoke and new plates from the kitchen.{" "}
          <a href={whatsappHref(whatsappMessages.subscribe)} target="_blank" rel="noopener noreferrer" className="underline decoration-gold/70 underline-offset-4 hover:text-gold-highlight">
            Join the WhatsApp list
            <span className="sr-only"> (opens in a new tab)</span>
          </a>{" "}
          for weekly offers.
        </p>
      </ClosingBand>
    </>
  );
}
