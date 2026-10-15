import { ClosingBand } from "@/components/closing-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { OffersSection } from "@/components/offers-section";
import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/text-link";
import { VenuePhoto } from "@/components/venue-photo";
import { beerFaqs } from "@/lib/faq";
import { dishHref } from "@/lib/menu";
import { pageMetadata } from "@/lib/metadata";
import { drinkGallery, photos } from "@/lib/photos";
import { faqPageJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { hours } from "@/lib/site";

export const metadata = pageMetadata(seo.beer);

const pours = [
  { title: "Flying Fox on tap", copy: "Craft beer by the pint, poured fresh at the bar." },
  { title: "Beer buckets", copy: "Buckets for the table, and the ₹999 Bucket Beer Combo with two starters." },
  { title: "Cocktails", copy: "Chocolate cream martini, layered green and red pours, classics on request." },
  { title: "Event nights", copy: `Live music, karaoke and dancing. ${hours.eventNights}.` },
] as const;

export default function CraftBeerPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(beerFaqs)} />
      <PageHero
        eyebrow="The taproom"
        title="Craft beer in Electronic City"
        lede="Flying Fox craft beer, beer buckets and cocktails, poured next to a Kerala kitchen at Millennium Plaza, Hebbagodi."
        photo={photos.barFront}
      />

      <section className="lux-section bg-ivory">
        <div className="lux-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow text-gold-ink">Flying Fox in Hebbagodi</p>
            <h2 className="lux-h2 mt-4 text-ink">
              Fresh pints, <em>Kerala plates</em>
            </h2>
            <p className="prose-body mt-6 text-ink-soft">
              The 90s Club pours Flying Fox craft beer at the bar under the lit logo. Order a pint or a bucket, add
              Prawns Ghee Roast or Chilli Chicken from the kitchen next to the taps, and let the 90s playlist do the
              rest. Thursday to Saturday are the big nights; weekday evenings are the easy ones.
            </p>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {pours.map((item) => (
                <li key={item.title} className="grid gap-1 py-4 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6">
                  <p className="font-heading text-[1.25rem] leading-tight text-ink">{item.title}</p>
                  <p className="text-sm leading-6 text-ink-soft">{item.copy}</p>
                </li>
              ))}
            </ul>
          </div>
          <VenuePhoto photo={photos.neonBar} aspect="photo" caption="The bar counter with the lit 90s Club logo." />
        </div>
      </section>

      <section className="bg-ivory pb-[var(--section-y)]">
        <div className="lux-container">
          <p className="eyebrow text-gold-ink">From the bar</p>
          <h2 className="lux-h2 mt-4 text-ink">Cocktails</h2>
          <ul className="mt-8 grid grid-cols-3 gap-4 lg:gap-6">
            {drinkGallery.map((photo) => (
              <li key={photo.src}>
                <VenuePhoto photo={photo} aspect="tall" sizes="(min-width: 1024px) 440px, 33vw" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <OffersSection />

      <section className="lux-section bg-ivory">
        <div className="lux-container">
          <FaqList items={beerFaqs} />
        </div>
      </section>

      <ClosingBand eyebrow="From the kitchen" title={<>Pair a pour with <em>Kerala food</em></>}>
        <p>
          Flying Fox goes with the{" "}
          <TextLink href={dishHref("Kerala Style Chicken Biryani")} tone="onDark">
            Kerala Style Chicken Biryani
          </TextLink>
          , the <TextLink href={dishHref("Prawns Ghee Roast")} tone="onDark">Prawns Ghee Roast</TextLink> and the{" "}
          <TextLink href="/kerala-food" tone="onDark">
            rest of the Kerala card
          </TextLink>
          . Book a table and the team keeps it ready.
        </p>
      </ClosingBand>
    </>
  );
}
