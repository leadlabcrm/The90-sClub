import { links, phone, whatsappHref, whatsappMessages } from "@/lib/site";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6.6 4.2c.4-1 1.5-1.4 2.5-1l2 1c.8.4 1.2 1.3 1 2.2l-.6 2.2a1.8 1.8 0 0 1-.9 1.1l-1.2.6a12.4 12.4 0 0 0 5.7 5.7l.6-1.2c.3-.4.7-.7 1.1-.9l2.2-.6c.9-.2 1.8.2 2.2 1l1 2c.4 1 0 2.1-1 2.5l-1.7.7c-2.2.8-6-0.2-10.2-4.4S3.7 9.1 4.5 6.9l.7-1.7Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 6.8A3.8 3.8 0 0 1 8.8 3h6.4A3.8 3.8 0 0 1 19 6.8v5.4A3.8 3.8 0 0 1 15.2 16H11l-4.2 3.2A.8.8 0 0 1 5.5 18.6V16A3.8 3.8 0 0 1 5 12.2V6.8Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const actions = [
  {
    href: phone.href,
    label: "Call",
    detail: phone.display,
    aria: `Call ${phone.display}`,
    Icon: PhoneIcon,
    external: false,
  },
  {
    href: links.directions,
    label: "Directions",
    detail: "Google Maps",
    aria: "Directions to The 90s Club (opens in a new tab)",
    Icon: PinIcon,
    external: true,
  },
  {
    href: whatsappHref(whatsappMessages.visit),
    label: "WhatsApp",
    detail: "Message the team",
    aria: "WhatsApp The 90s Club (opens in a new tab)",
    Icon: ChatIcon,
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
                <action.Icon className="size-4" />
                <span className="text-[0.68rem] font-medium tracking-[0.12em] uppercase">{action.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        aria-label="Quick actions"
        className="sticky-cta pointer-events-none fixed top-1/2 right-3 z-40 hidden -translate-y-1/2 lg:block print:hidden xl:right-4"
      >
        <ul className="pointer-events-auto flex flex-col gap-3">
          {actions.map((action) => (
            <li key={action.label}>
              <a
                href={action.href}
                aria-label={action.aria}
                title={`${action.label} · ${action.detail}`}
                className="group relative flex size-12 items-center justify-center rounded-full bg-black text-gold shadow-[0_8px_24px_rgba(10,9,7,0.35)] ring-1 ring-gold/45 outline-none transition-colors hover:bg-gold hover:text-black focus-visible:ring-2 focus-visible:ring-gold-highlight"
                {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <action.Icon className="size-4" />
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
