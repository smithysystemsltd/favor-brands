"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import favorLogo from "@/assets/favor-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex min-h-11 items-center gap-2" onClick={() => setOpen(false)}>
          <Image src={favorLogo} alt="Favor Brands" width={290} height={71} className="h-9 w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-4 xl:gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              aria-current={pathname === l.to ? "page" : undefined}
              className={`inline-flex min-h-11 items-center whitespace-nowrap text-base font-semibold transition-colors hover:text-bloom ${
                pathname === l.to ? "text-bloom" : "text-foreground/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/where-to-buy"
            className="button-primary whitespace-nowrap"
          >
            Find a Store
          </Link>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="grid min-h-11 min-w-11 place-items-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="flex flex-col gap-1 border-t border-border/60 px-5 pb-5 pt-2 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              onClick={() => setOpen(false)}
              aria-current={pathname === l.to ? "page" : undefined}
              className={`rounded-lg px-2 py-3 text-base font-semibold hover:bg-muted ${
                pathname === l.to ? "text-bloom" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/where-to-buy"
            onClick={() => setOpen(false)}
            className="button-primary mx-2 mt-2 whitespace-nowrap"
          >
            Find a Store
          </Link>
        </nav>
      )}
    </header>
  );
}