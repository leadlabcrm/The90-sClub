import Link from "next/link";

import { cn } from "@/lib/utils";

const tones = {
  onLight:
    "font-semibold text-blue underline decoration-gold-shadow decoration-2 underline-offset-4 hover:text-ink",
  onDark:
    "font-semibold text-link underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-highlight",
  onGold:
    "font-semibold text-ink underline decoration-black decoration-2 underline-offset-4 hover:text-blue",
  onBlue:
    "font-semibold text-ivory underline decoration-ivory/50 decoration-2 underline-offset-4 hover:text-white",
} as const;

export function TextLink({
  href,
  children,
  className: extra,
  external = false,
  tone = "onLight",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  tone?: keyof typeof tones;
}) {
  const className = cn(tones[tone], extra);

  if (external || href.startsWith("http") || href.startsWith("tel:")) {
    const isWeb = href.startsWith("http");
    return (
      <a
        href={href}
        className={className}
        {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {isWeb ? <span className="sr-only"> (opens in a new tab)</span> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
