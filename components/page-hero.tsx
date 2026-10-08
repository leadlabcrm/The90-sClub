import Image from "next/image";

import type { Photo } from "@/lib/photos";

export function PageHero({
  eyebrow,
  title,
  lede,
  photo,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  photo: Photo;
}) {
  return (
    <header className="relative flex min-h-[22rem] items-end overflow-hidden bg-black text-ivory lg:min-h-[28rem]">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={photo.position ? { objectPosition: photo.position } : undefined}
      />
      <div className="lux-scrim-left absolute inset-0" />
      <div className="lux-container lux-on-photo relative z-10 pt-28 pb-12 lg:pt-32 lg:pb-16">
        <p className="eyebrow text-gold-highlight">{eyebrow}</p>
        <h1 className="lux-h2 mt-3 max-w-3xl text-ivory">{title}</h1>
        <p className="prose-body mt-4 max-w-[62ch] text-ivory">{lede}</p>
      </div>
    </header>
  );
}
