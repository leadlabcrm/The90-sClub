"use client";

import { useEffect, useState } from "react";

import { formatPrice, menuSections, slugify } from "@/lib/menu";
import { cn } from "@/lib/utils";

/** Full food card: category pills, then the selected section with dotted price leaders. */
export function MenuList() {
  const [active, setActive] = useState(menuSections[0].id);
  const section = menuSections.find((s) => s.id === active) ?? menuSections[0];

  // Open the category a /menu#... link points at (a section id or a dish slug), then scroll to it.
  useEffect(() => {
    const apply = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      const target = menuSections.find((s) => s.id === hash || s.items.some((item) => slugify(item.name) === hash));
      if (!target) return;
      setActive(target.id);
      requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ block: "start" }));
    };
    const frame = requestAnimationFrame(apply);
    window.addEventListener("hashchange", apply);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", apply);
    };
  }, []);

  return (
    <section className="bg-ivory pb-20 lg:pb-28">
      <div className="lux-container">
        <div role="tablist" aria-label="Menu categories" className="flex flex-wrap justify-center gap-2">
          {menuSections.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={s.id === active}
              onClick={() => setActive(s.id)}
              className={cn(
                "pill-sm border",
                s.id === active ? "border-ink bg-ink text-ivory" : "border-line bg-white text-ink hover:border-ink",
              )}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div id={section.id} className="mx-auto mt-10 max-w-5xl rounded-[var(--radius-card)] border border-line bg-white px-6 py-8 sm:px-10 sm:py-10">
          <h2 className="text-center font-heading text-[2rem] leading-tight text-ink">{section.title}</h2>
          <p className="mt-2 text-center text-sm text-ink-soft">{section.intro}</p>
          <ul className="mt-8 grid gap-x-12 gap-y-1 md:grid-cols-2">
            {section.items.map((item) => (
              <li key={item.name} id={slugify(item.name)} className="scroll-mt-32 py-3">
                <span className="flex items-baseline gap-2">
                  <span className="font-heading text-[1.2rem] leading-tight text-ink">{item.name}</span>
                  <span className="mb-1 flex-1 border-b border-dotted border-line" aria-hidden="true" />
                  <span className="text-sm text-ink tabular-nums">{formatPrice(item.price)}</span>
                </span>
                {item.signature ? (
                  <span className="text-[0.6rem] tracking-[0.18em] text-gold-ink uppercase">Kerala kitchen</span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
