import Link from "next/link";

import { CtaRow } from "@/components/cta-row";
import { MapEmbed } from "@/components/map-embed";
import { VenuePhoto } from "@/components/venue-photo";
import { photos } from "@/lib/photos";
import { SectionHeading } from "@/components/section-heading";
import { TextLink } from "@/components/text-link";
import { pageMetadata } from "@/lib/metadata";
import { dishHref, findDish, formatPrice } from "@/lib/menu";
import { address, hours, links, phone, whatsappMessages } from "@/lib/site";

export const metadata = pageMetadata({
  title: "The 90s Club Taproom and Kitchen | Kerala food & craft beer, Electronic City",
  description:
    "Kerala food and Flying Fox craft beer on a rooftop in Electronic City. Open daily noon to midnight at Millennium Plaza, Hebbagodi.",
  path: "/",
});

const proof = [
  { value: "About 4.7", label: "on Google" },
  { value: "80", label: "seats" },
  { value: "Full AC", label: "dining room" },
  { value: "Parking", label: "at the plaza" },
  { value: "12pm–12am", label: "every day" },
];

export default function HomePage() {
  const biryani = findDish("Kerala Style Chicken Biryani");
  const fish = findDish("Coconut Fish Curry");
  const naadan = findDish("Naadan Chicken Curry");
  const gheeRoast = findDish("Prawns Ghee Roast");
  const pepperFry = findDish("Prawns Pepper Fry");

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Electronic City · Hebbagodi
            </p>
            <h1 className="type-display mt-3 text-[2.7rem] text-teal sm:text-6xl lg:text-7xl">
              Kerala food &amp; craft beer on a rooftop in Electronic City — The 90s Club
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-charcoal">
              Rooftop taproom and Kerala kitchen in Electronic City.
            </p>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              Flying Fox craft beer · Naadan plates · open daily noon to midnight.
            </p>
            <CtaRow className="mt-6" items={["call", "directions", "whatsapp", "instagram"]} />
          </div>
          <div className="lg:col-span-5">
            <VenuePhoto
              src={photos.barLogoHero.src}
              alt={photos.barLogoHero.alt}
              aspect="photo"
              priority
              caption="The bar and logo wall. A terrace photo is not in this set."
            />
          </div>
        </div>
      </section>

      <section aria-label="At a glance" className="bg-sand">
        <ul className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-5">
          {proof.map((item) => (
            <li key={item.label} className="bg-sand px-4 py-5 sm:px-6">
              <p className="type-display text-3xl text-teal">{item.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="The kitchen"
            title="Signatures"
            lede="Kerala kitchen favourites — names match the menu."
          />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-2xl border border-border bg-paper p-4">
              <VenuePhoto
                src={photos.foodBiryani.src}
                alt={photos.foodBiryani.alt}
                aspect="photo"
                caption="Chicken biryani with gravy and spiced rice."
              />
              <h3 className="mt-4 text-lg font-semibold text-charcoal">
                <Link className="underline decoration-mustard decoration-2 underline-offset-4" href={dishHref(biryani.name)}>
                  {biryani.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{formatPrice(biryani.price)}</p>
            </li>
            <li className="rounded-2xl border border-border bg-paper p-4">
              <VenuePhoto
                src={photos.foodSpread.src}
                alt={photos.foodSpread.alt}
                aspect="photo"
                caption="A kitchen spread. Coconut fish curry and Naadan chicken curry are on the card; this frame is the mixed table."
              />
              <h3 className="mt-4 text-lg font-semibold">
                <Link className="underline decoration-mustard decoration-2 underline-offset-4" href={dishHref(fish.name)}>
                  {fish.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{formatPrice(fish.price)}</p>
              <h3 className="mt-4 text-lg font-semibold">
                <Link className="underline decoration-mustard decoration-2 underline-offset-4" href={dishHref(naadan.name)}>
                  {naadan.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{formatPrice(naadan.price)}</p>
            </li>
            <li className="rounded-2xl border border-border bg-paper p-4">
              <VenuePhoto
                src={photos.foodChilliChicken.src}
                alt={photos.foodChilliChicken.alt}
                aspect="photo"
                caption="Chilli chicken. Close-ups of the prawn plates are not in this photo set."
              />
              <h3 className="mt-4 text-lg font-semibold">
                <Link className="underline decoration-mustard decoration-2 underline-offset-4" href={dishHref(gheeRoast.name)}>
                  {gheeRoast.name}
                </Link>
                <span className="text-muted-foreground"> · </span>
                <Link className="underline decoration-mustard decoration-2 underline-offset-4" href={dishHref(pepperFry.name)}>
                  {pepperFry.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {formatPrice(gheeRoast.price)} · {formatPrice(pepperFry.price)}
              </p>
            </li>
          </ul>

          <div className="mt-5 rounded-2xl border-2 border-dashed border-teal bg-paper p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
              Client asset needed
            </p>
            <h3 className="mt-2 text-xl font-semibold text-charcoal">Flying Fox craft beers</h3>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">
              The tap list is not on this draft. Ask the team what is pouring, or read the holding note on the craft beer page.
            </p>
            <p className="mt-3">
              <TextLink href="/craft-beer">Craft beer</TextLink>
            </p>
          </div>

          <p className="mt-6">
            <TextLink href="/menu">See full menu</TextLink>
          </p>
        </div>
      </section>

      <section className="bg-teal py-14 text-cream sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream">The rooftop</p>
            <h2 className="type-display mt-2 text-4xl sm:text-5xl">Retro rooftop taproom in Hebbagodi</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg">
              Craft beer, AC dining, and the busier nights from Thursday to Saturday. Eighty seats at Millennium Plaza.
            </p>
            <p className="mt-5">
              <Link
                href="/rooftop-pub"
                className="inline-flex h-12 items-center rounded-full bg-mustard px-5 text-base font-semibold text-charcoal"
              >
                Explore the rooftop
              </Link>
            </p>
          </div>
          <VenuePhoto
            src={photos.interiorWideNeon.src}
            alt={photos.interiorWideNeon.alt}
            caption="Neon lounge inside the club. This frame is not the open terrace."
          />
        </div>
      </section>

      <section className="bg-sand py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Occasions"
            title="Team lunch, birthdays, couples"
            lede="80 seats, and an Electronic City catchment that covers Hebbagodi and Ananth Nagar."
          />
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <TextLink href="/occasions">Plan a visit</TextLink>
            <CtaRow items={["whatsapp"]} whatsappMessage={whatsappMessages.group} />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Visit" title={address.short} />
            <address className="mt-4 space-y-1 text-base leading-relaxed not-italic text-muted-foreground">
              <span className="block">{address.line1}</span>
              <span className="block">{address.line2}</span>
              <span className="block">{address.line3}</span>
              <span className="block">{address.line4}</span>
            </address>
            <p className="mt-4 text-base text-charcoal">
              {hours.full}
              <span className="text-muted-foreground"> · </span>
              <a className="font-semibold text-teal underline decoration-mustard decoration-2 underline-offset-4" href={phone.href}>
                {phone.display}
              </a>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The map below is a search for the address. Directions opens the Google listing.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <CtaRow items={["directions", "call"]} />
              <TextLink href="/visit">Full visit details</TextLink>
            </div>
          </div>
          <div className="space-y-4">
            <MapEmbed />
            <VenuePhoto
              src={photos.storefrontSignboard.src}
              alt={photos.storefrontSignboard.alt}
              aspect="tall"
              caption="The illuminated signboard on Hosur Road."
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-paper py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="type-display text-4xl text-teal">{links.instagramHandle}</h2>
            <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
              Follow for food and rooftop nights.
            </p>
          </div>
          <CtaRow items={["instagram"]} />
        </div>
      </section>
    </>
  );
}
