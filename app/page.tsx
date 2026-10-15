import { Beer, Music, Star, UtensilsCrossed } from "lucide-react";
import Image from "next/image";

import { AboutSection } from "@/components/about-section";
import { ComingSoonSection } from "@/components/coming-soon-section";
import { CraftBeerSection } from "@/components/craft-beer-section";
import { FaqList } from "@/components/faq-list";
import { FoundersSection } from "@/components/founders-section";
import { GalleryGrid } from "@/components/gallery-grid";
import { HighlightsStrip } from "@/components/highlights-strip";
import { JsonLd } from "@/components/json-ld";
import { LocationSection } from "@/components/location-section";
import { MenuPreview } from "@/components/menu-preview";
import { OffersSection } from "@/components/offers-section";
import { PartiesSection } from "@/components/parties-section";
import { PillLink } from "@/components/pill";
import { ReviewsSection } from "@/components/reviews-section";
import { SignatureDishes } from "@/components/signature-dishes";
import { homeFaqs } from "@/lib/faq";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { faqPageJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { rating, whatsappHref, whatsappMessages } from "@/lib/site";

export const metadata = pageMetadata(seo.home);

const reasons = [
  {
    icon: UtensilsCrossed,
    title: "Authentic Kerala Cuisine",
    copy: "Biryani, ghee roasts, seafood curries",
  },
  {
    icon: Beer,
    title: "Craft Beer on Tap",
    copy: "Fresh pints, buckets & BOGO deals",
  },
  {
    icon: Music,
    title: "Open till 1 AM on Event Nights",
    copy: "Birthdays, celebrations and special events",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(homeFaqs)} />

      {/* 03 Hero */}
      <section
        data-shot="home-hero"
        className="relative flex min-h-[38rem] items-center justify-center overflow-hidden bg-black text-ivory lg:min-h-[min(50rem,100svh)]"
      >
        <Image
          src={photos.interiorNeon.src}
          alt={photos.interiorNeon.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="lux-scrim-center absolute inset-0" />
        <div className="lux-container lux-on-photo relative z-10 flex flex-col items-center pt-32 pb-20 text-center lg:pt-40 lg:pb-24">
          <p className="eyebrow text-gold-highlight">Retro taproom · Electronic City, Bengaluru</p>
          <h1 className="lux-h1 mt-6 max-w-[24ch] text-ivory">
            Retro Pub & Kerala Kitchen
            <br className="hidden sm:block" /> in <em>Electronic City</em>
          </h1>
          <p className="prose-body mx-auto mt-6 max-w-[46ch] text-ivory/90">
            Kerala biryani and seafood, Flying Fox craft beer and 90s music at Millennium Plaza, Hebbagodi. Open daily
            noon to midnight.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <PillLink href={whatsappHref(whatsappMessages.book)} tone="solid" external>
              Book a Table
            </PillLink>
            <PillLink href="/menu" tone="outlineLight">
              View Menu
            </PillLink>
            <PillLink href={whatsappHref(whatsappMessages.visit)} tone="outlineLight" external>
              WhatsApp
            </PillLink>
          </div>
          <p className="mt-8 inline-flex items-center gap-2.5 text-sm text-ivory/90">
            <span className="inline-flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} className="size-3.5 fill-gold text-gold" />
              ))}
            </span>
            <span className="tabular-nums">
              {rating.value} on {rating.source} · {rating.count} reviews
            </span>
          </p>
        </div>
      </section>

      {/* 04 Key highlights */}
      <HighlightsStrip />

      {/* 05 About, then the menu straight after it */}
      <AboutSection />
      <MenuPreview />

      <section className="bg-ivory">
        <div className="relative min-h-[30rem] bg-black lg:min-h-[36rem]">
          <Image
            src={photos.neonBar.src}
            alt={photos.neonBar.alt}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: photos.neonBar.position }}
          />
          <div className="absolute inset-0 bg-black/30" />
                    <div className="relative z-10 flex min-h-[30rem] items-center justify-center px-5 py-16 lg:min-h-[36rem] lg:justify-end lg:px-[50px]">
            <div className="lux-card w-full max-w-[600px] bg-ivory px-8 py-10 text-ink sm:px-12 sm:py-14">
              <p className="eyebrow text-gold-ink">03 — Why Choose Us</p>
              <h2 className="lux-h2 mt-4">
                Why <em>The 90s Club</em>
              </h2>
              <p className="mt-3 font-heading text-[1.35rem] text-ink-soft">Three things the room is built around.</p>
              <ul className="mt-8 space-y-5">
                {reasons.map(({ icon: Icon, title, copy }) => (
                  <li key={title} className="flex gap-4">
                    <Icon aria-hidden="true" className="mt-1 size-5 shrink-0 text-gold" strokeWidth={1.4} />
                    <div>
                      <p className="font-heading text-[1.35rem] leading-tight text-ink">{title}</p>
                      <p className="mt-1 text-sm text-ink-soft">{copy}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 06 Offers & deals */}
      <OffersSection />

      {/* 07 Signature dishes */}
      <SignatureDishes />

      {/* 09 Craft beer & bar */}
      <CraftBeerSection />

      {/* 10 Parties, events & group booking */}
      <PartiesSection />

      {/* 11 Gallery & Instagram */}
      <GalleryGrid />

      {/* 12 Google reviews */}
      <ReviewsSection />

      {/* 13 Our story / founders */}
      <FoundersSection />

      {/* 14 Coming soon & updates */}
      <ComingSoonSection />

      {/* 15 Location, hours & areas served */}
      <LocationSection />

      {/* 16 FAQ */}
      <section id="faq" className="lux-section scroll-mt-24 bg-ivory">
        <div className="lux-container">
          <FaqList
            items={homeFaqs}
            eyebrow="13 — FAQ"
            lede="Cost for two, parking, hours and how to book."
            heading={
              <>
                Frequently asked <em>questions</em>
              </>
            }
          />
        </div>
      </section>
    </>
  );
}
