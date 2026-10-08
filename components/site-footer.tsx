import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { PillLink } from "@/components/pill";
import { menuSections } from "@/lib/menu";
import { address, hours, links, phone, primaryNav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-black text-cream">
      <div className="lux-container flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <h2 className="max-w-xl font-heading text-[2.5rem] leading-[1.1] font-semibold text-cream">
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

      <div className="lux-container grid gap-12 border-t border-white/10 py-14 md:grid-cols-2 lg:grid-cols-5 lg:gap-8 lg:pb-20">
        <div>
          <h2 className="font-heading text-[1.75rem] leading-none font-medium">Links</h2>
          <ul className="mt-6 space-y-3 text-base">
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
          <h2 className="font-heading text-[1.75rem] leading-none font-medium">Menu</h2>
          <ul className="mt-6 space-y-3 text-base">
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
          <h2 className="font-heading text-[1.75rem] leading-none font-medium">Address</h2>
          <address className="mt-6 space-y-1 text-base leading-7 not-italic">
            <span className="block">{address.line1}</span>
            <span className="block">{address.line2}</span>
            <span className="block">{address.line3}</span>
            <span className="block">{address.line4}</span>
          </address>
          <a href={phone.href} className="mt-4 inline-block text-gold-highlight hover:text-gold">
            {phone.display}
          </a>
        </div>

        <div>
          <h2 className="font-heading text-[1.75rem] leading-none font-medium">Hours</h2>
          <p className="mt-6 text-base leading-7">{hours.full}</p>
          <p className="mt-3 text-base text-cream/80">Parking at Millennium Plaza.</p>
        </div>

        <div>
          <BrandLogo variant="metallic" className="h-36" />
          <p className="mt-5 max-w-[16rem] text-base leading-7 text-[#b9ad93]">
            A Kerala kitchen and rooftop taproom in Electronic City.
          </p>
        </div>
      </div>

      <div className="lux-container border-t border-white/10 py-6 text-sm text-[#b9ad93]">
        <p>© 2026 The 90s Club · Electronic City</p>
      </div>
    </footer>
  );
}
