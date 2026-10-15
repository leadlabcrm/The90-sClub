import { Star } from "lucide-react";

import { ReviewSlider } from "@/components/review-slider";
import { photos } from "@/lib/photos";
import { links, rating } from "@/lib/site";

/** 12 Google reviews, on the template's forest-green testimonial band. */
export function ReviewsSection() {
  return (
    <section id="reviews" className="lux-section scroll-mt-24 bg-forest text-ivory">
      <div className="lux-container">
        <p className="eyebrow text-center text-gold-highlight">09 — Reviews</p>
        <h2 className="lux-h2 mt-4 text-center">
          What our <em>guests</em> say
        </h2>
        <p className="mx-auto mt-3 max-w-[48ch] text-center font-heading text-[1.35rem] text-ivory/75">Real reviews from Google, word for word.</p>
        <p className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-ivory/85">
          <span className="inline-flex gap-0.5" aria-label="Five stars">
            {Array.from({ length: 5 }, (_, index) => (
              <Star key={index} aria-hidden="true" className="size-4 fill-gold text-gold" />
            ))}
          </span>
          <span className="tabular-nums">
            <span className="font-heading text-2xl text-ivory">{rating.value}</span> on Google · {rating.count} reviews
          </span>
          <span aria-hidden="true" className="hidden text-ivory/40 sm:inline">
            ·
          </span>
          <a
            href={links.googleListing}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gold/70 underline-offset-4 hover:text-gold-highlight"
          >
            Write a review
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
        <ReviewSlider photo={photos.logoWall} />
      </div>
    </section>
  );
}
