import { CtaRow } from "@/components/cta-row";
import { PageHero } from "@/components/page-hero";
import { VenuePhoto } from "@/components/venue-photo";
import { TextLink } from "@/components/text-link";
import { pageMetadata } from "@/lib/metadata";
import { interiorGallery, photos } from "@/lib/photos";
import { address, hours } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Rooftop taproom & retro pub | The 90s Club Electronic City",
  description:
    "Retro rooftop taproom in Hebbagodi with AC dining, 80 seats, and Flying Fox craft beer. Open daily noon to midnight.",
  path: "/rooftop-pub",
});

export default function RooftopPage() {
  return (
    <>
      <PageHero
        eyebrow="Hebbagodi · Millennium Plaza"
        title="Rooftop taproom & retro pub — Electronic City"
        lede="Retro rooftop seating plus full AC dining — 80 seats at Millennium Plaza, Hebbagodi."
      />

      <section className="section-pad bg-cream">
        <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
          <p className="type-label text-xs text-blue">Fourth floor · Millennium Plaza</p>
          <h2 className="type-display mt-3 text-4xl text-blue sm:text-5xl lg:text-6xl">Rooftop and AC dining</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-charcoal/75">
            The venue combines a rooftop address with an air-conditioned dining floor at {address.line1}. The photographs below show the interior bar, lounge seating, stage screen, and neon details.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <VenuePhoto
              src={photos.interiorSeating.src}
              alt={photos.interiorSeating.alt}
              caption="Lounge seating inside."
            />
            <VenuePhoto
              src={photos.interiorWideNeon.src}
              alt={photos.interiorWideNeon.alt}
              caption="Neon interior, not the terrace."
            />
            <VenuePhoto
              src={photos.barCounter.src}
              alt={photos.barCounter.alt}
              caption="The bar and bottle wall."
            />
          </div>
          <ul className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {interiorGallery
              .filter((photo) => photo.src !== photos.interiorWideNeon.src && photo.src !== photos.barCounter.src && photo.src !== photos.interiorSeating.src)
              .map((photo) => (
                <li key={photo.src}>
                  <VenuePhoto src={photo.src} alt={photo.alt} aspect="photo" sizes="(min-width: 1024px) 240px, 50vw" />
                </li>
              ))}
          </ul>
        </div>
      </section>

      <section className="border-y-2 border-charcoal bg-gold py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-[1220px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div className="club-card bg-paper p-6 sm:p-8">
            <p className="type-label text-xs text-blue">At the taproom</p>
            <h2 className="type-display mt-3 text-4xl text-blue sm:text-5xl">Flying Fox</h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/75">
              Craft beer from Flying Fox is poured at the taproom. Ask the team what is available on the day; the site does not publish an incomplete list.
            </p>
            <p className="mt-4">
              <TextLink href="/craft-beer">Craft beer page</TextLink>
            </p>
          </div>
          <VenuePhoto
            src={photos.neonBeerWall.src}
            alt={photos.neonBeerWall.alt}
            caption="Neon beer art on the wall. Not a tap list or a Flying Fox product photo."
          />
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="mx-auto grid w-full max-w-[1220px] gap-7 px-5 sm:px-8 md:grid-cols-2">
          <div className="club-card p-6 sm:p-8">
            <p className="type-label text-xs text-blue">Plan the night</p>
            <h2 className="type-display mt-3 text-4xl text-blue">When it is busy</h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Thursday, Friday, and Saturday are the busy nights — a practical time for groups and for heading out after work in Electronic City. The listed close is {hours.summary}.
            </p>
          </div>
          <div className="club-card p-6 sm:p-8">
            <p className="type-label text-xs text-blue">Arrive easy</p>
            <h2 className="type-display mt-3 text-4xl text-blue">Parking</h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Parking is available. The visit page has the address and the map.
            </p>
            <p className="mt-3">
              <TextLink href="/visit">Visit</TextLink>
            </p>
          </div>
        </div>
      </section>

      <section className="scallop-top bg-blue pb-20 pt-14 text-cream">
        <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
          <p className="type-label text-xs text-gold">Visit facts</p>
          <h2 className="type-display mt-3 text-4xl text-cream sm:text-5xl lg:text-6xl">What Google lists for this address</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-cream/80">
            Live music, karaoke, and dancing are on the Google listing. Come for the Kerala kitchen and the rooftop taproom. There is no published event calendar on this site.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {["Live music", "Karaoke", "Dancing"].map((item) => (
              <li key={item} className="club-button type-label bg-cream px-4 py-2 text-[0.65rem] text-charcoal">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-gold">
        <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
          <h2 className="type-display text-4xl text-charcoal sm:text-5xl">Come up</h2>
          <CtaRow className="mt-5" items={["call", "directions", "whatsapp", "instagram"]} />
        </div>
      </section>
    </>
  );
}
