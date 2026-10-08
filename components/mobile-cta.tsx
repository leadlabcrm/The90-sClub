import { MapPin, MessageCircle, Phone } from "lucide-react";

import { links, phone, whatsappHref, whatsappMessages } from "@/lib/site";

export function MobileCta() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-black bg-gold lg:hidden"
    >
      <ul className="grid grid-cols-3 divide-x divide-black/25">
        <li>
          <a
            href={phone.href}
            className="type-label flex h-16 flex-col items-center justify-center gap-1.5 text-[0.64rem] text-black"
          >
            <Phone aria-hidden="true" className="size-4" />
            Call
          </a>
        </li>
        <li>
          <a
            href={links.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="type-label flex h-16 flex-col items-center justify-center gap-1.5 text-[0.64rem] text-black"
          >
            <MapPin aria-hidden="true" className="size-4" />
            Directions
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a
            href={whatsappHref(whatsappMessages.visit)}
            target="_blank"
            rel="noopener noreferrer"
            className="type-label flex h-16 flex-col items-center justify-center gap-1.5 text-[0.64rem] text-black"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
