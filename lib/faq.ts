import { phone } from "@/lib/site";

/** Visible homepage FAQ. FAQPage JSON-LD must use these strings unchanged. */
export const homeFaqs = [
  {
    question: "Is Kerala food served at The 90s Club?",
    answer:
      "Yes. The menu includes Kerala Style Chicken Biryani, Coconut Fish Curry, Naadan Chicken Curry, Prawns Ghee Roast, and Prawns Pepper Fry.",
  },
  {
    question: "Is The 90s Club a rooftop pub in Electronic City?",
    answer:
      "Yes. The venue is on the fourth floor at Millennium Plaza in Hebbagodi, with rooftop seating and a full AC dining room.",
  },
  {
    question: "Which craft beer is available?",
    answer:
      "The taproom serves Flying Fox craft beer. The current tap list and prices are confirmed directly by the team.",
  },
  {
    question: "Is parking available?",
    answer: "Yes. Parking is available at Millennium Plaza.",
  },
  {
    question: "Can I plan a team lunch or birthday?",
    answer: `Yes. The venue has about 80 seats. Call ${phone.display} with your date, time, and group size.`,
  },
] as const;
