import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const onDark = tone === "dark";
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow ? (
        <p className={cn("eyebrow", onDark ? "text-gold-highlight" : "text-gold-ink")}>{eyebrow}</p>
      ) : null}
      <h2 className={cn("lux-h2 mt-4", onDark ? "text-ivory" : "text-ink")}>{title}</h2>
      {lede ? (
        <p
          className={cn(
            "prose-body mt-5 max-w-2xl",
            align === "center" && "mx-auto",
            onDark ? "text-ivory/85" : "text-ink-soft",
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
