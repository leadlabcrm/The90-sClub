import Image from "next/image";

import { cn } from "@/lib/utils";

const aspects = {
  wide: "aspect-[16/10]",
  photo: "aspect-[4/3]",
  square: "aspect-square",
  tall: "aspect-[3/4]",
} as const;

export function VenuePhoto({
  src,
  alt,
  aspect = "wide",
  priority = false,
  caption,
  className,
  sizes = "(min-width: 1024px) 480px, 100vw",
}: {
  src: string;
  alt: string;
  aspect?: keyof typeof aspects;
  priority?: boolean;
  caption?: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border-2 border-blue bg-charcoal shadow-[4px_4px_0_#F0BD38]",
        className,
      )}
    >
      <div className={cn("relative", aspects[aspect])}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="photo-grade object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="bg-paper px-4 py-3 text-sm leading-relaxed text-charcoal/70">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
