import { CtaRow } from "@/components/cta-row";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/text-link";
import { TypographicCard } from "@/components/typographic-card";
import { VenuePhoto } from "@/components/venue-photo";
import { keralaFaqs } from "@/lib/faq";
import { dishHref, findDish, formatPrice } from "@/lib/menu";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { reviews } from "@/lib/reviews";
import { faqPageJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { hours } from "@/lib/site";

export const metadata = pageMetadata(seo.kerala);

const plates = [
  {
    name: "Kerala Style Chicken Biryani",
    photo: photos.biryani,
    caption: "A bowl of biryani with curry and flatbread from the kitchen.",
  },
  {
    name: "Coconut Fish Curry",
    photo: null,
    caption: "",
  },
  {
    name: "Naadan Chicken Curry",
    photo: null,
    caption: "",
  },
] as const;

export default function KeralaFoodPage() {
  const stew = findDish("Chicken Stew");
  const ghee = findDish("Prawns Ghee Roast");
  const pepper = findDish("Prawns Pepper Fry");
  const chilliFish = findDish("Chilli Fish");

  return (
    <>
      <JsonLd data={faqPageJsonLd(keralaFaqs)} />
      <PageHero
        eyebrow="Naadan plates"
        title="Kerala food in Electronic City — The 90s Club kitchen"
        lede="Kerala food and Flying Fox craft beer under one roof at Millennium Plaza, Hebbagodi, on Hosur Rd — biryani, coconut fish, and coastal starters."
        photo={photos.foodSpread}
      />

      <section className="lux-section bg-ivory">
        <div className="lux-container">
          <p className="eyebrow text-gold-ink">The kitchen’s point of view</p>
          <h2 className="lux-h2 mt-3 text-ink">Why Kerala here</h2>
          <p className="prose-body mt-4 text-ink-soft">
            Kerala food and Flying Fox craft beer under one roof at Millennium Plaza, Hebbagodi. The kitchen leads with
            these plates. You eat them in the rooftop pub, open daily from noon to midnight.
          </p>
        </div>
      </section>

      <section className="bg-ivory pb-16 lg:pb-24">
        <div className="lux-container">
          <p className="eyebrow text-gold-ink">Order from the menu</p>
          <h2 className="lux-h2 mt-3 text-ink">Signatures</h2>
          <ul className="mt-8 grid gap-8 lg:grid-cols-3">
            {plates.map((plate) => {
              const dish = findDish(plate.name);
              return (
                <li key={plate.name}>
                  {plate.photo ? (
                    <VenuePhoto photo={plate.photo} aspect="photo" caption={plate.caption} />
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center rounded-[var(--radius-photo)] border border-line bg-white p-6 text-center">
                      <p className="font-heading text-2xl leading-tight text-ink">{plate.name}</p>
                    </div>
                  )}
                  <h3 className="mt-4 text-lg font-semibold">
                    <TextLink href={dishHref(dish.name)}>{dish.name}</TextLink>
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-gold-ink tabular-nums">{formatPrice(dish.price)}</p>
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-base text-ink">
            <TextLink href={dishHref(stew.name)}>{stew.name}</TextLink>
            <span className="text-ink-soft"> · {formatPrice(stew.price)}</span>
          </p>
        </div>
      </section>

      <section className="bg-ivory pb-16 lg:pb-24">
        <div className="lux-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow text-gold-ink">Coastal starters</p>
            <h2 className="lux-h2 mt-3 text-ink">Seafood</h2>
            <ul className="mt-5 space-y-2.5 text-base">
              {[ghee, pepper, chilliFish].map((dish) => (
                <li key={dish.name}>
                  <TextLink href={dishHref(dish.name)}>{dish.name}</TextLink>
                  <span className="text-ink-soft"> · {formatPrice(dish.price)}</span>
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
          <TypographicCard title="Seafood starters" kicker="Coastal kitchen" />
        </div>
      </section>

      <section className="lux-section bg-black text-cream">
        <div className="lux-container">
          <p className="eyebrow text-gold-highlight">From kitchen to taproom</p>
          <h2 className="lux-h2 mt-3">Pair with craft beer</h2>
          <p className="prose-body mt-4 text-cream/85">
            Kerala plates with Flying Fox on Hosur Rd in Hebbagodi. Ask what is pouring — then{" "}
            <TextLink href="/craft-beer" tone="onDark">
              pair with Flying Fox
            </TextLink>
            .
          </p>
          <p className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-base">
            <TextLink href="/rooftop-pub" tone="onDark">
              Rooftop pub
            </TextLink>
            <TextLink href="/menu" tone="onDark">
              Full menu
            </TextLink>
            <TextLink href="/visit" tone="onDark">
              Visit
            </TextLink>
          </p>
        </div>
      </section>

      <section className="lux-section bg-ivory">
        <div className="lux-container">
          <FaqList items={keralaFaqs} />
          <h2 className="lux-h2 mt-16 text-ink">Come in</h2>
          <p className="mt-3 text-sm text-ink-soft">Open daily, {hours.summary}.</p>
          <CtaRow className="mt-5" tone="onLight" items={["directions", "call", "whatsapp"]} />
        </div>
      </section>
    </>
  );
}
