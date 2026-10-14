"use client";

import Link from "next/link";
import { useState } from "react";

import { PillLink } from "@/components/pill";
import { formatPrice, menuSections, slugify } from "@/lib/menu";
import { whatsappHref, whatsappMessages } from "@/lib/site";
import { cn } from "@/lib/utils";

const drinksTab = {
  id: "drinks",
  title: "Drinks & Beer",
} as const;

/** 08 Menu preview. Tabs over the real food card; drinks are listed by enquiry. */
export function MenuPreview() {
  const tabs = [...menuSections.map((section) => ({ id: section.id, title: section.title })), drinksTab];
  const [active, setActive] = useState(menuSections[1].id);
  const section = menuSections.find((item) => item.id === active);
  const preview = section ? section.items.slice(0, 8) : [];

  return (
    <section id="menu" className="lux-section scroll-mt-24 bg-ivory">
      <div className="lux-container">
        <p className="eyebrow text-center text-gold-ink">Food & drinks</p>
        <h2 className="lux-h2 mt-3 text-center text-ink">
          Our <em>menu</em>
        </h2>

        <div role="tablist" aria-label="Menu categories" className="mt-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(tab.id)}
                className={cn(
                  "pill-sm border",
                  selected ? "border-ink bg-ink text-ivory" : "border-line bg-white text-ink hover:border-ink",
                )}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        {section ? (
          <>
            <p className="mx-auto mt-6 max-w-[60ch] text-center text-sm text-ink-soft">{section.intro}</p>
            <ul className="mx-auto mt-8 grid max-w-5xl gap-x-12 gap-y-1 md:grid-cols-2">
              {preview.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/menu#${slugify(item.name)}`}
                    className="flex items-baseline gap-3 border-b border-dotted border-line py-3 hover:text-gold-ink"
                  >
                    <span className="font-medium text-ink">{item.name}</span>
                    {item.signature ? (
                      <span className="text-[0.6rem] tracking-[0.14em] text-gold-ink uppercase">Kerala</span>
                    ) : null}
                    <span className="ml-auto text-ink tabular-nums">{formatPrice(item.price)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="mx-auto mt-8 max-w-2xl rounded-[var(--radius-card)] border border-line bg-white p-7 text-center">
            <p className="font-heading text-2xl text-ink">Flying Fox craft beer on tap</p>
            <p className="mt-3 text-sm leading-6 text-ink-soft">
              Pints, beer buckets and the BOGO list change through the week, so the team confirms today&apos;s pours and
              prices on WhatsApp or at the bar. The ₹999 Bucket Beer Combo comes with one veg and one non-veg starter.
            </p>
          </div>
        )}

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
