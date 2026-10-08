import { CtaRow } from "@/components/cta-row";
import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/text-link";
import { VenuePhoto } from "@/components/venue-photo";
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
        image={photos.interiorWideNeon.src}
        alt={photos.interiorWideNeon.alt}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="lux-container">
          <p className="eyebrow text-gold-ink">Fourth floor · Millennium Plaza</p>
          <h2 className="lux-h2 mt-4 text-ink">Rooftop and AC dining</h2>
          <p className="prose-body mt-5 max-w-3xl text-ink-soft">
            The venue combines a rooftop address with an air-conditioned dining floor at {address.line1}. The
            photographs below show the interior bar, lounge seating, stage screen, and neon details.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <VenuePhoto src={photos.interiorSeating.src} alt={photos.interiorSeating.alt} caption="Lounge seating inside." />
            <VenuePhoto
              src={photos.interiorWideNeon.src}
              alt={photos.interiorWideNeon.alt}
              caption="Neon interior, not the terrace."
            />
            <VenuePhoto src={photos.barCounter.src} alt={photos.barCounter.alt} caption="The bar and bottle wall." />
          </div>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {interiorGallery
              .filter(
                (photo) =>
                  photo.src !== photos.interiorWideNeon.src &&
                  photo.src !== photos.barCounter.src &&
                  photo.src !== photos.interiorSeating.src,
              )
              .map((photo) => (
                <li key={photo.src}>
                  <VenuePhoto src={photo.src} alt={photo.alt} aspect="photo" sizes="(min-width: 1024px) 280px, 50vw" />
                </li>
              ))}
          </ul>
        </div>
      </section>

      <section className="bg-ivory pb-20 lg:pb-28">
        <div className="lux-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-gold-ink">At the taproom</p>
            <h2 className="lux-h2 mt-4 text-ink">Flying Fox</h2>
            <p className="prose-body mt-5 text-ink-soft">
              Craft beer from Flying Fox is poured at the taproom. Ask the team what is available on the day; the site
              does not publish an incomplete list.
            </p>
            <p className="mt-5">
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

      <section className="bg-ivory pb-20 lg:pb-28">
        <div className="lux-container grid gap-12 md:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-gold-ink">Plan the night</p>
            <h2 className="lux-h2 mt-4 text-ink">When it is busy</h2>
            <p className="mt-5 text-base leading-7 text-ink-soft">
              Thursday, Friday, and Saturday are the busy nights — a practical time for groups and for heading out after
              work in Electronic City. The listed close is {hours.summary}.
            </p>
          </div>
          <div>
            <p className="eyebrow text-gold-ink">Arrive easy</p>
            <h2 className="lux-h2 mt-4 text-ink">Parking</h2>
            <p className="mt-5 text-base leading-7 text-ink-soft">
              Parking is available. The visit page has the address and the map.
            </p>
            <p className="mt-4">
              <TextLink href="/visit">Visit</TextLink>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-cream lg:py-24">
        <div className="lux-container">
          <p className="eyebrow text-gold-highlight">Visit facts</p>
          <h2 className="lux-h2 mt-4 max-w-3xl">What Google lists for this address</h2>
          <p className="prose-body mt-5 max-w-3xl text-cream/85">
            Live music, karaoke, and dancing are on the Google listing. Come for the Kerala kitchen and the rooftop
            taproom. There is no published event calendar on this site.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {["Live music", "Karaoke", "Dancing"].map((item) => (
              <li key={item} className="pill-sm border border-cream/40 text-cream">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-20">
        <div className="lux-container">
          <h2 className="lux-h2 text-ink">Come up</h2>
          <CtaRow className="mt-6" tone="onLight" items={["call", "directions", "whatsapp", "instagram"]} />
        </div>
      </section>
    </>
  );
}
