import Image from "next/image";

import type { Photo } from "@/lib/photos";
import { cn } from "@/lib/utils";

const aspects = {
  wide: "aspect-[16/10]",
  photo: "aspect-[4/3]",
  square: "aspect-square",
  tall: "aspect-[4/5]",
  hero: "aspect-[3/2]",
} as const;

export function VenuePhoto({
  photo,
  src,
  alt,
  aspect = "wide",
  caption,
  className,
  sizes = "(min-width: 1024px) 640px, 100vw",
  overlay = false,
  radius = true,
}: {
  photo?: Photo;
  src?: string;
  alt?: string;
  aspect?: keyof typeof aspects;
  caption?: string;
  className?: string;
  sizes?: string;
  overlay?: boolean;
  radius?: boolean;
}) {
  const imageSrc = photo?.src ?? src;
  const imageAlt = photo?.alt ?? alt;
  if (!imageSrc || !imageAlt) {
    throw new Error("VenuePhoto needs a photo or src and alt.");
  }

  return (
    <figure className={cn(className)}>
      <div
        className={cn(
          "lux-photo",
          overlay && "lux-photo-overlay",
          aspects[aspect],
          !radius && "rounded-none",
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes={sizes}
          className="object-cover"
          style={photo?.position ? { objectPosition: photo.position } : undefined}
        />
      </div>
      {caption ? <figcaption className="mt-3 text-sm leading-6 text-ink-soft">{caption}</figcaption> : null}
    </figure>
  );
}
