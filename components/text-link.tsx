import Link from "next/link";

import { cn } from "@/lib/utils";

const tones = {
  onLight: "text-ink underline decoration-line underline-offset-4 hover:text-gold-ink",
  onDark: "text-cream underline decoration-gold/60 underline-offset-4 hover:text-gold-highlight",
  onGold: "text-black underline decoration-black/40 underline-offset-4 hover:text-gold-ink",
  onBlue: "text-cream underline decoration-cream/40 underline-offset-4 hover:text-gold-highlight",
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
      <a href={href} className={className} {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
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
