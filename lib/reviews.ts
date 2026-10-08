/** Real Google reviews. Names shortened to first name + initial. Wording kept as published. */

export type Review = {
  name: string;
  date: string;
  text: string;
};

export const reviews = {
  kavyashree: {
    name: "Kavyashree P.",
    date: "20 May 2026",
    text: "Absolutely loved the delicious and tasty food and drinks, perfectly paired with incredible 90s music and a fantastic retro atmosphere.",
  },
  fran: {
    name: "Fran J.",
    date: "17 Sep 2026",
    text: "Had a great experience at this restro bar! The ambience was really nice, the food was delicious, and the overall vibe was perfect for a relaxed evening.",
  },
  manojkumar: {
    name: "Manojkumar N.",
    date: "18 Sep 2026",
    text: "Great place - 90s Vibes, Music is great",
  },
  vaibhav: {
    name: "Vaibhav P.",
    date: "3 Jun 2026",
    text: "Good sea food and ambience",
  },
  deepak: {
    name: "Deepak N.",
    date: "24 May 2026",
    text: "We had a party here and the food was very tasty and especially the service.",
  },
  spoorthi: {
    name: "Spoorthi H.",
    date: "24 May 2026",
    text: "Loved the 90s nostalgia!This new spot has the perfect throwback energy.",
  },
} as const satisfies Record<string, Review>;

export const homeReviews: Review[] = [
  reviews.kavyashree,
  reviews.fran,
  reviews.manojkumar,
  reviews.spoorthi,
];
