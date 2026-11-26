import Image from "next/image";
import { ArrowUpRight, Award } from "lucide-react";
import type { Certification } from "@/data/certifications";

interface CertificationCardProps {
  cert: Certification;
}

export function CertificationCard({ cert }: CertificationCardProps) {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/20 transition-colors hover:border-zinc-700 hover:bg-zinc-900/40">
      {cert.image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-zinc-800/70 bg-zinc-950">
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/80 text-zinc-300">
              <Award className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">
                {cert.title}
              </h3>
              <p className="mt-0.5 text-xs text-zinc-400">{cert.issuer}</p>
            </div>
          </div>

          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verify ${cert.title}`}
              className="rounded-md p-1 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-zinc-500">
          <span>{cert.date}</span>
          {cert.credentialId && <span>ID: {cert.credentialId}</span>}
        </div>
      </div>
    </div>
  );
}
