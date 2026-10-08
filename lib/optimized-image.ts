/** Local `/_next/image` URLs. Hero LCP uses these on a native <img>, not the client Image component. */
export const HERO_WIDTHS = [640, 750, 828, 1080, 1200, 1920] as const;
export const HERO_QUALITY = 75;

export function optimizedSrc(src: string, width: number, quality = HERO_QUALITY) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}

export function heroSrcSet(src: string) {
  return HERO_WIDTHS.map((width) => `${optimizedSrc(src, width)} ${width}w`).join(", ");
}
