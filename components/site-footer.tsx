import { MapPin } from "lucide-react";
import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { InstagramIcon, WhatsAppIcon } from "@/components/social-icons";
import { menuSections } from "@/lib/menu";
import { address, footerNav, hours, links, phone, whatsappHref, whatsappMessages } from "@/lib/site";

const social = [
  { label: "Instagram", href: links.instagram, Icon: InstagramIcon },
  { label: "WhatsApp", href: whatsappHref(whatsappMessages.visit), Icon: WhatsAppIcon },
  { label: "Directions", href: links.directions, Icon: MapPin },
] as const;

/** 17 Footer, in the template's charcoal four-column layout. */
export function SiteFooter() {
  return (
    <footer className="bg-charcoal-2 text-ivory">
      <div className="lux-container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] lg:gap-10 lg:py-24">
        <div>
          <BrandLogo variant="metallic" className="h-24" alt="The 90s Club" />
          <p className="mt-6 max-w-[24rem] text-[0.95rem] leading-7 text-ivory/80">
            A retro 90s taproom with a Kerala kitchen at Millennium Plaza, Hebbagodi. Craft beer, seafood, biryani and
            the music you grew up on.
          </p>
          <h3 className="mt-8 font-heading text-2xl leading-none font-medium">Hours</h3>
          <p className="mt-4 text-[0.95rem] leading-7 text-ivory/85">
            Mon – Sun ( {hours.short} )
            <br />
            {hours.eventNights}
          </p>
          <ul className="mt-6 flex gap-3">
            {social.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (opens in a new tab)`}
                  className="flex size-10 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-2xl leading-none font-medium">Links</h2>
          <ul className="mt-6 space-y-3 text-[0.95rem]">
            {footerNav.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={index === 0 ? "text-gold underline decoration-gold/60 underline-offset-4" : "hover:text-gold-highlight"}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl leading-none font-medium">Menu</h2>
          <ul className="mt-6 space-y-3 text-[0.95rem]">
            <li>
              <Link href="/menu" className="hover:text-gold-highlight">
                Our Menu
              </Link>
            </li>
            {menuSections.map((section) => (
              <li key={section.id}>
                <Link href={`/menu#${section.id}`} className="hover:text-gold-highlight">
                  {section.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/craft-beer" className="hover:text-gold-highlight">
                Drinks & Beer
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl leading-none font-medium">Address</h2>
          <address className="mt-6 text-[0.95rem] leading-7 not-italic text-ivory/85">
            {address.line1}
            <br />
            {address.line2}
            <br />
            {address.line3}, {address.line4}
          </address>
          <a href={phone.href} className="mt-4 inline-block text-[0.95rem] text-ivory tabular-nums hover:text-gold-highlight">
            {phone.display}
          </a>
          <div className="mt-8">
            <a
              href={links.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-gold pb-1 text-[0.95rem] font-medium hover:text-gold-highlight"
            >
              Get location direction
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

      </div>

      <div className="lux-container flex flex-col gap-3 border-t border-ivory/10 py-7 text-sm text-ivory/60 sm:flex-row sm:items-center sm:justify-between pb-[calc(5.25rem+env(safe-area-inset-bottom,0px))] lg:pb-28">
        <p>Copyright © The 90s Club Taproom & Kitchen 2026. All rights reserved.</p>
        <p>Please drink responsibly. Legal drinking age applies.</p>
        <a href="#top" className="text-ivory/85 hover:text-gold-highlight">
          Back to Top
        </a>
      </div>
    </footer>
  );
}
