"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { PillLink } from "@/components/pill";
import { formatPrice, menuSections, slugify } from "@/lib/menu";
import { photos, type Photo } from "@/lib/photos";
import { whatsappHref, whatsappMessages } from "@/lib/site";
import { cn } from "@/lib/utils";

const dishPhotos: Record<string, Photo> = {
  "Kerala Style Chicken Biryani": photos.biryani,
  "Chilli Chicken": photos.chilliChicken,
};

const sectionPhotos: Record<string, Photo> = {
  "veg-starters": photos.foodSpread,
  "non-veg-starters": photos.chilliChicken,
  "indian-mains": photos.biryani,
  "chinese-special": photos.foodSpread,
};

/** A. Menu card: centred heading, pill tabs, a soft bordered card with dotted leaders and thumbnails. */
export function MenuCard() {
  const [active, setActive] = useState(menuSections[1].id);
  const section = menuSections.find((s) => s.id === active) ?? menuSections[0];
  return (
    <section className="lux-section bg-ivory">
      <div className="lux-container">
        <p className="eyebrow text-center text-gold-ink">Food & drinks</p>
        <h2 className="lux-h2 mt-4 text-center text-ink">
          Our <em>menu</em>
        </h2>
        <div role="tablist" className="mt-8 flex flex-wrap justify-center gap-2">
          {menuSections.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={s.id === active}
              onClick={() => setActive(s.id)}
              className={cn("pill-sm border", s.id === active ? "border-ink bg-ink text-ivory" : "border-line bg-white text-ink hover:border-ink")}
            >
              {s.title}
            </button>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-5xl rounded-[var(--radius-card)] border border-line bg-white px-6 py-8 sm:px-10 sm:py-10">
          <p className="text-center text-sm text-ink-soft">{section.intro}</p>
          <ul className="mt-8 grid gap-x-12 gap-y-1 md:grid-cols-2">
            {section.items.slice(0, 8).map((item) => {
              const photo = dishPhotos[item.name];
              return (
                <li key={item.name}>
                  <Link href={`/menu#${slugify(item.name)}`} className="flex items-center gap-4 py-3 hover:text-gold-ink">
                    {photo ? (
                      <span className="relative size-14 shrink-0 overflow-hidden rounded-[0.5rem] bg-charcoal">
                        <Image src={photo.src} alt="" fill sizes="56px" className="object-cover" />
                      </span>
                    ) : null}
                    <span className="min-w-0 flex-1">
                      <span className="flex items-baseline gap-2">
                        <span className="font-heading text-[1.2rem] leading-tight text-ink">{item.name}</span>
                        <span className="mb-1 flex-1 border-b border-dotted border-line" aria-hidden="true" />
                        <span className="text-sm text-ink tabular-nums">{formatPrice(item.price)}</span>
                      </span>
                      {item.signature ? <span className="text-[0.6rem] tracking-[0.18em] text-gold-ink uppercase">Kerala kitchen</span> : null}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <PillLink href="/menu" tone="gold">View full menu</PillLink>
          <PillLink href={whatsappHref(whatsappMessages.book)} tone="outline" external>Book a table</PillLink>
        </div>
      </div>
    </section>
  );
}

/** B. Luxdin categories: serif list on the left, an oval photo with the section's lead dishes on the right. */
export function MenuOval() {
  const [active, setActive] = useState(menuSections[2].id);
  const section = menuSections.find((s) => s.id === active) ?? menuSections[0];
  const photo = sectionPhotos[section.id];
  const lead = [...section.items].sort((a, b) => Number(Boolean(b.signature)) - Number(Boolean(a.signature))).slice(0, 4);
  return (
    <section className="lux-section bg-ivory">
      <div className="lux-container grid items-center gap-12 lg:grid-cols-[minmax(260px,420px)_minmax(0,1fr)] lg:gap-16">
        <div>
          <p className="eyebrow text-gold-ink">Categories</p>
          <ul className="mt-6 space-y-3">
            {menuSections.map((s) => {
              const selected = s.id === active;
              return (
                <li key={s.id}>
                  <button type="button" onClick={() => setActive(s.id)} onMouseEnter={() => setActive(s.id)} className="group flex items-center gap-3 text-left">
                    <span aria-hidden="true" className={cn("h-px bg-ink transition-[width] duration-300", selected ? "w-10" : "w-0 group-hover:w-6")} />
                    <span className={cn("font-heading text-[clamp(1.75rem,1.2rem+1.5vw,2.4rem)] leading-none font-medium text-ink", selected && "italic")}>{s.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <PillLink href="/menu" tone="outlineSm" className="mt-10">See all menu</PillLink>
        </div>
        <div>
          <div className="lux-photo relative h-[220px] rounded-[500px] sm:h-[280px] lg:h-[320px]">
            <Image key={photo.src + section.id} src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 900px, 100vw" className="object-cover" />
          </div>
          <p className="prose-body mx-auto mt-6 max-w-[62ch] text-center text-ink-soft">{section.intro}</p>
          <ul className="mx-auto mt-6 grid max-w-3xl gap-x-10 sm:grid-cols-2">
            {lead.map((item) => (
              <li key={item.name} className="flex items-baseline gap-3 border-b border-line py-3">
                <Link href={`/menu#${slugify(item.name)}`} className="font-heading text-[1.15rem] leading-tight text-ink hover:text-gold-ink">{item.name}</Link>
                <span className="ml-auto text-sm text-ink tabular-nums">{formatPrice(item.price)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const boardColumns = [
  { title: "Starters", ids: ["veg-starters", "non-veg-starters"], count: 7 },
  { title: "Kerala & Indian mains", ids: ["indian-mains"], count: 7 },
  { title: "Chinese special", ids: ["chinese-special"], count: 7 },
] as const;

/** C. Menu board: a black band set like a printed menu, three serif columns with gold leaders, photo on the side. */
export function MenuBoard() {
  return (
    <section className="bg-black text-ivory">
      <div className="lux-container py-[var(--section-y)]">
        <p className="eyebrow text-center text-gold-highlight">Food & drinks</p>
        <h2 className="lux-h2 mt-4 text-center">
          The <em className="text-gold">menu</em>
        </h2>
        <p className="mx-auto mt-5 max-w-[56ch] text-center text-sm leading-7 text-ivory/70">
          Kerala plates lead the card, with North Indian curries and Chinese favourites for the table. Flying Fox craft beer and cocktails at the bar.
        </p>
        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] lg:gap-16">
          <div className="grid gap-10 md:grid-cols-3">
            {boardColumns.map((column) => {
              const items = column.ids.flatMap((id) => menuSections.find((s) => s.id === id)?.items ?? []);
              const picked = [...items].sort((a, b) => Number(Boolean(b.signature)) - Number(Boolean(a.signature))).slice(0, column.count);
              return (
                <div key={column.title}>
                  <h3 className="border-b border-gold/40 pb-3 font-heading text-[1.5rem] leading-tight text-gold-highlight">{column.title}</h3>
                  <ul className="mt-4">
                    {picked.map((item) => (
                      <li key={item.name}>
                        <Link href={`/menu#${slugify(item.name)}`} className="flex items-baseline gap-2 py-2.5 hover:text-gold-highlight">
                          <span className="font-heading text-[1.1rem] leading-tight">{item.name}</span>
                          <span className="mb-1 flex-1 border-b border-dotted border-ivory/25" aria-hidden="true" />
                          <span className="text-sm text-ivory/85 tabular-nums">{formatPrice(item.price)}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="grid gap-4">
            <div className="lux-photo relative aspect-[4/5]">
              <Image src={photos.foodSpread.src} alt={photos.foodSpread.alt} fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
            </div>
            <div className="rounded-[var(--radius-card)] border border-gold/30 p-6">
              <p className="eyebrow text-gold-highlight">Drinks & beer</p>
              <p className="mt-3 text-sm leading-7 text-ivory/80">Flying Fox by the pint and bucket, cocktails, the ₹999 Bucket Beer Combo and BOGO on selected drinks.</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <PillLink href="/menu" tone="solid">View full menu</PillLink>
          <PillLink href={whatsappHref(whatsappMessages.book)} tone="outlineLight" external>Book a table</PillLink>
        </div>
      </div>
    </section>
  );
}
