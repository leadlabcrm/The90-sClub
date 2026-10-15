import Image from "next/image";
import Link from "next/link";

import { dishHref, findDish, formatPrice } from "@/lib/menu";
import { photos, stock, type Photo } from "@/lib/photos";

const signatures: { name: string; tag: string; photo: Photo }[] = [
  { name: "Kerala Style Chicken Biryani", tag: "Bestseller", photo: photos.biryani },
  { name: "Coconut Fish Curry", tag: "Seafood", photo: stock.coconutFishCurry },
  { name: "Prawns Ghee Roast", tag: "Seafood", photo: stock.prawnsGheeRoast },
  { name: "Naadan Chicken Curry", tag: "Kerala", photo: stock.naadanChickenCurry },
  { name: "Chicken Ghee Roast", tag: "Chef's pick", photo: stock.chickenGheeRoast },
];

/** 07 Signature dishes, in the Popular Delights layout. */
export function SignatureDishes() {
  return (
    <section className="lux-section bg-ivory">
      <div className="lux-container">
        <p className="eyebrow text-center text-gold-ink">Must try</p>
        <h2 className="lux-h2 mt-4 text-center text-ink">
          Our <em>signature</em> dishes
        </h2>
        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-7 sm:gap-y-10 lg:grid-cols-5">
          {signatures.map((item) => {
            const dish = findDish(item.name);
            return (
              <li key={item.name}>
                <Link href={dishHref(item.name)} className="group block">
                  <div className="relative">
                    <div className="lux-photo relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={item.photo.src}
                        alt={item.photo.alt}
                        fill
                        sizes="(min-width: 1024px) 250px, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        style={item.photo.position ? { objectPosition: item.photo.position } : undefined}
                      />
                    </div>
                    <span className="absolute top-3 right-3 bg-ivory px-2.5 py-1 text-[0.6rem] tracking-[0.18em] text-ink uppercase shadow-[0_1px_0_rgba(10,9,7,0.06)] sm:top-4 sm:right-4 sm:px-3 sm:py-1.5 sm:text-[0.65rem]">
                      {item.tag}
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-3">
                    <span className="font-heading text-[1.15rem] leading-tight text-ink sm:text-[1.35rem]">{dish.name}</span>
                    <span className="text-sm text-gold-ink tabular-nums">{formatPrice(dish.price)}</span>
                  </div>
                  <p className="mt-1 text-[0.65rem] tracking-[0.18em] text-ink-soft uppercase">Non-veg</p>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-12 flex justify-center">
          <Link href="/menu" className="pill pill-outline">
            View full menu
          </Link>
        </div>
      </div>
    </section>
  );
}
