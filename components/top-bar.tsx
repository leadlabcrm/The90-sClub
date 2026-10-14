import { Clock, MapPin, Phone } from "lucide-react";

import { InstagramIcon, WhatsAppIcon } from "@/components/social-icons";
import { hours, links, phone, whatsappHref, whatsappMessages } from "@/lib/site";

/** 01 Top info bar. Desktop only; the sticky action bar carries the same actions on phones. */
export function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-black text-[0.8rem] text-cream/90 min-[1180px]:block">
      <div className="lux-container flex h-9 items-center gap-6 tabular-nums">
        <span className="inline-flex items-center gap-1.5">
          <Clock aria-hidden="true" className="size-3.5 text-gold" />
          Open daily {hours.short}
        </span>
        <a href={links.directions} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-gold-highlight">
          <MapPin aria-hidden="true" className="size-3.5 text-gold" />
          Hosur Rd, Veerasandra, Electronic City
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <span className="ml-auto inline-flex items-center gap-6">
          <a href={phone.href} className="inline-flex items-center gap-1.5 hover:text-gold-highlight">
            <Phone aria-hidden="true" className="size-3.5 text-gold" />
            {phone.display}
          </a>
          <a
            href={whatsappHref(whatsappMessages.visit)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-gold-highlight"
          >
            <WhatsAppIcon className="size-3.5 text-gold" />
            WhatsApp
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram (opens in a new tab)"
            className="inline-flex items-center hover:text-gold-highlight"
          >
            <InstagramIcon className="size-4 text-gold" />
          </a>
        </span>
      </div>
    </div>
  );
}
