import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { HeaderChrome } from "@/components/header-chrome";

export function SiteHeader() {
  return (
    <HeaderChrome
      logo={
        <Link href="/" prefetch={false} className="shrink-0">
          <BrandLogo alt="The 90s Club logo" className="h-10 lg:h-14" loading="eager" />
        </Link>
      }
    />
  );
}
