import { ClosingBand } from "@/components/closing-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/text-link";
import { VenuePhoto } from "@/components/venue-photo";
import { keralaFaqs } from "@/lib/faq";
import { dishHref, findDish, formatPrice } from "@/lib/menu";
import { pageMetadata } from "@/lib/metadata";
import { photos, stockDishes } from "@/lib/photos";
import { reviews } from "@/lib/reviews";
import { faqPageJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { hours } from "@/lib/site";

export const metadata = pageMetadata(seo.kerala);

const plates = [
  { name: "Kerala Style Chicken Biryani", photo: photos.biryani, note: "The bestseller. Short-grain rice, slow-cooked chicken, served with curry and flatbread." },
  { name: "Coconut Fish Curry", photo: stockDishes.coconutFishCurry, note: "Fish simmered in a coconut gravy, the way it is done on the coast." },
  { name: "Naadan Chicken Curry", photo: stockDishes.naadanChickenCurry, note: "Home-style Kerala chicken curry with roasted spices." },
  { name: "Chicken Stew", photo: stockDishes.appamStew, note: "Mild, coconut-milk stew. Order it with the biryani for the table." },
] as const;

export default function KeralaFoodPage() {
  const ghee = findDish("Prawns Ghee Roast");
  const pepper = findDish("Prawns Pepper Fry");
  const chilliFish = findDish("Chilli Fish");
  const chickenGhee = findDish("Chicken Ghee Roast");

  return (
    <>
      <JsonLd data={faqPageJsonLd(keralaFaqs)} />
      <PageHero
        eyebrow="Kerala specials"
        title="Kerala food in Electronic City"
        lede="Biryani, coconut fish curry, naadan chicken and prawn ghee roast from the kitchen at The 90s Club, Millennium Plaza, Hebbagodi."
        photo={photos.foodSpread}
      />

      <section className="lux-section bg-ivory">
        <div className="lux-container grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <p className="eyebrow text-gold-ink">The kitchen</p>
            <h2 className="lux-h2 mt-4 text-ink">
              Why Kerala, <em>here</em>
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="prose-body text-ink-soft">
              Akhil and Sathish opened The 90s Club with one rule for the kitchen: cook the food they grew up on.
              Electronic City has plenty of places for a pint. It had very few for a proper Kerala chicken biryani, a
              coconut fish curry or a prawn ghee roast done right. The kitchen leads with those plates, backed by
              North Indian curries and Chinese favourites for the rest of the table, and every plate pairs with a
              Flying Fox pint from the taproom.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-[var(--section-y)]">
        <div className="lux-container">
          <p className="eyebrow text-gold-ink">Order from the menu</p>
          <h2 className="lux-h2 mt-4 text-ink">
            The <em>signature</em> plates
          </h2>
          <ul className="mt-12 grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {plates.map((plate) => {
              const dish = findDish(plate.name);
              return (
                <li key={plate.name}>
                  <VenuePhoto photo={plate.photo} aspect="tall" sizes="(min-width: 1024px) 320px, 50vw" />
                  <div className="mt-4 flex items-baseline justify-between gap-3">
                    <h3 className="font-heading text-[1.35rem] leading-tight text-ink">
                      <TextLink href={dishHref(dish.name)}>{dish.name}</TextLink>
                    </h3>
                    <span className="text-sm text-gold-ink tabular-nums">{formatPrice(dish.price)}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{plate.note}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-ivory pb-[var(--section-y)]">
        <div className="lux-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow text-gold-ink">Coastal starters</p>
            <h2 className="lux-h2 mt-4 text-ink">
              Seafood and <em>ghee roasts</em>
            </h2>
            <p className="prose-body mt-6 text-ink-soft">
              Prawns roasted in ghee and spice, pepper-fried prawns, chilli fish and the chicken ghee roast. These are
              the plates that sell most with a beer bucket on a Friday night.
            </p>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {[ghee, pepper, chilliFish, chickenGhee].map((dish) => (
                <li key={dish.name} className="flex items-baseline justify-between gap-4 py-4">
                  <TextLink href={dishHref(dish.name)} className="font-heading text-[1.25rem] leading-tight">
                    {dish.name}
                  </TextLink>
                  <span className="text-sm text-ink tabular-nums">{formatPrice(dish.price)}</span>
                </li>
              ))}
            </ul>
            <blockquote className="mt-8 max-w-[62ch] border-l border-gold pl-4">
              <p className="text-sm leading-6 text-ink">“{reviews.vaibhav.text}”</p>
              <footer className="mt-2 text-xs tracking-wide text-ink-soft">
                {reviews.vaibhav.name} · Google review · {reviews.vaibhav.date}
              </footer>
            </blockquote>
          </div>
          <VenuePhoto photo={photos.chilliChicken} aspect="photo" caption="Chilli Chicken from the starters card." />
        </div>
      </section>


      <section className="lux-section bg-ivory">
        <div className="lux-container">
          <FaqList items={keralaFaqs} />
        </div>
      </section>

      <ClosingBand eyebrow="Kitchen to taproom" title={<>Kerala plates, <em>Flying Fox</em> pints</>}>
        <p>Open daily {hours.short}. Book a table on WhatsApp, or walk in and ask what is pouring.</p>
      </ClosingBand>
    </>
  );
}
