import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { GoogleIcon, InstagramIcon, WhatsAppIcon } from "@/components/social-icons";
import { address, footerNav, hours, links, phone, whatsappHref, whatsappMessages } from "@/lib/site";

const social = [
  { label: "Instagram", href: links.instagram, Icon: InstagramIcon },
  { label: "WhatsApp", href: whatsappHref(whatsappMessages.visit), Icon: WhatsAppIcon },
  { label: "Google Maps", href: links.googleListing, Icon: GoogleIcon },
] as const;

/** 17 Footer. */
export function SiteFooter() {
  return (
    <footer className="bg-black text-cream">
      <div className="lux-container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-8 lg:py-16">
        <div>
          <div className="flex items-center gap-4">
            <BrandLogo variant="metallic" className="h-20" alt="" />
            <div>
              <p className="font-heading text-2xl leading-none font-semibold">The 90s Club</p>
              <p className="mt-1 text-sm text-cream/70">Taproom & Kitchen</p>
            </div>
          </div>
          <p className="mt-5 max-w-[22rem] text-sm leading-7 text-[#b9ad93]">
            A retro 90s taproom with a Kerala kitchen at Millennium Plaza, Hebbagodi. Craft beer, seafood, biryani
            and the music you grew up on.
          </p>
          <ul className="mt-5 flex gap-3">
            {social.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (opens in a new tab)`}
                  className="flex size-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-black"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl leading-none font-medium">Quick links</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold-highlight">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl leading-none font-medium">Contact</h2>
          <address className="mt-5 space-y-1 text-sm leading-7 not-italic">
            <span className="block">{address.line1}</span>
            <span className="block">{address.line2}</span>
            <span className="block">{address.line3}</span>
            <span className="block">{address.line4}</span>
          </address>
          <a href={phone.href} className="mt-3 inline-block text-gold-highlight tabular-nums hover:text-gold">
            {phone.display}
          </a>
        </div>

        <div>
          <h2 className="font-heading text-2xl leading-none font-medium">Hours & listings</h2>
          <p className="mt-5 text-sm leading-7">
            Mon–Sun {hours.short}
            <br />
            {hours.eventNights}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={links.googleListing} target="_blank" rel="noopener noreferrer" className="hover:text-gold-highlight">
                Google Maps
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold-highlight">
                Instagram {links.instagramHandle}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
          <p className="mt-3 text-sm text-cream/70">Parking at Millennium Plaza.</p>
        </div>
      </div>

      <div className="lux-container flex flex-col gap-2 border-t border-white/10 py-5 text-xs text-[#b9ad93] sm:flex-row sm:justify-between">
        <p>© 2026 The 90s Club Taproom & Kitchen. All rights reserved.</p>
        <p>Please drink responsibly. Legal drinking age applies.</p>
      </div>
    </footer>
  );
}
