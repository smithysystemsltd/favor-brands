import Link from "next/link";
import { ShieldCheck, HeartHandshake, FlaskConical } from "lucide-react";
import { EditorialPhotoPlaceholder } from "@/components/site/ProductPlaceholder";

export default function AboutPage() {
  return (
    <>
      <section className="section-spacing mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="font-bold uppercase tracking-widest text-bloom">Our story</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Born in Kenya, for every generation of Kenyans.
            </h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Favor Forever Ltd began with two quiet conversations that no one wanted to have out
                loud. A schoolgirl in Kiambu missing three days of class every month. A son in
                Nairobi standing in a pharmacy aisle, whispering when asking where to buy adult
                diapers in Kenya.
              </p>
              <blockquote className="rounded-r-2xl border-l-4 border-bloom bg-bloom-soft p-5 text-xl font-bold leading-relaxed">
                Both were paying the same price: shame for something completely natural.
              </blockquote>
              <p>
                And both were choosing between imported products they could barely afford and local
                ones that simply did not perform.
              </p>
              <p>
                So we set one standard: world-class protection, priced fairly. Today Favor
                Sanitary Pads and Favor Adult Diapers are on shelves from Mombasa to Eldoret, and
                the conversations are getting louder, prouder and easier.
              </p>
            </div>
          </div>
          <EditorialPhotoPlaceholder label="Factory or team photo" />
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 section-spacing">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2">
          <div className="surface-card bg-bloom-soft p-8 sm:p-10">
            <h2 className="text-2xl font-extrabold">Our Mission</h2>
            <p className="mt-4 text-lg leading-relaxed">
              To provide comfort, dignity and superior hygiene protection to every generation.
            </p>
          </div>
          <div className="surface-card bg-calm-soft p-8 sm:p-10">
            <h2 className="text-2xl font-extrabold">Our Vision</h2>
            <p className="mt-4 text-lg leading-relaxed">
              To be the leading and most trusted personal care and hygiene brand in East Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 section-spacing">
        <h2 className="text-center text-3xl font-extrabold md:text-4xl">Our promise & quality guarantee</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-muted-foreground">
          Every Favor Sanitary Pad and Favor Adult Diaper carries the same guarantee: if it would
          not be good enough for our own mothers, sisters and daughters, it does not ship.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: FlaskConical,
              title: "Advanced core technology",
              text: "Ultra-absorbent polymer locks fluid into gel in seconds, so the surface stays dry and the fit stays slim, with no bunching, no bulk, no midnight panic.",
            },
            {
              icon: HeartHandshake,
              title: "Cotton-soft, breathable covers",
              text: "Air-permeable top sheets and soft-touch covers reduce heat, rashes and bedsores for people who wear protection for long hours.",
            },
            {
              icon: ShieldCheck,
              title: "Dermatologically tested",
              text: "Hypoallergenic, chlorine-free and fragrance-optional. Batch-tested to international hygiene standards and KEBS quality requirements.",
            },
          ].map((c) => (
            <div key={c.title} className="surface-card bg-background p-8">
              <span className="grid size-16 place-items-center rounded-full bg-calm-soft text-calm">
                <c.icon size={40} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/products" className="button-primary">
            Explore Products
          </Link>
        </div>
      </section>
    </>
  );
}