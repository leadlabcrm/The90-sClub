import { CtaRow } from "@/components/cta-row";
import { PageHero } from "@/components/page-hero";
import { VenuePhoto } from "@/components/venue-photo";
import { photos } from "@/lib/photos";
import { TextLink } from "@/components/text-link";
import { pageMetadata } from "@/lib/metadata";
import { dishHref, findDish, formatPrice } from "@/lib/menu";
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
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="type-display text-4xl text-teal sm:text-5xl">Why Kerala here</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The kitchen at Millennium Plaza leads with these plates. You eat them with the rooftop and the taproom around you, open daily from noon to midnight.
          </p>
        </div>
      </section>

      <section className="bg-sand py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="type-display text-4xl text-teal sm:text-5xl">Signatures</h2>
          <ul className="mt-8 grid gap-5 lg:grid-cols-3">
            {plates.map((plate) => {
              const dish = findDish(plate.name);
              return (
                <li key={plate.name} className="rounded-2xl border border-border bg-paper p-4">
                  {plate.photo ? (
                    <VenuePhoto src={plate.photo.src} alt={plate.photo.alt} aspect="photo" caption={plate.caption} />
                  ) : (
                    <p className="rounded-2xl bg-sand px-4 py-6 text-sm leading-relaxed text-muted-foreground">
                      {plate.name} is on the card. A plated photo of this dish is not in the current set.
                    </p>
                  )}
                  <h3 className="mt-4 text-xl font-semibold">
                    <TextLink href={dishHref(dish.name)}>{dish.name}</TextLink>
                  </h3>
                  <p className="mt-1 text-sm font-semibold tabular-nums text-teal">{formatPrice(dish.price)}</p>
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-base text-charcoal">
            <TextLink href={dishHref(stew.name)}>{stew.name}</TextLink>
            <span className="text-muted-foreground"> · {formatPrice(stew.price)}</span>
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="type-display text-4xl text-teal sm:text-5xl">Seafood</h2>
            <ul className="mt-5 space-y-3 text-lg">
              {[ghee, pepper, chilliFish].map((dish) => (
                <li key={dish.name}>
                  <TextLink href={dishHref(dish.name)}>{dish.name}</TextLink>
                  <span className="text-muted-foreground"> · {formatPrice(dish.price)}</span>
                </li>
              ))}
            </ul>
          </div>
          <VenuePhoto
            src={photos.foodSpread.src}
            alt={photos.foodSpread.alt}
            aspect="photo"
            caption="A mixed kitchen table. Prawn and fish close-ups are not in this photo set."
          />
        </div>
      </section>

      <section className="bg-teal py-14 text-cream sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="type-display text-4xl sm:text-5xl">Pair with craft beer</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream/90">
            Kerala plates with Flying Fox on the rooftop. Ask what is pouring — the tap list is still being collected.
          </p>
          <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            <TextLink href="/rooftop-pub" className="text-cream decoration-mustard">
              Rooftop
            </TextLink>
            <TextLink href="/craft-beer" className="text-cream decoration-mustard">
              Craft beer
            </TextLink>
            <TextLink href="/menu" className="text-cream decoration-mustard">
              Full menu
            </TextLink>
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="type-display text-4xl text-teal sm:text-5xl">Come in</h2>
          <p className="mt-3 text-base text-muted-foreground">Open daily, {hours.summary}.</p>
          <CtaRow className="mt-5" items={["directions", "call", "whatsapp"]} />
        </div>
      </section>
    </>
  );
}
