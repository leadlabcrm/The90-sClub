import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { PillLink } from "@/components/pill";
import { menuSections } from "@/lib/menu";
import { address, hours, links, phone, primaryNav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-black text-cream">
      <div className="lux-container flex flex-col gap-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-16">
        <h2 className="max-w-xl font-heading text-[clamp(1.75rem,1.3rem+1.4vw,2.35rem)] leading-[1.15] font-semibold text-cream">
          Follow{" "}
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="italic text-gold-highlight hover:text-gold"
          >
            {links.instagramHandle}
            <span className="sr-only"> on Instagram (opens in a new tab)</span>
          </a>
        </h2>
        <PillLink href={links.instagram} tone="gold" external>
          Instagram
        </PillLink>
      </div>

      <div className="lux-container grid gap-10 border-t border-white/10 py-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8 lg:pb-16">
        <div>
          <h2 className="font-heading text-2xl leading-none font-medium">Links</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {primaryNav.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={index === 0 ? "text-gold-highlight hover:text-gold" : "hover:text-gold-highlight"}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl leading-none font-medium">Menu</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {menuSections.map((section) => (
              <li key={section.id}>
                <Link href={`/menu#${section.id}`} className="hover:text-gold-highlight">
                  {section.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/menu#drinks" className="hover:text-gold-highlight">
                Drinks
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl leading-none font-medium">Address</h2>
          <address className="mt-5 space-y-1 text-sm leading-7 not-italic">
            <span className="block">{address.line1}</span>
            <span className="block">{address.line2}</span>
            <span className="block">{address.line3}</span>
            <span className="block">{address.line4}</span>
          </address>
          <a href={phone.href} className="mt-3 inline-block text-gold-highlight hover:text-gold">
            {phone.display}
          </a>
        </div>

        <div>
          <h2 className="font-heading text-2xl leading-none font-medium">Hours</h2>
          <p className="mt-5 text-sm leading-7">{hours.full}</p>
          <p className="mt-3 text-sm text-cream/80">Parking at Millennium Plaza.</p>
        </div>

        <div>
          <BrandLogo variant="metallic" className="h-28" alt="" />
          <p className="mt-4 max-w-[16rem] text-sm leading-7 text-[#b9ad93]">
            A Kerala kitchen and rooftop taproom in Electronic City.
          </p>
        </div>
      </div>

      <div className="lux-container border-t border-white/10 py-5 text-xs text-[#b9ad93]">
        <p>© 2026 The 90s Club · Electronic City</p>
      </div>
    </footer>
  );
}
