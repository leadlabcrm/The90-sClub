import Image from "next/image";

import { InstagramIcon } from "@/components/social-icons";
import { photos, type Photo } from "@/lib/photos";
import { links } from "@/lib/site";

const tiles: { label: string; photo: Photo }[] = [
  { label: "AC dining", photo: photos.booth },
  { label: "Bar", photo: photos.barFront },
  { label: "90s decor", photo: photos.boombox },
  { label: "Food", photo: photos.foodSpread },
  { label: "Retro art", photo: photos.logoWall },
  { label: "Event night", photo: photos.neonBeer },
];

/** 11 Gallery & Instagram. The lead tile is the taproom until a rooftop frame is shot. */
export function GalleryGrid() {
  return (
    <section id="gallery" className="lux-section scroll-mt-24 bg-ivory">
      <div className="lux-container">
        <p className="eyebrow text-center text-gold-ink">The vibe</p>
        <h2 className="lux-h2 mt-3 text-center text-ink">
          Inside <em>The 90s Club</em>
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)]">
          <figure className="lux-photo relative aspect-[4/3] lg:aspect-auto lg:min-h-full">
            <Image
              src={photos.interiorNeon.src}
              alt={photos.interiorNeon.alt}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[0.65rem] tracking-[0.14em] text-ivory uppercase">
              Taproom
            </figcaption>
          </figure>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {tiles.map((tile) => (
              <li key={tile.label} className="lux-photo relative aspect-[4/3]">
                <Image
                  src={tile.photo.src}
                  alt={tile.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 260px, 50vw"
                  className="object-cover"
                  style={tile.photo.position ? { objectPosition: tile.photo.position } : undefined}
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[0.65rem] tracking-[0.14em] text-ivory uppercase">
                  {tile.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-sm pill-outline inline-flex items-center gap-2"
          >
            <InstagramIcon className="size-4" />
            Follow {links.instagramHandle}
            <span className="sr-only"> on Instagram (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
