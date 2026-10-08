import { Beer, Music, ParkingCircle, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CategoryShowcase } from "@/components/category-showcase";
import { CtaRow } from "@/components/cta-row";
import { FaqList } from "@/components/faq-list";
import { ReviewSlider } from "@/components/review-slider";
import { homeFaqs } from "@/lib/faq";
import { dishHref, findDish, formatPrice, menuSections } from "@/lib/menu";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { faqPageJsonLd } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Kerala Food & Craft Beer Rooftop Pub | The 90s Club Electronic City",
  description:
    "Flying Fox craft beer and a Kerala kitchen at Millennium Plaza, Hebbagodi. Open daily from noon to midnight.",
  path: "/",
});

const categoryPhotos = [
  photos.interiorSeating,
  photos.foodChilliChicken,
  photos.foodBiryani,
  photos.foodSpread,
] as const;

const delightNames = [
  "Kerala Style Chicken Biryani",
  "Chilli Chicken",
  "Naadan Chicken Curry",
  "Butter Chicken",
] as const;

const delightPhotos = [photos.foodBiryani, photos.foodChilliChicken, photos.foodSpread, photos.foodSpread];

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
    title: "Retro 90s music and rooftop",
    copy: "A retro room and a rooftop address in Electronic City.",
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
    title: "Team lunch & birthdays",
    copy: "About 80 seats. Call with the date, time, and group size.",
    photo: photos.interiorSeating,
  },
  {
    href: "/visit",
    badge: "Visit",
    title: "Millennium Plaza, Hebbagodi",
    copy: "Fourth floor on Hosur Road. Open daily from noon to midnight.",
    photo: photos.exteriorStreet,
  },
  {
    href: "/kerala-food",
    badge: "Kitchen",
    title: "Kerala food in Electronic City",
    copy: "Biryani, coconut fish curry, Naadan chicken, and seafood starters.",
    photo: photos.foodBiryani,
  },
] as const;

const galleryLead = photos.barLogoHero;
const galleryRow = [
  photos.interiorSeating,
  photos.barCounter,
  photos.entrance,
  photos.neonSign,
  photos.logoWall,
] as const;

