"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

import { PillLink } from "@/components/pill";
import { hours, phone, primaryNav } from "@/lib/site";
import { cn } from "@/lib/utils";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6.6 4.2c.4-1 1.5-1.4 2.5-1l2 1c.8.4 1.2 1.3 1 2.2l-.6 2.2a1.8 1.8 0 0 1-.9 1.1l-1.2.6a12.4 12.4 0 0 0 5.7 5.7l.6-1.2c.3-.4.7-.7 1.1-.9l2.2-.6c.9-.2 1.8.2 2.2 1l1 2c.4 1 0 2.1-1 2.5l-1.7.7c-2.2.8-6-0.2-10.2-4.4S3.7 9.1 4.5 6.9l.7-1.7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function HeaderChrome({ logo }: { logo: ReactNode }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
          "transition-colors duration-200 motion-reduce:transition-none",
          light ? "border-b border-line/80 bg-ivory/95 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="lux-container flex h-[4.25rem] items-center gap-5 lg:h-[4.75rem]">
          {logo}

          <nav aria-label="Primary" className="ml-1 hidden items-center gap-x-6 min-[1180px]:flex">
            {primaryNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "nav-link",
                    light
                      ? active
                        ? "text-gold-ink"
                        : "text-ink hover:text-gold-ink"
                      : active
                        ? "text-gold-highlight"
                        : "text-ivory/95 hover:text-gold-highlight",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto hidden items-center gap-5 min-[1180px]:flex">
            <a
              href={phone.href}
              className={cn(
                "inline-flex items-center gap-2 text-sm tabular-nums transition-colors",
                light ? "text-ink hover:text-gold-ink" : "text-ivory hover:text-gold-highlight",
              )}
            >
              <PhoneIcon className="size-3.5" />
              {phone.display}
            </a>
            <PillLink href={phone.href} tone={light ? "navOnLight" : "nav"}>
              Call to book
            </PillLink>
          </div>

          <button
            type="button"
            className={cn(
              "ml-auto inline-flex size-11 items-center justify-center rounded-full min-[1180px]:hidden",
              light ? "text-ink hover:bg-black/5" : "text-ivory hover:bg-white/10",
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="h-[calc(100dvh-4.25rem)] overflow-y-auto bg-ivory text-ink lg:h-[calc(100dvh-4.75rem)]"
        >
          <nav aria-label="Mobile" className="lux-container flex flex-col pt-4 pb-10">
            {primaryNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "border-b border-line py-3.5 font-heading text-[clamp(1.75rem,6vw,2.15rem)] leading-none font-medium",
                    active && "italic text-gold-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a href={phone.href} className="mt-8 inline-flex items-center gap-2 text-base tabular-nums">
              <PhoneIcon className="size-4" />
              {phone.display}
            </a>
            <PillLink href={phone.href} tone="gold" className="mt-5 w-fit">
              Call to book
            </PillLink>
            <p className="mt-8 text-sm leading-6 text-ink-soft">
              Open daily · {hours.summary}
              <br />
              Millennium Plaza, Hebbagodi
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
