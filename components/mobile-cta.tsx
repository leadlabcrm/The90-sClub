import { MapPin, MessageCircle, Phone } from "lucide-react";

import { links, phone, whatsappHref, whatsappMessages } from "@/lib/site";

export function MobileCta() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-cream/95 backdrop-blur lg:hidden"
    >
      <ul className="grid grid-cols-3">
        <li>
          <a
            href={phone.href}
            className="flex h-16 flex-col items-center justify-center gap-1 text-xs font-semibold text-charcoal"
          >
            <Phone aria-hidden="true" className="size-4 text-teal" />
            Call
          </a>
        </li>
        <li>
          <a
            href={links.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-16 flex-col items-center justify-center gap-1 text-xs font-semibold text-charcoal"
          >
            <MapPin aria-hidden="true" className="size-4 text-teal" />
            Directions
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a
            href={whatsappHref(whatsappMessages.visit)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-16 flex-col items-center justify-center gap-1 text-xs font-semibold text-charcoal"
          >
            <MessageCircle aria-hidden="true" className="size-4 text-teal" />
            WhatsApp
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
