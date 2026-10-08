import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/text-link";
import { VenuePhoto } from "@/components/venue-photo";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
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
        image={photos.entrance.src}
        alt={photos.entrance.alt}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="lux-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-gold-ink">Akhil + Sathish</p>
            <h2 className="lux-h2 mt-4 text-ink">The story</h2>
            <p className="prose-body mt-5 text-ink-soft">
              Akhil and Sathish opened The 90s Club in February 2026 at Millennium Plaza on Hosur Road, Hebbagodi. The
              room is built around a retro 90s feeling, a Kerala kitchen, and a rooftop taproom.
            </p>
            <p className="prose-body mt-4 text-ink-soft">
              One outlet. Electronic City, with Hebbagodi and Ananth Nagar next door.
            </p>
          </div>
          <VenuePhoto src={photos.entrance.src} alt={photos.entrance.alt} caption="The entrance, with the neon 90s CLUB sign." />
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="lux-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <VenuePhoto
            src={photos.logoWall.src}
            alt={photos.logoWall.alt}
            aspect="photo"
            caption="The illuminated logo on the interior wall."
          />
          <div>
            <p className="eyebrow text-gold-ink">Kitchen + taproom</p>
            <h2 className="lux-h2 mt-4 text-ink">What we serve</h2>
            <p className="prose-body mt-5 text-ink-soft">
              Kerala food, seafood starters, and Flying Fox craft beer. The food card also carries other curries,
              noodles, and fried rice. The lead of the house is the Kerala kitchen and the taproom.
            </p>
            <ul className="mt-6 space-y-2 text-base font-semibold text-ink">
              <li>Akhil and Sathish, founders</li>
              <li>Opened February 2026</li>
              <li>80 seats · full AC · rooftop · parking</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-cream lg:py-24">
        <div className="lux-container">
          <p className="eyebrow text-gold-highlight">Keep exploring</p>
          <h2 className="lux-h2 mt-4">Next</h2>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-lg">
            <TextLink href="/visit" tone="onDark">
              Visit
            </TextLink>
            <TextLink href="/menu" tone="onDark">
              Menu
            </TextLink>
            <TextLink href={links.instagram} external tone="onDark">
              Instagram
            </TextLink>
          </p>
        </div>
      </section>
    </>
  );
}
