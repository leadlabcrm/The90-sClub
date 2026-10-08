import { CtaRow } from "@/components/cta-row";
import { GapNotice } from "@/components/gap-notice";
import { PageHero } from "@/components/page-hero";
import { VenuePhoto } from "@/components/venue-photo";
import { photos } from "@/lib/photos";
import { TextLink } from "@/components/text-link";
import { pageMetadata } from "@/lib/metadata";
import { dishHref } from "@/lib/menu";

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
      />

      <section className="section-pad bg-cream">
        <div className="mx-auto grid w-full max-w-[1220px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div className="club-card p-6 sm:p-8">
            <p className="type-label text-xs text-blue">At the taproom</p>
            <h2 className="type-display mt-3 text-4xl text-blue sm:text-5xl">Flying Fox on the roof</h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/75">
              The 90s Club pours Flying Fox craft beer. The kitchen next to the taps leads with Kerala plates. Ask the team what is on today.
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

      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-8 bg-paper px-5 py-16 sm:px-8 sm:py-20">
        <GapNotice id="beer-list" kicker="Confirmed on the day" title="Current beer list">
          <p>The full tap and can list, with prices, has not been published on the site.</p>
          <p>Call or WhatsApp the team for today’s Flying Fox availability.</p>
        </GapNotice>

        <GapNotice id="beer-offers" kicker="Ask the team" title="Current offers">
          <p>Promotions can change, so this page does not quote an unconfirmed deal or price.</p>
        </GapNotice>
      </div>

      <section className="border-y-2 border-charcoal bg-gold py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
          <p className="type-label text-xs text-blue">From the kitchen</p>
          <h2 className="type-display mt-3 text-4xl text-charcoal sm:text-5xl lg:text-6xl">Pair and visit</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal/75">
            Pair a pour with{" "}
            <TextLink href={dishHref("Kerala Style Chicken Biryani")}>Kerala Style Chicken Biryani</TextLink>{" "}
            or the seafood starters. Then come up to the roof.
          </p>
          <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <TextLink href="/rooftop-pub">Rooftop</TextLink>
            <TextLink href="/menu">Menu</TextLink>
            <TextLink href="/kerala-food">Kerala food</TextLink>
          </p>
          <CtaRow className="mt-6" items={["call", "directions", "whatsapp"]} />
        </div>
      </section>
    </>
  );
}
