"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import type { Photo } from "@/lib/photos";
import type { Review } from "@/lib/reviews";
import { homeReviews } from "@/lib/reviews";

export function ReviewSlider({
  photo,
  reviews = homeReviews,
}: {
  photo: Photo;
  reviews?: readonly Review[];
}) {
  const [index, setIndex] = useState(0);
  const review = reviews[index];
  const last = reviews.length - 1;

  function step(direction: -1 | 1) {
    setIndex((current) => {
      const next = current + direction;
      if (next < 0) return last;
      if (next > last) return 0;
      return next;
    });
  }

  return (
    <div className="relative mx-auto mt-10 max-w-[1100px]">
      <button
        type="button"
        aria-label="Previous review"
        onClick={() => step(-1)}
        className="absolute top-1/2 left-0 z-10 hidden size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/20 bg-black/35 text-ivory hover:border-gold-highlight hover:bg-black/55 lg:inline-flex"
      >
        <ChevronLeft aria-hidden="true" className="size-5" />
      </button>

      <article className="lux-card grid overflow-hidden bg-ivory text-ink md:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-[length:var(--text-body)] leading-[var(--leading-body)] text-ink sm:text-lg">
            “{review.text}”
          </p>
          <p className="mt-6 text-sm font-semibold tracking-wide text-ink">{review.name}</p>
          <p className="mt-1 text-sm text-ink-soft">Google review · {review.date}</p>
        </div>
        <div className="lux-photo relative min-h-56 rounded-none">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 768px) 420px, 100vw"
            loading="lazy"
            fetchPriority="low"
            className="object-cover"
            style={photo.position ? { objectPosition: photo.position } : undefined}
          />
        </div>
      </article>

      <button
        type="button"
        aria-label="Next review"
        onClick={() => step(1)}
        className="absolute top-1/2 right-0 z-10 hidden size-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/20 bg-black/35 text-ivory hover:border-gold-highlight hover:bg-black/55 lg:inline-flex"
      >
        <ChevronRight aria-hidden="true" className="size-5" />
      </button>

      <div className="mt-5 flex justify-center gap-3 lg:hidden">
        <button
          type="button"
          aria-label="Previous review"
          onClick={() => step(-1)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-ivory/25 bg-white/10 text-ivory"
        >
          <ChevronLeft aria-hidden="true" className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Next review"
          onClick={() => step(1)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-ivory/25 bg-white/10 text-ivory"
        >
          <ChevronRight aria-hidden="true" className="size-5" />
        </button>
      </div>
    </div>
  );
}
