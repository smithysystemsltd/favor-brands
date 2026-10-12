"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const storageKey = "favorbrands-theme";
const colorSchemeQuery = "(prefers-color-scheme: dark)";

function readTheme(): Theme {
  if (typeof window === "undefined") return "system";
  try {
    const saved = window.localStorage.getItem(storageKey);
    return saved === "light" || saved === "dark" || saved === "system" ? saved : "system";
  } catch {
    return "system";
  }
}

function subscribeToColorScheme(onChange: () => void) {
  const media = window.matchMedia(colorSchemeQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getColorSchemeSnapshot(): "light" | "dark" {
  return window.matchMedia(colorSchemeQuery).matches ? "dark" : "light";
}

function getServerColorSchemeSnapshot(): "light" | "dark" {
  return "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readTheme);
  const systemTheme = useSyncExternalStore(
    subscribeToColorScheme,
    getColorSchemeSnapshot,
    getServerColorSchemeSnapshot,
  );
  const resolvedTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    document.documentElement.classList.toggle("light", resolvedTheme === "light");
  }, [resolvedTheme]);

  const setTheme = (next: Theme) => {
    setThemeState(next);
    window.localStorage.setItem(storageKey, next);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
