import { Phone } from "lucide-react";

import { IconCircle } from "@/components/icon-circle";
import { MenuList } from "@/components/menu-list";
import { PillLink } from "@/components/pill";
import { pageMetadata } from "@/lib/metadata";
import { seo } from "@/lib/seo";
import { phone, whatsappHref, whatsappMessages } from "@/lib/site";

export const metadata = pageMetadata(seo.menu);

export default function MenuPage() {
  return (
    <>
      <section className="bg-ivory pt-32 pb-10 lg:pt-44 lg:pb-14">
        <div className="lux-container text-center">
          <p className="eyebrow text-gold-ink">The 90s Club · Electronic City</p>
          <h1 className="lux-h1 mx-auto mt-5 max-w-[24ch] text-ink">
            The 90s Club menu,
            <br className="hidden sm:block" /> <em>crafted in Kerala</em>
          </h1>
          <p className="mx-auto mt-5 max-w-[52ch] font-heading text-[1.35rem] text-ink-soft">
            Kerala plates lead the card. Starters, mains and Chinese favourites for the table, with Flying Fox craft
            beer at the bar. Prices in rupees.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PillLink href={whatsappHref(whatsappMessages.book)} tone="gold" external>
              Book a Table
            </PillLink>
            <IconCircle href={phone.href} label={`Call ${phone.display}`} Icon={Phone} />
          </div>
        </div>
      </section>

      <MenuList />
    </>
  );
}
