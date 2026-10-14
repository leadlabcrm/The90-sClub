import { Star } from "lucide-react";

import { GoogleIcon } from "@/components/social-icons";
import { PillLink } from "@/components/pill";
import { reviews } from "@/lib/reviews";
import { links, rating } from "@/lib/site";

const featured = [reviews.kavyashree, reviews.fran, reviews.deepak] as const;

function Stars({ className }: { className?: string }) {
  return (
    <span className={className} aria-label="Five stars">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} aria-hidden="true" className="size-4 fill-gold text-gold" />
      ))}
    </span>
  );
}

/** 12 Google reviews. Real reviews, first name and initial. */
export function ReviewsSection() {
  return (
    <section id="reviews" className="lux-section scroll-mt-24 bg-black text-ivory">
      <div className="lux-container">
        <p className="eyebrow text-center text-gold-highlight">Guest love</p>
        <h2 className="lux-h2 mt-3 text-center">
          What our <em>guests</em> say
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center rounded-[var(--radius-card)] border border-gold/30 bg-charcoal p-7 text-center">
            <GoogleIcon className="size-6 text-ivory" />
            <p className="mt-4 font-heading text-[4rem] leading-none font-semibold text-gold-highlight tabular-nums">
              {rating.value}
            </p>
            <Stars className="mt-3 inline-flex gap-1" />
            <p className="mt-3 text-sm text-ivory/75">Based on {rating.count} Google reviews</p>
            <PillLink href={links.googleListing} tone="solid" external className="mt-6">
              Write a review
            </PillLink>
          </div>
          {featured.map((review) => (
            <blockquote
              key={review.name}
              className="flex flex-col rounded-[var(--radius-card)] border border-ivory/15 bg-charcoal p-7"
            >
              <div className="flex items-center justify-between">
                <Stars className="inline-flex gap-1" />
                <GoogleIcon className="size-4 text-ivory/60" />
              </div>
              <p className="mt-5 flex-1 text-[0.95rem] leading-7 text-ivory/90">“{review.text}”</p>
              <footer className="mt-6 flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-gold/20 font-heading text-lg text-gold-highlight">
                  {review.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{review.name}</span>
                  <span className="block text-xs text-ivory/60">Google review · {review.date}</span>
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
