import { Camera, MapPin, MessageCircle, Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { links, phone, whatsappHref, whatsappMessages } from "@/lib/site";
import { cn } from "@/lib/utils";

type CtaItem = "call" | "directions" | "whatsapp" | "instagram";

const itemClass = "h-12 px-5 text-base";

export function CtaRow({
  items,
  callLabel,
  whatsappMessage = whatsappMessages.visit,
  className,
  tone = "default",
}: {
  items: CtaItem[];
  callLabel?: string;
  whatsappMessage?: string;
  className?: string;
  tone?: "default" | "onDark";
}) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {items.map((item) => {
        if (item === "call") {
          return (
            <a
              key={item}
              href={phone.href}
              className={cn(buttonVariants({ variant: "mustard", size: "lg" }), itemClass)}
            >
              <Phone aria-hidden="true" />
              {callLabel ?? `Call ${phone.display}`}
            </a>
          );
        }
        if (item === "directions") {
          return (
            <a
              key={item}
              href={links.directions}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                itemClass,
                tone === "onDark" && "border-gold bg-cream text-charcoal hover:bg-paper",
              )}
            >
              <MapPin aria-hidden="true" />
              Directions
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          );
        }
        if (item === "whatsapp") {
          return (
            <a
              key={item}
              href={whatsappHref(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                itemClass,
                tone === "onDark" && "border-gold",
              )}
            >
              <MessageCircle aria-hidden="true" />
              WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          );
        }
        return (
          <a
            key={item}
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              itemClass,
              tone === "onDark" && "border-gold",
            )}
          >
            <Camera aria-hidden="true" />
            Instagram
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        );
      })}
    </div>
  );
}
