import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { photos } from "@/lib/photos";

const story =
  "Akhil Kumar and Sathish opened The 90s Club in February 2026 on the rooftop of Millennium Plaza, Hebbagodi. Kerala biryani, coconut fish curry and prawn ghee roast from the kitchen. Flying Fox craft beer and cocktails at the bar. Eighty seats, a fully AC room, parking at the plaza, and the music you grew up on all night.";

/** 05 About: numbered eyebrow, story, and a two-photo collage. */
export function AboutSection() {
  return (
    <section className="lux-section bg-ivory">
      <div className="lux-container grid items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
        <div>
          <p className="eyebrow text-gold-ink">01 — The club</p>
          <h2 className="lux-h2 mt-5 text-ink">
            Electronic City&apos;s <em>retro taproom</em>, with a Kerala kitchen
          </h2>
          <p className="prose-body mt-7 text-ink-soft">{story}</p>
          <Link href="/about" className="lux-link mt-8">
            Our Story
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
        <div className="relative pb-16 pr-10 lg:pb-24 lg:pr-16">
          <div className="lux-photo relative aspect-[4/3]">
            <Image src={photos.interiorNeon.src} alt={photos.interiorNeon.alt} fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
          </div>
          <div className="lux-photo absolute right-0 bottom-0 aspect-[4/5] w-[46%] border-[6px] border-ivory shadow-[0_18px_50px_rgba(10,9,7,0.25)]">
            <Image src={photos.biryani.src} alt={photos.biryani.alt} fill sizes="(min-width: 1024px) 300px, 45vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
