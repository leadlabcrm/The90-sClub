import Link from "next/link";

import { CtaRow } from "@/components/cta-row";
import { address, allNav, hours, links, phone } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-teal/20 bg-teal text-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="type-display text-4xl text-cream">The 90s Club</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-cream/80">
            Taproom and Kitchen
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/90">
            Kerala food and Flying Fox craft beer on a rooftop in Electronic City.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream">Visit</h2>
          <address className="mt-3 space-y-1 text-sm leading-relaxed not-italic text-cream/90">
            <span className="block">{address.line1}</span>
            <span className="block">{address.line2}</span>
            <span className="block">{address.line3}</span>
            <span className="block">{address.line4}</span>
          </address>
          <p className="mt-3 text-sm text-cream/90">{hours.summary}</p>
          <p className="mt-2 text-sm">
            <a className="font-semibold text-cream underline decoration-mustard underline-offset-4" href={phone.href}>
              {phone.display}
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {allNav.map((item) => (
              <li key={item.href}>
                <Link className="text-cream/90 underline decoration-mustard/70 underline-offset-4 hover:text-cream" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream">Get here</h2>
          <CtaRow
            className="mt-4"
            tone="onDark"
            items={["call", "directions", "whatsapp", "instagram"]}
            callLabel="Call"
          />
          <p className="mt-4 text-sm text-cream/90">
            Instagram{" "}
            <a
              className="font-semibold text-cream underline decoration-mustard underline-offset-4"
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              {links.instagramHandle}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 text-xs leading-relaxed text-cream/75 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 The 90s Club · Electronic City</p>
          <p>Interior, food, and street photos are from the venue. Terrace and beer-tap photos are still to come.</p>
        </div>
      </div>
    </footer>
  );
}
