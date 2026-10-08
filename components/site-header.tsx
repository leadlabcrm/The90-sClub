"use client";

import { Camera, MapPin, Menu, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BrandLogo } from "@/components/brand-logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { allNav, hours, links, phone, whatsappHref, whatsappMessages } from "@/lib/site";
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
        "type-label relative whitespace-nowrap px-2 py-2 text-[0.68rem] text-ivory after:absolute after:inset-x-2 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:text-gold-highlight hover:after:scale-x-100 xl:px-2.5 xl:text-[0.72rem]",
        active && "text-gold-highlight after:scale-x-100",
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
    <header className="sticky top-0 z-50 border-b border-gold-shadow/50 bg-charcoal">
      <div className="hidden border-b border-ivory/15 bg-blue text-ivory md:block">
        <div className="mx-auto flex h-9 w-full max-w-[1220px] items-center justify-between px-5">
          <p className="type-label text-[0.66rem]">
            <span className="mr-2 inline-block size-1.5 rounded-full bg-ivory" />
            Open daily · {hours.summary}
          </p>
          <p className="type-label text-[0.66rem]">4.7 on Google · Millennium Plaza, Hebbagodi</p>
          <nav aria-label="Utility" className="flex items-center gap-4">
            <a className="type-label text-[0.66rem] hover:underline" href={phone.href}>
              Call
            </a>
            <a
              className="type-label text-[0.66rem] hover:underline"
              href={whatsappHref(whatsappMessages.visit)}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="type-label text-[0.66rem] hover:underline"
              href={links.directions}
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions
            </a>
            <a
              className="type-label text-[0.66rem] hover:underline"
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </nav>
        </div>
      </div>

      <div className="mx-auto flex h-16 w-full max-w-[1220px] items-center gap-3 px-4 md:h-[4.5rem] md:px-5">
        <Link href="/" className="shrink-0" aria-label="The 90s Club home">
          <BrandLogo className="h-10 md:h-14" />
          <span className="sr-only">The 90s Club</span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden items-center lg:flex">
          {allNav.map((item) => (
            <NavLink key={item.href} {...item} pathname={pathname} />
          ))}
        </nav>

        <a
          href={phone.href}
          className="club-button type-label ml-auto hidden h-10 items-center gap-2 bg-gold px-4 text-[0.72rem] text-black hover:bg-gold-highlight sm:inline-flex lg:ml-3"
        >
          <Phone aria-hidden="true" className="size-3.5" />
          Call now
        </a>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="club-button ml-auto inline-flex size-11 items-center justify-center bg-gold text-black hover:bg-gold-highlight lg:hidden"
            aria-label="Open menu"
          >
            <Menu aria-hidden="true" className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[min(100%,24rem)] border-l-2 border-gold-shadow bg-charcoal pb-24 text-ivory"
          >
            <SheetHeader className="border-b border-gold-shadow/60 pb-5">
              <SheetTitle className="text-ivory">
                <span className="inline-flex items-center gap-3">
                  <BrandLogo className="h-14" />
                  <span className="sr-only">The 90s Club</span>
                </span>
              </SheetTitle>
              <SheetDescription className="type-label text-left text-[0.68rem] text-ivory-muted">
                Kerala kitchen · rooftop taproom · Electronic City
              </SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile" className="px-4">
              <ul className="divide-y divide-gold-shadow/40">
                {allNav.map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-4 py-3.5 text-ivory",
                        pathname === item.href && "text-gold-highlight",
                      )}
                    >
                      <span className="type-label w-5 text-[0.62rem] text-ivory-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="type-display text-[1.65rem]">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto grid grid-cols-4 gap-2 px-4 pt-6">
              {[
                { href: phone.href, label: "Call", icon: Phone },
                { href: links.directions, label: "Map", icon: MapPin },
                {
                  href: whatsappHref(whatsappMessages.visit),
                  label: "Chat",
                  icon: MessageCircle,
                },
                { href: links.instagram, label: "IG", icon: Camera },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="club-button flex aspect-square flex-col items-center justify-center gap-1 bg-gold text-[0.65rem] font-semibold uppercase tracking-wider text-black"
                >
                  <Icon aria-hidden="true" className="size-4" />
                  {label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
