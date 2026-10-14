"use client";

import Link from "next/link";
import { useState } from "react";

import { PillLink } from "@/components/pill";
import { formatPrice, menuSections, slugify } from "@/lib/menu";
import { whatsappHref, whatsappMessages } from "@/lib/site";
import { cn } from "@/lib/utils";

const drinks = { id: "drinks", title: "Drinks & Beer" } as const;

/** 08 Menu preview. Category names in serif on the left, the live card on the right. */
export function MenuPreview() {
  const categories = [...menuSections.map((s) => ({ id: s.id, title: s.title })), drinks];
  const [active, setActive] = useState(menuSections[1].id);
  const section = menuSections.find((item) => item.id === active);
  const preview = section ? section.items.slice(0, 8) : [];

  return (
    <section id="menu" className="lux-section scroll-mt-24 bg-ivory">
      <div className="lux-container grid gap-12 lg:grid-cols-[minmax(260px,400px)_minmax(0,1fr)] lg:gap-20">
        <div>
          <p className="eyebrow text-gold-ink">Food & drinks</p>
          <h2 className="lux-h2 mt-4 text-ink">
            Our <em>menu</em>
          </h2>
          <ul className="mt-10 space-y-3" role="tablist" aria-label="Menu categories">
            {categories.map((category) => {
              const selected = category.id === active;
              return (
                <li key={category.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(category.id)}
                    onMouseEnter={() => setActive(category.id)}
                    className="group flex items-center gap-3 text-left"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "h-px bg-ink transition-[width] duration-300 motion-reduce:transition-none",
                        selected ? "w-10" : "w-0 group-hover:w-6",
                      )}
                    />
                    <span
                      className={cn(
                        "font-heading text-[clamp(1.6rem,1.2rem+1.3vw,2.25rem)] leading-none font-medium text-ink",
                        selected && "italic",
                      )}
                    >
                      {category.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="self-center">
          {section ? (
            <>
              <p className="prose-body text-ink-soft">{section.intro}</p>
              <ul className="mt-8 grid gap-x-12 md:grid-cols-2">
                {preview.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={`/menu#${slugify(item.name)}`}
                      className="flex items-baseline gap-3 border-b border-line py-4 hover:text-gold-ink"
                    >
                      <span className="font-heading text-[1.2rem] leading-tight text-ink">{item.name}</span>
                      {item.signature ? (
                        <span className="text-[0.6rem] tracking-[0.18em] text-gold-ink uppercase">Kerala</span>
                      ) : null}
                      <span className="ml-auto text-sm text-ink tabular-nums">{formatPrice(item.price)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="max-w-xl">
              <p className="font-heading text-[2rem] leading-tight text-ink">Flying Fox craft beer on tap</p>
              <p className="prose-body mt-4 text-ink-soft">
                Pints, beer buckets and the BOGO list change through the week, so the team confirms today&apos;s pours
                and prices on WhatsApp or at the bar. The ₹999 Bucket Beer Combo comes with one veg and one non-veg
                starter.
              </p>
            </div>
          )}
          <div className="mt-10 flex flex-wrap gap-3">
            <PillLink href="/menu" tone="gold">
              View full menu
            </PillLink>
            <PillLink href={whatsappHref(whatsappMessages.book)} tone="outline" external>
              Book a table
            </PillLink>
          </div>
        </div>
      </div>
    </section>
  );
}
