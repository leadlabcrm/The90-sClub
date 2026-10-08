import { PillLink } from "@/components/pill";
import { links, phone, whatsappHref, whatsappMessages } from "@/lib/site";
import { cn } from "@/lib/utils";

type CtaItem = "call" | "directions" | "whatsapp" | "instagram";

export function CtaRow({
  items,
  callLabel,
  whatsappMessage = whatsappMessages.visit,
  className,
  tone = "onLight",
}: {
  items: CtaItem[];
  callLabel?: string;
  whatsappMessage?: string;
  className?: string;
  tone?: "onLight" | "onDark";
}) {
  const onDark = tone === "onDark";

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {items.map((item) => {
        if (item === "call") {
          return (
            <PillLink key={item} href={phone.href} tone={onDark ? "solid" : "gold"}>
              {callLabel ?? `Call ${phone.display}`}
            </PillLink>
          );
        }
        if (item === "directions") {
          return (
            <PillLink
              key={item}
              href={links.directions}
              tone={onDark ? "outlineLight" : "outline"}
              external
            >
              Directions
            </PillLink>
          );
        }
        if (item === "whatsapp") {
          return (
            <PillLink
              key={item}
              href={whatsappHref(whatsappMessage)}
              tone={onDark ? "outlineLight" : "outline"}
              external
            >
              WhatsApp
            </PillLink>
          );
        }
        return (
          <PillLink key={item} href={links.instagram} tone={onDark ? "outlineLight" : "outline"} external>
            Instagram
          </PillLink>
        );
      })}
    </div>
  );
}
