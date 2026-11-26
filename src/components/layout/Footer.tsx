"use client";

import Link from "next/link";
import { ArrowUp, Github, Home, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function PeekingCat() {
  return (
    <svg
      viewBox="0 0 56 40"
      aria-hidden="true"
      className="h-12 w-16 transition-transform duration-300 hover:-translate-y-1"
      fill="none"
    >
      {/* Cat Head & Ears */}
      <path
        d="M8 40V14C8 8 10 4 12 4C15 4 18 10 21 12H35C38 10 41 4 44 4C46 4 48 8 48 14V40H8Z"
        fill="#f4f4f5"
      />
      {/* Left Eye */}
      <circle cx="20" cy="27" r="4.8" fill="#6b8e78" />
      <circle cx="20" cy="27" r="3.1" fill="#18181b" />
      <circle cx="19" cy="25.8" r="0.9" fill="#ffffff" />
      {/* Right Eye */}
      <circle cx="36" cy="27" r="4.8" fill="#6b8e78" />
      <circle cx="36" cy="27" r="3.1" fill="#18181b" />
      <circle cx="35" cy="25.8" r="0.9" fill="#ffffff" />
      {/* Nose */}
      <path d="M26.2 31.5H29.8L28 33.8L26.2 31.5Z" fill="#18181b" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  const githubUrl =
    profile.socials.find((s) => s.icon === "github")?.href ??
    "https://github.com";
  const xUrl =
    profile.socials.find((s) => s.icon === "twitter")?.href ?? "https://x.com";
  const linkedinUrl =
    profile.socials.find((s) => s.icon === "linkedin")?.href ??
    "https://linkedin.com";

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="relative mt-10 border-t border-zinc-800/60">
      <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        {/* Left: Copyright & Tagline */}
        <div className="space-y-1.5 text-center font-mono text-xs sm:text-left">
          <p className="text-zinc-300">
            © {year} {profile.name}
          </p>
          <p className="text-zinc-400">
            Built with love ♡, music ♫ &amp; coffee ☕
          </p>
        </div>

        {/* Right: Peeking Cat + 4 Rounded-Square Icon Boxes */}
        <div className="relative flex items-center gap-2">
          {/* Peeking Cat sitting on top of footer border */}
          <div className="pointer-events-auto absolute -top-[88px] left-1/2 -translate-x-1/2 sm:-top-[88px]">
            <PeekingCat />
          </div>

          <Link
            href="/"
            aria-label="Home"
            title="Home"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800/90 bg-zinc-900/30 text-zinc-400 transition-colors hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-100"
          >
            <Home className="h-4 w-4" />
          </Link>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800/90 bg-zinc-900/30 text-zinc-400 transition-colors hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-100"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href={xUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            title="X"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800/90 bg-zinc-900/30 text-zinc-400 transition-colors hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-100"
          >
            <XIcon />
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800/90 bg-zinc-900/30 text-zinc-400 transition-colors hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-100"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Far-right Scroll to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
        className="absolute right-6 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-600/80 bg-zinc-950/90 text-zinc-200 transition-colors hover:border-zinc-400 hover:text-white lg:flex"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </footer>
  );
}
