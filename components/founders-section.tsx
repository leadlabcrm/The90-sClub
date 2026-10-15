import Image from "next/image";

import { PillLink } from "@/components/pill";
import { photos } from "@/lib/photos";

/** 13 Our story / founders. The portrait slot shows the music corner until the photoshoot. */
export function FoundersSection() {
  return (
    <section id="story" className="lux-section scroll-mt-24 bg-ivory">
      <div className="lux-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="lux-photo relative aspect-[4/3]">
          <Image
            src={photos.boombox.src}
            alt={photos.boombox.alt}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="lg:pr-10">
          <p className="eyebrow text-gold-ink">10 — Our Story</p>
          <h2 className="lux-h2 mt-4 text-ink">
            Two friends, one <em>90s dream</em>
          </h2>
          <p className="mt-3 font-heading text-[1.35rem] text-ink-soft">Akhil Kumar and Sathish, Electronic City, February 2026.</p>
          <p className="prose-body mt-6 text-ink-soft">
            Akhil Kumar and Sathish opened The 90s Club in February 2026 at Millennium Plaza on Hosur Road. The idea was
            simple: the music they grew up on, the Kerala food they missed in Electronic City, and a taproom where a
            Thursday night can run late. Everything in the room, from the boombox booth to the cassette-wall art, is a
            nod to that decade.
          </p>
          <dl className="mt-9 grid gap-8 sm:grid-cols-2">
            <div>
              <span className="lux-rule block" />
              <dt className="mt-4 font-heading text-[1.4rem] leading-tight text-ink">Akhil Kumar & Sathish</dt>
              <dd className="mt-1 text-sm text-ink-soft">Founders</dd>
            </div>
            <div>
              <span className="lux-rule block" />
              <dt className="mt-4 font-heading text-[1.4rem] leading-tight text-ink">Est. February 2026</dt>
              <dd className="mt-1 text-sm text-ink-soft">Electronic City</dd>
            </div>
          </dl>
          <PillLink href="/about" tone="outline" className="mt-10">
            Read our story
          </PillLink>
        </div>
      </div>
    </section>
  );
}
