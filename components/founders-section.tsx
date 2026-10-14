import { CalendarDays, Users } from "lucide-react";
import Image from "next/image";

import { PillLink } from "@/components/pill";
import { photos } from "@/lib/photos";

/** 13 Our story / founders. The founders' portrait slot shows the music corner until the photoshoot. */
export function FoundersSection() {
  return (
    <section id="story" className="lux-section scroll-mt-24 bg-ivory">
      <div className="lux-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="lux-photo relative aspect-[4/3]">
          <Image
            src={photos.boombox.src}
            alt={photos.boombox.alt}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow text-gold-ink">Our story</p>
          <h2 className="lux-h2 mt-3 text-ink">
            Two friends, one <em>90s dream</em>
          </h2>
          <p className="prose-body mt-5 text-ink-soft">
            Akhil Kumar and Sathish opened The 90s Club in February 2026 at Millennium Plaza on Hosur Road. The idea was
            simple: the music they grew up on, the Kerala food they missed in Electronic City, and a taproom where a
            Thursday night can run late. Everything in the room, from the boombox booth to the cassette-wall art, is a
            nod to that decade.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            <li className="flex items-center gap-3 rounded-[var(--radius-card)] border border-line bg-white px-4 py-3.5">
              <Users aria-hidden="true" className="size-5 text-gold-ink" strokeWidth={1.6} />
              <span>
                <span className="block text-sm font-semibold text-ink">Akhil Kumar & Sathish</span>
                <span className="block text-xs text-ink-soft">Founders</span>
              </span>
            </li>
            <li className="flex items-center gap-3 rounded-[var(--radius-card)] border border-line bg-white px-4 py-3.5">
              <CalendarDays aria-hidden="true" className="size-5 text-gold-ink" strokeWidth={1.6} />
              <span>
                <span className="block text-sm font-semibold text-ink">Est. February 2026</span>
                <span className="block text-xs text-ink-soft">Electronic City</span>
              </span>
            </li>
          </ul>
          <PillLink href="/about" tone="outline" className="mt-8">
            Read our story
          </PillLink>
        </div>
      </div>
    </section>
  );
}
