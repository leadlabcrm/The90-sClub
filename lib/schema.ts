import type { FaqItem } from "@/lib/faq";
import { homeFaqs } from "@/lib/faq";
import { photos } from "@/lib/photos";
import { geo, hours, links, mapsName, phone, publicName } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";

/**
 * Schema `name` uses the Maps listing name “The 90s Club”.
 * `alternateName` carries the H1-friendly name. Stay 1:1 with the Google Business Profile.
 */
export function restaurantJsonLd() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "BarOrPub"],
    "@id": `${url}/#restaurant`,
    name: mapsName,
    alternateName: publicName,
    description:
      "Kerala kitchen and rooftop taproom in Hebbagodi, Electronic City, Bangalore. Craft beer from Flying Fox. Open daily from noon to midnight.",
    url,
    image: `${url}/photos/food-spread-chilli-chicken-biryani-cocktails-the-90s-club-electronic-city-2400.jpg`,
    telephone: phone.tel,
    servesCuisine: ["Kerala", "Seafood", "Indian", "Chinese"],
    currenciesAccepted: "INR",
    hasMenu: `${url}/menu`,
    menu: `${url}/menu`,
    hasMap: links.directions,
    sameAs: [links.instagram, links.directions],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Millennium Plaza, 396/48 Hosur Rd, Dadi Reddy Layout, Veerasandra, Hebbagodi, Electronic City",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560100",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...hours.days],
        opens: hours.opens,
        closes: hours.closes,
      },
    ],
    areaServed: ["Electronic City", "Hebbagodi", "Ananth Nagar"],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Air conditioning",
        value: true,
      },
    ],
  };
}

/** Mirrors a visible FAQ block. Do not add questions that are not on the page. */
export function faqPageJsonLd(faqs: readonly FaqItem[] = homeFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