export default function HomePage() {
  const biryani = findDish("Kerala Style Chicken Biryani");
  const fish = findDish("Coconut Fish Curry");
  const naadan = findDish("Naadan Chicken Curry");
  const stew = findDish("Chicken Stew");
  const faqJson = JSON.stringify(faqPageJsonLd()).replace(/</g, "\\u003c");

  const categories = menuSections.map((section, index) => ({
    id: section.id,
    title: section.title,
    intro: section.intro,
    image: categoryPhotos[index].src,
    alt: categoryPhotos[index].alt,
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJson }} />

      <section className="relative flex min-h-[640px] items-center justify-center overflow-hidden bg-black text-ivory lg:min-h-[800px]">
        <Image
          src={photos.interiorWideNeon.src}
          alt={photos.interiorWideNeon.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,9,7,.55),rgba(10,9,7,.42)_42%,rgba(10,9,7,.62))]" />
        <div className="lux-container relative z-10 flex flex-col items-center pt-44 pb-24 text-center">
          <h1 className="lux-h1 max-w-[1072px] text-ivory">
            {"Kerala food & craft beer at a "}
            <em>rooftop pub</em>
            {" in Electronic City — The 90s Club"}
          </h1>
          <p className="prose-body mt-6 max-w-2xl text-ivory">
            The 90s Club Taproom and Kitchen · Flying Fox craft beer · Naadan plates · open daily noon to midnight.
          </p>
          <CtaRow className="mt-8 justify-center" tone="onDark" items={["call", "directions", "whatsapp"]} />
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="lux-container">
          <CategoryShowcase categories={categories} />
        </div>
      </section>

      <section className="bg-ivory pb-6 lg:pb-10">
        <div className="lux-container">
          <Link
            href="/rooftop-pub"
            className="group relative flex min-h-[28rem] items-end overflow-hidden bg-black lg:min-h-[640px]"
          >
            <Image
              src={photos.interiorSeating.src}
              alt={photos.interiorSeating.alt}
              fill
              sizes="(min-width: 1024px) 1340px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/20" />
            <div className="relative z-10 grid w-full gap-8 p-8 text-ivory lg:grid-cols-2 lg:items-end lg:p-16">
              <h2 className="lux-h2 max-w-[10ch]">
                Experience <em>the rooftop</em>
              </h2>
              <p className="max-w-md text-base leading-7 text-ivory/90 lg:justify-self-end">
                Retro rooftop seating and a full AC dining room — about 80 seats at Millennium Plaza, Hebbagodi.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="lux-container">
          <p className="eyebrow text-center text-gold-ink">Signatures</p>
          <h2 className="lux-h2 mt-4 text-center text-ink">Popular delights</h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-[60px]">
            {delightNames.map((name, index) => {
              const dish = findDish(name);
              const photo = delightPhotos[index];
              return (
                <li key={name}>
                  <Link href={dishHref(name)} className="group block">
                    <div className="relative aspect-[290/300] overflow-hidden bg-charcoal">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 290px, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="mt-4 grid grid-cols-[1fr_auto] items-baseline gap-3 text-base">
                      <span className="text-ink">{dish.name}</span>
                      <span className="text-gold-ink">{formatPrice(dish.price)}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="relative min-h-[36rem] bg-black lg:min-h-[616px]">
        <Image
          src={photos.barCounter.src}
          alt={photos.barCounter.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <p className="eyebrow absolute bottom-8 left-5 text-ivory lg:bottom-12 lg:left-[50px]">Values</p>
        <div className="relative z-10 flex min-h-[36rem] items-center justify-center px-5 py-24 lg:min-h-[616px] lg:justify-end lg:px-[50px]">
          <div className="w-full max-w-[560px] bg-white px-7 py-10 text-ink shadow-[0_18px_50px_rgba(10,9,7,0.18)] sm:px-10 sm:py-12">
            <h2 className="lux-h2">Why The 90s Club</h2>
            <p className="mt-4 text-base leading-7 text-ink-soft">
              A Kerala kitchen, a Flying Fox taproom, and a retro rooftop under one roof in Electronic City.
            </p>
            <ul className="mt-8 space-y-5">
              {reasons.map(({ icon: Icon, title, copy }) => (
                <li key={title} className="flex gap-4">
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

      <section className="bg-ivory py-20 lg:py-28">
        <div className="lux-container">
          <p className="eyebrow text-center text-gold-ink">Special menu</p>
          <h2 className="lux-h2 mt-4 text-center text-ink">{biryani.name}</h2>
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,620px)_minmax(0,1fr)] lg:gap-8">
            <div className="order-2 grid gap-10 lg:order-1">
              <Note align="right" title="Menu card" copy="Indian main course. The kitchen leads with the Kerala plates." />
              <Note align="right" title="Price" copy={`${formatPrice(biryani.price)} on the food menu.`} />
            </div>
            <div className="relative order-1 mx-auto aspect-square w-full max-w-[620px] overflow-hidden rounded-full bg-charcoal lg:order-2">
              <Image
                src={photos.foodBiryani.src}
                alt={photos.foodBiryani.alt}
                fill
                sizes="(min-width: 1024px) 620px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="order-3 grid gap-10">
              <Note title="Plate" copy="Chicken biryani with gravy and spiced rice from the kitchen." />
              <Note
                title="Alongside"
                copy={`On the same card as ${fish.name}, ${naadan.name}, and ${stew.name}.`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-6 lg:pb-10">
        <div className="lux-container">
          <div className="relative flex min-h-[28rem] items-center justify-center overflow-hidden bg-black text-center text-ivory lg:min-h-[450px]">
            <Image
              src={photos.exteriorStreet.src}
              alt={photos.exteriorStreet.alt}
              fill
              sizes="(min-width: 1024px) 1340px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 px-6 py-16">
              <h2 className="lux-h2 mx-auto max-w-[12ch]">
                Come up to the <em>rooftop</em>
              </h2>
              <CtaRow className="mt-8 justify-center" tone="onDark" items={["call", "directions"]} callLabel="Call" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="lux-container">
          <FaqList items={homeFaqs} />
        </div>
      </section>

      <section className="bg-black py-20 text-ivory lg:py-28">
        <div className="lux-container">
          <p className="eyebrow text-center text-gold-highlight">Testimonials</p>
          <h2 className="mt-4 text-center font-heading text-[clamp(2.25rem,3.75vw,54px)] leading-none font-semibold">
            Client reviews
          </h2>
          <ReviewSlider photo={photos.logoWall.src} alt={photos.logoWall.alt} />
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="lux-container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-gold-ink">Visit</p>
              <h2 className="lux-h2 mt-4 text-ink">Plan your visit</h2>
            </div>
            <PillSee href="/visit" label="See all" />
          </div>
          <ul className="mt-12 grid gap-10 lg:grid-cols-2">
            {visitPlans.map((plan) => (
              <li key={plan.href} className={plan.href === "/kerala-food" ? "lg:col-span-1" : undefined}>
                <Link href={plan.href} className="group block">
                  <div className="relative aspect-[650/480] overflow-hidden bg-charcoal">
                    <Image
                      src={plan.photo.src}
                      alt={plan.photo.alt}
                      fill
                      sizes="(min-width: 1024px) 650px, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-4 right-4 bg-ivory px-3 py-1 text-xs tracking-wide text-ink uppercase">
                      {plan.badge}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-[1.75rem] leading-tight font-medium text-ink">{plan.title}</h3>
                  <p className="mt-3 text-base leading-7 text-ink-soft">{plan.copy}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ivory pb-20 lg:pb-28">
        <div className="lux-container">
          <div className="relative aspect-[1340/600] overflow-hidden bg-charcoal">
            <Image
              src={galleryLead.src}
              alt={galleryLead.alt}
              fill
              sizes="(min-width: 1024px) 1340px, 100vw"
              className="object-cover"
            />
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {galleryRow.map((photo) => (
              <li key={photo.src} className="relative aspect-square overflow-hidden bg-charcoal">
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 252px, 50vw" className="object-cover" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function Note({ title, copy, align = "left" }: { title: string; copy: string; align?: "left" | "right" }) {
  const right = align === "right";
  return (
    <div className={right ? "lg:ml-auto lg:max-w-xs lg:text-right" : "max-w-xs"}>
      <h3 className="text-xl leading-[26px] font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-base leading-[22.4px] text-ink-soft">{copy}</p>
    </div>
  );
}

function PillSee({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="pill-sm pill-outline w-fit font-sans">
      {label}
    </Link>
  );
}
