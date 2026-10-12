import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Truck, Building2 } from "lucide-react";
import { CONTACT } from "@/lib/site-config";

const retailers: { name: string; type: string; logo?: string }[] = [
  { name: "Magunas", type: "Supermarket" },
  { name: "Kamindi", type: "Supermarket" },
  { name: "Fairmatt", type: "Supermarket" },
  { name: "Ciene", type: "Supermarket" },
  { name: "County", type: "Supermarket" },
  { name: "Kanini Haraka", type: "Wholesaler" },
  { name: "Juja Ecomatt", type: "Supermarket" },
  { name: "Awale Pharmacy", type: "Pharmacy" },
  { name: "Powerstar", type: "Supermarket" },
  { name: "Karia", type: "Supermarket" },
  { name: "Laxmi Wholesalers", type: "Wholesaler" },
  { name: "Kassmatt", type: "Supermarket" },

];

const online = [
  { name: "Jumia Kenya", text: "Full range, countrywide delivery in 1–3 days." },
  { name: "Glovo", text: "Same-hour delivery from partner supermarkets in Nairobi." },
  { name: "Copia", text: "Order through your local Copia agent, even upcountry." },
];

export default function WhereToBuyPage() {
  return (
    <>
      <section className="section-spacing mx-auto max-w-6xl px-5">
        <h1 className="mx-auto max-w-3xl text-center text-4xl font-extrabold leading-tight md:text-5xl">
          Where to buy Favor Brands in Kenya.
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-muted-foreground">
          Favor Sanitary Pads and Favor Adult Diapers are stocked in supermarkets and pharmacies
          nationwide, sold online, and delivered discreetly to your door in Nairobi, Mombasa,
          Kisumu, Nakuru and Eldoret.
        </p>

        <h2 className="mt-10 text-center text-2xl font-extrabold">Supermarkets & pharmacies</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {retailers.map((r) => (
            <div
              key={r.name}
              className="surface-card flex min-h-40 flex-col items-center justify-center bg-background p-6 text-center"
            >
              {r.logo ? (
                <Image
                  src={r.logo}
                  alt={`${r.name} logo`}
                  width={160}
                  height={96}
                  className="mb-3 h-16 w-32 object-contain"
                />
              ) : null}
              <span className="font-display text-xl font-bold">{r.name}</span>
              <span className="mt-1 uppercase tracking-widest text-muted-foreground">
                {r.type}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 section-spacing">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-2xl font-extrabold">Order online, delivered discreetly</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-muted-foreground">
            Every online order ships in plain, unbranded outer packaging. No labels, no questions,
            no awkward moments at the gate.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {online.map((o) => (
              <div key={o.name} className="surface-card bg-background p-8">
                <Truck className="text-calm" size={32} aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">{o.name}</h3>
                <p className="mt-2 text-base text-muted-foreground">{o.text}</p>
              </div>
            ))}
          </div>

          <div className="surface-card mt-8 flex flex-col items-start gap-5 bg-calm-soft p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-extrabold">Order straight on WhatsApp</h3>
              <p className="mt-2 max-w-xl text-base">
                Send us your order and location on {CONTACT.phone}. Same-day discreet delivery
                across Nairobi, next-day countrywide. Pay on delivery or via M-Pesa.
              </p>
            </div>
            <a
              href={`https://wa.me/${CONTACT.whatsappNumber}`}
              className="button-teal gap-2 whitespace-nowrap"
            >
              <MessageCircle size={20} aria-hidden="true" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-spacing mx-auto max-w-6xl px-5">
        <div className="surface-card flex flex-col items-start gap-6 bg-bloom-soft p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Building2 className="text-bloom" size={32} aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-extrabold">Wholesale & distribution</h2>
            <p className="mt-2 max-w-xl text-base">
              Hospitals, clinics, care homes, schools, NGOs and retailers: get factory-direct
              pricing, reliable stock and dedicated account support from our Nairobi facility.
            </p>
          </div>
          <Link
            href="/contact"
            className="button-primary whitespace-nowrap"
          >
            Become a Distributor
          </Link>
        </div>
      </section>
    </>
  );
}