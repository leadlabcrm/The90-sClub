import { ArrowRight, Beer, Music, Star, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
import { TextLink } from "@/components/text-link";
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
      <section data-shot="home-hero" className="bg-black text-ivory">
        <div className="lux-container grid items-center gap-10 pt-28 pb-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:pt-36 lg:pb-20">
          <div>
            <p className="eyebrow text-gold-highlight">Retro taproom · Electronic City, Bengaluru</p>
            <h1 className="lux-h1 mt-5 max-w-[14ch] text-ivory">
              Retro Pub & Kerala Kitchen in <em>Electronic City</em>
            </h1>
            <p className="prose-body mt-5 max-w-[44ch] text-ivory/85">
              The 90s Club Taproom & Kitchen at Millennium Plaza, Hebbagodi. Kerala biryani and seafood, Flying Fox
              craft beer, 90s music, 80 AC seats and a rooftop. Open daily noon to midnight.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillLink href={whatsappHref(whatsappMessages.book)} tone="gold" external>
                Book a Table
              </PillLink>
              <PillLink href="/menu" tone="outlineLight">
                View Menu
              </PillLink>
              <PillLink href={whatsappHref(whatsappMessages.visit)} tone="outlineLight" external>
                WhatsApp
              </PillLink>
            </div>
            <p className="mt-7 inline-flex items-center gap-2 text-sm text-ivory/85">
              <span className="inline-flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} className="size-4 fill-gold text-gold" />
                ))}
              </span>
              <span className="tabular-nums">
                {rating.value} on {rating.source} · {rating.count} reviews
              </span>
            </p>
          </div>
          <div className="lux-photo relative aspect-[4/3] lg:aspect-[5/4]">
            <Image
              src={photos.interiorNeon.src}
              alt={photos.interiorNeon.alt}
              fill
              priority
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 04 Key highlights */}
      <HighlightsStrip />

      {/* 05 About & why choose us */}
      <section className="lux-section bg-ivory">
        <div className="lux-container grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow text-gold-ink">Welcome to The 90s Club</p>
            <h2 className="lux-h2 mt-3 text-ink">
              Electronic City&apos;s <em>retro taproom</em>
            </h2>
            <p className="prose-body mt-5 text-ink-soft">
              The 90s Club is a retro pub and Kerala kitchen on Hosur Road in Hebbagodi, a short drive from E-City
              Phase 1 and Phase 2, Ananth Nagar and Bommasandra. The card leads with{" "}
              <TextLink href="/kerala-food">Kerala food</TextLink>: Kerala Style Chicken Biryani, Coconut Fish Curry,
              Naadan Chicken Curry and prawn ghee roast, with North Indian curries and Chinese plates for the table.
              The taproom pours <TextLink href="/craft-beer">Flying Fox craft beer</TextLink>, with a ₹999 beer bucket
              combo and buy-one-get-one on selected drinks. Eighty seats, a fully AC room, a{" "}
              <TextLink href="/rooftop-pub">rooftop pub</TextLink>, parking at the plaza and 90s music all night.
              Thursday to Saturday are the big nights; weekday team lunches are the quiet, easy ones.
            </p>
            <Link href="/about" className="mt-7 inline-flex items-center gap-2 pill-sm pill-outline">
              <ArrowRight aria-hidden="true" className="size-4" />
              Our Story
            </Link>
          </div>
          <ul className="grid gap-4 self-center">
            {reasons.map(({ icon: Icon, title, copy }) => (
              <li
                key={title}
                className="flex items-center gap-4 rounded-[var(--radius-card)] border border-line bg-white px-5 py-5"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold-ink">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.6} />
                </span>
                <span>
                  <span className="block font-semibold text-ink">{title}</span>
                  <span className="block text-sm text-ink-soft">{copy}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 06 Offers & deals */}
      <OffersSection />

      {/* 07 Signature dishes */}
      <SignatureDishes />

      {/* 08 Menu preview */}
      <MenuPreview />

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
