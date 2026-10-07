import { CtaRow } from "@/components/cta-row";
import { GapNotice } from "@/components/gap-notice";
import { PageHero } from "@/components/page-hero";
import { VenuePhoto } from "@/components/venue-photo";
import { photos } from "@/lib/photos";
import { TextLink } from "@/components/text-link";
import { pageMetadata } from "@/lib/metadata";
import { formatPrice, menuSections, slugify } from "@/lib/menu";
import { phone, whatsappMessages } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Menu — The 90s Club Electronic City | Food & craft beer",
  description:
    "Food menu for The 90s Club, Electronic City: veg and non-veg starters, Kerala mains, noodles and fried rice. The drinks list is still to come.",
  path: "/menu",
});

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Electronic City food card"
        title="Menu — The 90s Club Electronic City"
        lede="Food from the live Electronic City card, with prices in rupees. A meal for two often sits between ₹400 and ₹1,000. Drinks and the beer list are marked below until the team sends them."
      />

      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <VenuePhoto
          src={photos.foodSpread.src}
          alt={photos.foodSpread.alt}
          priority
          caption="A spread from the Electronic City kitchen."
        />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <VenuePhoto src={photos.foodBiryani.src} alt={photos.foodBiryani.alt} aspect="photo" caption="Chicken biryani, gravy, and spiced rice." />
          <VenuePhoto src={photos.foodChilliChicken.src} alt={photos.foodChilliChicken.alt} aspect="photo" caption="Chilli chicken." />
        </div>
        <CtaRow
          className="mt-6"
          items={["call", "directions", "whatsapp"]}
          callLabel="Call to enquire"
          whatsappMessage={whatsappMessages.order}
        />
      </div>

      <nav
        aria-label="Menu sections"
        className="sticky top-[4.6rem] z-30 border-y border-border bg-cream/95 backdrop-blur"
      >
        <ul className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {menuSections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="inline-flex whitespace-nowrap rounded-full border border-border bg-paper px-3 py-1.5 text-sm font-semibold text-teal"
              >
                {section.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#drinks"
              className="inline-flex whitespace-nowrap rounded-full border border-dashed border-teal bg-paper px-3 py-1.5 text-sm font-semibold text-teal"
            >
              Drinks
            </a>
          </li>
          <li>
            <a
              href="#offers"
              className="inline-flex whitespace-nowrap rounded-full border border-border bg-paper px-3 py-1.5 text-sm font-semibold text-teal"
            >
              Offers
            </a>
          </li>
        </ul>
      </nav>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6">
        {menuSections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-36">
            <h2 className="type-display text-4xl text-teal sm:text-5xl">{section.title}</h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">{section.intro}</p>
            <ul className="mt-4 divide-y divide-dashed divide-border border-y border-dashed border-border">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  id={slugify(item.name)}
                  className="scroll-mt-36 flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3"
                >
                  <span className="font-medium text-charcoal">{item.name}</span>
                  {item.signature ? (
                    <span className="rounded-full bg-mustard/30 px-2 py-0.5 text-xs font-semibold text-charcoal">
                      Kerala kitchen
                    </span>
                  ) : null}
                  <span className="ml-auto font-semibold tabular-nums text-teal">{formatPrice(item.price)}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <GapNotice id="drinks" kicker="Client asset needed" title="Drinks and beer">
          <p>Flying Fox craft beers and drinks — full list and prices coming. The glasses below are cocktails from the bar, shown without prices.</p>
          <div className="grid gap-4 sm:grid-cols-3">
            <VenuePhoto src={photos.drinkCocktail.src} alt={photos.drinkCocktail.alt} aspect="square" sizes="(min-width: 640px) 200px, 100vw" />
            <VenuePhoto src={photos.drinkMargarita.src} alt={photos.drinkMargarita.alt} aspect="square" sizes="(min-width: 640px) 200px, 100vw" />
            <VenuePhoto src={photos.drinkCosmopolitan.src} alt={photos.drinkCosmopolitan.alt} aspect="square" sizes="(min-width: 640px) 200px, 100vw" />
          </div>
          <p>Styles and prices stay off this page until that list arrives.</p>
          <p>
            <TextLink href="/craft-beer">Craft beer page</TextLink>
          </p>
        </GapNotice>

        <GapNotice id="offers" kicker="Waiting on confirmation" title="Offers">
          <p>
            No offer is listed right now. When the team confirms the current deal, the wording will be written here.
          </p>
        </GapNotice>

        <section className="rounded-2xl bg-sand p-5 sm:p-7">
          <h2 className="type-display text-4xl text-teal">Order or ask the team</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Call {phone.display} for a table enquiry or a question about the card. WhatsApp uses the same number.
          </p>
          <CtaRow
            className="mt-5"
            items={["call", "directions", "whatsapp"]}
            callLabel="Call to enquire"
            whatsappMessage={whatsappMessages.order}
          />
        </section>
      </div>
    </>
  );
}
