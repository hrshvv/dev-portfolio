import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <div className="py-14 sm:py-16">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 transition-colors hover:text-zinc-100"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>Back to projects</span>
      </Link>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
          <span>{project.category ?? "Project"}</span>
          <span>•</span>
          <span className="font-mono">{project.year}</span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
          {project.title}
        </h1>
        <p className="text-base text-zinc-300">{project.tagline}</p>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-100 px-3.5 py-2 text-xs font-medium text-zinc-950 transition-colors hover:bg-white"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/70 px-3.5 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-800"
            >
              <Github className="h-3.5 w-3.5" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>

      <div className="mt-10 border-t border-zinc-800/60 pt-8">
        <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
          Technologies
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
