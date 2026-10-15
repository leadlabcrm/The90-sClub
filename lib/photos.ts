/** Enhanced client photos (assets-v2). Alts follow the asset README. */

export type Photo = {
  src: string;
  alt: string;
  /** CSS object-position when the crop needs a bias. */
  position?: string;
};

const p = "/photos";

export const photos = {
  neonBar: {
    src: `${p}/the-90s-club-neon-bar-counter-logo-electronic-city-2400.webp`,
    alt: "The bar counter at The 90s Club in Electronic City, with the arched 90s Club logo lit on a blue LED bar front and bar stools in front.",
    position: "45% 60%",
  },
  interiorNeon: {
    src: `${p}/the-90s-club-taproom-interior-neon-ceiling-bar-electronic-city-2400.webp`,
    alt: "Inside The 90s Club taproom in Electronic City: blue neon lines on the ceiling, the lit logo bar and high tables with stools.",
  },
  chilliChicken: {
    src: `${p}/chilli-chicken-the-90s-club-electronic-city-2400.webp`,
    alt: "Chilli Chicken with spring onion and sesame on a black plate at The 90s Club, Electronic City.",
  },
  biryani: {
    src: `${p}/biryani-with-curry-and-flatbread-the-90s-club-electronic-city-2400.webp`,
    alt: "A bowl of biryani topped with spring onion, served with a curry and flatbread at The 90s Club.",
  },
  foodSpread: {
    src: `${p}/food-spread-chilli-chicken-biryani-cocktails-the-90s-club-electronic-city-2400.webp`,
    alt: "Chilli chicken, a bowl of biryani, a curry, flatbread and two cocktails on a table at The 90s Club in Electronic City, with the lit bar logo behind.",
  },
  logoWall: {
    src: `${p}/the-90s-club-logo-wall-and-retro-art-electronic-city-2400.webp`,
    alt: "The backlit 90s Club logo on a green wall beside a large portrait artwork inside The 90s Club, Electronic City.",
  },
  booth: {
    src: `${p}/the-90s-club-booth-seating-retro-lights-electronic-city-2400.webp`,
    alt: "Booth seating with orange tables under hanging bulbs at The 90s Club, Electronic City.",
  },
  barFront: {
    src: `${p}/the-90s-club-illuminated-bar-front-logo-electronic-city-2400.webp`,
    alt: "Close view of the bar front at The 90s Club, with the lit arched logo on a blue LED panel.",
  },
  neonBeer: {
    src: `${p}/neon-beer-bottles-wall-the-90s-club-taproom-electronic-city-2400.webp`,
    alt: "A neon sign of two clinking beer bottles on a stone wall framed in purple light at The 90s Club.",
  },
  redCocktail: {
    src: `${p}/red-cocktail-pour-the-90s-club-electronic-city-1200.webp`,
    alt: "A red cocktail being poured into a martini glass with a lime wheel at The 90s Club.",
  },
  chocolateCocktail: {
    src: `${p}/chocolate-cream-cocktail-the-90s-club-electronic-city-1200.webp`,
    alt: "A creamy cocktail with chocolate swirls in a martini glass at The 90s Club.",
  },
  greenCocktail: {
    src: `${p}/layered-green-cocktail-bar-counter-the-90s-club-electronic-city-1200.webp`,
    alt: "A layered green and red cocktail with apple slices on the bar counter at The 90s Club.",
  },
  boombox: {
    src: `${p}/retro-boombox-dj-booth-disco-ball-the-90s-club-electronic-city-1200.webp`,
    alt: "A boombox-print DJ booth, a disco-ball mural and a purple neon wall in the music corner of The 90s Club, Electronic City.",
  },
  streetSign: {
    src: `${p}/the-90s-club-taproom-and-kitchen-street-signboard-electronic-city-1200.webp`,
    alt: "The 90s Club Taproom and Kitchen signboard at Millennium Plaza, Electronic City, Bengaluru.",
  },
} as const satisfies Record<string, Photo>;

