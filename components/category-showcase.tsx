"use client";

import Image from "next/image";
import { useState } from "react";

import { PillLink } from "@/components/pill";
import { TypographicCard } from "@/components/typographic-card";
import { cn } from "@/lib/utils";

export type CategorySlide = {
  id: string;
  title: string;
  intro: string;
  image?: string;
  alt?: string;
  position?: string;
};

export function CategoryShowcase({ categories }: { categories: CategorySlide[] }) {
  const firstPhoto = Math.max(
    0,
    categories.findIndex((category) => Boolean(category.image)),
  );
  const [active, setActive] = useState(firstPhoto);
  const current = categories[active] ?? categories[0];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(260px,420px)_minmax(0,1fr)] lg:gap-12">
      <div>
        <p className="eyebrow text-gold-ink">Categories</p>
        <ul className="mt-6 space-y-2">
          {categories.map((category, index) => {
            const selected = index === active;
            return (
              <li key={category.id}>
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  className="group flex items-center gap-3 text-left"
                  aria-pressed={selected}
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
                      "font-heading text-[clamp(1.75rem,1.2rem+1.5vw,2.25rem)] leading-none font-medium text-ink",
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
        <PillLink href="/menu" tone="outlineSm" className="mt-8 hidden lg:inline-flex">
          See full menu
        </PillLink>
      </div>

      <div>
        {current.image && current.alt ? (
          <div className="lux-photo relative h-[200px] rounded-[500px] sm:h-[260px] lg:h-[300px]">
            <Image
              key={current.image + current.id}
              src={current.image}
              alt={current.alt}
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
              style={current.position ? { objectPosition: current.position } : undefined}
            />
          </div>
        ) : (
          <TypographicCard title={current.title} aspect="oval" tone="dark" className="mx-auto w-full max-w-[640px]" />
        )}
        <p className="prose-body mx-auto mt-6 max-w-[62ch] text-center text-ink-soft">{current.intro}</p>
        <div className="mt-6 flex justify-center lg:hidden">
          <PillLink href="/menu" tone="outlineSm">
            See full menu
          </PillLink>
        </div>
      </div>
    </div>
  );
}
