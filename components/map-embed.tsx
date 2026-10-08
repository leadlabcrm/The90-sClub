import { links } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MapEmbed({ className }: { className?: string }) {
  return (
    <iframe
      title="Map search for The 90s Club at Millennium Plaza, Hebbagodi, Electronic City"
      src={links.mapsEmbed}
      className={cn("h-72 w-full border border-line bg-charcoal", className)}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
