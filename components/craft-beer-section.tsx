import Image from "next/image";

import { photos } from "@/lib/photos";

const points = ["Craft beer on tap", "Bucket offers", "BOGO drinks", "Event nights"] as const;

/** 09 Craft beer & bar. */
export function CraftBeerSection() {
  return (
    <section className="bg-ivory pb-[var(--section-y)]">
      <div className="lux-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="lux-photo relative aspect-[4/3]">
          <Image
            src={photos.neonBar.src}
            alt={photos.neonBar.alt}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
            style={{ objectPosition: photos.neonBar.position }}
          />
        </div>
        <div className="lg:pr-10">
          <p className="eyebrow text-gold-ink">06 — The Taproom</p>
          <h2 className="lux-h2 mt-4 text-ink">
            Craft beer & <em>bar</em>
          </h2>
          <p className="mt-3 font-heading text-[1.35rem] text-ink-soft">Flying Fox on tap, cocktails and beer buckets for the table.</p>
          <p className="prose-body mt-6 text-ink-soft">
            Flying Fox craft beer poured at the bar, with cocktails and a bucket deal built for a table of friends. The
            kitchen next to the taps keeps the Kerala starters coming, and on event nights the music runs till 1 AM.
          </p>
          <ul className="mt-8 grid gap-y-4 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 font-heading text-[1.25rem] text-ink">
                <span aria-hidden="true" className="text-gold">
                  ✦
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
