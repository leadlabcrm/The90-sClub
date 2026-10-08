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

      <section className="section-pad bg-cream">
        <div className="mx-auto grid w-full max-w-[1220px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div className="club-card p-6 sm:p-8">
            <p className="type-label text-xs text-blue">Akhil + Sathish</p>
            <h2 className="type-display mt-3 text-4xl text-blue sm:text-5xl">The story</h2>
            <p className="mt-5 text-lg leading-relaxed text-charcoal/75">
              Akhil and Sathish opened The 90s Club in February 2026 at Millennium Plaza on Hosur Road, Hebbagodi. The room is built around a retro 90s feeling, a Kerala kitchen, and a rooftop taproom.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/75">
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

      <section className="border-y-2 border-charcoal bg-gold py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-[1220px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <VenuePhoto
            src={photos.logoWall.src}
            alt={photos.logoWall.alt}
            aspect="photo"
            caption="The illuminated logo on the interior wall."
          />
          <div className="club-card bg-paper p-6 sm:p-8">
            <p className="type-label text-xs text-blue">Kitchen + taproom</p>
            <h2 className="type-display mt-3 text-4xl text-blue sm:text-5xl">What we serve</h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/75">
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

      <section className="ink-grid section-pad bg-blue text-cream">
        <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
          <p className="type-label text-xs text-gold">Keep exploring</p>
          <h2 className="type-display mt-3 text-4xl text-cream sm:text-5xl">Next</h2>
          <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-lg">
            <TextLink href="/visit" className="text-cream decoration-gold">Visit</TextLink>
            <TextLink href="/menu" className="text-cream decoration-gold">Menu</TextLink>
            <TextLink href={links.instagram} external className="text-cream decoration-gold">
              Instagram
            </TextLink>
          </p>
        </div>
      </section>
    </>
  );
}
