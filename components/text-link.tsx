import Link from "next/link";

import { cn } from "@/lib/utils";

const className =
  "font-semibold text-teal underline decoration-mustard decoration-2 underline-offset-4 hover:text-teal-deep";

export function TextLink({
  href,
  children,
  className: extra,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  if (external || href.startsWith("http") || href.startsWith("tel:")) {
    const isWeb = href.startsWith("http");
    return (
      <a
        href={href}
        className={cn(className, extra)}
        {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {isWeb ? <span className="sr-only"> (opens in a new tab)</span> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(className, extra)}>
      {children}
    </Link>
  );
}
