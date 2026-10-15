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
    <header className="relative flex min-h-[26rem] items-end overflow-hidden bg-black text-ivory lg:min-h-[34rem]">
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
      <div className="lux-container lux-on-photo relative z-10 pt-32 pb-14 lg:pt-40 lg:pb-20">
        <p className="eyebrow text-gold-highlight">{eyebrow}</p>
        <h1 className="lux-h1 mt-5 max-w-[16ch] text-ivory">{title}</h1>
        <p className="prose-body mt-5 max-w-[56ch] text-ivory/90">{lede}</p>
      </div>
    </header>
  );
}
