import type { Metadata } from "next";
import RefundPage from "@/routes/refund-policy";

export const metadata: Metadata = {
  title: "Refund & Returns Policy | Favor Forever Ltd",
  description:
    "When you can return Favor Sanitary Pads and Favor Adult Diapers bought direct from us, and how refunds work.",
  openGraph: { type: "article", url: "/refund-policy" },
  alternates: { canonical: "/refund-policy" },
};

export default RefundPage;
