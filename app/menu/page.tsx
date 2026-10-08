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
    "Food menu for The 90s Club, Electronic City: veg and non-veg starters, Kerala mains, noodles, fried rice, and current craft beer by enquiry.",
  path: "/menu",
});

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Electronic City food card"
        title="Menu — The 90s Club Electronic City"
        lede="The full food card with prices in rupees. A meal for two often sits between ₹400 and ₹1,000; current craft beer availability is confirmed directly with the team."
      />

      <div className="mx-auto w-full max-w-[1220px] px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <VenuePhoto
            src={photos.foodSpread.src}
            alt={photos.foodSpread.alt}
            priority
            caption="A spread from the Electronic City kitchen."
          />
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-1">
            <VenuePhoto
              src={photos.foodBiryani.src}
              alt={photos.foodBiryani.alt}
              aspect="photo"
              caption="Rice and curry from the kitchen."
            />
            <VenuePhoto
              src={photos.foodChilliChicken.src}
              alt={photos.foodChilliChicken.alt}
              aspect="photo"
              caption="Chilli chicken."
            />
          </div>
        </div>
        <CtaRow
          className="mt-8"
          items={["call", "directions", "whatsapp"]}
          callLabel="Call to enquire"
          whatsappMessage={whatsappMessages.order}
        />
      </div>

      <nav
        aria-label="Menu sections"
        className="sticky top-16 z-30 border-y-2 border-black bg-gold/95 backdrop-blur md:top-[6.75rem]"
      >
        <ul className="mx-auto flex w-full max-w-[1220px] gap-2 overflow-x-auto px-5 py-3 sm:px-8">
          {menuSections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="club-button type-label inline-flex whitespace-nowrap bg-paper px-3 py-2 text-[0.64rem] text-blue"
              >
                {section.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#drinks"
              className="club-button type-label inline-flex whitespace-nowrap bg-paper px-3 py-2 text-[0.64rem] text-blue"
            >
              Drinks
            </a>
          </li>
          <li>
            <a
              href="#offers"
              className="club-button type-label inline-flex whitespace-nowrap bg-paper px-3 py-2 text-[0.64rem] text-blue"
            >
              Offers
            </a>
          </li>
        </ul>
      </nav>

      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-10 px-5 py-16 sm:px-8 sm:py-24">
        {menuSections.map((section) => (
          <section key={section.id} id={section.id} className="club-card-light scroll-mt-40 p-5 sm:p-8">
            <p className="type-label text-[0.65rem] text-blue">Food menu</p>
            <h2 className="type-display mt-2 text-4xl text-blue sm:text-5xl">{section.title}</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-charcoal/70">{section.intro}</p>
            <ul className="mt-7 grid gap-x-8 sm:grid-cols-2">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  id={slugify(item.name)}
                  className="scroll-mt-40 flex min-h-14 flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-blue/25 py-3"
                >
                  <span className="font-medium text-charcoal">{item.name}</span>
                  {item.signature ? (
                    <span className="type-label rounded-full bg-gold/45 px-2 py-1 text-[0.56rem] text-charcoal">
                      Kerala kitchen
                    </span>
                  ) : null}
                  <span className="ml-auto font-semibold tabular-nums text-blue">{formatPrice(item.price)}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <GapNotice id="drinks" kicker="Tap list update" title="Drinks and craft beer">
          <p>Flying Fox craft beer and drinks are available. Ask the team for the current list and prices; the site does not publish an incomplete card.</p>
          <div className="grid gap-4 sm:grid-cols-3">
            <VenuePhoto src={photos.drinkCocktail.src} alt={photos.drinkCocktail.alt} aspect="square" sizes="(min-width: 640px) 200px, 100vw" />
            <VenuePhoto src={photos.drinkMargarita.src} alt={photos.drinkMargarita.alt} aspect="square" sizes="(min-width: 640px) 200px, 100vw" />
            <VenuePhoto src={photos.drinkCosmopolitan.src} alt={photos.drinkCosmopolitan.alt} aspect="square" sizes="(min-width: 640px) 200px, 100vw" />
          </div>
          <p>The glasses below are cocktails photographed at the bar; no price is implied.</p>
          <p>
            <TextLink href="/craft-beer" tone="onDark">
              Craft beer page
            </TextLink>
          </p>
        </GapNotice>

        <GapNotice id="offers" kicker="Ask the team" title="Current offers">
          <p>
            Promotions can change. Call or WhatsApp for the offer running on the day you visit.
          </p>
        </GapNotice>

        <section className="club-card-dark p-6 sm:p-9">
          <h2 className="type-display text-4xl text-cream sm:text-5xl">Order or ask the team</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/75">
            Call {phone.display} for a table enquiry or a question about the card. WhatsApp uses the same number.
          </p>
          <CtaRow
            className="mt-5"
            tone="onDark"
            items={["call", "directions", "whatsapp"]}
            callLabel="Call to enquire"
            whatsappMessage={whatsappMessages.order}
          />
        </section>
      </div>
    </>
  );
}
