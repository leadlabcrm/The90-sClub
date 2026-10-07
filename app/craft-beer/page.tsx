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
    "Flying Fox craft beer at The 90s Club rooftop in Electronic City. The full tap list and prices are still to come from the team.",
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

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="type-display text-4xl text-teal sm:text-5xl">Flying Fox on the roof</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The 90s Club pours Flying Fox craft beer. The kitchen next to the taps leads with Kerala plates. Ask the team what is on today.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <VenuePhoto
              src={photos.neonBeerWall.src}
              alt={photos.neonBeerWall.alt}
              aspect="photo"
              caption="Neon beer art. Not a Flying Fox can, tap, or product shot."
            />
            <VenuePhoto
              src={photos.barCounter.src}
              alt={photos.barCounter.alt}
              aspect="photo"
              caption="The bar counter. Tap names are not readable in this frame."
            />
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-4 sm:px-6">
        <GapNotice id="beer-list" kicker="Client asset needed" title="Beer list">
          <p>The full tap and can list, with prices, is missing. This page holds the space until that card arrives.</p>
          <p>Styles and strengths stay blank until the list arrives.</p>
        </GapNotice>

        <GapNotice id="beer-offers" kicker="Waiting on confirmation" title="Offers">
          <p>No beer offer is listed. When the team confirms a current deal, the wording will be added here and on the menu.</p>
        </GapNotice>
      </div>

      <section className="py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="type-display text-4xl text-teal sm:text-5xl">Pair and visit</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
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
