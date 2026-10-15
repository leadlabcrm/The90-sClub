import Image from "next/image";
import Link from "next/link";

import { ClosingBand } from "@/components/closing-band";
import { OffersSection } from "@/components/offers-section";
import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/text-link";
import { TypographicCard } from "@/components/typographic-card";
import { VenuePhoto } from "@/components/venue-photo";
import { formatPrice, menuSections, slugify } from "@/lib/menu";
import { pageMetadata } from "@/lib/metadata";
import { drinkGallery, photos } from "@/lib/photos";
import { seo } from "@/lib/seo";
import { phone } from "@/lib/site";

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
        eyebrow="Food & drinks"
        title="The 90s Club menu"
        lede="Kerala plates, seafood starters, North Indian curries and Chinese favourites, with Flying Fox craft beer and cocktails at the bar. Prices in rupees."
        photo={photos.foodSpread}
      />

      <section className="lux-section bg-ivory">
        <div className="lux-container">
          <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <VenuePhoto photo={photos.foodSpread} caption="Chilli chicken, biryani, curry and bread with two cocktails from the bar." />
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-1">
              <VenuePhoto photo={photos.biryani} aspect="photo" caption="Kerala Style Chicken Biryani, served with curry and flatbread." />
              <VenuePhoto photo={photos.chilliChicken} aspect="photo" caption="Chilli Chicken, the table's favourite starter." />
            </div>
          </div>

          <ul className="mt-16 grid gap-10 sm:grid-cols-2">
            {menuSections.map((section, index) => {
              const photo = sectionPhotos[index];
              return (
                <li key={section.id}>
                  <article>
                    {photo ? (
                      <div className="lux-photo relative aspect-[16/10]">
                        <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                      </div>
                    ) : (
                      <TypographicCard title={section.title} aspect="wide" />
                    )}
                    <h2 className="lux-h3 mt-5 text-ink">{section.title}</h2>
                    <p className="mt-2 max-w-md text-sm leading-6 text-ink-soft">{section.intro}</p>
                    <Link href={`#${section.id}`} className="lux-link mt-4">
                      View {section.title.toLowerCase()}
                    </Link>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <nav aria-label="Menu sections" className="sticky top-[4.25rem] z-30 border-y border-line bg-ivory/95 backdrop-blur lg:top-[4.75rem]">
        <ul className="lux-container flex gap-6 overflow-x-auto py-3.5">
          {menuSections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="whitespace-nowrap text-sm text-ink hover:text-gold-ink">
                {section.title}
              </a>
            </li>
          ))}
          <li>
            <a href="#drinks" className="whitespace-nowrap text-sm text-ink hover:text-gold-ink">
              Drinks & Beer
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
        <div className="lux-container flex flex-col gap-16 py-16 lg:gap-20 lg:py-24">
          {menuSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-32">
              <p className="eyebrow text-gold-ink">Food menu</p>
              <h2 className="lux-h2 mt-4 text-ink">{section.title}</h2>
              <p className="prose-body mt-4 text-ink-soft">{section.intro}</p>
              {section.id === "indian-mains" ? (
                <p className="mt-3 text-sm text-ink-soft">
                  Kerala plates are marked. Read about the <TextLink href="/kerala-food">Kerala kitchen</TextLink>.
                </p>
              ) : null}
              <ul className="mt-8 grid gap-x-12 sm:grid-cols-2">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    id={slugify(item.name)}
                    className="scroll-mt-32 flex min-h-12 flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-line py-4"
                  >
                    <span className="font-heading text-[1.2rem] leading-tight text-ink">
                      {keralaDishes.has(item.name) ? <TextLink href="/kerala-food">{item.name}</TextLink> : item.name}
                    </span>
                    {item.signature ? (
                      <span className="text-[0.6rem] tracking-[0.18em] text-gold-ink uppercase">Kerala kitchen</span>
                    ) : null}
                    <span className="ml-auto text-sm text-ink tabular-nums">{formatPrice(item.price)}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section id="drinks" className="scroll-mt-32 border-t border-line pt-16">
            <p className="eyebrow text-gold-ink">The taproom</p>
            <h2 className="lux-h2 mt-4 text-ink">
              Drinks & <em>craft beer</em>
            </h2>
            <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="prose-body text-ink-soft">
                  Flying Fox craft beer is poured at the bar by the pint and by the bucket. The cocktail list runs from a
                  chocolate cream martini to layered green and red pours, and the ₹999 Bucket Beer Combo brings a beer
                  bucket with one veg and one non-veg starter to the table.
                </p>
                <p className="prose-body mt-4 text-ink-soft">
                  Selected drinks go buy-one-get-one through the week. The pours and prices change with the taps, so
                  the team confirms today&apos;s list at the bar or on WhatsApp.
                </p>
                <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  <TextLink href="/craft-beer">Flying Fox craft beer</TextLink>
                  <TextLink href="/occasions">Group bookings</TextLink>
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {drinkGallery.map((photo) => (
                  <VenuePhoto key={photo.src} photo={photo} aspect="tall" sizes="(min-width: 1024px) 200px, 33vw" />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <OffersSection />

      <ClosingBand eyebrow="Book a table" title={<>Come hungry, <em>come early</em></>}>
        <p>
          Thursday to Saturday nights fill up. WhatsApp or call {phone.display} with your date, time and headcount, and
          the team holds the table.
        </p>
      </ClosingBand>
    </>
  );
}
