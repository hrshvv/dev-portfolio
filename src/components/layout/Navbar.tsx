"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const pathname = usePathname();

  function handleConnectClick(e: MouseEvent<HTMLAnchorElement>) {
    setMobileOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6"
      >
        <Link
          href="/"
          className="font-mono text-base font-bold tracking-tight text-zinc-100 transition-colors hover:text-white"
        >
          {profile.brand}
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "font-medium text-zinc-100"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-2.5">
            <Link
              href="/#contact"
              onClick={handleConnectClick}
              className="rounded-full border border-zinc-800 bg-zinc-900 px-3.5 py-1.5 font-mono text-xs text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-800"
            >
              Connect
            </Link>

            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              aria-label="Toggle theme"
              title="Toggle theme"
              className="rounded-full border border-zinc-800 bg-zinc-900/70 p-2 text-zinc-400 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-zinc-100"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            aria-label="Toggle theme"
            title="Toggle theme"
            className="rounded-md border border-zinc-800 bg-zinc-900/70 p-1.5 text-zinc-400 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-zinc-100"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="rounded-md p-1.5 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-zinc-800/60 bg-zinc-950 px-6 py-4 md:hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "font-medium text-white"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={handleConnectClick}
              className="w-fit rounded-full border border-zinc-800 bg-zinc-900 px-3.5 py-1.5 font-mono text-xs text-zinc-200"
            >
              Connect
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
