"use client";

import type { ReactNode } from "react";
import { ConsentProvider } from "@/lib/consent";

export function Providers({ children }: { children: ReactNode }) {
  return <ConsentProvider>{children}</ConsentProvider>;
}
