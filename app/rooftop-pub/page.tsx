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

      <section className="py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="type-display text-4xl text-teal sm:text-5xl">Rooftop and AC dining</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The room is a rooftop and an air-conditioned dining floor at {address.line1}. Both sit under the same kitchen. The photographs below are the interior, the stage screen, and the neon. An open-terrace photo is not in this set yet.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
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
          <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="bg-sand py-14 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="type-display text-4xl text-teal sm:text-5xl">Flying Fox</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Craft beer on tap from Flying Fox. Ask the team what is pouring. The printed list is not ready yet.
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

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="type-display text-4xl text-teal">When it is busy</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Thursday, Friday, and Saturday are the busy nights — a practical time for groups and for heading out after work in Electronic City. The listed close is {hours.summary}.
            </p>
          </div>
          <div>
            <h2 className="type-display text-4xl text-teal">Parking</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Parking is available. The visit page has the address and the map.
            </p>
            <p className="mt-3">
              <TextLink href="/visit">Visit</TextLink>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="type-display text-4xl text-teal sm:text-5xl">What Google lists for this address</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Live music, karaoke, and dancing are on the Google listing. Come for the Kerala kitchen and the rooftop taproom. There is no published event calendar on this site.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {["Live music", "Karaoke", "Dancing"].map((item) => (
              <li key={item} className="rounded-full border border-border bg-cream px-3 py-1.5 text-sm font-semibold text-charcoal">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="type-display text-4xl text-teal">Come up</h2>
          <CtaRow className="mt-5" items={["call", "directions", "whatsapp", "instagram"]} />
        </div>
      </section>
    </>
  );
}
