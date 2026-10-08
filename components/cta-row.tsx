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

  return (
    <div
      className={cn(
        layout === "hero"
          ? "grid w-full max-w-[22rem] grid-cols-2 gap-3 sm:flex sm:w-auto sm:max-w-none sm:flex-wrap"
          : "flex flex-wrap gap-3",
        className,
      )}
    >
      {items.map((item) => {
        if (item === "call") {
          return (
            <PillLink
              key={item}
              href={phone.href}
              tone={onDark ? "solid" : "gold"}
              className={cn("whitespace-nowrap", layout === "hero" && "col-span-2 sm:col-auto")}
            >
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
              className="whitespace-nowrap"
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
              className="whitespace-nowrap"
            >
              WhatsApp
            </PillLink>
          );
        }
        return (
          <PillLink
            key={item}
            href={links.instagram}
            tone={onDark ? "outlineLight" : "outline"}
            external
            className="whitespace-nowrap"
          >
            Instagram
          </PillLink>
        );
      })}
    </div>
  );
}
