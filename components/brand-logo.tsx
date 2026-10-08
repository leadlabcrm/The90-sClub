import Image from "next/image";

import { cn } from "@/lib/utils";

/** Nav-sized gold PNG (~114×200). Do not use the 1000px metallic raster in the header. */
export function BrandLogo({
  className,
  alt = "The 90s Club logo",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <Image
      src="/brand/logo-nav-gold.png"
      alt={alt}
      width={114}
      height={200}
      fetchPriority="low"
      sizes="80px"
      className={cn("w-auto", className)}
    />
  );
}
