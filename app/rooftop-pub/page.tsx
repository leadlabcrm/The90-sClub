import { CtaRow } from "@/components/cta-row";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/text-link";
import { VenuePhoto } from "@/components/venue-photo";
import { rooftopFaqs } from "@/lib/faq";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { reviews } from "@/lib/reviews";
import { faqPageJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { address, hours } from "@/lib/site";

export const metadata = pageMetadata(seo.rooftop);

export default function RooftopPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(rooftopFaqs)} />
      <PageHero
        eyebrow="Hebbagodi · Millennium Plaza"
        title="Rooftop pub & retro taproom in Electronic City"
        lede="A retro 90s rooftop pub with full AC dining — about 80 seats at Millennium Plaza, Hebbagodi."
        photo={photos.interiorNeon}
      />

      <section className="lux-section bg-ivory">
        <div className="lux-container">
          <p className="eyebrow text-gold-ink">Millennium Plaza, Hebbagodi</p>
          <h2 className="lux-h2 mt-3 text-ink">Rooftop pub and AC dining</h2>
          <p className="prose-body mt-4 text-ink-soft">
            The 90s Club is a rooftop pub at {address.line1}, with an air-conditioned dining room, interior bar, lounge
            seating, and neon details.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <VenuePhoto photo={photos.booth} caption="Booth seating inside the taproom." />
            <VenuePhoto photo={photos.interiorNeon} caption="Interior of the taproom, with neon on the ceiling." />
            <VenuePhoto photo={photos.neonBar} caption="The bar counter and lit logo." />
          </div>
          <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <VenuePhoto
                photo={photos.logoWall}
                aspect="photo"
                sizes="(min-width: 1024px) 400px, 50vw"
                caption="The backlit 90s Club logo on the interior wall."
              />
            </li>
            <li>
              <VenuePhoto
                photo={photos.boombox}
                aspect="photo"
                sizes="(min-width: 1024px) 400px, 50vw"
                caption="The boombox DJ booth in the music corner."
              />
            </li>
            <li>
              <VenuePhoto
                photo={photos.neonBeer}
                aspect="photo"
                sizes="(min-width: 1024px) 400px, 50vw"
                caption="Neon bottle wall art inside the taproom."
              />
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-ivory pb-16 lg:pb-24">
        <div className="lux-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow text-gold-ink">At the taproom</p>
            <h2 className="lux-h2 mt-3 text-ink">Flying Fox</h2>
            <p className="prose-body mt-4 text-ink-soft">
              Craft beer from Flying Fox is poured at the taproom. Pair it with{" "}
              <TextLink href="/kerala-food">Kerala plates</TextLink>. Ask the team what is available on the day; the
              site does not publish an incomplete list.
            </p>
            <p className="mt-4">
              <TextLink href="/craft-beer">Craft beer page</TextLink>
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

      <section className="bg-ivory pb-16 lg:pb-24">
        <div className="lux-container grid gap-10 md:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow text-gold-ink">Plan the night</p>
            <h2 className="lux-h2 mt-3 text-ink">When it is busy</h2>
            <p className="mt-4 text-[length:var(--text-body)] leading-[var(--leading-body)] text-ink-soft">
              Thursday, Friday, and Saturday are the busy nights — a practical time for{" "}
              <TextLink href="/occasions">birthdays</TextLink> and for heading out after work in Electronic City. The
              listed close is {hours.summary}.
            </p>
          </div>
          <div>
            <p className="eyebrow text-gold-ink">Arrive easy</p>
            <h2 className="lux-h2 mt-3 text-ink">Parking</h2>
            <p className="mt-4 text-[length:var(--text-body)] leading-[var(--leading-body)] text-ink-soft">
              Parking is available. The visit page has{" "}
              <TextLink href="/visit">parking & hours</TextLink>.
            </p>
          </div>
        </div>
      </section>

      <section className="lux-section bg-black text-cream">
        <div className="lux-container">
          <p className="eyebrow text-gold-highlight">Visit facts</p>
          <h2 className="lux-h2 mt-3 max-w-3xl">What Google lists for this address</h2>
          <p className="prose-body mt-4 text-cream/85">
            Live music, karaoke, and dancing are on the Google listing. Come for the Kerala kitchen and the rooftop
            taproom. There is no published event calendar on this site.
          </p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {["Live music", "Karaoke", "Dancing"].map((item) => (
              <li key={item} className="pill-sm border border-cream/40 text-cream">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lux-section bg-ivory">
        <div className="lux-container">
          <FaqList items={rooftopFaqs} />
          <h2 className="lux-h2 mt-16 text-ink">Come up</h2>
          <CtaRow className="mt-5" tone="onLight" items={["call", "directions", "whatsapp", "instagram"]} />
        </div>
      </section>
    </>
  );
}
