import { CtaRow } from "@/components/cta-row";
import { MapEmbed } from "@/components/map-embed";
import { PageHero } from "@/components/page-hero";
import { VenuePhoto } from "@/components/venue-photo";
import { photos } from "@/lib/photos";
import { TextLink } from "@/components/text-link";
import { pageMetadata } from "@/lib/metadata";
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
      />

      <section className="section-pad bg-black">
        <div className="mx-auto grid w-full max-w-[1220px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="club-card-dark h-fit p-6 sm:p-8">
            <p className="type-label text-xs text-gold-highlight">Fourth floor · Hosur Road</p>
            <h2 className="type-display mt-3 text-4xl text-cream">Address</h2>
            <address className="mt-5 space-y-1 text-lg leading-relaxed not-italic text-cream/85">
              <span className="block">{address.line1}</span>
              <span className="block">{address.line2}</span>
              <span className="block">{address.line3}</span>
              <span className="block">{address.line4}</span>
            </address>
            <p className="mt-5 text-sm leading-relaxed text-cream/65">
              Directions opens the Google listing. The map is a search for this address.
            </p>
            <CtaRow className="mt-6" tone="onDark" items={["directions", "call"]} />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
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
        </div>
      </section>

      <section className="border-y-2 border-charcoal bg-gold py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
          <p className="type-label text-xs text-ink">Millennium Plaza · Hebbagodi</p>
          <h2 className="type-display mt-3 text-4xl text-ink sm:text-5xl">Map</h2>
          <div className="mt-8">
            <MapEmbed className="h-[28rem]" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="mx-auto grid w-full max-w-[1220px] gap-7 px-5 sm:px-8 md:grid-cols-2">
          <div className="club-card p-6 sm:p-8">
            <p className="type-label text-xs text-gold-highlight">Every day</p>
            <h2 className="type-display mt-3 text-4xl text-ivory">Hours</h2>
            <p className="mt-3 text-base text-ivory-muted">Times are the venue’s local time in Bangalore.</p>
            <table className="mt-4 w-full text-left text-sm">
              <caption className="sr-only">Opening hours, Monday to Sunday</caption>
              <tbody>
                {hours.days.map((day) => (
                  <tr key={day} className="border-b border-gold-shadow/40">
                    <th scope="row" className="py-2 pr-4 font-medium text-ivory">
                      {day}
                    </th>
                    <td className="py-2 text-ivory-muted">12:00 pm – 12:00 am</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="club-card p-6 sm:p-8">
            <p className="type-label text-xs text-gold-highlight">Direct to the venue</p>
            <h2 className="type-display mt-3 text-4xl text-ivory">Phone and WhatsApp</h2>
            <p className="mt-4 text-2xl font-semibold text-gold-highlight">
              <a className="underline decoration-gold-shadow decoration-2 underline-offset-4" href={phone.href}>
                {phone.display}
              </a>
            </p>
            <p className="mt-3 text-base leading-relaxed text-ivory-muted">
              WhatsApp uses the same number. Akhil takes calls after 12 pm.
            </p>
            <h3 className="mt-8 text-lg font-semibold text-ivory">Parking</h3>
            <p className="mt-2 text-base leading-relaxed text-ivory-muted">
              Parking is available at the plaza. Ask the team on arrival if you need a specific bay.
            </p>
            <h3 className="mt-8 text-lg font-semibold text-ivory">Getting here</h3>
            <p className="mt-2 text-base leading-relaxed text-ivory-muted">
              Straightforward from Electronic City, Hebbagodi, and Ananth Nagar.
            </p>
          </div>
        </div>
      </section>

      <section className="scallop-top bg-blue pb-20 pt-14 text-cream">
        <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
          <p className="type-label text-xs text-ivory">Call · chat · follow</p>
          <h2 className="type-display mt-3 text-4xl sm:text-5xl lg:text-6xl">Contact The 90s Club</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream/90">
            Call, WhatsApp, or Instagram {links.instagramHandle}. There is no enquiry form — the phone is the direct line.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/90">
            The Google listing for this address includes live music, karaoke, and dancing.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            {["Live music", "Karaoke", "Dancing"].map((item) => (
              <li key={item} className="rounded-full border border-cream/30 px-3 py-1 text-cream">
                {item}
              </li>
            ))}
          </ul>
          <CtaRow className="mt-6" tone="onDark" items={["call", "whatsapp", "instagram", "directions"]} />
          <p className="mt-6 text-sm text-cream/80">
            Kitchen and rooftop notes: <TextLink href="/menu" tone="onBlue">menu</TextLink>
            {" · "}
            <TextLink href="/kerala-food" tone="onBlue">Kerala food</TextLink>
            {" · "}
            <TextLink href="/rooftop-pub" tone="onBlue">rooftop</TextLink>
          </p>
        </div>
      </section>
    </>
  );
}
