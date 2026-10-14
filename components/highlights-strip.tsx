import { hours, rating } from "@/lib/site";

const highlights = [
  { value: rating.value, label: `${rating.count} Google reviews` },
  { value: hours.short, label: "Open daily" },
  { value: "Rooftop", label: "Open-air seating" },
  { value: "80 seats", label: "Fully AC" },
  { value: "Parking", label: "Available on site" },
  { value: "Veg & Non-Veg", label: "Full menu" },
] as const;

/** 04 Key highlights, set as a typographic strip with hairline dividers. */
export function HighlightsStrip() {
  return (
    <section aria-label="Key highlights" className="border-b border-line bg-ivory">
      <ul className="lux-container grid grid-cols-2 sm:grid-cols-3 min-[1180px]:grid-cols-6">
        {highlights.map(({ value, label }, index) => (
          <li
            key={label}
            className={
              "flex flex-col items-center px-2 py-5 text-center sm:py-7 min-[1180px]:border-l min-[1180px]:border-line" +
              (index === 0 ? " min-[1180px]:border-l-0" : "")
            }
          >
            <p className="font-heading text-[1.3rem] leading-none font-medium whitespace-nowrap text-ink tabular-nums sm:text-[1.75rem]">{value}</p>
            <p className="mt-2 text-[0.62rem] tracking-[0.18em] whitespace-nowrap text-ink-soft uppercase sm:text-[0.7rem] sm:tracking-[0.22em]">{label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
