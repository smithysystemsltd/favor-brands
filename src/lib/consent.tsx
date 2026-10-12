import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type ConsentCategory = "necessary" | "analytics" | "marketing";

export interface ConsentState {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  /** ISO timestamp of the moment the visitor made the choice. */
  decidedAt: string;
  /** Bump when the cookie list changes so visitors are asked again. */
  version: number;
}

export const CONSENT_VERSION = 1;
const STORAGE_KEY = "favor-cookie-consent";
const CONSENT_EVENT = "favor-cookie-consent-change";
let transientConsent: string | null = null;
let storageUnavailable = false;

interface ConsentContextValue {
  /** null until the visitor has made a choice (or while SSR / before hydration). */
  consent: ConsentState | null;
  /** True when the banner should be shown. */
  needsDecision: boolean;
  /** True when the preferences panel is open. */
  preferencesOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  save: (choice: { analytics: boolean; marketing: boolean }) => void;
  /** Gate for any non-essential script or embed. */
  hasConsent: (category: ConsentCategory) => boolean;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

function getConsentSnapshot(): string | null {
  if (storageUnavailable) return transientConsent;
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return transientConsent;
  }
}

function subscribeToConsent(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CONSENT_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CONSENT_EVENT, onChange);
  };
}

function getServerConsentSnapshot(): null {
  return null;
}

function subscribeToHydration() {
  return () => {};
}

function getClientHydrationSnapshot() {
  return true;
}

function getServerHydrationSnapshot() {
  return false;
}

function parseConsent(raw: string | null): ConsentState | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (parsed.version !== CONSENT_VERSION) return null;
    return {
      necessary: true,
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
      decidedAt: typeof parsed.decidedAt === "string" ? parsed.decidedAt : new Date().toISOString(),
      version: CONSENT_VERSION,
    };
  } catch {
    return null;
  }
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const consentRaw = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const consent = useMemo(() => parseConsent(consentRaw), [consentRaw]);
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    getClientHydrationSnapshot,
    getServerHydrationSnapshot,
  );
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  const persist = useCallback((choice: { analytics: boolean; marketing: boolean }) => {
    const next: ConsentState = {
      necessary: true,
      analytics: choice.analytics,
      marketing: choice.marketing,
      decidedAt: new Date().toISOString(),
      version: CONSENT_VERSION,
    };
    transientConsent = JSON.stringify(next);
    setPreferencesOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, transientConsent);
      storageUnavailable = false;
    } catch {
      storageUnavailable = true;
      /* storage unavailable (private mode): choice applies for this visit only */
    }
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      needsDecision: hydrated && consent === null,
      preferencesOpen,
      openPreferences: () => setPreferencesOpen(true),
      closePreferences: () => setPreferencesOpen(false),
      acceptAll: () => persist({ analytics: true, marketing: true }),
      rejectAll: () => persist({ analytics: false, marketing: false }),
      save: persist,
      hasConsent: (category) => {
        if (category === "necessary") return true;
        return consent?.[category] === true;
      },
    }),
    [consent, hydrated, persist, preferencesOpen],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used inside <ConsentProvider>");
  return ctx;
}

/**
 * Gate for non-essential scripts and third-party embeds.
 *
 * Usage:
 *   const { hasConsent } = useConsent();
 *   useEffect(() => {
 *     if (!hasConsent("analytics")) return;
 *     // inject the analytics script here, never at module scope
 *   }, [hasConsent]);
 */
export const CONSENT_CATEGORIES: {
  id: ConsentCategory;
  name: string;
  description: string;
  locked?: boolean;
}[] = [
  {
    id: "necessary",
    name: "Strictly necessary",
    description:
      "Needed for the site to work: page navigation, security, your light or dark theme choice and remembering this cookie decision. These cannot be switched off.",
    locked: true,
  },
  {
    id: "analytics",
    name: "Analytics",
    description:
      "Help us understand which pages are useful so we can improve them. No analytics cookies are set unless you allow them here.",
  },
  {
    id: "marketing",
    name: "Marketing",
    description:
      "Used to measure and personalise adverts and social media content. Off unless you allow them here.",
  },
];
