import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { certifications } from "@/data/certifications";
import { CertificationCard } from "@/components/ui/CertificationCard";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Verified technical certifications, courses, and professional credentials.",
};

export default function CertificationsPage() {
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
          Credentials
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
          All Certifications
        </h1>
        <p className="text-sm text-zinc-400">
          Verified certifications and professional credentials across cloud,
          backend, and software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {certifications.map((cert) => (
          <CertificationCard key={cert.title} cert={cert} />
        ))}
      </div>
    </div>
  );
}
