import { HeroImage } from "@/components/hero-image";
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
    <header
      className="relative h-[22rem] overflow-hidden bg-black text-ivory lg:h-[28rem]"
      style={{ height: "22rem" }}
    >
      <HeroImage photo={photo} />
      <div className="lux-scrim-left pointer-events-none absolute inset-0" />
      <div className="lux-container lux-on-photo absolute inset-0 z-10 flex flex-col justify-end pt-28 pb-12 lg:pt-32 lg:pb-16">
        <p className="eyebrow text-gold-highlight">{eyebrow}</p>
        <h1 className="lux-h2 mt-3 max-w-3xl text-ivory">{title}</h1>
        <p className="prose-body mt-4 max-w-[62ch] text-ivory">{lede}</p>
      </div>
    </header>
  );
}
