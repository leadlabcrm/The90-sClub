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
