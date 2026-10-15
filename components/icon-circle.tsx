import type { ComponentType, SVGProps } from "react";

import { cn } from "@/lib/utils";

/** Round icon button with a tooltip. The label is read by screen readers and shown on hover. */
export function IconCircle({
  href,
  label,
  Icon,
  tone = "onLight",
  external = false,
  className,
}: {
  href: string;
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  tone?: "onLight" | "onDark";
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      aria-label={external ? `${label} (opens in a new tab)` : label}
      title={label}
      className={cn(
        "flex size-12 items-center justify-center rounded-full border transition-colors",
        tone === "onDark"
          ? "border-ivory/40 text-ivory hover:border-gold hover:bg-gold hover:text-black"
          : "border-ink/30 text-ink hover:border-gold hover:bg-gold hover:text-black",
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Icon aria-hidden="true" className="size-[1.1rem]" strokeWidth={1.6} />
    </a>
  );
}
