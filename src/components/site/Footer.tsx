"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail } from "lucide-react";
import { useState, type ComponentType, type FormEvent } from "react";
import { CONTACT, SOCIAL_LINKS } from "@/lib/site-config";
import { useConsent } from "@/lib/consent";

const socialItems: {
  name: string;
  href: string | null;
  Icon: ComponentType<{ size?: number }>;
}[] = [
  { name: "X", href: SOCIAL_LINKS.x, Icon: XIcon },
  { name: "Instagram", href: SOCIAL_LINKS.instagram, Icon: Instagram },
  { name: "Facebook", href: SOCIAL_LINKS.facebook, Icon: Facebook },
];

function XIcon({ size = 24 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-7.4L5.5 22H2.4l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const { openPreferences } = useConsent();

  function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || !event.currentTarget.checkValidity()) {
      setStatus({ type: "error", message: "Enter a valid email address to continue." });
      return;
    }

    setStatus({
      type: "success",
      message: "Thanks for your interest! Newsletter sign-ups will be available soon.",
    });
    setEmail("");
  }

  const availableSocialLinks = socialItems.filter(
    (item): item is (typeof socialItems)[number] & { href: string } =>
      typeof item.href === "string" && item.href.startsWith("https://"),
  );

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold">Join the Favor Forever family</h2>
            <p className="mt-2 max-w-lg text-base text-muted-foreground">
              Period care tips, product updates and news from Favor Forever Ltd.
            </p>
            <form
              className="mt-4 flex max-w-lg flex-col gap-3 sm:flex-row"
              onSubmit={handleNewsletterSubmit}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onInvalid={() =>
                  setStatus({ type: "error", message: "Enter a valid email address to continue." })
                }
                onChange={(event) => {
                  setEmail(event.target.value);
                  setStatus(null);
                }}
                placeholder="you@example.com"
                className="min-h-11 min-w-0 flex-1 rounded-full border-2 border-input bg-background px-4 py-2.5 text-base outline-none focus-visible:border-bloom focus-visible:ring-2 focus-visible:ring-bloom/30"
              />
              <button type="submit" className="button-primary min-w-36 whitespace-nowrap">
                Sign up
              </button>
            </form>
            <p
              id="newsletter-status"
              role={status?.type === "error" ? "alert" : "status"}
              aria-live="polite"
              className={`mt-2 min-h-6 text-base ${
                status?.type === "error" ? "text-error" : "text-success"
              }`}
            >
              {status?.message}
            </p>
            <p className="text-base text-muted-foreground">
              We’ll only use your email for updates. Read our{" "}
              <Link
                href="/privacy"
                className="inline-flex min-h-11 items-center font-semibold text-bloom underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-widest text-muted-foreground">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="inline-flex min-h-11 items-center hover:text-bloom">About Us</Link></li>
              <li><Link href="/products" className="inline-flex min-h-11 items-center hover:text-bloom">Products</Link></li>
              <li><Link href="/where-to-buy" className="inline-flex min-h-11 items-center hover:text-bloom">Find a Store</Link></li>
              <li><Link href="/contact" className="inline-flex min-h-11 items-center hover:text-bloom">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-widest text-muted-foreground">
              Talk to us
            </h3>
            <ul className="mt-4 space-y-2">
              <li><a href={`tel:${CONTACT.phoneLink}`} className="inline-flex min-h-11 items-center hover:text-bloom">{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.email}`} className="inline-flex min-h-11 items-center break-all hover:text-bloom">{CONTACT.email}</a></li>
              <li>{CONTACT.address}</li>
              <li>{CONTACT.hours}</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2" aria-label="Social media">
              <a
                href={`mailto:${CONTACT.email}`}
                aria-label={`Email ${CONTACT.email}`}
                className="grid min-h-11 min-w-11 place-items-center rounded-full border border-border text-foreground hover:bg-background hover:text-bloom"
              >
                <Mail size={24} aria-hidden="true" />
              </a>
              {availableSocialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={`Visit Favor Brands on ${name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="grid min-h-11 min-w-11 place-items-center rounded-full border border-border text-foreground hover:bg-background hover:text-bloom"
                >
                  <Icon size={24} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 border-t border-border pt-6 text-base leading-relaxed text-muted-foreground">
          Favor Forever Ltd makes sanitary pads and adult diapers designed for comfort, confidence
          and dignity across Kenya.
        </p>
        <nav aria-label="Legal" className="mt-6 flex flex-wrap gap-x-5 gap-y-3 font-semibold">
          <Link href="/privacy" className="inline-flex min-h-11 items-center hover:text-bloom">Privacy Policy</Link>
          <Link href="/terms" className="inline-flex min-h-11 items-center hover:text-bloom">Terms & Conditions</Link>
          <Link href="/refund-policy" className="inline-flex min-h-11 items-center hover:text-bloom">Refund Policy</Link>
          <Link href="/cookies" className="inline-flex min-h-11 items-center hover:text-bloom">Cookies Policy</Link>
          <button type="button" onClick={openPreferences} className="min-h-11 font-semibold hover:text-bloom">
            Cookie choices
          </button>
        </nav>
        <p className="mt-5 text-base text-muted-foreground">
          © {new Date().getFullYear()} Favor Forever Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
