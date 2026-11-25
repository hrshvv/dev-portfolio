import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Full archive of software engineering projects and tools.",
};

export default function ProjectsPage() {
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
          Archive
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
          All Projects
        </h1>
        <p className="text-sm text-zinc-400">
          A complete list of applications, developer tools, and experiments.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
