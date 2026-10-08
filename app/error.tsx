"use client";

import Link from "next/link";

import { phone } from "@/lib/site";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="bg-ivory">
      <div className="lux-container py-32 lg:py-40">
        <p className="eyebrow text-gold-ink">Something stalled</p>
        <h1 className="lux-h2 mt-4 max-w-3xl text-ink">This page did not load</h1>
        <p className="prose-body mt-5 max-w-xl text-ink-soft">
          Try the page again, or call the taproom on {phone.display}. The kitchen is open daily from noon to midnight.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" onClick={reset} className="pill pill-gold">
            Try again
          </button>
          <a href={phone.href} className="pill-sm pill-outline">
            Call {phone.display}
          </a>
          <Link href="/" className="pill-sm pill-outline">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
