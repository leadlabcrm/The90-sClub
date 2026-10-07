import { photos } from "@/lib/photos";
import { hours, links, mapsName, phone, publicName } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";

/**
 * Schema `name` uses the Maps listing name “The 90s Club”.
 * `alternateName` carries the H1-friendly name. PM still confirms this
 * stays 1:1 with the Google Business Profile.
 */
export function restaurantJsonLd() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${url}/#restaurant`,
    name: mapsName,
    alternateName: publicName,
    description:
      "Kerala kitchen and rooftop taproom in Hebbagodi, Electronic City, Bangalore. Craft beer from Flying Fox. Open daily from noon to midnight.",
    url,
    image: `${url}${photos.barLogoHero.src}`,
    telephone: phone.tel,
    servesCuisine: "Kerala",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    hasMenu: `${url}/menu`,
    menu: `${url}/menu`,
    hasMap: links.directions,
    sameAs: [links.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Millennium Plaza, 396/48 Hosur Rd, Dadi Reddy Layout, Veerasandra, Hebbagodi",
      addressLocality: "Electronic City, Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560100",
      addressCountry: "IN",
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
