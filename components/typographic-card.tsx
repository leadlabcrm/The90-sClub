import { cn } from "@/lib/utils";

const aspects = {
  wide: "aspect-[16/10]",
  photo: "aspect-[4/3]",
  oval: "h-[200px] w-[min(100%,520px)] rounded-[200px] lg:h-[280px] lg:w-[420px] xl:h-[340px] xl:w-[520px]",
} as const;

export function TypographicCard({
  title,
  kicker,
  aspect = "photo",
  tone = "light",
  className,
}: {
  title: string;
  kicker?: string;
  aspect?: keyof typeof aspects;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-6 text-center",
        aspects[aspect],
        aspect !== "oval" && "rounded-[var(--radius-photo)]",
        tone === "light"
          ? "border border-line bg-white text-ink"
          : "border border-gold/25 bg-black text-ivory",
        className,
      )}
    >
      {kicker ? (
        <p className={cn("eyebrow mb-3", tone === "light" ? "text-gold-ink" : "text-gold-highlight")}>{kicker}</p>
      ) : null}
      <p
        className={cn(
          "font-heading leading-tight",
          aspect === "oval" ? "text-3xl lg:text-4xl" : "text-2xl lg:text-[1.75rem]",
        )}
      >
        {title}
      </p>
    </div>
  );
}
