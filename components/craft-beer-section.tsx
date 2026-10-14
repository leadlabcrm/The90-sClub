import { Check } from "lucide-react";
import Image from "next/image";

import { PillLink } from "@/components/pill";
import { photos } from "@/lib/photos";

const points = ["Craft beer on tap", "Bucket offers", "BOGO drinks", "Event nights"] as const;

/** 09 Craft beer & bar. */
export function CraftBeerSection() {
  return (
    <section className="bg-ivory pb-16 lg:pb-24">
      <div className="lux-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="lux-photo relative aspect-[16/11]">
          <Image
            src={photos.neonBar.src}
            alt={photos.neonBar.alt}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
            style={{ objectPosition: photos.neonBar.position }}
          />
        </div>
        <div>
          <p className="eyebrow text-gold-ink">The taproom</p>
          <h2 className="lux-h2 mt-3 text-ink">
            Craft beer & <em>bar</em>
          </h2>
          <p className="prose-body mt-5 text-ink-soft">
            Flying Fox craft beer poured at the bar, with cocktails and a bucket deal built for a table of friends. The
            kitchen next to the taps keeps the Kerala starters coming, and on event nights the music runs till 1 AM.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-ink">
                <span className="flex size-6 items-center justify-center rounded-full bg-gold/20 text-gold-ink">
                  <Check aria-hidden="true" className="size-3.5" strokeWidth={2.5} />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <PillLink href="/craft-beer" tone="outline" className="mt-8">
            See drinks menu
          </PillLink>
        </div>
      </div>
    </section>
  );
}
