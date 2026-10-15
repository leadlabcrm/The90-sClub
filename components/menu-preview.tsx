"use client";

import Link from "next/link";
import { useState } from "react";

import { PillLink } from "@/components/pill";
import { formatPrice, menuSections, slugify } from "@/lib/menu";
import { whatsappHref, whatsappMessages } from "@/lib/site";
import { cn } from "@/lib/utils";

/** 08 Menu preview: centred heading, pill tabs, a bordered card with dotted price leaders. */
export function MenuPreview() {
  const tabs = menuSections.map((s) => ({ id: s.id, title: s.title }));
  const [active, setActive] = useState(menuSections[1].id);
  const section = menuSections.find((s) => s.id === active) ?? menuSections[0];

  return (
    <section id="menu" className="lux-section scroll-mt-24 bg-ivory">
      <div className="lux-container">
        <p className="eyebrow text-center text-gold-ink">02 — Menu</p>
        <h2 className="lux-h2 mx-auto mt-4 max-w-[20ch] text-center text-ink">
          The 90s Club menu, <em>crafted in Kerala</em>
        </h2>
        <p className="mx-auto mt-3 max-w-[48ch] text-center font-heading text-[1.35rem] text-ink-soft">Kerala plates lead the card. Starters, mains and Chinese favourites for the table.</p>
        <div role="tablist" aria-label="Menu categories" className="mt-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={tab.id === active}
              onClick={() => setActive(tab.id)}
              className={cn(
                "pill-sm border",
                tab.id === active ? "border-ink bg-ink text-ivory" : "border-line bg-white text-ink hover:border-ink",
              )}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-[var(--radius-card)] border border-line bg-white px-6 py-8 sm:px-10 sm:py-10">
          <p className="text-center text-sm text-ink-soft">{section.intro}</p>
          <ul className="mt-8 grid gap-x-12 gap-y-1 md:grid-cols-2">
            {section.items.slice(0, 8).map((item) => (
              <li key={item.name}>
                <Link href={`/menu#${slugify(item.name)}`} className="block py-3 hover:text-gold-ink">
                  <span className="flex items-baseline gap-2">
                    <span className="font-heading text-[1.2rem] leading-tight text-ink">{item.name}</span>
                    <span className="mb-1 flex-1 border-b border-dotted border-line" aria-hidden="true" />
                    <span className="text-sm text-ink tabular-nums">{formatPrice(item.price)}</span>
                  </span>
                  {item.signature ? (
                    <span className="text-[0.6rem] tracking-[0.18em] text-gold-ink uppercase">Kerala kitchen</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <PillLink href="/menu" tone="gold">
            View full menu
          </PillLink>
          <PillLink href={whatsappHref(whatsappMessages.book)} tone="outline" external>
            Book a table
          </PillLink>
        </div>
      </div>
    </section>
  );
}
