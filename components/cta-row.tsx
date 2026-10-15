import { MapPin, Phone } from "lucide-react";

import { IconCircle } from "@/components/icon-circle";
import { PillLink } from "@/components/pill";
import { InstagramIcon, WhatsAppIcon } from "@/components/social-icons";
import { links, phone, whatsappHref, whatsappMessages } from "@/lib/site";
import { cn } from "@/lib/utils";

type CtaItem = "call" | "directions" | "whatsapp" | "instagram";

/** One primary pill (the first item), then round icon buttons for the rest. */
export function CtaRow({
  items,
  callLabel,
  whatsappMessage = whatsappMessages.visit,
  className,
  tone = "onLight",
  layout = "inline",
}: {
  items: CtaItem[];
  callLabel?: string;
  whatsappMessage?: string;
  className?: string;
  tone?: "onLight" | "onDark";
  layout?: "inline" | "hero";
}) {
  const onDark = tone === "onDark";
  const [primary, ...rest] = items;

  const config = {
    call: { href: phone.href, label: callLabel ?? `Call ${phone.display}`, Icon: Phone, external: false },
    directions: { href: links.directions, label: "Directions", Icon: MapPin, external: true },
    whatsapp: { href: whatsappHref(whatsappMessage), label: "WhatsApp", Icon: WhatsAppIcon, external: true },
    instagram: { href: links.instagram, label: "Instagram", Icon: InstagramIcon, external: true },
  } as const;

  const first = config[primary];

  return (
    <div className={cn("flex flex-wrap items-center gap-3", layout === "hero" && "justify-center", className)}>
      <PillLink href={first.href} tone={onDark ? "solid" : "gold"} external={first.external} className="whitespace-nowrap">
        {first.label}
      </PillLink>
      {rest.map((item) => {
        const c = config[item];
        return <IconCircle key={item} href={c.href} label={c.label} Icon={c.Icon} tone={tone} external={c.external} />;
      })}
    </div>
  );
}
