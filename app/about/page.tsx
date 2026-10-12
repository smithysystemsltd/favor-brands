import type { Metadata } from "next";
import AboutPage from "@/routes/about";

const title = "About Favor Brands | Kenyan Hygiene Company";
const description =
  "Why Favor Forever Ltd was founded: breaking the silence around periods and incontinence in Kenya with world-class, locally made hygiene products.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/about" },
  twitter: { title, description, card: "summary_large_image" },
  alternates: { canonical: "/about" },
};

export default AboutPage;
