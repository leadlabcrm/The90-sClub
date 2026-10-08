"use client";

import { ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";

import { RupeeText } from "@/components/price";
import type { FaqItem } from "@/lib/faq";
import { cn } from "@/lib/utils";

export function FaqList({
  items,
  heading = (
    <>
      Answers for <em>questions</em>
    </>
  ),
}: {
  items: readonly FaqItem[];
  heading?: ReactNode;
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
      <div>
        <p className="eyebrow text-gold-ink">FAQ</p>
        <h2 className="lux-h2 mt-3 max-w-[12ch] text-ink">{heading}</h2>
      </div>
      <div>
        {items.map((item, index) => {
          const expanded = open === index;
          return (
            <div key={item.question} className="border-b border-line">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? -1 : index)}
              >
                <span className="font-heading text-[clamp(1.125rem,1rem+0.55vw,1.35rem)] leading-snug font-medium text-ink">
                  {item.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "size-5 shrink-0 text-ink transition-transform duration-300 motion-reduce:transition-none",
                    expanded && "rotate-180",
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
                    <RupeeText text={item.answer} />
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
