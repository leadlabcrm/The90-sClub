"use client";

import Link from "next/link";

import { phone } from "@/lib/site";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Something stalled</p>
      <h1 className="type-display mt-3 text-5xl text-teal sm:text-6xl">This page did not load</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
        Try the page again, or call the taproom on {phone.display}. The kitchen is open daily from noon to midnight.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-12 items-center rounded-full bg-mustard px-5 text-base font-semibold text-charcoal"
        >
          Try again
        </button>
        <a
          href={phone.href}
          className="inline-flex h-12 items-center rounded-full bg-teal px-5 text-base font-semibold text-cream"
        >
          Call {phone.display}
        </a>
        <Link
          href="/"
          className="inline-flex h-12 items-center rounded-full border border-border bg-paper px-5 text-base font-semibold text-teal"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
