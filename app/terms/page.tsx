import type { Metadata } from "next";
import TermsPage from "@/routes/terms";

export const metadata: Metadata = {
  title: "Terms & Conditions | Favor Forever Ltd Kenya",
  description:
    "The terms for using the Favor Forever Ltd website and ordering Favor Sanitary Pads and Favor Adult Diapers in Kenya.",
  openGraph: { type: "article", url: "/terms" },
  alternates: { canonical: "/terms" },
};

export default TermsPage;
