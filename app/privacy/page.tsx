import type { Metadata } from "next";
import PrivacyPage from "@/routes/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | Favor Forever Ltd Kenya",
  description:
    "How Favor Forever Ltd collects, uses and protects your personal data under Kenya's Data Protection Act, 2019.",
  openGraph: { type: "article", url: "/privacy" },
  alternates: { canonical: "/privacy" },
};

export default PrivacyPage;
