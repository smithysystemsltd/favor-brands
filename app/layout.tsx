import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CookieConsent } from "@/components/site/CookieConsent";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { siteUrl } from "@/lib/site-url";
import { CONTACT } from "@/lib/site-config";
import { Providers } from "./providers";
import "../src/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Favor Forever Ltd | Sanitary Pads & Adult Diapers Kenya",
    template: "%s | Favor Brands",
  },
  description:
    "Favor Forever Ltd makes comfortable sanitary towels and highly absorbent adult diapers in Kenya.",
  applicationName: "Favor Brands",
  authors: [{ name: "Favor Forever Ltd" }],
  openGraph: {
    siteName: "Favor Forever Ltd",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Favor Forever Ltd | Sanitary Pads & Adult Diapers Kenya",
    description:
      "Favor Forever Ltd makes comfortable sanitary towels and highly absorbent adult diapers in Kenya.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Favor Forever Ltd",
  alternateName: "Favor Brands",
  description: "Kenyan hygiene brand behind Favor Sanitary Pads and Favor Adult Diapers.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACT.phoneLink,
    email: CONTACT.email,
    contactType: "customer service",
    areaServed: "KE",
    availableLanguage: ["en", "sw"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <a
            href="#main"
            className="sr-only z-[80] min-h-11 items-center rounded-full bg-bloom px-5 py-3 font-bold text-bloom-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:inline-flex"
          >
            Skip to content
          </a>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
              {children}
            </main>
            <Footer />
          </div>
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
