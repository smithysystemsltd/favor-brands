"use client";

import { useState } from "react";
import { ChevronDown, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site-config";

const faqs = [
  {
    q: "Do you offer bulk discounts?",
    a: "Yes. Hospitals, clinics, care homes, schools, NGOs and retailers get factory-direct wholesale pricing. Choose 'Wholesale' in the form above or WhatsApp us and our trade team will send a full price list within one working day.",
  },
  {
    q: "Are your products safe for sensitive skin?",
    a: "Every Favor Forever pad and diaper is dermatologically tested, hypoallergenic and chlorine-free, with breathable cotton-soft covers. Fragrance-free options are available for anyone prone to irritation.",
  },
  {
    q: "Where can I buy adult diapers in Kenya?",
    a: "You'll find us in Kamindi, Magunas, Kanini Haraka, Juja Ecomatt, Awale Pharmacy, Powerstar and Karia, on Jumia, Glovo and Copia, or you can order directly on WhatsApp for discreet home delivery.",
  },
  {
    q: "Is delivery discreet?",
    a: "Always. Direct orders ship in plain, unbranded outer packaging, and our riders are briefed never to announce the contents of a delivery.",
  },
];

export default function ContactPage() {
  const [subject, setSubject] = useState("General Inquiry");
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(
    null,
  );

  return (
    <>
      <section className="section-spacing bg-gradient-to-br from-bloom via-bloom to-calm px-5 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-3xl text-4xl font-extrabold text-white md:text-5xl">
            We&apos;re here, and we&apos;re happy to talk.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white">
            Orders, wholesale, or just a question about the right fit, our Nairobi team responds
            fast.
          </p>
        </div>
      </section>

      <section className="section-spacing mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1.2fr_1fr]">
        <form
          className="surface-card bg-background p-5 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            if (!e.currentTarget.checkValidity()) {
              setStatus({
                type: "error",
                message: "Please check the highlighted fields and try again.",
              });
              e.currentTarget.reportValidity();
              return;
            }
            e.currentTarget.reset();
            setSubject("General Inquiry");
            setStatus({
              type: "success",
              message: "Asante! We’ll get back to you within one working day.",
            });
          }}
          onInvalidCapture={() =>
            setStatus({ type: "error", message: "Please complete the required fields." })
          }
        >
          <h2 className="text-center text-2xl font-extrabold">Send us a message</h2>
          <p className="mt-2 text-muted-foreground">
            Fields marked required must be completed before you send your message.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="font-semibold">
              Name
              <input
                required
                name="name"
                autoComplete="name"
                className="mt-1.5 min-h-11 w-full rounded-xl border-2 border-input bg-background px-4 py-2.5 font-normal outline-none focus-visible:border-bloom focus-visible:ring-2 focus-visible:ring-bloom/30"
              />
            </label>
            <label className="font-semibold">
              Phone
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                className="mt-1.5 min-h-11 w-full rounded-xl border-2 border-input bg-background px-4 py-2.5 font-normal outline-none focus-visible:border-bloom focus-visible:ring-2 focus-visible:ring-bloom/30"
              />
            </label>
          </div>
          <label className="mt-4 block font-semibold">
            Email
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              className="mt-1.5 min-h-11 w-full rounded-xl border-2 border-input bg-background px-4 py-2.5 font-normal outline-none focus-visible:border-bloom focus-visible:ring-2 focus-visible:ring-bloom/30"
            />
          </label>
          <label className="mt-4 block font-semibold">
            Subject
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              name="subject"
              className="mt-1.5 min-h-11 w-full rounded-xl border-2 border-input bg-background px-4 py-2.5 font-normal outline-none focus-visible:border-bloom focus-visible:ring-2 focus-visible:ring-bloom/30"
            >
              <option>General Inquiry</option>
              <option>Wholesale / Distribution</option>
              <option>Feedback</option>
            </select>
          </label>
          <label className="mt-4 block font-semibold">
            Message
            <textarea
              required
              rows={5}
              name="message"
              className="mt-1.5 w-full rounded-xl border-2 border-input bg-background px-4 py-3 font-normal outline-none focus-visible:border-bloom focus-visible:ring-2 focus-visible:ring-bloom/30"
            />
          </label>
          <button type="submit" className="button-primary mt-6 w-full">
            Send Message
          </button>
          <p
            id="contact-status"
            role={status?.type === "error" ? "alert" : "status"}
            aria-live="polite"
            className={`mt-4 min-h-6 ${status?.type === "error" ? "text-error" : "text-success"}`}
          >
            {status?.message}
          </p>
        </form>

        <div className="space-y-4">
          {[
            {
              icon: Phone,
              label: "Call us",
              value: CONTACT.phone,
              href: `tel:${CONTACT.phoneLink}`,
            },
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: CONTACT.phone,
              href: `https://wa.me/${CONTACT.whatsappNumber}`,
            },
            {
              icon: Mail,
              label: "Email",
              value: CONTACT.email,
              href: `mailto:${CONTACT.email}`,
            },
            { icon: MapPin, label: "Location", value: CONTACT.address },
            {
              icon: Clock,
              label: "Business hours",
              value: CONTACT.hours,
            },
          ].map((c) => (
            <div key={c.label} className="surface-card flex gap-4 bg-muted/50 p-5 sm:p-6">
              <c.icon className="mt-1 shrink-0 text-calm" size={24} aria-hidden="true" />
              <div>
                <p className="font-bold uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </p>
                {c.href ? (
                  <a href={c.href} className="mt-1 inline-block min-h-11 break-all py-2 font-semibold text-bloom underline">
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-1">{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-spacing mx-auto max-w-3xl px-5">
        <h2 className="text-center text-3xl font-extrabold">Frequently asked questions</h2>
        <div className="surface-card mt-6 divide-y divide-border bg-background px-5">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item border-border py-4">
              <summary className="faq-trigger flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-2 font-bold">
                {f.q}
                <ChevronDown aria-hidden="true" className="faq-chevron shrink-0 text-bloom" size={24} />
              </summary>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}