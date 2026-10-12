"use client";

import { useEffect, useRef, useState } from "react";
import { CONSENT_CATEGORIES, useConsent } from "@/lib/consent";

export function CookieConsent() {
  const { needsDecision, preferencesOpen, openPreferences, closePreferences, acceptAll, rejectAll } =
    useConsent();

  if (preferencesOpen) return <PreferencesDialog onClose={closePreferences} />;
  if (!needsDecision) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background p-5 shadow-[0_-8px_30px_-15px_rgba(0,0,0,0.25)]"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          We use strictly necessary cookies to run this site. We would also like to set analytics
          and marketing cookies, but only if you agree. Nothing optional is loaded until you choose.{" "}
          <a href="/cookies" className="font-semibold text-bloom underline">
            Read our Cookies Policy
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={rejectAll}
            className="min-h-11 rounded-full border border-input px-5 py-2.5 text-base font-bold text-foreground hover:bg-muted"
          >
            Reject optional
          </button>
          <button
            type="button"
            onClick={openPreferences}
            className="min-h-11 rounded-full border border-input px-5 py-2.5 text-base font-bold text-foreground hover:bg-muted"
          >
            Manage choices
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="min-h-11 rounded-full bg-bloom px-5 py-2.5 text-base font-bold text-bloom-foreground hover:opacity-90"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}

function PreferencesDialog({ onClose }: { onClose: () => void }) {
  const { consent, save, acceptAll, rejectAll } = useConsent();
  const [analytics, setAnalytics] = useState(consent?.analytics ?? false);
  const [marketing, setMarketing] = useState(consent?.marketing ?? false);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstFieldRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'button, input, [href], [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const toggles: Record<string, { value: boolean; set: (v: boolean) => void }> = {
    analytics: { value: analytics, set: setAnalytics },
    marketing: { value: marketing, set: setMarketing },
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/60 p-4 sm:items-center">
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-preferences-title"
        className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-background p-6 shadow-xl"
      >
        <h2 id="cookie-preferences-title" className="text-xl font-extrabold">
          Cookie choices
        </h2>
        <p className="mt-2 text-base text-muted-foreground">
          Choose which cookies we may use. You can change this at any time from the Cookie choices
          link in the footer.
        </p>

        <ul className="mt-6 space-y-4">
          {CONSENT_CATEGORIES.map((category, index) => {
            const toggle = toggles[category.id];
            const inputId = `consent-${category.id}`;
            return (
              <li key={category.id} className="rounded-2xl border border-border p-4">
                <div className="flex items-start justify-between gap-4">
                  <label htmlFor={inputId} className="font-bold">
                    {category.name}
                  </label>
                  <input
                    ref={index === 0 ? firstFieldRef : undefined}
                    id={inputId}
                    type="checkbox"
                    checked={category.locked ? true : (toggle?.value ?? false)}
                    disabled={category.locked}
                    onChange={(event) => toggle?.set(event.target.checked)}
                    aria-describedby={`${inputId}-description`}
                    className="mt-0.5 size-5 shrink-0 accent-[var(--bloom)]"
                  />
                </div>
                <p id={`${inputId}-description`} className="mt-2 text-base text-muted-foreground">
                  {category.description}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => save({ analytics, marketing })}
            className="min-h-11 rounded-full bg-bloom px-5 py-2.5 text-base font-bold text-bloom-foreground hover:opacity-90"
          >
            Save my choices
          </button>
          <button
            type="button"
            onClick={rejectAll}
            className="min-h-11 rounded-full border border-input px-5 py-2.5 text-base font-bold hover:bg-muted"
          >
            Reject optional
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="min-h-11 rounded-full border border-input px-5 py-2.5 text-base font-bold hover:bg-muted"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={onClose}
            className="min-h-11 rounded-full px-5 py-2.5 text-base font-bold text-muted-foreground hover:bg-muted"
          >
            Close
          </button>
        </div>

        <p className="mt-4 text-base text-muted-foreground">
          More detail in our{" "}
          <a href="/cookies" className="font-semibold text-bloom underline">
            Cookies Policy
          </a>{" "}
          and{" "}
          <a href="/privacy" className="font-semibold text-bloom underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
