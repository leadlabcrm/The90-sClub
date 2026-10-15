import { ArrowRight, Beer, Music, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { photos, type Photo } from "@/lib/photos";
import { rating } from "@/lib/site";

const story =
  "Akhil Kumar and Sathish opened The 90s Club in February 2026 on the rooftop of Millennium Plaza, Hebbagodi. Kerala biryani, coconut fish curry and prawn ghee roast from the kitchen. Flying Fox craft beer and cocktails at the bar. Eighty seats, a fully AC room, parking at the plaza, and the music you grew up on all night.";

const pillars = [
  { icon: UtensilsCrossed, title: "Authentic Kerala cuisine", copy: "Biryani, ghee roasts, seafood curries" },
  { icon: Beer, title: "Craft beer on tap", copy: "Flying Fox pints, buckets & BOGO deals" },
  { icon: Music, title: "Open till 1 AM on event nights", copy: "Birthdays, celebrations and specials" },
] as const;

const stats = [
  { value: "2026", label: "Est. February" },
  { value: "80", label: "Seats, fully AC" },
  { value: rating.value, label: `${rating.count} Google reviews` },
] as const;

/** A. Editorial split: numbered eyebrow, story, stats row, and a two-photo collage. */
export function AboutEditorial() {
  return (
    <section className="lux-section bg-ivory">
      <div className="lux-container grid items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
        <div>
          <p className="eyebrow text-gold-ink">01 — The club</p>
          <h2 className="lux-h2 mt-5 text-ink">
            Electronic City&apos;s <em>retro taproom</em>, with a Kerala kitchen
          </h2>
          <p className="prose-body mt-7 text-ink-soft">{story}</p>
          <Link href="/about" className="lux-link mt-8">
            Our Story
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
          <dl className="mt-12 grid grid-cols-3 divide-x divide-line border-t border-line pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 first:pl-0">
                <dt className="font-heading text-[2.5rem] leading-none font-medium text-ink tabular-nums">{stat.value}</dt>
                <dd className="mt-2 text-[0.7rem] tracking-[0.18em] text-ink-soft uppercase">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative pb-16 pr-10 lg:pb-24 lg:pr-16">
          <div className="lux-photo relative aspect-[4/3]">
            <Image src={photos.interiorNeon.src} alt={photos.interiorNeon.alt} fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
          </div>
          <div className="lux-photo absolute right-0 bottom-0 aspect-[4/5] w-[46%] border-[6px] border-ivory shadow-[0_18px_50px_rgba(10,9,7,0.25)]">
            <Image src={photos.biryani.src} alt={photos.biryani.alt} fill sizes="(min-width: 1024px) 300px, 45vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/** B. Statement band: a full-width dark band with a large serif statement, flanked by two photos, pillars underneath. */
export function AboutStatement() {
  return (
    <section className="bg-black text-ivory">
      <div className="lux-container py-[var(--section-y)]">
        <p className="eyebrow text-center text-gold-highlight">Welcome to The 90s Club</p>
        <p className="mx-auto mt-8 max-w-[22ch] text-center font-heading text-[clamp(2rem,1.2rem+3vw,4.25rem)] leading-[1.12] font-medium">
          Built on the <em className="text-gold">music we grew up on</em> and the Kerala food we missed in Electronic
          City.
        </p>
        <p className="mt-6 text-center text-[0.7rem] tracking-[0.22em] text-ivory/60 uppercase">
          Akhil Kumar & Sathish · Founders · Est. February 2026
        </p>
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          <div className="lux-photo relative aspect-[4/5] sm:translate-y-6">
            <Image src={photos.boombox.src} alt={photos.boombox.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="lux-photo relative aspect-[4/5]">
            <Image src={photos.neonBar.src} alt={photos.neonBar.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" style={{ objectPosition: photos.neonBar.position }} />
          </div>
          <div className="lux-photo relative aspect-[4/5] sm:translate-y-6">
            <Image src={photos.foodSpread.src} alt={photos.foodSpread.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
          </div>
        </div>
        <ul className="mt-20 grid gap-10 border-t border-ivory/15 pt-10 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, copy }) => (
            <li key={title}>
              <Icon aria-hidden="true" className="size-6 text-gold" strokeWidth={1.25} />
              <p className="mt-4 font-heading text-[1.5rem] leading-tight">{title}</p>
              <p className="mt-2 text-sm text-ivory/70">{copy}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <Link href="/about" className="lux-link text-ivory hover:text-gold-highlight">
            Our Story
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const polaroids: { photo: Photo; caption: string; tilt: string }[] = [
  { photo: photos.barFront, caption: "The bar", tilt: "-rotate-3" },
  { photo: photos.booth, caption: "Booths", tilt: "rotate-2" },
  { photo: photos.boombox, caption: "Music corner", tilt: "-rotate-1" },
  { photo: photos.chilliChicken, caption: "From the kitchen", tilt: "rotate-3" },
  { photo: photos.neonBeer, caption: "Neon", tilt: "-rotate-2" },
];

/** C. Retro polaroid strip: centred statement, then five tilted prints with handwritten-style captions. */
export function AboutPolaroids() {
  return (
    <section className="overflow-hidden bg-cream/40 py-[var(--section-y)]">
      <div className="lux-container">
        <p className="eyebrow text-center text-gold-ink">Welcome to The 90s Club</p>
        <h2 className="lux-h2 mx-auto mt-5 max-w-[18ch] text-center text-ink">
          Good food, good beer, <em>good music</em>. Since February 2026.
        </h2>
        <p className="prose-body mx-auto mt-6 max-w-[58ch] text-center text-ink-soft">{story}</p>
      </div>
      <ul className="mt-14 flex justify-center gap-5 px-5 lg:gap-8">
        {polaroids.map(({ photo, caption, tilt }, index) => (
          <li
            key={caption}
            className={`${tilt} w-[46vw] shrink-0 bg-white p-3 pb-10 shadow-[0_18px_40px_rgba(10,9,7,0.18)] sm:w-[30vw] lg:w-[220px] ${index > 2 ? "hidden sm:block" : ""} ${index > 3 ? "sm:hidden lg:block" : ""}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 220px, 46vw" className="object-cover" style={photo.position ? { objectPosition: photo.position } : undefined} />
            </div>
            <p className="mt-3 text-center font-heading text-[1.2rem] italic text-ink">{caption}</p>
          </li>
        ))}
      </ul>
      <div className="mt-14 flex justify-center">
        <Link href="/about" className="lux-link">
          Our Story
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </section>
  );
}
