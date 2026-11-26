import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { certifications } from "@/data/certifications";
import { CertificationCard } from "@/components/ui/CertificationCard";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  const previewCerts = certifications.slice(0, 2);

  return (
    <MotionSection
      id="certifications"
      className="border-t border-zinc-800/60 py-14"
    >
      <SectionHeading eyebrow="Credentials" title="Certifications" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {previewCerts.map((cert) => (
          <CertificationCard key={cert.title} cert={cert} />
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/certifications"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 transition-colors hover:text-zinc-100"
        >
          <span>See more certifications</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </MotionSection>
  );
}
