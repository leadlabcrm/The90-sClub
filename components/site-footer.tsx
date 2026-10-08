import { Camera, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { CtaRow } from "@/components/cta-row";
import {
  address,
  allNav,
  links,
  phone,
  whatsappHref,
  whatsappMessages,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal px-3 pb-6 pt-14 sm:px-5 sm:pb-8 sm:pt-20">
      <div className="mx-auto mb-8 flex w-full max-w-[1220px] flex-col items-start justify-between gap-6 rounded-2xl border-2 border-gold bg-blue px-5 py-7 text-cream shadow-[6px_6px_0_#F0BD38] sm:px-8 md:flex-row md:items-center">
        <div>
          <p className="type-label text-[0.7rem] text-gold">Open noon to midnight · every day</p>
          <h2 className="type-display mt-2 max-w-2xl text-3xl sm:text-4xl">
            Kerala plates, a rooftop table, and a pour from the taproom.
          </h2>
        </div>
        <CtaRow
          className="shrink-0"
          tone="onDark"
          items={["call", "directions"]}
          callLabel="Call"
        />
      </div>

      <div className="club-card mx-auto w-full max-w-[1220px] px-5 py-6 sm:px-7 sm:py-8">
        <div className="flex flex-col gap-6 border-b-2 border-blue pb-6 sm:flex-row sm:items-center sm:justify-between">
          <BrandLogo className="w-[12.5rem] sm:w-[14rem]" />
          <div className="flex gap-2">
            {[
              {
                href: phone.href,
                label: "Call The 90s Club",
                icon: Phone,
              },
              {
                href: links.directions,
                label: "Directions to The 90s Club",
                icon: MapPin,
              },
              {
                href: whatsappHref(whatsappMessages.visit),
                label: "Message The 90s Club on WhatsApp",
                icon: MessageCircle,
              },
              {
                href: links.instagram,
                label: "The 90s Club on Instagram",
                icon: Camera,
              },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="club-button inline-flex size-10 items-center justify-center bg-gold text-charcoal"
              >
                <Icon aria-hidden="true" className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-10 py-8 md:grid-cols-[0.8fr_1.25fr_1fr]">
          <div>
            <h2 className="type-display text-2xl text-blue">Explore</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2 text-sm">
              {allNav.map((item) => (
                <li key={item.href}>
                  <Link
                    className="type-label text-[0.68rem] text-charcoal hover:text-blue"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="type-display text-2xl text-blue">Find us</h2>
            <address className="mt-4 max-w-md text-sm leading-relaxed not-italic text-charcoal/80">
              <span className="block">{address.line1}</span>
              <span className="block">{address.line2}</span>
              <span className="block">{address.line3}</span>
              <span className="block">{address.line4}</span>
            </address>
            <a
              className="mt-3 inline-block font-semibold text-blue underline decoration-gold decoration-2 underline-offset-4"
              href={phone.href}
            >
              {phone.display}
            </a>
          </div>

          <div>
            <h2 className="type-display text-2xl text-blue">Hours</h2>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between gap-4 border-b border-blue/20 pb-2">
                <dt>Monday–Friday</dt>
                <dd>12 pm–12 am</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-blue/20 pb-2">
                <dt>Saturday–Sunday</dt>
                <dd>12 pm–12 am</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm text-charcoal/70">Parking available at Millennium Plaza.</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t-2 border-blue pt-4 text-[0.67rem] uppercase tracking-[0.12em] text-charcoal/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 The 90s Club · Electronic City</p>
          <p>Established February 2026 · Akhil &amp; Sathish</p>
        </div>
      </div>
    </footer>
  );
}
