"use client";

import { LegalPage, Section } from "@/components/site/LegalPage";
import { CONSENT_CATEGORIES, useConsent } from "@/lib/consent";

export default function CookiesPage() {
  const { openPreferences } = useConsent();
  return (
    <LegalPage
      title="Cookies Policy"
      intro="Cookies and similar storage are small files saved in your browser. We only use strictly necessary ones unless you choose to allow more."
    >
      <Section title="Cookie categories">
        <ul className="space-y-4">
          {CONSENT_CATEGORIES.map((c) => (
            <li key={c.id}>
              <strong>{c.name}.</strong> {c.description}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="What we store today">
        <ul className="list-disc space-y-1 pl-6">
          <li>favor-cookie-consent: remembers your cookie choice (necessary).</li>
          <li>theme: remembers light or dark mode (necessary).</li>
        </ul>
        <p>We currently run no analytics or advertising tools and embed no third-party maps or videos.</p>
      </Section>
      <Section title="Change your choice">
        <button
          type="button"
          onClick={openPreferences}
          className="min-h-11 rounded-full bg-bloom px-5 py-2.5 text-base font-bold text-bloom-foreground hover:opacity-90"
        >
          Open cookie choices
        </button>
      </Section>
    </LegalPage>
  );
}
