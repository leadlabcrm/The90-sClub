import { PageHero } from "@/components/page-hero";
import { VenuePhoto } from "@/components/venue-photo";
import { photos } from "@/lib/photos";
import { TextLink } from "@/components/text-link";
import { pageMetadata } from "@/lib/metadata";
import { links } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About The 90s Club | Taproom and Kitchen, Electronic City",
  description:
    "The 90s Club opened in February 2026. Founders Akhil and Sathish. A Kerala kitchen and rooftop taproom in Electronic City.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="February 2026"
        title="About The 90s Club"
        lede="Established February 2026. Founders Akhil and Sathish. A retro 90s room with a Kerala kitchen and a rooftop taproom in Electronic City."
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="type-display text-4xl text-teal sm:text-5xl">The story</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Akhil and Sathish opened The 90s Club in February 2026 at Millennium Plaza on Hosur Road, Hebbagodi. The room is built around a retro 90s feeling, a Kerala kitchen, and a rooftop taproom.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              One outlet. Electronic City, with Hebbagodi and Ananth Nagar next door.
            </p>
          </div>
          <VenuePhoto
            src={photos.entrance.src}
            alt={photos.entrance.alt}
            caption="The entrance, with the neon 90s CLUB sign."
          />
        </div>
      </section>

      <section className="bg-sand py-14 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <VenuePhoto
            src={photos.logoWall.src}
            alt={photos.logoWall.alt}
            aspect="photo"
            caption="The logo on the interior wall. A founders portrait is not in this photo set."
          />
          <div>
            <h2 className="type-display text-4xl text-teal sm:text-5xl">What we serve</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Kerala food, seafood starters, and Flying Fox craft beer. The food card also carries other curries, noodles, and fried rice. The lead of the house is the Kerala kitchen and the taproom.
            </p>
            <ul className="mt-6 space-y-2 text-base font-semibold text-charcoal">
              <li>Akhil and Sathish, founders</li>
              <li>Opened February 2026</li>
              <li>80 seats · full AC · rooftop · parking</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="type-display text-4xl text-teal">Next</h2>
          <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-lg">
            <TextLink href="/visit">Visit</TextLink>
            <TextLink href="/menu">Menu</TextLink>
            <TextLink href={links.instagram} external>
              Instagram
            </TextLink>
          </p>
        </div>
      </section>
    </>
  );
}
