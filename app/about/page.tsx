import { ClosingBand } from "@/components/closing-band";
import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/text-link";
import { VenuePhoto } from "@/components/venue-photo";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { reviews } from "@/lib/reviews";
import { seo } from "@/lib/seo";

export const metadata = pageMetadata(seo.about);

const facts = [
  { label: "Founders", value: "Akhil Kumar & Sathish" },
  { label: "Established", value: "February 2026" },
  { label: "Where", value: "Millennium Plaza, Hebbagodi, Electronic City" },
  { label: "Room", value: "80 seats · full AC · rooftop · parking" },
  { label: "Kitchen", value: "Kerala, North Indian, Chinese" },
  { label: "Taproom", value: "Flying Fox craft beer, cocktails, beer buckets" },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Two friends, one 90s dream"
        lede="Akhil Kumar and Sathish opened The 90s Club in February 2026: a retro taproom with a Kerala kitchen on the rooftop of Millennium Plaza, Electronic City."
        photo={photos.logoWall}
      />

      <section className="lux-section bg-ivory">
        <div className="lux-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow text-gold-ink">Akhil + Sathish</p>
            <h2 className="lux-h2 mt-4 text-ink">
              The <em>story</em>
            </h2>
            <p className="prose-body mt-6 text-ink-soft">
              Two friends, one idea: the music they grew up on, the Kerala food they missed in Electronic City, and a
              taproom where a Thursday night can run late. In February 2026 they opened The 90s Club on the top floor
              of Millennium Plaza on Hosur Road, Hebbagodi.
            </p>
            <p className="prose-body mt-4 text-ink-soft">
              Everything in the room is a nod to that decade: the boombox DJ booth, the cassette-wall art, the neon
              bottle sign, the retro playlist. The <TextLink href="/kerala-food">kitchen</TextLink> leads with Kerala
              chicken biryani, coconut fish curry and prawn ghee roast. The{" "}
              <TextLink href="/craft-beer">taproom</TextLink> pours Flying Fox craft beer.
            </p>
            <blockquote className="mt-8 max-w-[62ch] border-l border-gold pl-4">
              <p className="text-sm leading-6 text-ink">“{reviews.kavyashree.text}”</p>
              <footer className="mt-2 text-xs tracking-wide text-ink-soft">
                {reviews.kavyashree.name} · Google review · {reviews.kavyashree.date}
              </footer>
            </blockquote>
          </div>
          <VenuePhoto photo={photos.boombox} aspect="tall" caption="The music corner inside The 90s Club." />
        </div>
      </section>

      <section className="bg-ivory pb-[var(--section-y)]">
        <div className="lux-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <VenuePhoto photo={photos.foodSpread} aspect="photo" caption="Kerala plates from the kitchen: biryani, curry, chilli chicken and bread." />
          <div>
            <p className="eyebrow text-gold-ink">At a glance</p>
            <h2 className="lux-h2 mt-4 text-ink">
              The <em>club</em>
            </h2>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {facts.map((fact) => (
                <div key={fact.label} className="grid gap-1 py-4 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-6">
                  <dt className="text-[0.7rem] tracking-[0.18em] text-gold-ink uppercase sm:pt-1">{fact.label}</dt>
                  <dd className="text-[0.95rem] leading-7 text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-[var(--section-y)]">
        <div className="lux-container">
          <p className="eyebrow text-gold-ink">The room</p>
          <h2 className="lux-h2 mt-4 text-ink">
            Built for the <em>90s</em>
          </h2>
          <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[photos.interiorNeon, photos.neonBar, photos.neonBeer, photos.booth].map((photo) => (
              <li key={photo.src}>
                <VenuePhoto photo={photo} aspect="photo" sizes="(min-width: 1024px) 320px, 50vw" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingBand eyebrow="Come see it" title={<>Noon to midnight, <em>every day</em></>} items={["whatsapp", "call", "directions", "instagram"]}>
        <p>Book a table on WhatsApp, call the team, or follow the club on Instagram for event nights and new plates.</p>
      </ClosingBand>
    </>
  );
}
