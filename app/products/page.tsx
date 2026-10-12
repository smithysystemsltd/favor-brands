import type { Metadata } from "next";
import ProductsPage from "@/routes/products";

const title = "Favor Sanitary Pads & Adult Diapers | Products";
const description =
  "Meet our two products: Favor Sanitary Pads for everyday and heavy flow comfort, and Favor Adult Diapers for highly absorbent, dignified protection.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/products" },
  twitter: { title, description, card: "summary_large_image" },
  alternates: { canonical: "/products" },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Favor Sanitary Pads",
        brand: { "@type": "Brand", name: "Favor Brands" },
        description:
          "Favor Sanitary Pads Premium CottonSoft, 280mm with 3D Comfort Fit.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Favor Adult Diapers",
        brand: { "@type": "Brand", name: "Favor Brands" },
        description:
          "Favor Adult Diapers with a soft and dry surface, super-absorbent layer, refasten tape, leak guard and wetness indicator. Available in Medium, Large and X-Large sizes.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductsPage />
    </>
  );
}
