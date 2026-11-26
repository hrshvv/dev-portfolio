import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience, engineering roles, and technical impact.",
};

export default function ExperiencePage() {
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
          Career
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
          Work Experience
        </h1>
        <p className="text-sm text-zinc-400">
          Roles, engineering responsibilities, and systems built.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.period}`}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-6"
          >
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <div>
                <h2 className="text-base font-semibold text-zinc-100">
                  {exp.company}
                </h2>
                <p className="text-sm text-zinc-400">{exp.role}</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="font-mono text-xs text-zinc-400">{exp.period}</p>
                <p className="text-xs text-zinc-500">{exp.location}</p>
              </div>
            </div>

            <div className="mt-5">
              <p className="mb-2.5 text-xs font-semibold text-zinc-200">
                What I&apos;ve done
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-zinc-400">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {exp.techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
