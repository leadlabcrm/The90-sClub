"use client";

import { CalendarDays, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/social-icons";
import { links, phone, whatsappHref, whatsappMessages } from "@/lib/site";
import { cn } from "@/lib/utils";

const actions = [
  { href: phone.href, label: "Call", short: "Call", aria: `Call ${phone.display}`, Icon: Phone, external: false },
  {
    href: whatsappHref(whatsappMessages.visit),
    label: "WhatsApp",
    short: "WhatsApp",
    aria: "WhatsApp The 90s Club (opens in a new tab)",
    Icon: WhatsAppIcon,
    external: true,
  },
  {
    href: whatsappHref(whatsappMessages.book),
    label: "Book a Table",
    short: "Book",
    aria: "Book a table on WhatsApp (opens in a new tab)",
    Icon: CalendarDays,
    external: true,
  },
  {
    href: links.directions,
    label: "Directions",
    short: "Directions",
    aria: "Directions to The 90s Club (opens in a new tab)",
    Icon: MapPin,
    external: true,
  },
] as const;

/** 18 Sticky action bar. Full-width on phones; a floating pill that appears after the hero on larger screens. */
export function StickyCtas() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Quick actions"
      className={cn(
        "sticky-cta fixed inset-x-0 bottom-0 z-50 transition-all duration-300 motion-reduce:transition-none print:hidden",
        "lg:inset-x-auto lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2",
        !scrolled && "lg:pointer-events-none lg:translate-y-4 lg:opacity-0",
      )}
    >
      <ul
        className="grid grid-cols-4 border-t border-gold/35 bg-black text-gold lg:flex lg:rounded-full lg:border lg:border-gold/40 lg:px-2 lg:shadow-[0_18px_50px_rgba(10,9,7,0.35)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {actions.map((action) => (
          <li key={action.label} className="border-r border-gold/20 last:border-r-0 lg:border-r-0">
            <a
              href={action.href}
              aria-label={action.aria}
              className="flex min-h-14 flex-col items-center justify-center gap-1 px-2 py-2 text-gold outline-none transition-colors hover:text-gold-highlight focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset lg:min-h-12 lg:flex-row lg:gap-2 lg:px-5"
              {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <action.Icon aria-hidden="true" className="size-4" strokeWidth={1.75} />
              <span className="text-[0.66rem] font-medium tracking-[0.12em] uppercase lg:text-xs">
                <span className="lg:hidden">{action.short}</span>
                <span className="hidden lg:inline">{action.label}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
