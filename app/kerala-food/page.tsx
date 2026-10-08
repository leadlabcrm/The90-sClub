import { CtaRow } from "@/components/cta-row";
import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/text-link";
import { VenuePhoto } from "@/components/venue-photo";
import { dishHref, findDish, formatPrice } from "@/lib/menu";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { hours } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Kerala food in Electronic City | The 90s Club kitchen",
  description:
    "Kerala kitchen in Electronic City: biryani, coconut fish curry, Naadan chicken curry, and prawn starters at The 90s Club.",
  path: "/kerala-food",
});

const plates = [
  {
    name: "Kerala Style Chicken Biryani",
    photo: photos.foodBiryani,
    caption: "Chicken biryani with gravy and spiced rice from the kitchen.",
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
      <PageHero
        eyebrow="Naadan plates"
        title="Kerala kitchen in Electronic City"
        lede="Naadan flavours on a rooftop in Hebbagodi — biryani, coconut fish, and coastal starters at The 90s Club."
        image={photos.foodBiryani.src}
        alt={photos.foodBiryani.alt}
      />

      <section className="bg-ivory py-20 lg:py-24">
        <div className="lux-container">
          <p className="eyebrow text-gold-ink">The kitchen’s point of view</p>
          <h2 className="lux-h2 mt-4 text-ink">Why Kerala here</h2>
          <p className="prose-body mt-5 max-w-3xl text-ink-soft">
            Kerala food and Flying Fox craft beer under one roof in Electronic City. The kitchen at Millennium Plaza
            leads with these plates. You eat them with the rooftop and the taproom around you, open daily from noon to
            midnight.
          </p>
        </div>
      </section>

      <section className="bg-ivory pb-20 lg:pb-28">
        <div className="lux-container">
          <p className="eyebrow text-gold-ink">Order from the menu</p>
          <h2 className="lux-h2 mt-4 text-ink">Signatures</h2>
          <ul className="mt-10 grid gap-8 lg:grid-cols-3">
            {plates.map((plate) => {
              const dish = findDish(plate.name);
              return (
                <li key={plate.name}>
                  {plate.photo ? (
                    <VenuePhoto src={plate.photo.src} alt={plate.photo.alt} aspect="photo" caption={plate.caption} />
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center bg-black p-6 text-center">
                      <p className="font-heading text-3xl leading-tight text-ivory">{plate.name}</p>
                    </div>
                  )}
                  <h3 className="mt-5 text-xl font-semibold">
                    <TextLink href={dishHref(dish.name)}>{dish.name}</TextLink>
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-gold-ink tabular-nums">{formatPrice(dish.price)}</p>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-base text-ink">
            <TextLink href={dishHref(stew.name)}>{stew.name}</TextLink>
            <span className="text-ink-soft"> · {formatPrice(stew.price)}</span>
          </p>
        </div>
      </section>

      <section className="bg-ivory pb-20 lg:pb-28">
        <div className="lux-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-gold-ink">Coastal starters</p>
            <h2 className="lux-h2 mt-4 text-ink">Seafood</h2>
            <ul className="mt-6 space-y-3 text-lg">
              {[ghee, pepper, chilliFish].map((dish) => (
                <li key={dish.name}>
                  <TextLink href={dishHref(dish.name)}>{dish.name}</TextLink>
                  <span className="text-ink-soft"> · {formatPrice(dish.price)}</span>
                </li>
              ))}
            </ul>
          </div>
          <VenuePhoto
            src={photos.foodSpread.src}
            alt={photos.foodSpread.alt}
            aspect="photo"
            caption="A mixed table from The 90s Club kitchen."
          />
        </div>
      </section>

      <section className="bg-black py-20 text-cream lg:py-24">
        <div className="lux-container">
          <p className="eyebrow text-gold-highlight">From kitchen to taproom</p>
          <h2 className="lux-h2 mt-4">Pair with craft beer</h2>
          <p className="prose-body mt-5 max-w-2xl text-cream/85">
            Kerala plates with Flying Fox on the rooftop. Ask what is pouring — the tap list is still being collected.
          </p>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-lg">
            <TextLink href="/rooftop-pub" tone="onDark">
              Rooftop
            </TextLink>
            <TextLink href="/craft-beer" tone="onDark">
              Craft beer
            </TextLink>
            <TextLink href="/menu" tone="onDark">
              Full menu
            </TextLink>
          </p>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-20">
        <div className="lux-container">
          <h2 className="lux-h2 text-ink">Come in</h2>
          <p className="mt-4 text-base text-ink-soft">Open daily, {hours.summary}.</p>
          <CtaRow className="mt-6" tone="onLight" items={["directions", "call", "whatsapp"]} />
        </div>
      </section>
    </>
  );
}
