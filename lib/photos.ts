/** Client Drive photos. Alts describe the frame, not a shot we do not have. */
export const photos = {
  barLogoHero: {
    src: "/photos/bar-logo-hero.jpg",
    alt: "The 90s Club bar interior: a backlit bottle wall, the gold logo on the counter, and red pendant lights.",
  },
  barCounter: {
    src: "/photos/bar-counter.jpg",
    alt: "Bar counter at The 90s Club with beer taps, a backlit bottle wall, and the logo on the front of the bar.",
  },
  interiorWideNeon: {
    src: "/photos/interior-wide-neon.jpg",
    alt: "Wide view inside The 90s Club: blue and pink neon, a ceiling fan, and lounge seating. This is the interior, not an open terrace.",
  },
  interiorSeating: {
    src: "/photos/interior-seating.jpg",
    alt: "Curved booth and low tables inside The 90s Club, with blue neon along the wall.",
  },
  interiorScreenStage: {
    src: "/photos/interior-screen-stage.jpg",
    alt: "Interior stage area at The 90s Club with a large screen, coloured floor lighting, and lounge seating.",
  },
  entrance: {
    src: "/photos/entrance.jpg",
    alt: "Entrance corridor at The 90s Club with a neon 90s CLUB sign, a red rope, and a ceiling fan.",
  },
  neonSign: {
    src: "/photos/neon-sign.jpg",
    alt: "Blue neon sign reading 90s CLUB on a dark interior wall.",
  },
  logoWall: {
    src: "/photos/logo-wall.jpg",
    alt: "Gold THE 90s CLUB lettering on a dark wall inside the venue.",
  },
  neonBeerWall: {
    src: "/photos/neon-beer-wall.jpg",
    alt: "Neon beer mug and beer bottle on a brick wall inside The 90s Club. This is wall art, not a Flying Fox tap or product shot.",
  },
  storefrontBuilding: {
    src: "/photos/storefront-building.jpg",
    alt: "Street view of the commercial building on Hosur Road that houses The 90s Club, with the venue signboard at the top.",
  },
  storefrontSignboard: {
    src: "/photos/storefront-signboard.jpg",
    alt: "Illuminated The 90s Club signboard on the Hosur Road building, with the phone number and a rooftop restaurant line on the board.",
  },
  exteriorStreet: {
    src: "/photos/exterior-street.jpg",
    alt: "The 90s Club signboard seen from the street at dusk, above the Hosur Road frontage.",
  },
  foodBiryani: {
    src: "/photos/food-biryani.jpg",
    alt: "Chicken biryani with a side of gravy and a bowl of spiced rice on a wooden table at The 90s Club.",
  },
  foodChilliChicken: {
    src: "/photos/food-chilli-chicken.jpg",
    alt: "Chilli chicken in a black bowl, garnished with spring onion, on a wooden table at The 90s Club.",
  },
  foodSpread: {
    src: "/photos/food-spread.jpg",
    alt: "Several chicken and curry plates from The 90s Club kitchen, set out together on a wooden table.",
  },
  drinkCocktail: {
    src: "/photos/drink-cocktail.jpg",
    alt: "A green mint cocktail in a short glass on the bar at The 90s Club. Drink prices are not printed on the site yet.",
  },
  drinkMargarita: {
    src: "/photos/drink-margarita.jpg",
    alt: "A margarita with a salted rim and a lime wheel, on the bar at The 90s Club.",
  },
  drinkCosmopolitan: {
    src: "/photos/drink-cosmopolitan.jpg",
    alt: "A pink cosmopolitan in a martini glass with a lime twist, on the bar at The 90s Club.",
  },
} as const;

export const interiorGallery = [
  photos.interiorWideNeon,
  photos.interiorSeating,
  photos.barCounter,
  photos.entrance,
  photos.neonSign,
  photos.logoWall,
  photos.interiorScreenStage,
] as const;
