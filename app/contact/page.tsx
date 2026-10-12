import type { Metadata } from "next";
import ContactPage from "@/routes/contact";
import { CONTACT } from "@/lib/site-config";

const title = "Contact Favor Brands | Nairobi, Kenya";
const description = `Talk to Favor Brands about orders, wholesale and feedback on Favor Sanitary Pads and Favor Adult Diapers. Call or WhatsApp ${CONTACT.phone} or email ${CONTACT.email}.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/contact" },
  twitter: { title, description, card: "summary_large_image" },
  alternates: { canonical: "/contact" },
};

export default ContactPage;
