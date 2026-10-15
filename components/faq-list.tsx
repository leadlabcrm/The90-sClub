"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, type ReactNode } from "react";

import type { FaqItem } from "@/lib/faq";
import type { Photo } from "@/lib/photos";
import { cn } from "@/lib/utils";

export function FaqList({
  items,
  photo,
  heading = (
    <>
      Answers for <em>questions</em>
    </>
  ),
}: {
  items: readonly FaqItem[];
  photo?: Photo;
  heading?: ReactNode;
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
      <div>
        <p className="eyebrow text-gold-ink">FAQ</p>
        <h2 className="lux-h2 mt-3 max-w-[12ch] text-ink">{heading}</h2>
        {photo ? (
          <div className="lux-photo relative mt-8 hidden aspect-[4/5] max-w-[360px] lg:block">
            <Image src={photo.src} alt={photo.alt} fill sizes="360px" className="object-cover" />
          </div>
        ) : null}
      </div>
      <div>
        {items.map((item, index) => {
          const expanded = open === index;
          return (
            <div key={item.question} className="border-b border-ink/70">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? -1 : index)}
              >
                <span className="font-heading text-[clamp(1.25rem,1.05rem+0.8vw,1.75rem)] leading-snug font-medium text-ink">
                  {item.question}
                </span>
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.25}
                  className={cn(
                    "size-6 shrink-0 text-gold transition-transform duration-300 motion-reduce:transition-none",
                    expanded && "rotate-90",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none",
                  expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="max-w-[68ch] pb-5 text-[length:var(--text-body)] leading-[var(--leading-body)] text-ink-soft">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
