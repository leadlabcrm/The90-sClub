import { Clock, ParkingCircle, Snowflake, Star, Umbrella, Utensils } from "lucide-react";

import { hours, rating } from "@/lib/site";

const highlights = [
  { icon: Star, title: `${rating.value} Rating`, copy: `${rating.count} Google reviews` },
  { icon: Clock, title: "Open Daily", copy: hours.short },
  { icon: Umbrella, title: "Rooftop", copy: "Open-air seating" },
  { icon: Snowflake, title: "Fully AC", copy: "80 seats" },
  { icon: ParkingCircle, title: "Parking", copy: "Available on site" },
  { icon: Utensils, title: "Veg & Non-Veg", copy: "Full menu" },
] as const;

/** 04 Key highlights. */
export function HighlightsStrip() {
  return (
    <section aria-label="Key highlights" className="border-b border-line bg-ivory">
      <ul className="lux-container grid grid-cols-2 divide-line sm:grid-cols-3 min-[1180px]:grid-cols-6 min-[1180px]:divide-x">
        {highlights.map(({ icon: Icon, title, copy }) => (
          <li key={title} className="flex flex-col items-center px-3 py-6 text-center">
            <span className="flex size-11 items-center justify-center rounded-full border border-gold/50 bg-white text-gold-ink">
              <Icon aria-hidden="true" className="size-5" strokeWidth={1.6} />
            </span>
            <p className="mt-3 text-sm font-semibold text-ink">{title}</p>
            <p className="mt-0.5 text-xs text-ink-soft tabular-nums">{copy}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
