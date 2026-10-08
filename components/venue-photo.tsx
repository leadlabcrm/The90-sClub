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
  sizes = "(min-width: 1024px) 640px, 100vw",
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
    <figure className={cn(className)}>
      <div className={cn("relative overflow-hidden bg-charcoal", aspects[aspect])}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
      {caption ? <figcaption className="mt-3 text-base leading-6 text-ink-soft">{caption}</figcaption> : null}
    </figure>
  );
}
