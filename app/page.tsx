import {
  ArrowUpRight,
  Beer,
  CarFront,
  Clock3,
  Fish,
  MapPin,
  Snowflake,
  Star,
  UsersRound,
  UtensilsCrossed,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { CtaRow } from "@/components/cta-row";
import { MapEmbed } from "@/components/map-embed";
import { MarqueeBand } from "@/components/marquee-band";
import { SectionHeading } from "@/components/section-heading";
import { photos } from "@/lib/photos";
import { dishHref, findDish, formatPrice } from "@/lib/menu";
import { pageMetadata } from "@/lib/metadata";
import { address, hours, links, phone, whatsappMessages } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Kerala food & craft beer rooftop | The 90s Club Electronic City",
  description:
    "Kerala food and Flying Fox craft beer on a rooftop in Electronic City. Open daily noon to midnight at Millennium Plaza, Hebbagodi.",
  path: "/",
});

const intentDoors = [
  {
    href: "/rooftop-pub",
    kicker: "Pub · bar · after work",
    title: "Rooftop pub in Electronic City",
    copy: "Retro interiors, full AC dining, craft beer, and the rooftop at Millennium Plaza.",
    photo: photos.interiorWideNeon,
    cta: "Explore the rooftop",
  },
  {
    href: "/kerala-food",
    kicker: "Naadan · seafood · biryani",
    title: "Kerala food & seafood",
    copy: "Coconut fish curry, Naadan chicken, Kerala-style biryani, and coastal starters.",
    photo: photos.foodSpread,
    cta: "See Kerala food",
  },
  {
    href: "/occasions",
    kicker: "Teams · birthdays · groups",
    title: "Team lunch & birthdays",
    copy: "About 80 seats, parking, and one direct number to plan your group.",
    photo: photos.interiorSeating,
    cta: "Plan an occasion",
  },
] as const;

const proof = [
  { icon: Star, value: "4.7", label: "on Google" },
  { icon: UsersRound, value: "80", label: "seats" },
  { icon: CarFront, value: "Parking", label: "at the plaza" },
  { icon: Clock3, value: "12–12", label: "open daily" },
] as const;

const wedge = [
  {
    icon: UtensilsCrossed,
    title: "Kerala + seafood kitchen",
    copy: "Naadan mains and coastal starters anchor the food story.",
  },
  {
    icon: Beer,
    title: "Flying Fox craft beer",
    copy: "Craft beer at the taproom; ask the team what is pouring.",
  },
  {
    icon: Star,
    title: "Retro 90s rooftop",
    copy: "Electric-blue light, old-school details, and an E-City rooftop.",
  },
  {
    icon: MapPin,
    title: "Mid-price E-City night out",
    copy: "A typical meal for two sits around ₹400–₹1,000.",
  },
] as const;

const occasionCards = [
  {
    number: "01",
    title: "Team & office lunch",
    copy: "Electronic City teams, direct enquiries, and a full food menu.",
  },
  {
    number: "02",
    title: "Birthdays",
    copy: "A rooftop table with food, craft beer, and room for the group.",
  },
  {
    number: "03",
    title: "Students & couples",
    copy: "An easy Hebbagodi night out, open every day until midnight.",
  },
] as const;

const faqs = [
  {
    question: "Is Kerala food served at The 90s Club?",
    answer:
      "Yes. The menu includes Kerala Style Chicken Biryani, Coconut Fish Curry, Naadan Chicken Curry, Prawns Ghee Roast, and Prawns Pepper Fry.",
  },
  {
    question: "Is The 90s Club a rooftop pub in Electronic City?",
    answer:
      "Yes. The venue is on the fourth floor at Millennium Plaza in Hebbagodi, with rooftop seating and a full AC dining room.",
  },
  {
    question: "Which craft beer is available?",
    answer:
      "The taproom serves Flying Fox craft beer. The current tap list and prices are confirmed directly by the team.",
  },
  {
    question: "Is parking available?",
    answer: "Yes. Parking is available at Millennium Plaza.",
  },
  {
    question: "Can I plan a team lunch or birthday?",
    answer: `Yes. The venue has about 80 seats. Call ${phone.display} with your date, time, and group size.`,
  },
] as const;

