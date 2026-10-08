"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { homeReviews } from "@/lib/reviews";

export function ReviewSlider({ photo, alt }: { photo: string; alt: string }) {
  const [index, setIndex] = useState(0);
  const review = homeReviews[index];
  const last = homeReviews.length - 1;

  function step(direction: -1 | 1) {
    setIndex((current) => {
      const next = current + direction;
      if (next < 0) return last;
      if (next > last) return 0;
      return next;
    });
  }

  return (
    <div className="relative mx-auto mt-12 max-w-[1100px]">
      <button
        type="button"
        aria-label="Previous review"
        onClick={() => step(-1)}
        className="absolute top-1/2 left-0 z-10 hidden size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-ivory hover:bg-black/50 lg:inline-flex"
      >
        <ChevronLeft aria-hidden="true" className="size-5" />
      </button>

      <article className="grid overflow-hidden bg-ivory text-ink md:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12">
          <p className="whitespace-pre-line text-lg leading-8 text-ink sm:text-xl sm:leading-9">{review.text}</p>
          <p className="mt-8 text-base font-semibold text-ink">{review.name}</p>
          <p className="mt-1 text-sm text-ink-soft">Google review · {review.date}</p>
        </div>
        <div className="relative min-h-64">
          <Image src={photo} alt={alt} fill sizes="(min-width: 768px) 420px, 100vw" className="object-cover" />
        </div>
      </article>

      <button
        type="button"
        aria-label="Next review"
        onClick={() => step(1)}
        className="absolute top-1/2 right-0 z-10 hidden size-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-ivory hover:bg-black/50 lg:inline-flex"
      >
        <ChevronRight aria-hidden="true" className="size-5" />
      </button>

      <div className="mt-6 flex justify-center gap-3 lg:hidden">
        <button
          type="button"
          aria-label="Previous review"
          onClick={() => step(-1)}
          className="inline-flex size-10 items-center justify-center rounded-full bg-white/15 text-ivory"
        >
          <ChevronLeft aria-hidden="true" className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Next review"
          onClick={() => step(1)}
          className="inline-flex size-10 items-center justify-center rounded-full bg-white/15 text-ivory"
        >
          <ChevronRight aria-hidden="true" className="size-5" />
        </button>
      </div>
    </div>
  );
}
