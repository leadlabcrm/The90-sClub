import { Star } from "lucide-react";

import { GoogleIcon } from "@/components/social-icons";
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

/** 12 Google reviews: three equal cards on the site's black band. Real reviews, first name and initial. */
export function ReviewsSection() {
  return (
    <section id="reviews" className="lux-section scroll-mt-24 bg-black text-ivory">
      <div className="lux-container">
        <p className="eyebrow text-center text-gold-highlight">08 — Reviews</p>
        <h2 className="lux-h2 mt-4 text-center">
          What our <em>guests</em> say
        </h2>
        <p className="mx-auto mt-3 max-w-[48ch] text-center font-heading text-[1.35rem] text-ivory/75">Real reviews from Google, word for word.</p>
        <p className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-ivory/85">
          <Stars className="inline-flex gap-0.5" />
          <span className="tabular-nums">
            <span className="font-heading text-2xl text-ivory">{rating.value}</span> on Google · {rating.count} reviews
          </span>
          <span aria-hidden="true" className="hidden text-ivory/40 sm:inline">
            ·
          </span>
          <a href={links.googleListing} target="_blank" rel="noopener noreferrer" className="underline decoration-gold/70 underline-offset-4 hover:text-gold-highlight">
            Write a review
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {featured.map((review) => (
            <li key={review.name} className="flex">
              <blockquote className="flex w-full flex-col rounded-[var(--radius-card)] border border-gold/25 bg-charcoal px-8 py-9">
                <div className="flex items-center justify-between">
                  <Stars className="inline-flex gap-1" />
                  <GoogleIcon className="size-4 text-ivory/60" />
                </div>
                <p className="mt-6 min-h-[6.5rem] font-heading text-[1.25rem] leading-[1.55] text-ivory">“{review.text}”</p>
                <footer className="mt-auto flex items-center gap-3 pt-7">
                  <span className="flex size-9 items-center justify-center rounded-full bg-gold/20 font-heading text-lg text-gold-highlight">
                    {review.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{review.name}</span>
                    <span className="block text-xs text-ivory/60">Google review · {review.date}</span>
                  </span>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
