export const CONTACT = {
  phone: "+254 710584867",
  phoneLink: "+254710584867",
  whatsappNumber: "254710584867",
  email: "favorbrandsltd@gmail.com",
  address: "Nairobi, Kenya",
  hours: "Mon – Fri: 8:00 AM – 5:00 PM · Sat: 8:00 AM – 1:00 PM · Sun & holidays: closed",
} as const;

export const SOCIAL_LINKS: Record<"x" | "instagram" | "facebook", string | null> = {
  x: null, // TODO: Add the official X profile URL.
  instagram: null, // TODO: Add the official Instagram profile URL.
  facebook: null, // TODO: Add the official Facebook page URL.
} as const;

export const SHOW_PRICES = false;

export const PRODUCT_IMAGE_VERSION = "20261010";

export const DIAPER_SIZE_GUIDE = [
  { size: "Medium", waistCm: "76–112 cm", waistIn: "30–44 in" },
  { size: "Large", waistCm: "101–139 cm", waistIn: "40–55 in" },
  { size: "X-Large", waistCm: "127–165 cm", waistIn: "50–65 in" },
] as const;
