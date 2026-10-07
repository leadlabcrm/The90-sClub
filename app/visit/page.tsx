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

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="type-display text-4xl text-teal">Address</h2>
            <address className="mt-4 space-y-1 text-lg leading-relaxed not-italic text-charcoal">
              <span className="block">{address.line1}</span>
              <span className="block">{address.line2}</span>
              <span className="block">{address.line3}</span>
              <span className="block">{address.line4}</span>
            </address>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Directions opens the Google listing. The map is a search for this address.
            </p>
            <CtaRow className="mt-5" items={["directions", "call"]} />
          </div>
          <div className="grid gap-4">
            <VenuePhoto
              src={photos.storefrontSignboard.src}
              alt={photos.storefrontSignboard.alt}
              aspect="tall"
              caption="The signboard on the Hosur Road building."
            />
            <VenuePhoto
              src={photos.exteriorStreet.src}
              alt={photos.exteriorStreet.alt}
              caption="The same board from the street at dusk."
            />
            <VenuePhoto
              src={photos.storefrontBuilding.src}
              alt={photos.storefrontBuilding.alt}
              aspect="tall"
              caption="The building frontage, with the venue sign at the top."
            />
          </div>
        </div>
      </section>

      <section className="bg-sand py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="type-display text-4xl text-teal">Map</h2>
          <div className="mt-6">
            <MapEmbed className="h-96" />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="type-display text-4xl text-teal">Hours</h2>
            <p className="mt-3 text-base text-muted-foreground">Times are the venue’s local time in Bangalore.</p>
            <table className="mt-4 w-full text-left text-sm">
              <caption className="sr-only">Opening hours, Monday to Sunday</caption>
              <tbody>
                {hours.days.map((day) => (
                  <tr key={day} className="border-b border-dashed border-border">
                    <th scope="row" className="py-2 pr-4 font-medium text-charcoal">
                      {day}
                    </th>
                    <td className="py-2 text-muted-foreground">12:00 pm – 12:00 am</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h2 className="type-display text-4xl text-teal">Phone and WhatsApp</h2>
            <p className="mt-4 text-2xl font-semibold text-charcoal">
              <a className="underline decoration-mustard decoration-2 underline-offset-4" href={phone.href}>
                {phone.display}
              </a>
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              WhatsApp uses the same number. Akhil takes calls after 12 pm.
            </p>
            <h3 className="mt-8 text-lg font-semibold text-charcoal">Parking</h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              Parking is available at the plaza. Ask the team on arrival if you need a specific bay.
            </p>
            <h3 className="mt-8 text-lg font-semibold text-charcoal">Getting here</h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              Straightforward from Electronic City, Hebbagodi, and Ananth Nagar.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-teal py-14 text-cream sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="type-display text-4xl sm:text-5xl">Contact The 90s Club</h2>
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
          <CtaRow className="mt-6" items={["call", "whatsapp", "instagram", "directions"]} />
          <p className="mt-6 text-sm text-cream/80">
            Kitchen and rooftop notes: <TextLink href="/menu" className="text-cream">menu</TextLink>
            {" · "}
            <TextLink href="/kerala-food" className="text-cream">Kerala food</TextLink>
            {" · "}
            <TextLink href="/rooftop-pub" className="text-cream">rooftop</TextLink>
          </p>
        </div>
      </section>
    </>
  );
}
