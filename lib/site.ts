/** Customer line from the client brief and wireframe. Calls and WhatsApp use the same number. */
export const phone = {
  display: "+91 96321 41188",
  tel: "+919632141188",
  href: "tel:+919632141188",
  whatsapp: "919632141188",
} as const;

export const address = {
  line1: "Millennium Plaza, 396/48 Hosur Rd",
  line2: "Dadi Reddy Layout, Veerasandra",
  line3: "Hebbagodi, Electronic City",
  line4: "Bangalore 560100",
  full: "Millennium Plaza, 396/48 Hosur Rd, Dadi Reddy Layout, Veerasandra, Hebbagodi, Electronic City, Bangalore 560100",
  short: "Millennium Plaza, Hosur Rd, Hebbagodi, Electronic City 560100",
} as const;

export const hours = {
  summary: "Mon–Sun 12:00 pm – 12:00 am",
  short: "12 PM – 12 AM",
  full: "Monday–Sunday, 12:00 pm – 12:00 am",
  eventNights: "Event nights: till 1 AM",
  opens: "12:00",
  closes: "00:00",
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
} as const;

export const geo = {
  latitude: 12.8346301,
  longitude: 77.6793577,
} as const;

export const rating = {
  value: "4.7",
  count: 84,
  source: "Google",
} as const;

export const metro = {
  station: "Biocon Hebbagodi",
  line: "Namma Metro Yellow Line",
} as const;

export const areas = ["Electronic City", "Hebbagodi", "Anantha Nagar"] as const;

export const links = {
  directions: "https://share.google/IelhjSarfxq2uls3r",
  googleListing: "https://www.google.com/maps?cid=5348012813273663161",
  instagram: "https://www.instagram.com/the90sclubretropub",
  instagramHandle: "@the90sclubretropub",
  mapsEmbed: `https://maps.google.com/maps?q=${encodeURIComponent(
    "The 90s Club, Millennium Plaza, 396/48 Hosur Rd, Hebbagodi, Electronic City, Bangalore 560100",
  )}&hl=en&z=16&output=embed`,
} as const;

export const whatsappMessages = {
  visit: "Hi The 90s Club, I would like to enquire about a visit.",
  order: "Hi The 90s Club, I would like to ask about the food menu.",
  group:
    "Hi The 90s Club, I would like to enquire about a group. Date:  Headcount:  Time: ",
  book: "Hi The 90s Club, I would like to book a table. Date:  Time:  Guests: ",
  offer: (offer: string) => `Hi The 90s Club, I would like to claim the ${offer} offer. Date:  Guests: `,
  subscribe:
    "Hi The 90s Club, please add me to the WhatsApp list for offers and event nights.",
} as const;

export function whatsappHref(message: string) {
  return `https://wa.me/${phone.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Header nav, per the wireframe. */
export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/kerala-food", label: "Kerala Specials" },
  { href: "/#offers", label: "Offers" },
  { href: "/#parties", label: "Parties & Events" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/visit", label: "Contact" },
] as const;

/** Footer quick links: the wireframe list plus the inner pages. */
export const footerNav = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/kerala-food", label: "Kerala Specials" },
  { href: "/#offers", label: "Offers" },
  { href: "/#parties", label: "Parties & Events" },
  { href: "/visit", label: "Contact" },
] as const;

export const allNav = footerNav;

export const mapsName = "The 90s Club";
export const publicName = "The 90s Club Taproom and Kitchen";
