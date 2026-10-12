import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Droplets,
  Leaf,
  ShieldCheck,
  Truck,
  Wallet,
} from "lucide-react";
import heroPads from "@/assets/hero-pads.jpg";
import heroDiapers from "@/assets/hero-diapers.jpg";
import { PRODUCT_IMAGE_VERSION } from "@/lib/site-config";

const values = [
  {
    icon: Droplets,
    title: "Premium absorption",
    text: "Soft & dry surface with a super-absorbent layer for dependable protection.",
  },
  {
    icon: Leaf,
    title: "Skin-friendly",
    text: "Cotton-soft, breathable, hypoallergenic and dermatologically tested for sensitive skin.",
  },
  {
    icon: Wallet,
    title: "Affordable pricing",
    text: "Honest prices for every Kenyan home, plus family packs and bulk options.",
  },
];

const trustItems = [
  { icon: BadgeCheck, label: "KEBS-compliant quality" },
  { icon: ShieldCheck, label: "Dermatologically tested" },
  { icon: Truck, label: "Discreet delivery" },
];

export default function HomePage() {
  return (
    <>
      <section aria-label="Shop Favor products" className="grid md:grid-cols-2">
        <div className="relative flex min-h-[35rem] flex-col justify-end overflow-hidden bg-ink p-6 pt-52 sm:p-8 sm:pt-56 md:min-h-[42rem] md:p-12 md:pt-56">
          <Image
            src={heroPads}
            alt="Confident young Kenyan woman laughing outdoors in Nairobi"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent" />
          <div className="relative z-10 ml-auto max-w-xl text-right">
            <span className="inline-block rounded-full bg-bloom px-3 py-1 text-base font-bold uppercase tracking-widest text-white">
              Favor Sanitary Pads
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Move like nothing is holding you back.
            </h2>
            <p className="mt-4 ml-auto max-w-lg text-lg text-white">
              Comfortable sanitary towels and heavy flow protection for girls and women across Kenya.
            </p>
            <Link
              href="/products#pads"
              className="button-primary mt-6"
            >
              Shop Pads
            </Link>
          </div>
        </div>

        <div className="relative flex min-h-[35rem] flex-col justify-end overflow-hidden bg-ink p-6 pt-52 sm:p-8 sm:pt-56 md:min-h-[42rem] md:p-12 md:pt-56">
          <Image
            src={heroDiapers}
            alt="Active elderly Kenyan couple walking together in a garden"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-transparent" />
          <div className="relative z-10 ml-auto max-w-xl text-right">
            <span className="inline-block rounded-full bg-calm px-3 py-1 text-base font-bold uppercase tracking-widest text-white">
              Favor Adult Diapers
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Dignity that stays dry, day and night.
            </h2>
            <p className="mt-4 ml-auto max-w-lg text-lg text-white">
              Soft & dry surface, super-absorbent layer, refasten tape, leak guard and wetness indicator.
            </p>
            <Link
              href="/products#diapers"
              className="button-teal mt-6"
            >
              Shop Diapers
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/40 px-5 py-6">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-5 md:grid-cols-4">
          {trustItems.map(({ icon: Icon, label }) => (
            <li key={label} className="flex min-w-0 flex-col items-center justify-center gap-2 text-center font-bold">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-bloom-soft text-bloom">
                <Icon size={24} aria-hidden="true" />
              </span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-spacing mx-auto max-w-4xl px-5 text-center">
        <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-6xl">
          Comfort, Confidence & Dignity <span className="text-bloom">Every Single Day.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Favor Forever Ltd is the name behind Favor Sanitary Pads and Favor Adult Diapers,
          hygiene that respects every body, every age, every day.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/products" className="button-primary">
            Explore Products
          </Link>
          <Link href="/where-to-buy" className="button-secondary">
            Find a Store
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 section-spacing">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-3xl font-extrabold md:text-4xl">Why choose Favor Forever</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="surface-card bg-background p-8">
                <span className="grid size-16 place-items-center rounded-full bg-bloom-soft text-bloom">
                  <v.icon size={48} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 section-spacing">
        <h2 className="text-center text-3xl font-extrabold md:text-4xl">Shop by need</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="surface-card overflow-hidden bg-bloom-soft">
            <Image
              src={`/images/products/pack-front.jpg?v=${PRODUCT_IMAGE_VERSION}`}
              alt="Favor Sanitary Pads Premium CottonSoft pack"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              className="h-64 w-full bg-white object-contain p-5"
            />
            <div className="p-8 md:p-10">
              <p className="font-bold uppercase tracking-widest text-bloom">SANITARY PADS KENYA</p>
              <h3 className="mt-3 text-3xl font-extrabold">Favor Sanitary Pads</h3>
              <p className="mt-3 text-lg text-foreground">
                Ultra-thin comfort with heavy-flow security, for worry-free movement.
              </p>
              <Link href="/products#pads" className="button-primary mt-6">
                Explore pads
              </Link>
            </div>
          </article>
          <article className="surface-card overflow-hidden bg-calm-soft">
            <Image
              src={`/images/products/adultdiaper-xlarge-whitebg.jpg?v=${PRODUCT_IMAGE_VERSION}`}
              alt="Favor Adult Diapers X-Large pack"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              className="h-64 w-full bg-white object-contain p-5"
            />
            <div className="p-8 md:p-10">
              <p className="font-bold uppercase tracking-widest text-calm">ADULT DIAPERS KENYA</p>
              <h3 className="mt-3 text-3xl font-extrabold">Favor Adult Diapers</h3>
              <p className="mt-3 text-lg text-foreground">
                Soft & dry surface, super-absorbent layer, refasten tape, leak guard and wetness indicator.
              </p>
              <Link href="/products#diapers" className="button-teal mt-6">
                Explore diapers
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
