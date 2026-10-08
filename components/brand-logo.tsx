import { officialLogoSvg } from "@/lib/official-logo-svg";
import { cn } from "@/lib/utils";

const raster = {
  metallic: "/brand/logo-90s-club-gold-metallic-transparent-1000.png",
  flat: "/brand/logo-90s-club-gold-flat-transparent-1000.png",
  cream: "/brand/logo-90s-club-cream-transparent-1000.png",
  white: "/brand/logo-90s-club-white-transparent-1000.png",
} as const;

export function BrandLogo({
  variant = "gold",
  className,
}: {
  variant?: "gold" | keyof typeof raster;
  className?: string;
}) {
  if (variant === "gold") {
    return (
      <span
        className={cn(
          "inline-block text-gold [&_svg]:block [&_svg]:h-full [&_svg]:w-auto",
          className,
        )}
        dangerouslySetInnerHTML={{ __html: officialLogoSvg }}
      />
    );
  }

  return (
    // Official foil/flat artwork. Height is set by the caller; width follows the oval.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={raster[variant]}
      alt=""
      width={568}
      height={1000}
      className={cn("w-auto max-w-none", className)}
    />
  );
}
