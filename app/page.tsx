import type { Metadata } from "next";
import HomePage from "@/routes/index";

const title = "Favor Brands | Sanitary Pads & Adult Diapers Kenya";
const description =
  "Comfort, confidence and dignity every day. Favor Forever Ltd brings you Favor Sanitary Pads and Favor Adult Diapers that are affordable, highly absorbent and dermatologically tested.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/" },
  twitter: { title, description, card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Favor Brands",
            description,
          }),
        }}
      />
      <HomePage />
    </>
  );
}
