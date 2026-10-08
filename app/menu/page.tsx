import Image from "next/image";
import Link from "next/link";

import { CtaRow } from "@/components/cta-row";
import { GapNotice } from "@/components/gap-notice";
import { PageHero } from "@/components/page-hero";
import { Price } from "@/components/price";
import { TextLink } from "@/components/text-link";
import { TypographicCard } from "@/components/typographic-card";
import { VenuePhoto } from "@/components/venue-photo";
import { menuSections, slugify } from "@/lib/menu";
import { pageMetadata } from "@/lib/metadata";
import { drinkGallery, photos } from "@/lib/photos";
import { seo } from "@/lib/seo";
import { phone, whatsappMessages } from "@/lib/site";

export const metadata = pageMetadata(seo.menu);

const sectionPhotos = [null, photos.chilliChicken, photos.biryani, null] as const;

const keralaDishes = new Set([
  "Kerala Style Chicken Biryani",
  "Coconut Fish Curry",
  "Naadan Chicken Curry",
  "Chicken Stew",
  "Prawns Ghee Roast",
  "Prawns Pepper Fry",
]);

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Electronic City food card"
        title="Menu — The 90s Club Electronic City"
        lede="The full food card with prices in rupees. Current craft beer availability is confirmed directly with the team."
        photo={photos.foodSpread}
      />

      <section className="lux-section bg-ivory">
        <div className="lux-container">
          <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <VenuePhoto photo={photos.foodSpread} caption="A spread from the Electronic City kitchen." />
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-1">
              <VenuePhoto photo={photos.biryani} aspect="photo" caption="Biryani with curry and flatbread." />
              <VenuePhoto photo={photos.chilliChicken} aspect="photo" caption="Chilli Chicken." />
            </div>
          </div>
          <CtaRow
            className="mt-8"
            tone="onLight"
            items={["call", "directions", "whatsapp"]}
            callLabel="Call to enquire"
            whatsappMessage={whatsappMessages.order}
          />

          <ul className="mt-14 grid gap-8 sm:grid-cols-2">
            {menuSections.map((section, index) => {
              const photo = sectionPhotos[index];
              return (
                <li key={section.id}>
                  <article>
                    {photo ? (
                      <div className="lux-photo relative aspect-[16/10]">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          loading="lazy"
                          fetchPriority="low"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <TypographicCard title={section.title} aspect="wide" />
                    )}
                    <h2 className="lux-h3 mt-4 text-ink">{section.title}</h2>
                    <p className="mt-2 max-w-md text-sm leading-6 text-ink-soft">{section.intro}</p>
                    <Link href={`#${section.id}`} className="pill-sm pill-outline mt-4">
                      View {section.title}
                    </Link>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <nav aria-label="Menu sections" className="sticky top-[4.25rem] z-30 border-y border-line bg-ivory/95 backdrop-blur lg:top-[4.75rem]">
        <ul className="lux-container flex gap-5 overflow-x-auto py-3">
          {menuSections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="whitespace-nowrap text-sm text-ink hover:text-gold-ink">
                {section.title}
              </a>
            </li>
          ))}
          <li>
            <a href="#drinks" className="whitespace-nowrap text-sm text-ink hover:text-gold-ink">
              Drinks
            </a>
          </li>
          <li>
            <a href="#offers" className="whitespace-nowrap text-sm text-ink hover:text-gold-ink">
              Offers
            </a>
          </li>
        </ul>
      </nav>

      <div className="bg-ivory">
        <div className="lux-container flex flex-col gap-14 py-14 lg:py-20">
          {menuSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-32">
              <p className="eyebrow text-gold-ink">Food menu</p>
              <h2 className="lux-h2 mt-3 text-ink">{section.title}</h2>
              <p className="prose-body mt-3 text-ink-soft">{section.intro}</p>
              {section.id === "indian-mains" ? (
                <p className="mt-3 text-sm text-ink-soft">
                  Kerala plates are marked below. Read more on{" "}
                  <TextLink href="/kerala-food">Kerala food in Electronic City</TextLink>.
                </p>
              ) : null}
              <ul className="mt-6 grid gap-x-12 sm:grid-cols-2">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    id={slugify(item.name)}
                    className="scroll-mt-32 flex min-h-12 flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-line py-3.5"
                  >
                    <span className="text-ink">
                      {keralaDishes.has(item.name) ? (
                        <TextLink href="/kerala-food">{item.name}</TextLink>
                      ) : (
                        item.name
                      )}
                    </span>
                    {item.signature ? (
                      <span className="text-[0.65rem] tracking-[0.14em] text-gold-ink uppercase">Kerala kitchen</span>
                    ) : null}
                    <span className="ml-auto text-gold-ink tabular-nums">
                      <Price amount={item.price} />
                    </span>
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
            <p>Cocktails at the bar; ask the team for prices.</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {drinkGallery.map((photo) => (
                <VenuePhoto
                  key={photo.src}
                  photo={photo}
                  aspect="tall"
                  sizes="(min-width: 640px) 280px, 100vw"
                  caption={
                    photo === photos.redCocktail
                      ? "A red cocktail at the bar."
                      : photo === photos.chocolateCocktail
                        ? "A chocolate cream cocktail."
                        : "A layered green cocktail at the bar."
                  }
                />
              ))}
            </div>
            <VenuePhoto
              className="mt-2"
              photo={photos.neonBar}
              caption="The bar counter. Ask the team for Flying Fox craft beer."
            />
            <p>
              <TextLink href="/craft-beer">Flying Fox craft beer</TextLink>
              {" · "}
              <TextLink href="/occasions">group bookings</TextLink>
            </p>
          </GapNotice>

          <GapNotice id="offers" kicker="Ask the team" title="Current offers">
            <p>Promotions can change. Call or WhatsApp for the offer running on the day you visit.</p>
          </GapNotice>
        </div>
      </div>

      <section className="lux-section bg-black text-cream">
        <div className="lux-container">
          <h2 className="lux-h2">Order or ask the team</h2>
          <p className="prose-body mt-4 text-cream/80">
            Call {phone.display} for a table enquiry or a question about the card. WhatsApp uses the same number.
          </p>
          <CtaRow
            className="mt-7"
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
