import { InstagramIcon } from "@/components/social-icons";
import { hours, links } from "@/lib/site";

/** 01 Top info bar: hours, address and Instagram. Phone lives in the header, booking in the hero, so nothing repeats above the fold. */
export function TopBar() {
  return (
    <div className="hidden border-b border-ivory/15 text-[0.7rem] tracking-[0.14em] text-ivory/75 uppercase min-[1180px]:block">
      <div className="lux-container flex h-9 items-center gap-8 tabular-nums">
        <span>Open daily {hours.short}</span>
        <a href={links.directions} target="_blank" rel="noopener noreferrer" className="hover:text-gold-highlight">
          Hosur Rd, Veerasandra, Electronic City
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center gap-2 hover:text-gold-highlight"
        >
          <InstagramIcon className="size-3.5" />
          {links.instagramHandle}
          <span className="sr-only"> on Instagram (opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
