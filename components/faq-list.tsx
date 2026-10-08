"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function FaqList({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
      <div>
        <p className="eyebrow text-gold-ink">FAQ</p>
        <h2 className="lux-h2 mt-4 max-w-[12ch] text-ink">
          Answers for <em>questions</em>
        </h2>
      </div>
      <div>
        {items.map((item, index) => {
          const expanded = open === index;
          return (
            <div key={item.question} className="border-b border-line">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? -1 : index)}
              >
                <span className="font-heading text-[clamp(1.5rem,2.2vw,32px)] leading-[1.1] font-medium text-ink">
                  {item.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn("size-5 shrink-0 text-ink transition-transform duration-300", expanded && "rotate-180")}
                />
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300",
                  expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-6 text-base leading-7 text-ink-soft">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
