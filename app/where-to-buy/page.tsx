import type { Metadata } from "next";
import WhereToBuyPage from "@/routes/where-to-buy";

const title = "Where to Buy Pads & Adult Diapers in Kenya";
const description =
  "Find Favor Brands sanitary pads and adult diapers in Kamindi, Magunas, Kanini Haraka, Juja Ecomatt, Awale Pharmacy, Powerstar and Karia, or order online via Jumia, Glovo, Copia or WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/where-to-buy" },
  twitter: { title, description, card: "summary_large_image" },
  alternates: { canonical: "/where-to-buy" },
};

export default WhereToBuyPage;
