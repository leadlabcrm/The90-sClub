import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/text-link";
import { VenuePhoto } from "@/components/venue-photo";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { reviews } from "@/lib/reviews";
import { seo } from "@/lib/seo";
import { links } from "@/lib/site";

export const metadata = pageMetadata(seo.about);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="February 2026"
        title="About The 90s Club"
        lede="Established February 2026. Founders Akhil and Sathish. A retro 90s room with a Kerala kitchen and a taproom in Electronic City."
        photo={photos.logoWall}
      />

      <section className="lux-section bg-ivory">
        <div className="lux-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow text-gold-ink">Akhil + Sathish</p>
            <h2 className="lux-h2 mt-3 text-ink">The story</h2>
            <p className="prose-body mt-4 text-ink-soft">
              Akhil and Sathish opened The 90s Club in February 2026 at Millennium Plaza on Hosur Road, Hebbagodi. The
              room is built around a retro 90s feeling, a{" "}
              <TextLink href="/kerala-food">Kerala kitchen</TextLink>, and a{" "}
              <TextLink href="/rooftop-pub">rooftop pub</TextLink>.
            </p>
            <p className="prose-body mt-3 text-ink-soft">
              One outlet. Electronic City, with Hebbagodi and Ananth Nagar next door.
            </p>
            <blockquote className="mt-8 max-w-[62ch] border-l border-gold pl-4">
              <p className="text-sm leading-6 text-ink">“{reviews.kavyashree.text}”</p>
              <footer className="mt-2 text-xs tracking-wide text-ink-soft">
                {reviews.kavyashree.name} · Google review · {reviews.kavyashree.date}
              </footer>
            </blockquote>
          </div>
          <VenuePhoto photo={photos.boombox} aspect="tall" caption="The music corner inside The 90s Club." />
        </div>
      </section>

      <section className="lux-section bg-ivory">
        <div className="lux-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <VenuePhoto
            photo={photos.foodSpread}
            aspect="photo"
            caption="Kerala plates from the kitchen: biryani, curry, chilli chicken and bread."
          />
          <div>
            <p className="eyebrow text-gold-ink">Kitchen + taproom</p>
            <h2 className="lux-h2 mt-3 text-ink">What we serve</h2>
            <p className="prose-body mt-4 text-ink-soft">
              Kerala food, seafood starters, and Flying Fox craft beer. The food card also carries other curries,
              noodles, and fried rice. The lead of the house is the Kerala kitchen and the taproom.
            </p>
            <ul className="mt-5 space-y-2 text-sm font-semibold text-ink">
              <li>Akhil and Sathish, founders</li>
              <li>Opened February 2026</li>
              <li>80 seats · full AC · taproom · parking</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lux-section bg-black text-cream">
        <div className="lux-container">
          <p className="eyebrow text-gold-highlight">Keep exploring</p>
          <h2 className="lux-h2 mt-3">Next</h2>
          <p className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-base">
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
