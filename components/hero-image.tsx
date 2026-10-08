import { heroSrcSet, optimizedSrc } from "@/lib/optimized-image";
import type { Photo } from "@/lib/photos";

/**
 * LCP hero as a native img through the Next.js image optimizer (AVIF/WebP via Accept).
 * Avoids next/image client hydration on the LCP node.
 */
export function HeroImage({
  photo,
  className = "absolute inset-0 h-full w-full object-cover",
}: {
  photo: Photo;
  className?: string;
}) {
  const srcSet = heroSrcSet(photo.src);
  const src = optimizedSrc(photo.src, 1080);

  return (
    <>
      <link rel="preload" as="image" imageSrcSet={srcSet} imageSizes="100vw" fetchPriority="high" />
      <img
        src={src}
        srcSet={srcSet}
        sizes="100vw"
        alt={photo.alt}
        width={1080}
        height={720}
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className={className}
        style={photo.position ? { objectPosition: photo.position } : undefined}
      />
    </>
  );
}
