export type MenuItem = {
  name: string;
  price: number;
  signature?: boolean;
};

export type MenuSection = {
  id: string;
  title: string;
  intro: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    id: "veg-starters",
    title: "Veg starters",
    intro: "Vegetarian starters from the Electronic City food card.",
    items: [
      { name: "Dragon Paneer", price: 279 },
      { name: "Babycorn Chilli", price: 279 },
      { name: "Crispy Corn", price: 229 },
      { name: "Mushroom Pepper Dry", price: 279 },
      { name: "Mushroom Chilli", price: 279 },
      { name: "Chilli Paneer", price: 289 },
      { name: "Gobi Manchurian", price: 259 },
    ],
  },
  {
    id: "non-veg-starters",
    title: "Non-veg starters",
    intro: "Chicken, fish, and prawn starters. Kerala seafood plates are marked.",
    items: [
      { name: "Chilli Chicken", price: 309 },
      { name: "Dragon Chicken", price: 309 },
      { name: "Chicken 65", price: 309 },
      { name: "Chicken Kabab", price: 299 },
      { name: "Garlic Chicken", price: 309 },
      { name: "Lemon Chicken", price: 309 },
      { name: "Chilli Fish", price: 339 },
      { name: "Prawns Ghee Roast", price: 359, signature: true },
      { name: "Chicken Pepper Dry", price: 299 },
      { name: "Chicken Manchurian", price: 309 },
      { name: "Chicken Stew", price: 349, signature: true },
      { name: "Prawns Pepper Fry", price: 359, signature: true },
      { name: "Chicken Ghee Roast", price: 319 },
    ],
  },
  {
    id: "indian-mains",
    title: "Indian main course",
    intro:
      "The kitchen leads with the Kerala plates marked below. Rice and the other curries are on the same card.",
    items: [
      { name: "Butter Chicken", price: 359 },
      { name: "Kadai Chicken", price: 349 },
      { name: "Dal Tadka", price: 249 },
      { name: "Paneer Butter Masala", price: 309 },
      { name: "Steamed Rice", price: 139 },
      { name: "Jeera Rice", price: 169 },
      { name: "Kadai Paneer", price: 309 },
      { name: "Kerala Style Chicken Biryani", price: 349, signature: true },
      { name: "Coconut Fish Curry", price: 389, signature: true },
      { name: "Naadan Chicken Curry", price: 349, signature: true },
    ],
  },
  {
    id: "chinese-special",
    title: "Chinese special",
    intro: "Noodles and fried rice from the same food card.",
    items: [
      { name: "Veg Noodles", price: 289 },
      { name: "Chicken Noodles", price: 329 },
      { name: "Schezwan Noodles Veg", price: 339 },
      { name: "Egg Noodles", price: 299 },
      { name: "Schezwan Noodles Chicken", price: 309 },
      { name: "Veg Fried Rice Classic", price: 269 },
      { name: "Veg Fried Rice Schezwan", price: 279 },
      { name: "Egg Fried Rice Classic", price: 299 },
      { name: "Egg Fried Rice Schezwan", price: 309 },
      { name: "Chicken Fried Rice Classic", price: 319 },
      { name: "Chicken Fried Rice Schezwan", price: 329 },
    ],
  },
];

export function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function formatPrice(rupees: number) {
  return `₹${rupees.toLocaleString("en-IN")}`;
}

export function findDish(name: string) {
  for (const section of menuSections) {
    const item = section.items.find((dish) => dish.name === name);
    if (item) return item;
  }
  throw new Error(`Menu is missing “${name}”`);
}

export function dishHref(name: string) {
  return `/menu#${slugify(name)}`;
}
