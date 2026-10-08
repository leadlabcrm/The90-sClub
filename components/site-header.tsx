"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/brand-logo";
import { PillLink } from "@/components/pill";
import { hours, phone, primaryNav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-colors duration-200",
          light ? "border-b border-line bg-ivory" : "bg-transparent",
        )}
      >
        <div className="lux-container flex h-20 items-center gap-6 lg:h-24">
          <Link href="/" className="shrink-0" aria-label="The 90s Club home">
            <BrandLogo
              variant="metallic"
              className="h-12 lg:h-[72px]"
            />
          </Link>

          <nav aria-label="Primary" className="ml-2 hidden items-center gap-x-7 min-[1240px]:flex">
            {primaryNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "whitespace-nowrap text-base transition-colors",
                    light
                      ? active
                        ? "text-gold-ink"
                        : "text-ink hover:text-gold-ink"
                      : active
                        ? "text-gold-highlight"
                        : "text-ivory hover:text-gold-highlight",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto hidden items-center gap-6 min-[1240px]:flex">
            <a
              href={phone.href}
              className={cn(
                "inline-flex items-center gap-2 text-base transition-colors",
                light ? "text-ink hover:text-gold-ink" : "text-ivory hover:text-gold-highlight",
              )}
            >
              <Phone aria-hidden="true" className="size-3.5" />
              {phone.display}
            </a>
            <PillLink href={phone.href} tone={light ? "navOnLight" : "nav"}>
              Call to book
            </PillLink>
          </div>

          <button
            type="button"
            className={cn(
              "ml-auto inline-flex size-11 items-center justify-center min-[1240px]:hidden",
              light ? "text-ink" : "text-ivory",
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="h-[calc(100dvh-5rem)] overflow-y-auto bg-ivory text-ink lg:h-[calc(100dvh-6rem)]">
          <nav aria-label="Mobile" className="lux-container flex flex-col pb-10 pt-6">
            {primaryNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "border-b border-line py-4 font-heading text-[2.5rem] leading-none font-medium",
                    active && "italic text-gold-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a href={phone.href} className="mt-8 inline-flex items-center gap-2 text-base">
              <Phone aria-hidden="true" className="size-4" />
              {phone.display}
            </a>
            <PillLink href={phone.href} tone="gold" className="mt-5 w-fit">
              Call to book
            </PillLink>
            <p className="mt-10 text-sm leading-6 text-ink-soft">
              Open daily · {hours.summary}
              <br />
              4.7 on Google
              <br />
              Millennium Plaza, Hebbagodi
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
