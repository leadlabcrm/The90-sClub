import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className={cn("type-label text-xs", light ? "text-blue" : "text-gold-highlight")}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "type-display mt-3 text-4xl sm:text-5xl lg:text-6xl",
          light ? "text-ink" : "text-ivory",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed sm:text-lg",
            light ? "text-ink/75" : "text-ivory-muted",
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
