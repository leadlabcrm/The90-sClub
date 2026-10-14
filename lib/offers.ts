/** Standing offers from the client brief. Prices and terms are confirmed at the venue. */

export type Offer = {
  id: string;
  headline: string;
  title: string;
  copy: string;
  note?: string;
};

export const offers: Offer[] = [
  {
    id: "bucket-beer-combo",
    headline: "₹999",
    title: "Bucket Beer Combo",
    copy: "A beer bucket with one veg and one non-veg starter.",
    note: "Standing offer",
  },
  {
    id: "bogo-drinks",
    headline: "BOGO",
    title: "Buy 1 Get 1 Free",
    copy: "On selected drinks. Ask the team what is on the list today.",
    note: "Standing offer",
  },
  {
    id: "weekday-team-lunch",
    headline: "Mon–Wed",
    title: "Weekday Team Lunch",
    copy: "Bring the office on a quiet weekday. Group tables and set plates for teams.",
    note: "By enquiry",
  },
];
