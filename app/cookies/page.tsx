import type { Metadata } from "next";
import CookiesPage from "@/routes/cookies";

export const metadata: Metadata = {
  title: "Cookies Policy | Favor Forever Ltd",
  description:
    "Which cookies the Favor Forever Ltd website uses, why, and how to change your cookie choices at any time.",
  openGraph: { type: "article", url: "/cookies" },
  alternates: { canonical: "/cookies" },
};

export default CookiesPage;
