export const phone = {
  display: "+91 96321 48811",
  tel: "+919632148811",
  href: "tel:+919632148811",
  whatsapp: "919632148811",
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
  full: "Monday–Sunday, 12:00 pm – 12:00 am",
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

export const links = {
  directions: "https://share.google/IelhjSarfxq2uls3r",
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
} as const;

export function whatsappHref(message: string) {
  return `https://wa.me/${phone.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const primaryNav = [
  { href: "/menu", label: "Menu" },
  { href: "/kerala-food", label: "Kerala food" },
  { href: "/rooftop-pub", label: "Rooftop pub" },
  { href: "/craft-beer", label: "Craft beer" },
  { href: "/visit", label: "Visit" },
  { href: "/occasions", label: "Occasions" },
  { href: "/about", label: "About" },
] as const;

export const allNav = primaryNav;

export const mapsName = "The 90s Club";
export const publicName = "The 90s Club Taproom and Kitchen";
