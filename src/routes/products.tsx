import Link from "next/link";
import { Check } from "lucide-react";
import { PadCarousel } from "@/components/site/PadCarousel";
import { DIAPER_SIZE_GUIDE, PRODUCT_IMAGE_VERSION, SHOW_PRICES } from "@/lib/site-config";

const products = [
  {
    id: "pads",
    name: "Favor Sanitary Pads",
    tag: "Premium CottonSoft · 280mm · 8 pads per pack",
    copy: "Reliable day-and-night leak protection designed to keep you fresh, dry, and confident on the go.",
    features: [
      "280mm length with soft secure wings",
      "3D Comfort Fit that moves with you",
      "CottonSoft top sheet that feels dry and puffy all day",
      "5-drop absorbency for day and night use",
      "8 individually wrapped pads per pack",
    ],
    bloom: true,
  },
  {
    id: "diapers",
    name: "Favor Adult Diapers",
    tag: "Available in Medium, Large & X-Large",
    copy: "Designed for comfortable, dependable protection with a soft & dry surface and a super-absorbent layer.",
    features: [
      "Soft & dry surface",
      "Super-absorbent layer",
      "Refasten tape",
      "Leak guard",
      "Wetness indicator",
    ],
    bloom: false,
  },
];

const padSlides = [
  { src: `/images/products/pack-front.jpg?v=${PRODUCT_IMAGE_VERSION}`, alt: "Favor Sanitary Pads Premium CottonSoft 280mm pack of 8" },
  { src: `/images/products/pack-trio.jpg?v=${PRODUCT_IMAGE_VERSION}`, alt: "Three packs of Favor Sanitary Pads stacked" },
  { src: `/images/products/pack-open.jpg?v=${PRODUCT_IMAGE_VERSION}`, alt: "Favor Sanitary Pads pack beside individually wrapped pads" },
  { src: `/images/products/pads-fan.jpg?v=${PRODUCT_IMAGE_VERSION}`, alt: "Individually wrapped Favor Sanitary Pads fanned out" },
  { src: `/images/products/pack-bundle.jpg?v=${PRODUCT_IMAGE_VERSION}`, alt: "Bale of six Favor Sanitary Pads packs" },
];

const diaperSlides = [
  {
    src: `/images/products/adultdiaper-xlarge-whitebg.jpg?v=${PRODUCT_IMAGE_VERSION}`,
    alt: "Favor Adult Diapers extra large pack",
  },
  {
    src: `/images/products/adultdiaper-left-whitebg.jpg?v=${PRODUCT_IMAGE_VERSION}`,
    alt: "Favor Adult Diapers pack, left view",
  },
  {
    src: `/images/products/adultdiaper-medium-whitebg.jpg?v=${PRODUCT_IMAGE_VERSION}`,
    alt: "Favor Adult Diapers medium pack",
  },
  {
    src: `/images/products/adultdiaper-right-whitebg.jpg?v=${PRODUCT_IMAGE_VERSION}`,
    alt: "Favor Adult Diapers pack, right view",
  },
  {
    src: `/images/products/adultdiaper-large-whitebg.jpg?v=${PRODUCT_IMAGE_VERSION}`,
    alt: "Favor Adult Diapers large pack",
  },
];

export default function ProductsPage() {
  return (
    <>
    <section className="section-spacing mx-auto max-w-6xl px-5">
      <h1 className="mx-auto max-w-3xl text-center text-4xl font-extrabold leading-tight md:text-5xl">
        Protection engineered for every body, every age.
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
        Two products, one promise: Favor Sanitary Pads for period care and Favor Adult Diapers
        for dignified, highly absorbent protection.
      </p>

      <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
        {products.map((p) => (
          <article
            key={p.name}
            id={p.id}
            className="surface-card min-w-0 flex h-full flex-col bg-background p-5 sm:p-8"
          >
            <PadCarousel
              slides={p.id === "pads" ? padSlides : diaperSlides}
              label={`${p.name} photos`}
            />
            <p
              className={`font-bold uppercase tracking-widest ${
                p.bloom ? "text-bloom" : "text-calm"
              }`}
            >
              {p.tag}
            </p>
            <h2 className="mt-3 text-center text-3xl font-extrabold">{p.name}</h2>
            {SHOW_PRICES ? (
              <p className="mt-2 text-center text-lg font-bold">From KES ___</p>
            ) : null}
            <p className="mt-3 break-words text-base leading-relaxed text-muted-foreground">{p.copy}</p>
            <ul className="mt-5 space-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <Check aria-hidden="true" size={20} className={p.bloom ? "mt-1 shrink-0 text-bloom" : "mt-1 shrink-0 text-calm"} />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/where-to-buy"
              className={`mt-auto w-full ${p.bloom ? "button-primary" : "button-teal"}`}
            >
              Find a Store
            </Link>
          </article>
        ))}
      </div>
    </section>
    <section className="border-y border-border bg-muted/40 section-spacing">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="text-center text-3xl font-extrabold">How to choose the right adult diaper size</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-muted-foreground">
          Choose the size that matches your waist measurement.
        </p>
        <div className="surface-card mt-8 overflow-x-auto bg-background">
          <table className="w-full min-w-[34rem] border-collapse text-left">
            <caption className="sr-only">Favor Adult Diapers waist size guide</caption>
            <thead className="bg-calm-soft text-foreground">
              <tr>
                <th scope="col" className="p-4 font-bold">Size</th>
                <th scope="col" className="p-4 font-bold">Waist (cm)</th>
                <th scope="col" className="p-4 font-bold">Waist (in)</th>
              </tr>
            </thead>
            <tbody>
              {DIAPER_SIZE_GUIDE.map((row) => (
                <tr key={row.size} className="border-t border-border">
                  <th scope="row" className="p-4 font-semibold">{row.size}</th>
                  <td className="p-4 text-muted-foreground">{row.waistCm}</td>
                  <td className="p-4 text-muted-foreground">{row.waistIn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    </>
  );
}