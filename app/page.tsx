import { Beer, Music, ParkingCircle, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { CategoryShowcase } from "@/components/category-showcase";
import { CtaRow } from "@/components/cta-row";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { ReviewSlider } from "@/components/review-slider";
import { TextLink } from "@/components/text-link";
import { homeFaqs } from "@/lib/faq";
import { dishHref, findDish, formatPrice, menuSections } from "@/lib/menu";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { faqPageJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";

export const metadata = pageMetadata(seo.home);

const delights = [
  {
    title: "Kerala Style Chicken Biryani",
    href: dishHref("Kerala Style Chicken Biryani"),
    photo: photos.biryani,
    dish: "Kerala Style Chicken Biryani" as const,
    meta: null,
  },
  {
    title: "Chilli Chicken",
    href: dishHref("Chilli Chicken"),
    photo: photos.chilliChicken,
    dish: "Chilli Chicken" as const,
    meta: null,
  },
  {
    title: "Kerala plates",
    href: "/kerala-food",
    photo: photos.foodSpread,
    dish: null,
    meta: "See plates",
  },
  {
    title: "Cocktails",
    href: "/menu#drinks",
    photo: photos.chocolateCocktail,
    dish: null,
    meta: "Ask the team",
  },
] as const;

const reasons = [
  {
    icon: UtensilsCrossed,
    title: "Kerala kitchen",
    copy: "Naadan mains and coastal starters lead the food card.",
  },
  {
    icon: Beer,
    title: "Flying Fox craft beer taproom",
    copy: "Craft beer at the taproom. Ask the team what is pouring.",
  },
  {
    icon: Music,
    title: "Retro 90s music",
    copy: "The room is built around retro 90s music in a rooftop pub at Millennium Plaza.",
  },
  {
    icon: ParkingCircle,
    title: "Parking and AC",
    copy: "Parking at Millennium Plaza, and a full AC dining room.",
  },
] as const;

const visitPlans = [
  {
    href: "/occasions",
    badge: "Groups",
    title: "Team lunch & office get-togethers",
    copy: "For E-City Phase 1 (Infosys/Velankani), Phase 2, Bommasandra and Ananth Nagar. About 80 seats.",
    photo: photos.booth,
  },
  {
    href: "/visit",
    badge: "Visit",
    title: "Millennium Plaza, Hebbagodi",
    copy: "On Hosur Road. Open daily from noon to midnight.",
    photo: photos.streetSign,
  },
  {
    href: "/kerala-food",
    badge: "Kitchen",
    title: "Kerala food in Electronic City",
    copy: "Biryani, coconut fish curry, Naadan chicken, and seafood starters.",
    photo: photos.foodSpread,
  },
] as const;

const galleryLead = photos.barFront;
const galleryRow = [
  photos.neonBar,
  photos.boombox,
  photos.redCocktail,
  photos.greenCocktail,
  photos.neonBeer,
] as const;

export default function HomePage() {
  const biryani = findDish("Kerala Style Chicken Biryani");
  const fish = findDish("Coconut Fish Curry");
  const naadan = findDish("Naadan Chicken Curry");
  const stew = findDish("Chicken Stew");

  const categories = menuSections.map((section, index) => ({
    id: section.id,
    title: section.title,
    intro: section.intro,
    ...(index === 1
      ? { image: photos.chilliChicken.src, alt: photos.chilliChicken.alt }
      : {}),
  }));

  return (
    <>
      <JsonLd data={faqPageJsonLd(homeFaqs)} />

      <section
        data-shot="home-hero"
        className="relative flex min-h-[32rem] items-center justify-center overflow-hidden bg-black text-ivory lg:min-h-[38rem]"
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
        <div className="lux-container lux-on-photo relative z-10 flex flex-col items-center pt-28 pb-16 text-center lg:pt-32 lg:pb-20">
          <h1 className="lux-h1 max-w-[20em] text-ivory lg:max-w-[14.5em]">
            {"Kerala food & craft beer at a "}
            <em>rooftop pub</em>
            {" in Electronic City — The 90s Club"}
          </h1>
          <p className="prose-body mt-5 max-w-[40em] text-ivory lg:whitespace-nowrap">
            Kerala food and Flying Fox craft beer under one roof. Open daily noon to midnight.
          </p>
          <CtaRow
            className="mt-7 justify-center"
            tone="onDark"
            layout="hero"
            items={["call", "directions", "whatsapp"]}
          />
        </div>
      </section>

      <div className="border-b border-line bg-ivory">
        <p className="lux-container py-4 text-center text-sm tracking-wide text-ink-soft tabular-nums">
          Open daily 12 pm – 12 am · About 80 seats · Parking at the plaza · Flying Fox craft beer
        </p>
      </div>

      <section className="lux-section bg-ivory">
        <div className="lux-container">
          <CategoryShowcase categories={categories} />
        </div>
      </section>

      <section className="bg-ivory pb-6 lg:pb-8">
        <div className="lux-container">
          <div
            data-shot="rooftop-banner"
            className="group relative flex min-h-[22rem] items-end overflow-hidden rounded-[var(--radius-photo)] bg-black lg:min-h-[28rem]"
          >
            <Image
              src={photos.neonBar.src}
              alt={photos.neonBar.alt}
              fill
              sizes="(min-width: 1024px) 1340px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              style={{ objectPosition: photos.neonBar.position }}
            />
            <div className="lux-scrim-banner absolute inset-0" />
            <div className="lux-on-photo relative z-10 grid w-full gap-6 p-7 text-ivory lg:grid-cols-2 lg:items-end lg:p-12">
              <h2 className="lux-h2 max-w-[12ch]">
                <Link href="/rooftop-pub" className="hover:text-gold-highlight">
                  Experience the <em>rooftop pub</em>
                </Link>
              </h2>
              <div className="max-w-md lg:justify-self-end">
                <p className="text-[length:var(--text-body)] leading-[var(--leading-body)] text-ivory">
                  The{" "}
                  <TextLink href="/rooftop-pub" tone="onDark">
                    rooftop pub
                  </TextLink>{" "}
                  at Millennium Plaza — AC dining,{" "}
                  <TextLink href="/craft-beer" tone="onDark">
                    Flying Fox craft beer
                  </TextLink>
                  , and{" "}
                  <TextLink href="/kerala-food" tone="onDark">
                    Kerala food
                  </TextLink>
                  .
                </p>
                <Link href="/rooftop-pub" className="pill-sm pill-outline-light mt-5">
                  Rooftop pub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-shot="signatures" className="lux-section bg-ivory">
        <div className="lux-container">
          <p className="eyebrow text-center text-gold-ink">Signatures</p>
          <h2 className="lux-h2 mt-3 text-center text-ink">Popular delights</h2>
          <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
            {delights.map((item) => {
              const priced = item.dish ? findDish(item.dish) : null;
              return (
                <li key={item.title}>
                  <Link href={item.href} className="group block">
                    <div className="lux-photo relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={item.photo.src}
                        alt={item.photo.alt}
                        fill
                        sizes="(min-width: 1024px) 290px, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      />
                    </div>
                    <div className="mt-3 grid grid-cols-[1fr_auto] items-baseline gap-3 text-sm">
                      <span className="text-ink">{priced ? priced.name : item.title}</span>
                      <span className="text-gold-ink tabular-nums">{priced ? formatPrice(priced.price) : item.meta}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="relative min-h-[28rem] bg-black lg:min-h-[34rem]">
        <Image
          src={photos.boombox.src}
          alt={photos.boombox.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <p className="eyebrow absolute bottom-8 left-5 text-ivory lg:bottom-12 lg:left-[50px]">Values</p>
        <div className="relative z-10 flex min-h-[28rem] items-center justify-center px-5 py-16 lg:min-h-[34rem] lg:justify-end lg:px-[50px]">
          <div className="lux-card w-full max-w-[520px] bg-white px-7 py-9 text-ink sm:px-10 sm:py-11">
            <h2 className="lux-h2">Why The 90s Club</h2>
            <p className="mt-3 text-[length:var(--text-body)] leading-[var(--leading-body)] text-ink-soft">
              Kerala food and Flying Fox craft beer under one roof in Electronic City.
            </p>
            <ul className="mt-7 space-y-4">
              {reasons.map(({ icon: Icon, title, copy }) => (
                <li key={title} className="flex gap-3.5">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-gold-ink text-gold-ink">
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-ink-soft">{copy}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="lux-section bg-ivory">
        <div className="lux-container">
          <p className="eyebrow text-center text-gold-ink">Special menu</p>
          <h2 className="lux-h2 mt-3 text-center text-ink">{biryani.name}</h2>
          <div className="mt-12 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(240px,520px)_minmax(0,1fr)] lg:gap-8">
            <div className="order-2 grid gap-8 lg:order-1">
              <Note align="right" title="Menu card" copy="Indian main course. The kitchen leads with the Kerala plates." />
              <Note align="right" title="Price" copy={`${formatPrice(biryani.price)} on the food menu.`} />
            </div>
            <div className="relative order-1 mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-full bg-charcoal lg:order-2">
              <Image
                src={photos.biryani.src}
                alt={photos.biryani.alt}
                fill
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="order-3 grid gap-8">
              <Note
                title="Plate"
                copy={
                  <>
                    Order{" "}
                    <TextLink href={dishHref(biryani.name)}>{biryani.name}</TextLink> from the kitchen card.
                  </>
                }
              />
              <Note
                title="Alongside"
                copy={
                  <>
                    On the same card as {fish.name}, {naadan.name}, and {stew.name}.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-6 lg:pb-8">
        <div className="lux-container">
          <div className="relative flex min-h-[22rem] items-center justify-center overflow-hidden rounded-[var(--radius-photo)] bg-black text-center text-ivory lg:min-h-[24rem]">
            <Image
              src={photos.booth.src}
              alt={photos.booth.alt}
              fill
              sizes="(min-width: 1024px) 1340px, 100vw"
              className="object-cover"
            />
            <div className="lux-scrim-center absolute inset-0" />
            <div className="lux-on-photo relative z-10 px-6 py-14">
              <h2 className="lux-h2 mx-auto max-w-[16ch]">
                Come up to the <em>rooftop pub</em>
              </h2>
              <p className="prose-body mx-auto mt-4 max-w-[50ch] text-ivory">
                <TextLink href="/visit" tone="onDark">
                  Millennium Plaza, Hebbagodi
                </TextLink>
                {" · "}
                <TextLink href="/occasions" tone="onDark">
                  team lunch
                </TextLink>
              </p>
              <CtaRow className="mt-7 justify-center" tone="onDark" items={["call", "directions"]} callLabel="Call" />
            </div>
          </div>
        </div>
      </section>

      <section className="lux-section bg-ivory">
        <div className="lux-container">
          <FaqList items={homeFaqs} />
        </div>
      </section>

      <section className="lux-section bg-black text-ivory">
        <div className="lux-container">
          <p className="eyebrow text-center text-gold-highlight">Testimonials</p>
          <h2 className="lux-h2 mt-3 text-center">Guest reviews</h2>
          <ReviewSlider photo={photos.logoWall} />
        </div>
      </section>

      <section className="lux-section bg-ivory">
        <div className="lux-container">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-gold-ink">Visit</p>
              <h2 className="lux-h2 mt-3 text-ink">Plan your visit</h2>
            </div>
            <Link href="/visit" className="pill-sm pill-outline w-fit">
              See all
            </Link>
          </div>
          <ul className="mt-10 grid gap-8 lg:grid-cols-3">
            {visitPlans.map((plan) => (
              <li key={plan.href}>
                <Link href={plan.href} className="group block">
                  <div className="lux-photo relative aspect-[4/5] overflow-hidden sm:aspect-[16/10] lg:aspect-[4/5]">
                    <Image
                      src={plan.photo.src}
                      alt={plan.photo.alt}
                      fill
                      sizes="(min-width: 1024px) 400px, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    <span className="absolute top-4 right-4 rounded-full bg-ivory px-3 py-1 text-[0.65rem] tracking-[0.14em] text-ink uppercase">
                      {plan.badge}
                    </span>
                  </div>
                  <h3 className="lux-h3 mt-4 text-ink">{plan.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{plan.copy}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ivory pb-16 lg:pb-24">
        <div className="lux-container">
          <div className="lux-photo relative aspect-[16/7] overflow-hidden">
            <Image
              src={galleryLead.src}
              alt={galleryLead.alt}
              fill
              sizes="(min-width: 1024px) 1340px, 100vw"
              className="object-cover"
            />
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {galleryRow.map((photo) => (
              <li key={photo.src} className="lux-photo relative aspect-square overflow-hidden">
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 252px, 50vw" className="object-cover" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function Note({
  title,
  copy,
  align = "left",
}: {
  title: string;
  copy: ReactNode;
  align?: "left" | "right";
}) {
  const right = align === "right";
  return (
    <div className={right ? "lg:ml-auto lg:max-w-xs lg:text-right" : "max-w-xs"}>
      <h3 className="text-lg leading-snug font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-ink-soft">{copy}</p>
    </div>
  );
}
