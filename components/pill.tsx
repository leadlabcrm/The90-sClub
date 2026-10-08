import Link from "next/link";

import { cn } from "@/lib/utils";

const tones = {
  solid: "pill pill-solid",
  gold: "pill pill-gold",
  outline: "pill pill-outline",
  outlineLight: "pill pill-outline-light",
  outlineSm: "pill-sm pill-outline",
  nav: "pill-sm bg-ivory font-semibold text-ink hover:bg-gold-highlight",
  navOnLight: "pill-sm pill-gold font-semibold",
} as const;

export function PillLink({
  href,
  children,
  tone = "solid",
  className,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
  external?: boolean;
}) {
  const classNames = cn(tones[tone], className);
  const web = external || href.startsWith("http");

  if (web || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classNames}
        {...(web ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {web ? <span className="sr-only"> (opens in a new tab)</span> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
}
