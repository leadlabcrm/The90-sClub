import { MapPin, MessageCircle, Phone } from "lucide-react";

import { links, phone, whatsappHref, whatsappMessages } from "@/lib/site";

const actions = [
  {
    href: phone.href,
    label: "Call",
    detail: phone.display,
    aria: `Call ${phone.display}`,
    Icon: Phone,
    external: false,
  },
  {
    href: links.directions,
    label: "Directions",
    detail: "Google Maps",
    aria: "Directions to The 90s Club (opens in a new tab)",
    Icon: MapPin,
    external: true,
  },
  {
    href: whatsappHref(whatsappMessages.visit),
    label: "WhatsApp",
    detail: "Message the team",
    aria: "WhatsApp The 90s Club (opens in a new tab)",
    Icon: MessageCircle,
    external: true,
  },
] as const;

export function StickyCtas() {
  return (
    <>
      <nav
        aria-label="Quick actions"
        className="sticky-cta fixed inset-x-0 bottom-0 z-50 border-t border-gold/35 bg-black text-gold lg:hidden print:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ul className="grid grid-cols-3">
          {actions.map((action) => (
            <li key={action.label} className="border-r border-gold/20 last:border-r-0">
              <a
                href={action.href}
                aria-label={action.aria}
                className="flex min-h-16 flex-col items-center justify-center gap-1 px-2 py-2.5 text-gold outline-none transition-colors hover:bg-gold/10 focus-visible:bg-gold/15 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
                {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <action.Icon aria-hidden="true" className="size-4" strokeWidth={1.75} />
                <span className="text-[0.68rem] font-medium tracking-[0.12em] uppercase">{action.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        aria-label="Quick actions"
        className="sticky-cta pointer-events-none fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 lg:block print:hidden xl:right-6"
      >
        <ul className="pointer-events-auto flex flex-col gap-3">
          {actions.map((action) => (
            <li key={action.label}>
              <a
                href={action.href}
                aria-label={action.aria}
                title={`${action.label} · ${action.detail}`}
                className="group relative flex size-14 items-center justify-center rounded-full bg-black text-gold shadow-[0_8px_24px_rgba(10,9,7,0.35)] ring-1 ring-gold/45 outline-none transition-colors hover:bg-gold hover:text-black focus-visible:ring-2 focus-visible:ring-gold-highlight"
                {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <action.Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                <span className="pointer-events-none absolute top-1/2 right-full mr-3 -translate-y-1/2 rounded-full bg-black px-3 py-1.5 text-xs tracking-wide whitespace-nowrap text-gold opacity-0 shadow-lg ring-1 ring-gold/30 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  {action.label}
                  {action.label === "Call" ? ` ${phone.display}` : ""}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
