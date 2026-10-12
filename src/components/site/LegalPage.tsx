import type { ReactNode } from "react";
import { CONTACT } from "@/lib/site-config";

export const LEGAL_UPDATED = "8 October 2026";

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <article className="section-spacing mx-auto max-w-3xl px-5">
      <h1 className="text-center text-4xl font-extrabold md:text-5xl">{title}</h1>
      <p className="mt-3 text-center text-muted-foreground">Last updated: {LEGAL_UPDATED}</p>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{intro}</p>
      <div className="legal-body mt-10 space-y-8">{children}</div>
      <p className="surface-card mt-12 bg-muted/40 p-5 text-muted-foreground">
        Questions about this policy? Email{" "}
        <a href={`mailto:${CONTACT.email}`} className="font-semibold text-bloom underline">
          {CONTACT.email}
        </a>{" "}
        or call{" "}
        <a href={`tel:${CONTACT.phoneLink}`} className="font-semibold text-bloom underline">
          {CONTACT.phone}
        </a>
        .
      </p>
    </article>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-foreground/85">{children}</div>
    </section>
  );
}
