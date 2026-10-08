import { CtaRow } from "@/components/cta-row";
import { MapEmbed } from "@/components/map-embed";
import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/text-link";
import { VenuePhoto } from "@/components/venue-photo";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { address, hours, links, phone } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Visit The 90s Club | Millennium Plaza, Hebbagodi, Electronic City",
  description:
    "Millennium Plaza, 396/48 Hosur Road, Hebbagodi, Electronic City 560100. Call +91 96321 48811. Open daily 12:00 pm to 12:00 am.",
  path: "/visit",
});

export default function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Electronic City · Hebbagodi"
        title="Visit The 90s Club — Millennium Plaza, Hebbagodi"
        lede="Phone, WhatsApp, Instagram, hours, and the map live on this page."
        image={photos.exteriorStreet.src}
        alt={photos.exteriorStreet.alt}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="lux-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow text-gold-ink">Fourth floor · Hosur Road</p>
            <h2 className="lux-h2 mt-4 text-ink">Address</h2>
            <address className="prose-body mt-5 space-y-1 not-italic text-ink-soft">
              <span className="block">{address.line1}</span>
              <span className="block">{address.line2}</span>
              <span className="block">{address.line3}</span>
              <span className="block">{address.line4}</span>
            </address>
            <p className="mt-5 text-base leading-7 text-ink-soft">
              Directions opens the Google listing. The map is a search for this address.
            </p>
            <CtaRow className="mt-8" tone="onLight" items={["directions", "call"]} />
          </div>
          <MapEmbed className="min-h-[28rem]" />
        </div>
      </section>

      <section className="bg-ivory pb-8">
        <div className="lux-container grid gap-6 sm:grid-cols-2">
          <VenuePhoto
            src={photos.exteriorStreet.src}
            alt={photos.exteriorStreet.alt}
            caption="The venue sign seen from the street at dusk."
          />
          <VenuePhoto
            src={photos.storefrontBuilding.src}
            alt={photos.storefrontBuilding.alt}
            caption="The building frontage, with the venue sign at the top."
          />
          <VenuePhoto
            src={photos.logoWall.src}
            alt={photos.logoWall.alt}
            className="sm:col-span-2"
            caption="The illuminated venue emblem inside."
          />
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-24">
        <div className="lux-container grid gap-12 md:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-gold-ink">Every day</p>
            <h2 className="lux-h2 mt-4 text-ink">Hours</h2>
            <p className="mt-4 text-base text-ink-soft">Times are the venue’s local time in Bangalore.</p>
            <table className="mt-6 w-full text-left text-base">
              <caption className="sr-only">Opening hours, Monday to Sunday</caption>
              <tbody>
                {hours.days.map((day) => (
                  <tr key={day} className="border-b border-line">
                    <th scope="row" className="py-3 pr-4 font-medium text-ink">
                      {day}
                    </th>
                    <td className="py-3 text-ink-soft">12:00 pm – 12:00 am</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <p className="eyebrow text-gold-ink">Direct to the venue</p>
            <h2 className="lux-h2 mt-4 text-ink">Phone and WhatsApp</h2>
            <p className="mt-5 font-heading text-4xl text-gold-ink">
              <a className="underline decoration-line underline-offset-4" href={phone.href}>
                {phone.display}
              </a>
            </p>
            <p className="mt-4 text-base leading-7 text-ink-soft">
              WhatsApp uses the same number. Akhil takes calls after 12 pm.
            </p>
            <h3 className="mt-8 font-heading text-3xl font-medium text-ink">Parking</h3>
            <p className="mt-3 text-base leading-7 text-ink-soft">
              Parking is available at the plaza. Ask the team on arrival if you need a specific bay.
            </p>
            <h3 className="mt-8 font-heading text-3xl font-medium text-ink">Getting here</h3>
            <p className="mt-3 text-base leading-7 text-ink-soft">
              The 90s Club is at Millennium Plaza on Hosur Road, Hebbagodi — a short drive from E-City Phase 1
              (Infosys/Velankani), Phase 2, Bommasandra and Ananth Nagar.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-cream lg:py-24">
        <div className="lux-container">
          <p className="eyebrow text-gold-highlight">Call · chat · follow</p>
          <h2 className="lux-h2 mt-4">Contact The 90s Club</h2>
          <p className="prose-body mt-5 max-w-2xl text-cream/85">
            Call, WhatsApp, or Instagram {links.instagramHandle}. There is no enquiry form — the phone is the direct
            line.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-cream/85">
            The Google listing for this address includes live music, karaoke, and dancing.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2 text-sm">
            {["Live music", "Karaoke", "Dancing"].map((item) => (
              <li key={item} className="rounded-full border border-cream/30 px-3 py-1 text-cream">
                {item}
              </li>
            ))}
          </ul>
          <CtaRow className="mt-8" tone="onDark" items={["call", "whatsapp", "instagram", "directions"]} />
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
              rooftop
            </TextLink>
          </p>
        </div>
      </section>
    </>
  );
}
