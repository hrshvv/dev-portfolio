import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name} — ${profile.role}.`,
};

export default function AboutPage() {
  return (
    <div className="py-14 sm:py-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 transition-colors hover:text-zinc-100"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>Back home</span>
      </Link>

      <div className="mb-10 space-y-2">
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          About
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
          What I Do
        </h1>
      </div>

      <div className="space-y-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
        {profile.aboutParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {profile.pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-5"
          >
            <h2 className="text-sm font-semibold text-zinc-100">
              {pillar.title}
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-zinc-400">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
