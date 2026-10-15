import { Clock, ParkingCircle, Snowflake, Star, Umbrella, Utensils } from "lucide-react";

import { hours, rating } from "@/lib/site";

const highlights = [
  { icon: Star, value: rating.value, label: `${rating.count} Google reviews` },
  { icon: Clock, value: hours.short, label: "Open daily" },
  { icon: Umbrella, value: "Rooftop", label: "Open-air seating" },
  { icon: Snowflake, value: "80 seats", label: "Fully AC" },
  { icon: ParkingCircle, value: "Parking", label: "Available on site" },
  { icon: Utensils, value: "Veg & Non-Veg", label: "Full menu" },
] as const;

/** 04 Key highlights: thin gold line icon, serif value, letter-spaced label, hairline dividers. */
export function HighlightsStrip() {
  return (
    <section aria-label="Key highlights" className="border-b border-line bg-ivory">
      <ul className="lux-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {highlights.map(({ icon: Icon, value, label }, index) => (
          <li
            key={label}
            className={
              "flex flex-col items-center px-2 py-6 text-center sm:py-8 lg:border-l lg:border-line" +
              (index === 0 ? " lg:border-l-0" : "")
            }
          >
            <Icon aria-hidden="true" className="size-6 text-gold" strokeWidth={1.25} />
            <p className="mt-4 font-heading text-[1.3rem] leading-none font-medium whitespace-nowrap text-ink tabular-nums sm:text-[1.75rem]">
              {value}
            </p>
            <p className="mt-2 text-[0.62rem] tracking-[0.18em] whitespace-nowrap text-ink-soft uppercase sm:text-[0.7rem] sm:tracking-[0.22em]">
              {label}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
