import { CtaRow } from "@/components/cta-row";
import { GapNotice } from "@/components/gap-notice";
import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/text-link";
import { VenuePhoto } from "@/components/venue-photo";
import { dishHref } from "@/lib/menu";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";

export const metadata = pageMetadata({
  title: "Craft beer & Flying Fox | The 90s Club rooftop",
  description:
    "Flying Fox craft beer at The 90s Club rooftop in Electronic City. Ask the team for the current tap list and prices.",
  path: "/craft-beer",
});

export default function CraftBeerPage() {
  return (
    <>
      <PageHero
        eyebrow="Taproom"
        title="Craft beer on the rooftop — Flying Fox at The 90s Club"
        lede="Taproom pours featuring Flying Fox, on the Electronic City rooftop."
        image={photos.barCounter.src}
        alt={photos.barCounter.alt}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="lux-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-gold-ink">At the taproom</p>
            <h2 className="lux-h2 mt-4 text-ink">Flying Fox on the roof</h2>
            <p className="prose-body mt-5 text-ink-soft">
              Kerala food and Flying Fox craft beer under one roof in Electronic City. The 90s Club pours Flying Fox
              craft beer. The kitchen next to the taps leads with Kerala plates. Ask the team what is on today.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <VenuePhoto
              src={photos.neonBeerWall.src}
              alt={photos.neonBeerWall.alt}
              aspect="photo"
              caption="Neon beer art inside The 90s Club."
            />
            <VenuePhoto
              src={photos.barCounter.src}
              alt={photos.barCounter.alt}
              aspect="photo"
              caption="The electric-blue bar counter and taps."
            />
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-8">
        <div className="lux-container">
          <GapNotice id="beer-list" kicker="Confirmed on the day" title="Current beer list">
            <p>The full tap and can list, with prices, has not been published on the site.</p>
            <p>Call or WhatsApp the team for today’s Flying Fox availability.</p>
          </GapNotice>
          <GapNotice id="beer-offers" kicker="Ask the team" title="Current offers">
            <p>Promotions can change, so this page does not quote an unconfirmed deal or price.</p>
          </GapNotice>
        </div>
      </section>

      <section className="bg-black py-20 text-cream lg:py-24">
        <div className="lux-container">
          <p className="eyebrow text-gold-highlight">From the kitchen</p>
          <h2 className="lux-h2 mt-4">Pair and visit</h2>
          <p className="prose-body mt-5 max-w-2xl text-cream/85">
            Pair a pour with{" "}
            <TextLink href={dishHref("Kerala Style Chicken Biryani")} tone="onDark">
              Kerala Style Chicken Biryani
            </TextLink>{" "}
            or the seafood starters. Then come up to the roof.
          </p>
          <p className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-lg">
            <TextLink href="/rooftop-pub" tone="onDark">
              Rooftop
            </TextLink>
            <TextLink href="/menu" tone="onDark">
              Menu
            </TextLink>
            <TextLink href="/kerala-food" tone="onDark">
              Kerala food
            </TextLink>
          </p>
          <CtaRow className="mt-8" tone="onDark" items={["call", "directions", "whatsapp"]} />
        </div>
      </section>
    </>
  );
}
