import Image from "next/image";
import Link from "next/link";

import { CtaRow } from "@/components/cta-row";
import { GapNotice } from "@/components/gap-notice";
import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/text-link";
import { VenuePhoto } from "@/components/venue-photo";
import { formatPrice, menuSections, slugify } from "@/lib/menu";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { phone, whatsappMessages } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Menu — The 90s Club Electronic City | Food & craft beer",
  description:
    "Food menu for The 90s Club, Electronic City: veg and non-veg starters, Kerala mains, noodles, fried rice, and current craft beer by enquiry.",
  path: "/menu",
});

const sectionPhotos = [photos.interiorSeating, photos.foodChilliChicken, photos.foodBiryani, photos.foodSpread];

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Electronic City food card"
        title="Menu — The 90s Club Electronic City"
        lede="The full food card with prices in rupees. Current craft beer availability is confirmed directly with the team."
        image={photos.foodSpread.src}
        alt={photos.foodSpread.alt}
      />

      <section className="bg-ivory py-16 lg:py-24">
        <div className="lux-container">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <VenuePhoto
              src={photos.foodSpread.src}
              alt={photos.foodSpread.alt}
              priority
              caption="A spread from the Electronic City kitchen."
            />
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
              <VenuePhoto
                src={photos.foodBiryani.src}
                alt={photos.foodBiryani.alt}
                aspect="photo"
                caption="Rice and curry from the kitchen."
              />
              <VenuePhoto
                src={photos.foodChilliChicken.src}
                alt={photos.foodChilliChicken.alt}
                aspect="photo"
                caption="Chilli chicken."
              />
            </div>
          </div>
          <CtaRow
            className="mt-10"
            tone="onLight"
            items={["call", "directions", "whatsapp"]}
            callLabel="Call to enquire"
            whatsappMessage={whatsappMessages.order}
          />

          <ul className="mt-16 grid gap-10 sm:grid-cols-2">
            {menuSections.map((section, index) => {
              const photo = sectionPhotos[index];
              return (
                <li key={section.id}>
                  <article>
                    <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
                      <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <h2 className="mt-5 font-heading text-4xl leading-none font-medium text-ink">{section.title}</h2>
                    <p className="mt-3 max-w-md text-base leading-7 text-ink-soft">{section.intro}</p>
                    <Link href={`#${section.id}`} className="pill-sm pill-outline mt-5">
                      View {section.title}
                    </Link>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <nav aria-label="Menu sections" className="sticky top-20 z-30 border-y border-line bg-ivory/95 backdrop-blur lg:top-24">
        <ul className="lux-container flex gap-6 overflow-x-auto py-4">
          {menuSections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="whitespace-nowrap text-base text-ink hover:text-gold-ink">
                {section.title}
              </a>
            </li>
          ))}
          <li>
            <a href="#drinks" className="whitespace-nowrap text-base text-ink hover:text-gold-ink">
              Drinks
            </a>
          </li>
          <li>
            <a href="#offers" className="whitespace-nowrap text-base text-ink hover:text-gold-ink">
              Offers
            </a>
          </li>
        </ul>
      </nav>

      <div className="bg-ivory">
        <div className="lux-container flex flex-col gap-16 py-16 lg:py-24">
          {menuSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-36">
              <p className="eyebrow text-gold-ink">Food menu</p>
              <h2 className="lux-h2 mt-3 text-ink">{section.title}</h2>
              <p className="prose-body mt-4 max-w-2xl text-ink-soft">{section.intro}</p>
              <ul className="mt-8 grid gap-x-16 sm:grid-cols-2">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    id={slugify(item.name)}
                    className="scroll-mt-36 flex min-h-14 flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-line py-4"
                  >
                    <span className="text-ink">{item.name}</span>
                    {item.signature ? (
                      <span className="text-[0.7rem] tracking-[0.14em] text-gold-ink uppercase">Kerala kitchen</span>
                    ) : null}
                    <span className="ml-auto text-gold-ink tabular-nums">{formatPrice(item.price)}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <GapNotice id="drinks" kicker="Tap list update" title="Drinks and craft beer">
            <p>
              Flying Fox craft beer and drinks are available. Ask the team for the current list and prices; the site
              does not publish an incomplete card.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <VenuePhoto
                src={photos.drinkCocktail.src}
                alt={photos.drinkCocktail.alt}
                aspect="square"
                sizes="(min-width: 640px) 280px, 100vw"
              />
              <VenuePhoto
                src={photos.drinkMargarita.src}
                alt={photos.drinkMargarita.alt}
                aspect="square"
                sizes="(min-width: 640px) 280px, 100vw"
              />
              <VenuePhoto
                src={photos.drinkCosmopolitan.src}
                alt={photos.drinkCosmopolitan.alt}
                aspect="square"
                sizes="(min-width: 640px) 280px, 100vw"
              />
            </div>
            <p>The glasses below are cocktails photographed at the bar; no price is implied.</p>
            <p>
              <TextLink href="/craft-beer">Craft beer page</TextLink>
            </p>
          </GapNotice>

          <GapNotice id="offers" kicker="Ask the team" title="Current offers">
            <p>Promotions can change. Call or WhatsApp for the offer running on the day you visit.</p>
          </GapNotice>
        </div>
      </div>

      <section className="bg-black py-16 text-cream lg:py-24">
        <div className="lux-container">
          <h2 className="lux-h2">Order or ask the team</h2>
          <p className="prose-body mt-5 max-w-2xl text-cream/80">
            Call {phone.display} for a table enquiry or a question about the card. WhatsApp uses the same number.
          </p>
          <CtaRow
            className="mt-8"
            tone="onDark"
            items={["call", "directions", "whatsapp"]}
            callLabel="Call to enquire"
            whatsappMessage={whatsappMessages.order}
          />
        </div>
      </section>
    </>
  );
}
