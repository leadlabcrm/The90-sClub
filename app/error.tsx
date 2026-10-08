"use client";

import Link from "next/link";

import { phone } from "@/lib/site";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="section-pad mx-auto w-full max-w-4xl px-5 sm:px-8">
      <div className="club-card p-6 sm:p-10">
      <p className="type-label text-xs text-blue">Something stalled</p>
      <h1 className="type-display mt-3 text-5xl text-blue sm:text-6xl">This page did not load</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-charcoal/70">
        Try the page again, or call the taproom on {phone.display}. The kitchen is open daily from noon to midnight.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={reset}
          className="club-button type-label inline-flex h-12 items-center bg-gold px-5 text-xs text-charcoal"
        >
          Try again
        </button>
        <a
          href={phone.href}
          className="club-button type-label inline-flex h-12 items-center bg-blue px-5 text-xs text-cream"
        >
          Call {phone.display}
        </a>
        <Link
          href="/"
          className="club-button type-label inline-flex h-12 items-center bg-paper px-5 text-xs text-blue"
        >
          Home
        </Link>
      </div>
      </div>
    </div>
  );
}
