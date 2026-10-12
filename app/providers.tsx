"use client";

import type { ReactNode } from "react";
import { ConsentProvider } from "@/lib/consent";
import { ThemeProvider } from "@/components/site/ThemeProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ConsentProvider>{children}</ConsentProvider>
    </ThemeProvider>
  );
}