/**
 * Stock photographs from Pexels (free licence, no attribution required). They stand in until the
 * venue photoshoot. Alt text describes the dish or scene and never claims the frame was shot at the venue.
 */
const st = "/photos/stock";

export const stock = {
  coconutFishCurry: {
    src: `${st}/coconut-fish-curry-1600.webp`,
    alt: "Coconut fish curry in a creamy yellow gravy with tomato, green chilli and curry leaves.",
  },
  fishCurryRice: {
    src: `${st}/fish-curry-rice-coconut-1600.webp`,
    alt: "A bowl of red fish curry with steamed rice, a halved coconut and whole fish beside it.",
  },
  prawnsGheeRoast: {
    src: `${st}/prawns-ghee-roast-1600.webp`,
    alt: "Prawns roasted in a dark red masala with green chillies in a steel kadai.",
  },
  naadanChickenCurry: {
    src: `${st}/naadan-chicken-curry-clay-pot-1600.webp`,
    alt: "Chicken curry in a clay pot on a wooden table with dried red chillies and star anise.",
    position: "30% 50%",
  },
  chickenGheeRoast: {
    src: `${st}/chicken-ghee-roast-1600.webp`,
    alt: "Chicken ghee roast in a clay bowl with a wedge of lime and coriander.",
  },
  appamStew: {
    src: `${st}/appam-chicken-stew-1600.webp`,
    alt: "Appam on a steel plate with a bowl of chicken stew and samosas on a wooden tray.",
  },
  gobiManchurian: {
    src: `${st}/gobi-manchurian-1600.webp`,
    alt: "Gobi Manchurian on a bed of shredded cabbage on a wooden board.",
  },
  hakkaNoodles: {
    src: `${st}/hakka-noodles-1600.webp`,
    alt: "A bowl of vegetable Hakka noodles on a dark table.",
  },
  rooftopTwilight: {
    src: `${st}/rooftop-bar-twilight-1600.webp`,
    alt: "A rooftop bar at twilight with pergola lighting, lounge seating and the sky above.",
    position: "50% 40%",
  },
  rooftopCityView: {
    src: `${st}/rooftop-bar-city-view-1600.webp`,
    alt: "A dimly lit rooftop bar with high tables and a city view through the glass.",
  },
  beerBucket: {
    src: `${st}/beer-bucket-ice-1600.webp`,
    alt: "Beer bottles chilling in a red bucket of ice on a wooden table.",
  },
  beerPour: {
    src: `${st}/craft-beer-tap-pour-1600.webp`,
    alt: "A pint of craft beer being poured from the tap at a bar.",
  },
  draftPint: {
    src: `${st}/draft-beer-pint-bar-1600.webp`,
    alt: "A hand holding a freshly poured pint of beer at a dim bar counter.",
  },
  friendsToast: {
    src: `${st}/friends-toast-bar-1600.webp`,
    alt: "Friends raising glasses in a toast at a bar.",
  },
  birthdaySparkler: {
    src: `${st}/birthday-sparkler-party-1600.webp`,
    alt: "A birthday party at a bar with a sparkler on the cake and friends around the table.",
    position: "50% 35%",
  },
  teamLunch: {
    src: `${st}/team-lunch-table-1600.webp`,
    alt: "A group of colleagues applauding around a restaurant table at lunch.",
  },
  neerDosa: {
    src: `${st}/neer-dosa-banana-leaf-1600.webp`,
    alt: "Neer dosa folded on a banana leaf on a red tray with a small cup of chutney.",
  },
  keralaMeal: {
    src: `${st}/kerala-meal-banana-leaf-1600.webp`,
    alt: "A Kerala meal with rice, fried fish and assorted curries on a banana leaf.",
  },
} as const satisfies Record<string, Photo>;

export const interiorGallery = [
  photos.interiorNeon,
  photos.booth,
  photos.neonBar,
  photos.logoWall,
  photos.boombox,
  photos.barFront,
] as const;

export const drinkGallery = [
  photos.redCocktail,
  photos.chocolateCocktail,
  photos.greenCocktail,
] as const;
