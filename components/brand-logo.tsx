import Image from "next/image";

import { cn } from "@/lib/utils";

/** Nav-sized gold PNG (~114×200). Do not use the 1000px metallic raster. */
export function BrandLogo({
  className,
  alt = "The 90s Club logo",
  loading = "lazy",
}: {
  className?: string;
  alt?: string;
  loading?: "lazy" | "eager";
}) {
  return (
    <Image
      src="/brand/logo-nav-gold.png"
      alt={alt}
      width={114}
      height={200}
      fetchPriority="low"
      loading={loading}
      sizes="80px"
      className={cn("w-auto", className)}
    />
  );
}