export default function HomePage() {
  const biryani = findDish("Kerala Style Chicken Biryani");
  const fish = findDish("Coconut Fish Curry");
  const naadan = findDish("Naadan Chicken Curry");
  const gheeRoast = findDish("Prawns Ghee Roast");
  const pepperFry = findDish("Prawns Pepper Fry");

  return (
    <>
      <section className="relative min-h-[43rem] overflow-hidden border-b-2 border-charcoal bg-charcoal text-cream sm:min-h-[47rem] lg:min-h-[calc(100svh-7.9rem)]">
        <Image
          src={photos.interiorWideNeon.src}
          alt={photos.interiorWideNeon.alt}
          fill
          priority
          sizes="100vw"
          className="photo-grade object-cover object-[62%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,13,24,.92)_0%,rgba(7,13,24,.68)_48%,rgba(7,13,24,.15)_80%),linear-gradient(0deg,rgba(7,13,24,.9)_0%,transparent_55%)]" />
        <div className="ink-grid absolute inset-0 opacity-20" />

        <div className="relative mx-auto flex min-h-[43rem] w-full max-w-[1220px] items-end px-5 pb-12 pt-28 sm:min-h-[47rem] sm:px-8 sm:pb-16 lg:min-h-[calc(100svh-7.9rem)]">
          <div className="max-w-5xl">
            <p className="type-label mb-4 text-xs text-gold sm:text-sm">
              Rooftop taproom · Kerala kitchen · Hebbagodi
            </p>
            <h1 className="type-display max-w-5xl text-[clamp(3.25rem,7.2vw,6.7rem)] leading-[0.93] text-gold">
              Kerala food &amp; craft beer on a rooftop in Electronic City
              <span className="mt-2 block text-[0.52em] text-cream">— The 90s Club</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/90 sm:text-xl">
              The 90s Club Taproom and Kitchen · Flying Fox craft beer · Naadan plates ·
              open daily noon to midnight.
            </p>
            <CtaRow
              className="mt-7"
              tone="onDark"
              items={["call", "directions", "whatsapp"]}
            />
            <Link
              href="/menu"
              className="type-label mt-6 inline-flex items-center gap-2 text-xs text-cream underline decoration-gold decoration-2 underline-offset-8 hover:text-gold"
            >
              Browse the food menu <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>

        <div className="absolute right-7 top-8 hidden opacity-80 xl:block">
          <BrandLogo compact inverse className="w-20" />
        </div>
      </section>

      <MarqueeBand />

      <section className="section-pad bg-cream" id="start-here">
        <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="type-label text-xs text-blue">Start here</p>
            <h2 className="type-display mt-3 text-4xl text-blue sm:text-5xl lg:text-6xl">
              What brought you here?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal/70">
              Pick the path that matches your plan—not a generic list of restaurant categories.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {intentDoors.map((door) => (
              <Link
                key={door.href}
                href={door.href}
                className="club-card group overflow-hidden transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden border-b-2 border-blue">
                  <Image
                    src={door.photo.src}
                    alt={door.photo.alt}
                    fill
                    sizes="(min-width: 1024px) 380px, 100vw"
                    className="photo-grade object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <p className="type-label text-[0.65rem] text-blue">{door.kicker}</p>
                  <h3 className="type-display mt-3 text-2xl text-charcoal">{door.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-charcoal/70">{door.copy}</p>
                  <span className="type-label mt-5 inline-flex items-center gap-2 text-[0.68rem] text-blue">
                    {door.cta} <ArrowUpRight aria-hidden="true" className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-charcoal bg-blue py-8 text-cream" aria-label="At a glance">
        <ul className="mx-auto grid w-full max-w-[1220px] grid-cols-2 gap-px px-5 sm:px-8 lg:grid-cols-4">
          {proof.map(({ icon: Icon, value, label }) => (
            <li
              key={label}
              className="flex min-h-28 items-center gap-4 border-gold/35 px-3 py-4 even:border-l lg:border-l lg:first:border-l-0"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="type-display text-2xl text-gold sm:text-3xl">{value}</p>
                <p className="type-label mt-1 text-[0.62rem] text-cream/75">{label}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-pad bg-paper" id="signatures">
        <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="From the kitchen"
            title="Order these — names match the menu"
            lede="Kerala signatures, seafood starters, and the craft beer that shapes the house."
          />

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            <li className="club-card group overflow-hidden sm:col-span-2 lg:col-span-2">
              <Link href={dishHref(biryani.name)}>
                <div className="relative h-52 overflow-hidden border-b-2 border-blue">
                  <Image
                    src={photos.foodBiryani.src}
                    alt={photos.foodBiryani.alt}
                    fill
                    sizes="(min-width: 1024px) 380px, 100vw"
                    className="photo-grade object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <p className="type-label text-[0.65rem] text-blue">House signature</p>
                  <h3 className="type-display mt-2 text-2xl text-charcoal">{biryani.name}</h3>
                  <p className="mt-2 font-semibold text-blue">{formatPrice(biryani.price)}</p>
                </div>
              </Link>
            </li>

            <li className="club-card group overflow-hidden sm:col-span-2 lg:col-span-2">
              <Link href={dishHref(fish.name)}>
                <div className="relative h-52 overflow-hidden border-b-2 border-blue">
                  <Image
                    src={photos.foodSpread.src}
                    alt={photos.foodSpread.alt}
                    fill
                    sizes="(min-width: 1024px) 380px, 100vw"
                    className="photo-grade object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <p className="type-label text-[0.65rem] text-blue">Kerala main</p>
                  <h3 className="type-display mt-2 text-2xl text-charcoal">{fish.name}</h3>
                  <p className="mt-2 font-semibold text-blue">{formatPrice(fish.price)}</p>
                </div>
              </Link>
            </li>

            <li className="club-card-dark relative overflow-hidden p-5 sm:col-span-2 lg:col-span-2">
              <div className="sunburst absolute inset-0 opacity-70" />
              <div className="relative flex h-full min-h-72 flex-col">
                <span className="flex size-12 items-center justify-center rounded-full border-2 border-gold text-gold">
                  <UtensilsCrossed aria-hidden="true" className="size-5" />
                </span>
                <p className="type-label mt-auto pt-12 text-[0.65rem] text-gold">Naadan favourite</p>
                <Link href={dishHref(naadan.name)}>
                  <h3 className="type-display mt-2 text-3xl text-cream">{naadan.name}</h3>
                  <p className="mt-3 font-semibold text-gold">{formatPrice(naadan.price)}</p>
                </Link>
              </div>
            </li>

            <li className="club-card p-5 sm:col-span-1 lg:col-span-3">
              <div className="flex h-full flex-col sm:flex-row sm:items-center sm:gap-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue text-cream">
                  <Fish aria-hidden="true" className="size-5" />
                </span>
                <div className="mt-5 sm:mt-0">
                  <p className="type-label text-[0.65rem] text-blue">Seafood starters</p>
                  <h3 className="type-display mt-2 text-2xl text-charcoal">
                    {gheeRoast.name} <span className="text-blue">/</span> {pepperFry.name}
                  </h3>
                  <p className="mt-2 font-semibold text-blue">
                    {formatPrice(gheeRoast.price)} each
                  </p>
                </div>
              </div>
            </li>

            <li className="club-card overflow-hidden sm:col-span-1 lg:col-span-3">
              <Link href="/craft-beer" className="grid h-full sm:grid-cols-[0.8fr_1.2fr]">
                <div className="relative min-h-44 border-b-2 border-blue sm:border-b-0 sm:border-r-2">
                  <Image
                    src={photos.neonBeerWall.src}
                    alt={photos.neonBeerWall.alt}
                    fill
                    sizes="(min-width: 1024px) 250px, 50vw"
                    className="photo-grade object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-5">
                  <p className="type-label text-[0.65rem] text-blue">At the taproom</p>
                  <h3 className="type-display mt-2 text-3xl text-charcoal">Flying Fox craft beer</h3>
                  <p className="mt-3 text-charcoal/70">Ask what is pouring today.</p>
                </div>
              </Link>
            </li>
          </ul>

          <Link
            href="/menu"
            className="club-button type-label mt-9 inline-flex h-12 items-center gap-2 bg-gold px-5 text-xs text-charcoal"
          >
            View the full food menu <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>

      <section className="section-pad ink-grid bg-charcoal text-cream">
        <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
          <p className="type-label text-xs text-gold">Why this place</p>
          <h2 className="type-display mt-3 max-w-4xl text-4xl text-cream sm:text-5xl lg:text-6xl">
            A different kind of Electronic City night out.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-cream/70">
            A Kerala kitchen, a craft beer taproom, and retro rooftop character under one
            roof—without losing the easy, mid-price feel.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {wedge.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="club-card-dark flex gap-5 p-5 sm:p-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="type-display text-2xl text-cream">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-cream/75">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
          <article className="club-card-dark grid overflow-hidden lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[22rem] border-b-2 border-gold lg:min-h-[34rem] lg:border-b-0 lg:border-r-2">
              <Image
                src={photos.interiorSeating.src}
                alt={photos.interiorSeating.alt}
                fill
                sizes="(min-width: 1024px) 650px, 100vw"
                className="photo-grade object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <p className="type-label text-xs text-gold">Rooftop pub · Hebbagodi</p>
              <h2 className="type-display mt-3 text-4xl text-cream sm:text-5xl">
                Rooftop taproom &amp; retro pub
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-cream/80">
                Electric-blue light, a full AC dining room, and a rooftop address for after-work
                plans in Electronic City.
              </p>
              <ul className="mt-6 space-y-3 text-cream/85">
                <li className="flex items-center gap-3">
                  <Snowflake aria-hidden="true" className="size-5 text-gold" /> Full AC dining
                </li>
                <li className="flex items-center gap-3">
                  <CarFront aria-hidden="true" className="size-5 text-gold" /> Parking at the plaza
                </li>
                <li className="flex items-center gap-3">
                  <Clock3 aria-hidden="true" className="size-5 text-gold" /> Busier Thursday to Saturday
                </li>
              </ul>
              <Link
                href="/rooftop-pub"
                className="club-button type-label mt-8 inline-flex h-12 w-fit items-center gap-2 border-gold bg-cream px-5 text-xs text-charcoal"
              >
                Explore the rooftop <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="mx-auto grid w-full max-w-[1220px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div className="relative">
            <div className="club-card relative aspect-[4/3] overflow-hidden">
              <Image
                src={photos.foodBiryani.src}
                alt={photos.foodBiryani.alt}
                fill
                sizes="(min-width: 1024px) 580px, 100vw"
                className="photo-grade object-cover"
              />
            </div>
            <div className="club-card absolute -bottom-5 right-4 bg-gold px-4 py-3 sm:right-8">
              <p className="type-label text-[0.65rem] text-charcoal">Naadan · seafood · biryani</p>
            </div>
          </div>
          <div>
            <p className="type-label text-xs text-blue">Kerala kitchen</p>
            <h2 className="type-display mt-3 text-4xl text-blue sm:text-5xl lg:text-6xl">
              Kerala food in Electronic City
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-charcoal/75">
              Biryani, coconut fish curry, Naadan chicken, and seafood starters make this more
              than a stop for drinks. The catchment runs from Electronic City to Hebbagodi and
              Ananth Nagar.
            </p>
            <Link
              href="/kerala-food"
              className="club-button type-label mt-7 inline-flex h-12 items-center gap-2 bg-gold px-5 text-xs text-charcoal"
            >
              Explore Kerala food <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-charcoal bg-gold py-14 sm:py-16">
        <div className="mx-auto grid w-full max-w-[1220px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="club-card relative aspect-[4/3] overflow-hidden">
            <Image
              src={photos.neonBeerWall.src}
              alt={photos.neonBeerWall.alt}
              fill
              sizes="(min-width: 1024px) 430px, 100vw"
              className="photo-grade object-cover"
            />
          </div>
          <div>
            <p className="type-label text-xs text-blue">Craft beer</p>
            <h2 className="type-display mt-3 text-4xl text-charcoal sm:text-5xl lg:text-6xl">
              Flying Fox at the taproom
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal/75">
              Flying Fox craft beer is part of the rooftop experience. The current tap list and
              prices are confirmed by the team, so the site does not guess.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/craft-beer"
                className="club-button type-label inline-flex h-12 items-center gap-2 bg-blue px-5 text-xs text-cream"
              >
                Craft beer <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
              <CtaRow items={["whatsapp"]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Occasions"
            title="Bring the room together"
            lede="Team lunch, birthdays, students, and couples—one direct conversation with the venue, no pretend booking system."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {occasionCards.map((card) => (
              <article key={card.number} className="club-card-dark p-6">
                <p className="type-display text-5xl text-gold">{card.number}</p>
                <h3 className="type-display mt-6 text-2xl text-cream">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-cream/75">{card.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="/occasions"
              className="club-button type-label inline-flex h-12 items-center gap-2 bg-gold px-5 text-xs text-charcoal"
            >
              Plan your group <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
            <CtaRow
              items={["call", "whatsapp"]}
              callLabel="Call to enquire"
              whatsappMessage={whatsappMessages.group}
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Visit"
            title="Find us — Millennium Plaza, Hebbagodi"
            lede="Fourth floor on Hosur Road, close to Electronic City and Ananth Nagar."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <MapEmbed className="h-full min-h-[28rem]" />
            <div className="club-card-dark flex flex-col justify-center p-6 sm:p-9">
              <BrandLogo compact inverse className="mb-6 w-16" />
              <h3 className="type-display text-3xl text-cream">The 90s Club</h3>
              <p className="type-label mt-1 text-[0.67rem] text-gold">Taproom and Kitchen</p>
              <address className="mt-6 space-y-1 text-base leading-relaxed not-italic text-cream/80">
                <span className="block">{address.line1}</span>
                <span className="block">{address.line2}</span>
                <span className="block">{address.line3}</span>
                <span className="block">{address.line4}</span>
              </address>
              <p className="mt-5 text-cream">{hours.full}</p>
              <a className="type-display mt-2 text-2xl text-gold" href={phone.href}>
                {phone.display}
              </a>
              <p className="mt-3 text-sm text-cream/65">Parking available at Millennium Plaza.</p>
              <CtaRow
                className="mt-7"
                tone="onDark"
                items={["call", "directions"]}
                callLabel="Call"
              />
              <Link
                href="/visit"
                className="type-label mt-6 inline-flex items-center gap-2 text-xs text-cream underline decoration-gold decoration-2 underline-offset-8"
              >
                Full visit details <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="scallop-top bg-blue pb-24 pt-16 text-cream">
        <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
          <p className="type-label text-center text-xs text-gold">Quick answers</p>
          <h2 className="type-display mx-auto mt-3 max-w-3xl text-center text-4xl text-cream sm:text-5xl lg:text-6xl">
            The useful details, without the runaround.
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="club-card group px-5 py-4 text-charcoal">
                <summary className="flex cursor-pointer list-none items-center gap-4">
                  <span className="type-label text-[0.62rem] text-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="type-display flex-1 text-xl sm:text-2xl">{faq.question}</span>
                  <span className="text-2xl text-blue transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="border-t border-blue/20 pt-4 text-base leading-relaxed text-charcoal/75">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="type-label text-xs text-blue">From the venue</p>
              <h2 className="type-display mt-3 text-4xl text-blue sm:text-5xl">
                {links.instagramHandle}
              </h2>
            </div>
            <CtaRow items={["instagram"]} />
          </div>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open The 90s Club on Instagram"
            className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-5"
          >
            {[
              photos.logoWall,
              photos.foodSpread,
              photos.barLogoHero,
              photos.drinkMargarita,
              photos.exteriorStreet,
            ].map((photo, index) => (
              <span
                key={photo.src}
                className={`club-card group relative overflow-hidden ${
                  index === 4 ? "col-span-2 aspect-[2/1] sm:col-span-1 sm:aspect-square" : "aspect-square"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 20vw, 50vw"
                  className="photo-grade object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </span>
            ))}
          </a>
        </div>
      </section>
    </>
  );
}
