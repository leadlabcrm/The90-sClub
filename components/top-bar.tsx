import { Clock, MapPin } from "lucide-react";

import { hours, links } from "@/lib/site";

/** 01 Top info bar: hours and address. Actions live in the header buttons, booking in the hero, so nothing repeats above the fold. */
export function TopBar() {
  return (
    <div className="hidden border-b border-ivory/15 text-[0.7rem] tracking-[0.14em] text-ivory/75 uppercase min-[1180px]:block">
      <div className="lux-container flex h-9 items-center tabular-nums">
        <span className="inline-flex items-center gap-2">
          <Clock aria-hidden="true" className="size-3.5 text-gold" strokeWidth={1.75} />
          Open daily {hours.short} · {hours.eventNights}
        </span>
        <a href={links.directions} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-2 hover:text-gold-highlight">
          <MapPin aria-hidden="true" className="size-3.5 text-gold" strokeWidth={1.75} />
          Millennium Plaza, Hosur Rd, Veerasandra, Electronic City
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
