import { InstagramIcon } from "@/components/social-icons";
import { hours, links, phone, whatsappHref, whatsappMessages } from "@/lib/site";

/** 01 Top info bar. A hairline strip above the header on wide screens; the sticky bar carries the same on phones. */
export function TopBar() {
  return (
    <div className="hidden border-b border-ivory/15 text-[0.7rem] tracking-[0.14em] text-ivory/75 uppercase min-[1180px]:block">
      <div className="lux-container flex h-9 items-center gap-8 tabular-nums">
        <span>Open daily {hours.short}</span>
        <a href={links.directions} target="_blank" rel="noopener noreferrer" className="hover:text-gold-highlight">
          Hosur Rd, Veerasandra, Electronic City
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <span className="ml-auto flex items-center gap-8">
          <a href={phone.href} className="hover:text-gold-highlight">
            {phone.display}
          </a>
          <a href={whatsappHref(whatsappMessages.visit)} target="_blank" rel="noopener noreferrer" className="hover:text-gold-highlight">
            WhatsApp
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in a new tab)" className="hover:text-gold-highlight">
            <InstagramIcon className="size-3.5" />
          </a>
        </span>
      </div>
    </div>
  );
}
