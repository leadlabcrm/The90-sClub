import { ClosingBand } from "@/components/closing-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/text-link";
import { VenuePhoto } from "@/components/venue-photo";
import { rooftopFaqs } from "@/lib/faq";
import { pageMetadata } from "@/lib/metadata";
import { photos, stock } from "@/lib/photos";
import { reviews } from "@/lib/reviews";
import { faqPageJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { address, hours } from "@/lib/site";

export const metadata = pageMetadata(seo.rooftop);

const nights = [
  { title: "Live music", copy: "Bands and DJs on the retro playlist, 90s first." },
  { title: "Karaoke", copy: "Grab the mic for the songs you grew up on." },
  { title: "Dancing", copy: "The floor opens up once the night gets going." },
  { title: "Event nights", copy: `Birthdays, celebrations and specials. ${hours.eventNights}.` },
] as const;

export default function RooftopPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(rooftopFaqs)} />
      <PageHero
        eyebrow="Hebbagodi · Millennium Plaza"
        title="Rooftop pub & retro taproom"
        lede="A retro 90s rooftop pub with full AC dining, about 80 seats, a lit bar and parking at Millennium Plaza, Electronic City."
        photo={photos.interiorNeon}
      />

      <section className="lux-section bg-ivory">
        <div className="lux-container">
          <p className="eyebrow text-gold-ink">Millennium Plaza, Hebbagodi</p>
          <h2 className="lux-h2 mt-4 text-ink">
            Rooftop pub and <em>AC dining</em>
          </h2>
          <p className="prose-body mt-6 text-ink-soft">
            The 90s Club sits on the top floor of {address.line1}. Open-air rooftop seating on one side, a fully
            air-conditioned dining room on the other, and the neon bar in between. Booth seating for groups, high
            tables by the bar, and the boombox DJ booth in the music corner.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <VenuePhoto photo={stock.rooftopTwilight} caption="Rooftop seating under the sky." />
            <VenuePhoto photo={photos.interiorNeon} caption="The taproom, with neon on the ceiling." />
            <VenuePhoto photo={photos.neonBar} caption="The bar counter and lit logo." />
          </div>
          <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <VenuePhoto photo={photos.logoWall} aspect="photo" sizes="(min-width: 1024px) 400px, 50vw" caption="The backlit logo and retro art wall." />
            </li>
            <li>
              <VenuePhoto photo={photos.boombox} aspect="photo" sizes="(min-width: 1024px) 400px, 50vw" caption="The boombox DJ booth in the music corner." />
            </li>
            <li>
              <VenuePhoto photo={photos.booth} aspect="photo" sizes="(min-width: 1024px) 400px, 50vw" caption="Booth seating for groups." />
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-ivory pb-[var(--section-y)]">
        <div className="lux-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow text-gold-ink">At the taproom</p>
            <h2 className="lux-h2 mt-4 text-ink">
              Flying Fox and <em>Kerala plates</em>
            </h2>
            <p className="prose-body mt-6 text-ink-soft">
              Flying Fox craft beer is poured at the bar, by the pint or by the bucket. Pair it with{" "}
              <TextLink href="/kerala-food">Kerala plates</TextLink> from the kitchen, or go for the ₹999 Bucket Beer
              Combo with one veg and one non-veg starter. See the{" "}
              <TextLink href="/craft-beer">craft beer page</TextLink> for what is pouring.
            </p>
            <blockquote className="mt-8 max-w-[62ch] border-l border-gold pl-4">
              <p className="text-sm leading-6 text-ink">“{reviews.spoorthi.text}”</p>
              <footer className="mt-2 text-xs tracking-wide text-ink-soft">
                {reviews.spoorthi.name} · Google review · {reviews.spoorthi.date}
              </footer>
            </blockquote>
          </div>
          <VenuePhoto photo={photos.barFront} caption="The bar front where Flying Fox is poured." />
        </div>
      </section>

      <section className="lux-section bg-black text-cream">
        <div className="lux-container">
          <p className="eyebrow text-gold-highlight">Nights at the club</p>
          <h2 className="lux-h2 mt-4 max-w-3xl">
            Retro music, <em>late nights</em>
          </h2>
          <p className="prose-body mt-5 text-cream/85">
            Thursday, Friday and Saturday are the busy nights. Doors open at noon every day and the bar runs till
            midnight, or till 1 AM on event nights.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
            <VenuePhoto photo={stock.birthdaySparkler} aspect="photo" sizes="(min-width: 1024px) 440px, 50vw" />
            <VenuePhoto photo={stock.friendsToast} aspect="photo" sizes="(min-width: 1024px) 440px, 50vw" />
            <VenuePhoto photo={photos.neonBeer} aspect="photo" sizes="(min-width: 1024px) 440px, 50vw" className="hidden lg:block" />
          </div>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {nights.map((item) => (
              <li key={item.title} className="border-t border-cream/20 pt-5">
                <p className="font-heading text-[1.5rem] leading-tight">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-cream/75">{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lux-section bg-ivory">
        <div className="lux-container grid gap-12 md:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow text-gold-ink">Plan the night</p>
            <h2 className="lux-h2 mt-4 text-ink">Busy nights</h2>
            <p className="prose-body mt-5 text-ink-soft">
              Thursday to Saturday fill up fast, so book ahead for{" "}
              <TextLink href="/occasions">birthdays and team nights</TextLink>. Monday to Wednesday are relaxed, which
              makes them the right nights for a quiet dinner or a weekday team lunch.
            </p>
          </div>
          <div>
            <p className="eyebrow text-gold-ink">Arrive easy</p>
            <h2 className="lux-h2 mt-4 text-ink">Parking and metro</h2>
            <p className="prose-body mt-5 text-ink-soft">
              Parking is available at Millennium Plaza. Biocon Hebbagodi on the Yellow Line is the nearest metro
              station. Hours, map and directions are on the <TextLink href="/visit">visit page</TextLink>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-[var(--section-y)]">
        <div className="lux-container">
          <FaqList items={rooftopFaqs} />
        </div>
      </section>

      <ClosingBand eyebrow="Come up" title={<>Your table on the <em>rooftop</em></>} items={["whatsapp", "call", "directions", "instagram"]}>
        <p>Open daily {hours.short}. WhatsApp or call with your date and headcount and the team keeps a table.</p>
      </ClosingBand>
    </>
  );
}
