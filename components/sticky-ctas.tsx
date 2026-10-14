"use client";

import { CalendarDays, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/social-icons";
import { links, phone, whatsappHref, whatsappMessages } from "@/lib/site";
import { cn } from "@/lib/utils";

const actions = [
  { href: phone.href, label: "Call", aria: `Call ${phone.display}`, Icon: Phone, external: false },
  {
    href: whatsappHref(whatsappMessages.visit),
    label: "WhatsApp",
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
    aria: "Directions to The 90s Club (opens in a new tab)",
    Icon: MapPin,
    external: true,
  },
] as const;

/** 18 Sticky action bar. Always on phones; slides in after the hero on larger screens. */
export function StickyCtas() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Quick actions"
      className={cn(
        "sticky-cta fixed inset-x-0 bottom-0 z-50 border-t border-gold/35 bg-black text-gold transition-transform duration-300 motion-reduce:transition-none print:hidden",
        !scrolled && "lg:translate-y-full",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="mx-auto grid max-w-[1440px] grid-cols-4">
        {actions.map((action) => (
          <li key={action.label} className="border-r border-gold/20 last:border-r-0">
            <a
              href={action.href}
              aria-label={action.aria}
              className="flex min-h-14 flex-col items-center justify-center gap-1 px-2 py-2 text-gold outline-none transition-colors hover:bg-gold/10 focus-visible:bg-gold/15 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset sm:min-h-12 sm:flex-row sm:gap-2"
              {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <action.Icon aria-hidden="true" className="size-4" strokeWidth={1.75} />
              <span className="text-[0.66rem] font-medium tracking-[0.12em] uppercase sm:text-xs">
                {"short" in action ? (
                  <>
                    <span className="sm:hidden">{action.short}</span>
                    <span className="hidden sm:inline">{action.label}</span>
                  </>
                ) : (
                  action.label
                )}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
