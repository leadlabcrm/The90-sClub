"use client";

import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { allNav, moreNav, phone, primaryNav } from "@/lib/site";
import { cn } from "@/lib/utils";

function NavLink({
  href,
  label,
  pathname,
  onClick,
}: {
  href: string;
  label: string;
  pathname: string;
  onClick?: () => void;
}) {
  const active = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-full px-3 py-2 text-sm font-semibold text-charcoal hover:bg-sand hover:text-teal",
        active && "bg-sand text-teal",
      )}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-cream/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-2.5 sm:px-6">
        <Link href="/" className="min-w-0 leading-none">
          <span className="type-display block text-[1.55rem] text-teal sm:text-[1.85rem]">The 90s Club</span>
          <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Taproom and Kitchen
          </span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 lg:flex">
          {allNav.map((item) => (
            <NavLink key={item.href} {...item} pathname={pathname} />
          ))}
        </nav>

        <a
          href={phone.href}
          className="ml-auto inline-flex h-11 items-center gap-2 rounded-full bg-mustard px-4 text-sm font-semibold text-charcoal hover:bg-[#b88c12] lg:ml-2"
        >
          <Phone aria-hidden="true" className="size-4" />
          <span className="sm:hidden">Call</span>
          <span className="hidden sm:inline">Call {phone.display}</span>
        </a>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-paper text-teal lg:hidden"
            aria-label="Open menu"
          >
            <Menu aria-hidden="true" className="size-5" />
          </SheetTrigger>
          <SheetContent side="left" className="w-[min(100%,22rem)] bg-cream pb-24">
            <SheetHeader>
              <SheetTitle className="type-display text-3xl text-teal">The 90s Club</SheetTitle>
              <SheetDescription>Taproom and Kitchen, Electronic City</SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-6 px-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">Pages</p>
                <ul className="mt-2 flex flex-col">
                  {primaryNav.map((item) => (
                    <li key={item.href}>
                      <NavLink {...item} pathname={pathname} onClick={close} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">More</p>
                <ul className="mt-2 flex flex-col">
                  {moreNav.map((item) => (
                    <li key={item.href}>
                      <NavLink {...item} pathname={pathname} onClick={close} />
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
            <div className="mt-auto px-4">
              <a
                href={phone.href}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-mustard text-base font-semibold text-charcoal"
              >
                <Phone aria-hidden="true" className="size-4" />
                Call {phone.display}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
