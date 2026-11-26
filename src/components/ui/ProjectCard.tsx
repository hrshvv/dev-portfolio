import Link from "next/link";
import { ArrowRight, Github, Globe } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const TECH_SHORT: Record<string, { label: string; color: string }> = {
  TypeScript: { label: "TS", color: "text-sky-400" },
  "Next.js": { label: "N", color: "text-zinc-100" },
  React: { label: "⚛", color: "text-cyan-400" },
  "Node.js": { label: "JS", color: "text-emerald-400" },
  PostgreSQL: { label: "PG", color: "text-blue-400" },
  NestJS: { label: "NJS", color: "text-rose-400" },
  Docker: { label: "🐳", color: "text-sky-400" },
  "Vector Search": { label: "VS", color: "text-violet-400" },
  "Tailwind CSS": { label: "TW", color: "text-teal-400" },
  Python: { label: "PY", color: "text-amber-300" },
  FastAPI: { label: "FA", color: "text-emerald-400" },
  Redis: { label: "RD", color: "text-red-400" },
  "Scikit-Learn": { label: "SK", color: "text-orange-400" },
  NLP: { label: "NL", color: "text-indigo-400" },
  Flask: { label: "FL", color: "text-zinc-300" },
};

export function ProjectCard({ project }: ProjectCardProps) {
  const statusDotClass =
    project.statusColor === "emerald" ? "bg-emerald-500" : "bg-amber-400";

  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-zinc-800/90 bg-zinc-900/35 p-4 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/65">
      <div>
        {/* Top Preview Frame */}
        <Link
          href={`/projects/${project.slug}`}
          className="relative mb-4 block aspect-[16/10] w-full overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full flex-col justify-between bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_55%)] p-3.5">
              {/* Mini Window Header */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-zinc-700" />
                  <span className="h-2 w-2 rounded-full bg-zinc-700" />
                  <span className="h-2 w-2 rounded-full bg-zinc-700" />
                </div>
                <span className="rounded bg-zinc-900 px-2 py-0.5 font-mono text-[10px] text-zinc-400">
                  {project.year}
                </span>
              </div>

              {/* Mini Preview Body */}
              <div className="my-auto space-y-2 px-1 text-center">
                <p className="text-sm font-semibold tracking-tight text-zinc-100 sm:text-base">
                  {project.tagline}
                </p>
                <div className="mx-auto flex max-w-[220px] items-center justify-center gap-1.5 pt-1">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-zinc-800 bg-zinc-900/90 px-2 py-0.5 font-mono text-[10px] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mini Bottom Bar */}
              <div className="grid grid-cols-3 gap-2">
                <div className="h-5 rounded-md border border-zinc-800/70 bg-zinc-900/60" />
                <div className="h-5 rounded-md border border-zinc-800/70 bg-zinc-900/60" />
                <div className="h-5 rounded-md border border-zinc-800/70 bg-zinc-900/60" />
              </div>
            </div>
          )}
        </Link>

        {/* Category Label */}
        <p className="text-xs text-zinc-500">
          {project.category ?? (project.featured ? "Featured project" : "Project")}
        </p>

        {/* Title + Status Dot + Links */}
        <div className="mt-1 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <h3 className="truncate text-lg font-semibold text-zinc-100 transition-colors group-hover:text-white">
              {project.title}
            </h3>
            <span
              aria-hidden="true"
              className={`h-2 w-2 shrink-0 rounded-full ${statusDotClass}`}
            />
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live site`}
                className="rounded-md p-1.5 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
              >
                <Globe className="h-4 w-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="rounded-md p-1.5 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>
      </div>

      {/* Bottom Technologies + View Details */}
      <div className="mt-5 pt-1">
        <p className="mb-2.5 text-xs font-medium text-zinc-500">
          Technologies
        </p>
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.techStack.slice(0, 5).map((tech) => {
              const badge = TECH_SHORT[tech];
              return (
                <span
                  key={tech}
                  title={tech}
                  className={`inline-flex h-8 min-w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/70 px-2 font-mono text-[11px] font-semibold ${
                    badge?.color ?? "text-zinc-300"
                  }`}
                >
                  {badge?.label ?? tech.slice(0, 2).toUpperCase()}
                </span>
              );
            })}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
          >
            <span>View Details</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
