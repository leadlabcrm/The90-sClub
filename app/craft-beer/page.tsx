import { CtaRow } from "@/components/cta-row";
import { FaqList } from "@/components/faq-list";
import { GapNotice } from "@/components/gap-notice";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/text-link";
import { VenuePhoto } from "@/components/venue-photo";
import { beerFaqs } from "@/lib/faq";
import { dishHref } from "@/lib/menu";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { faqPageJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";

export const metadata = pageMetadata(seo.beer);

export default function CraftBeerPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(beerFaqs)} />
      <PageHero
        eyebrow="Taproom"
        title="Craft beer in Electronic City — Flying Fox at The 90s Club"
        lede="Flying Fox craft beer with Kerala food at Millennium Plaza on Hosur Rd, Hebbagodi."
        photo={photos.barFront}
      />

      <section className="lux-section bg-ivory">
        <div className="lux-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow text-gold-ink">At the taproom</p>
            <h2 className="lux-h2 mt-3 text-ink">Flying Fox in Hebbagodi</h2>
            <p className="prose-body mt-4 text-ink-soft">
              Kerala food and Flying Fox craft beer under one roof at Millennium Plaza, Hebbagodi. The 90s Club pours
              Flying Fox craft beer. The kitchen next to the taps leads with Kerala plates. Ask the team what is on
              today.
            </p>
          </div>
          <VenuePhoto photo={photos.neonBar} aspect="photo" caption="The bar counter with the lit 90s Club logo." />
        </div>
      </section>

      <section className="bg-ivory pb-8">
        <div className="lux-container">
          <GapNotice id="beer-list" kicker="Confirmed on the day" title="Current beer list">
            <p>The full tap and can list, with prices, has not been published on the site.</p>
            <p>Call or WhatsApp the team for today’s Flying Fox availability.</p>
          </GapNotice>
          <GapNotice id="beer-offers" kicker="Ask the team" title="Current offers">
            <p>Promotions can change, so this page does not quote an unconfirmed deal or price.</p>
          </GapNotice>
        </div>
      </section>

      <section className="lux-section bg-ivory">
        <div className="lux-container">
          <FaqList items={beerFaqs} />
        </div>
      </section>

      <section className="lux-section bg-black text-cream">
        <div className="lux-container">
          <p className="eyebrow text-gold-highlight">From the kitchen</p>
          <h2 className="lux-h2 mt-3">Pair and visit</h2>
          <p className="prose-body mt-4 text-cream/85">
            Pair a pour with{" "}
            <TextLink href="/kerala-food" tone="onDark">
              craft beer and Kerala food
            </TextLink>
            , including{" "}
            <TextLink href={dishHref("Kerala Style Chicken Biryani")} tone="onDark">
              Kerala Style Chicken Biryani
            </TextLink>
            .
          </p>
          <p className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-base">
            <TextLink href="/rooftop-pub" tone="onDark">
              Rooftop pub
            </TextLink>
            <TextLink href="/menu#drinks" tone="onDark">
              Menu drinks
            </TextLink>
            <TextLink href="/visit" tone="onDark">
              Visit
            </TextLink>
          </p>
          <CtaRow className="mt-7" tone="onDark" items={["call", "directions", "whatsapp"]} />
        </div>
      </section>
    </>
  );
}
