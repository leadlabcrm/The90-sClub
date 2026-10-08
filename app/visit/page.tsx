import { CtaRow } from "@/components/cta-row";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { MapEmbed } from "@/components/map-embed";
import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/text-link";
import { VenuePhoto } from "@/components/venue-photo";
import { visitFaqs } from "@/lib/faq";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { faqPageJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { address, hours, links, phone } from "@/lib/site";

export const metadata = pageMetadata(seo.visit);

export default function VisitPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(visitFaqs)} />
      <PageHero
        eyebrow="Electronic City · Hebbagodi"
        title="Visit The 90s Club — Millennium Plaza, Hebbagodi"
        lede="Phone, WhatsApp, Instagram, hours, and the map live on this page."
        photo={photos.streetSign}
      />

      <section className="lux-section bg-ivory">
        <div className="lux-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <p className="eyebrow text-gold-ink">Hosur Road, Hebbagodi</p>
            <h2 className="lux-h2 mt-3 text-ink">Address</h2>
            <address className="prose-body mt-4 space-y-1 not-italic text-ink-soft">
              <span className="block">{address.line1}</span>
              <span className="block">{address.line2}</span>
              <span className="block">{address.line3}</span>
              <span className="block">{address.line4}</span>
            </address>
            <p className="mt-4 text-sm leading-6 text-ink-soft">
              Directions opens the Google listing. The map is a search for this address.
            </p>
            <CtaRow className="mt-7" tone="onLight" items={["directions", "call"]} />
          </div>
          <MapEmbed className="min-h-[24rem] rounded-[var(--radius-photo)]" />
        </div>
      </section>

      <section className="bg-ivory pb-8">
        <div className="lux-container grid gap-5 sm:grid-cols-2">
          <VenuePhoto
            photo={photos.streetSign}
            aspect="tall"
            caption="The venue sign at Millennium Plaza, cropped above the phone line on the board."
          />
          <VenuePhoto photo={photos.neonBar} caption="The bar inside The 90s Club." />
        </div>
      </section>

      <section className="lux-section bg-ivory">
        <div className="lux-container grid gap-10 md:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow text-gold-ink">Every day</p>
            <h2 className="lux-h2 mt-3 text-ink">Hours</h2>
            <p className="mt-3 text-sm text-ink-soft">Times are the venue’s local time in Bangalore.</p>
            <table className="mt-5 w-full text-left text-sm">
              <caption className="sr-only">Opening hours, Monday to Sunday</caption>
              <tbody>
                {hours.days.map((day) => (
                  <tr key={day} className="border-b border-line">
                    <th scope="row" className="py-2.5 pr-4 font-medium text-ink">
                      {day}
                    </th>
                    <td className="py-2.5 text-ink-soft">12:00 pm – 12:00 am</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <p className="eyebrow text-gold-ink">Direct to the venue</p>
            <h2 className="lux-h2 mt-3 text-ink">Phone and WhatsApp</h2>
            <p className="mt-4 font-heading text-3xl text-gold-ink tabular-nums">
              <a className="underline decoration-line underline-offset-4 hover:text-gold" href={phone.href}>
                {phone.display}
              </a>
            </p>
            <p className="mt-3 text-sm leading-6 text-ink-soft">
              WhatsApp uses the same number. Akhil takes calls after 12 pm.
            </p>
            <h3 className="lux-h3 mt-8 text-ink">Parking</h3>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              Parking is available at the plaza. Ask the team on arrival if you need a specific bay.
            </p>
            <h3 className="lux-h3 mt-8 text-ink">Getting here</h3>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              The 90s Club is at Millennium Plaza on Hosur Road, Hebbagodi — about 2 km from E-City Phase 1
              (Infosys/Velankani), with Phase 2, Bommasandra and Ananth Nagar in the same catchment. See{" "}
              <TextLink href="/occasions">directions from E-City Phase 1</TextLink> for group visits, or the{" "}
              <TextLink href="/menu">menu</TextLink>.
            </p>
          </div>
        </div>
      </section>

      <section className="lux-section bg-ivory">
        <div className="lux-container">
          <FaqList items={visitFaqs} />
        </div>
      </section>

      <section className="lux-section bg-black text-cream">
        <div className="lux-container">
          <p className="eyebrow text-gold-highlight">Call · chat · follow</p>
          <h2 className="lux-h2 mt-3">Contact The 90s Club</h2>
          <p className="prose-body mt-4 text-cream/85">
            Call, WhatsApp, or Instagram {links.instagramHandle}. There is no enquiry form — the phone is the direct
            line.
          </p>
          <p className="mt-3 max-w-[62ch] text-sm leading-6 text-cream/85">
            The Google listing for this address includes live music, karaoke, and dancing.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            {["Live music", "Karaoke", "Dancing"].map((item) => (
              <li key={item} className="rounded-full border border-cream/30 px-3 py-1 text-cream">
                {item}
              </li>
            ))}
          </ul>
          <CtaRow className="mt-7" tone="onDark" items={["call", "whatsapp", "instagram", "directions"]} />
          <p className="mt-6 text-sm text-cream/80">
            Kitchen and rooftop notes:{" "}
            <TextLink href="/menu" tone="onDark">
              menu
            </TextLink>
            {" · "}
            <TextLink href="/kerala-food" tone="onDark">
              Kerala food
            </TextLink>
            {" · "}
            <TextLink href="/rooftop-pub" tone="onDark">
              rooftop pub
            </TextLink>
          </p>
        </div>
      </section>
    </>
  );
}
