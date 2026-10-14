import Image from "next/image";

import { InstagramIcon } from "@/components/social-icons";
import { photos, type Photo } from "@/lib/photos";
import { links } from "@/lib/site";

const tiles: Photo[] = [photos.booth, photos.barFront, photos.boombox, photos.foodSpread, photos.logoWall, photos.neonBeer];

/** 11 Gallery & Instagram. The lead frame is the taproom until a rooftop frame is shot. */
export function GalleryGrid() {
  return (
    <section id="gallery" className="lux-section scroll-mt-24 bg-ivory">
      <div className="lux-container">
        <p className="eyebrow text-center text-gold-ink">The vibe</p>
        <h2 className="lux-h2 mt-4 text-center text-ink">
          Inside <em>The 90s Club</em>
        </h2>
        <div className="mt-14 grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)]">
          <div className="lux-photo relative aspect-[4/3] lg:aspect-auto lg:min-h-full">
            <Image
              src={photos.interiorNeon.src}
              alt={photos.interiorNeon.alt}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {tiles.map((photo) => (
              <li key={photo.src} className="lux-photo relative aspect-[4/3]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 260px, 50vw"
                  className="object-cover"
                  style={photo.position ? { objectPosition: photo.position } : undefined}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex justify-center">
          <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="lux-link">
            <InstagramIcon className="size-4" />
            Follow {links.instagramHandle}
            <span className="sr-only"> on Instagram (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
