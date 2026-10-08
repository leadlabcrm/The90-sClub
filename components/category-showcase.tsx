"use client";

import Image from "next/image";
import { useState } from "react";

import { PillLink } from "@/components/pill";
import { cn } from "@/lib/utils";

export type CategorySlide = {
  id: string;
  title: string;
  intro: string;
  image: string;
  alt: string;
};

export function CategoryShowcase({ categories }: { categories: CategorySlide[] }) {
  const [active, setActive] = useState(categories.length > 2 ? 2 : 0);
  const current = categories[active] ?? categories[0];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(300px,480px)_minmax(0,1fr)] lg:gap-8">
      <div>
        <p className="eyebrow text-gold-ink">Categories</p>
        <ul className="mt-8 space-y-3">
          {categories.map((category, index) => {
            const selected = index === active;
            return (
              <li key={category.id}>
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  className="group flex items-center gap-4 text-left"
                  aria-pressed={selected}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "h-px bg-ink transition-[width] duration-300",
                      selected ? "w-12" : "w-0 group-hover:w-8",
                    )}
                  />
                  <span
                    className={cn(
                      "font-heading text-[clamp(2.15rem,3.2vw,48px)] leading-none font-semibold text-ink",
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
        <PillLink href="/menu" tone="outlineSm" className="mt-10 hidden lg:inline-flex">
          See full menu
        </PillLink>
      </div>

      <div>
        <div className="relative h-[220px] overflow-hidden rounded-[500px] bg-charcoal sm:h-[280px] lg:h-[331px]">
          <Image
            key={current.image + current.id}
            src={current.image}
            alt={current.alt}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="prose-body mx-auto mt-8 max-w-3xl text-center text-ink-soft">{current.intro}</p>
        <div className="mt-8 flex justify-center lg:hidden">
          <PillLink href="/menu" tone="outlineSm">
            See full menu
          </PillLink>
        </div>
      </div>
    </div>
  );
}
