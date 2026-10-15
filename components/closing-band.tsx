import type { ReactNode } from "react";

import { CtaRow } from "@/components/cta-row";
import { whatsappMessages } from "@/lib/site";

type CtaItem = "call" | "directions" | "whatsapp" | "instagram";

/** Dark closing band shared by the inner pages. */
export function ClosingBand({
  eyebrow,
  title,
  children,
  items = ["whatsapp", "call", "directions"],
  whatsappMessage = whatsappMessages.book,
  callLabel = "Call to book",
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  items?: CtaItem[];
  whatsappMessage?: string;
  callLabel?: string;
}) {
  return (
    <section className="lux-section bg-black text-cream">
      <div className="lux-container flex flex-col items-center text-center">
        <p className="eyebrow text-gold-highlight">{eyebrow}</p>
        <h2 className="lux-h2 mt-4 max-w-3xl">{title}</h2>
        <div className="prose-body mt-5 text-cream/85 [&_p]:mx-auto">{children}</div>
        <CtaRow className="mt-8 justify-center" tone="onDark" items={items} whatsappMessage={whatsappMessage} callLabel={callLabel} />
      </div>
    </section>
  );
}
