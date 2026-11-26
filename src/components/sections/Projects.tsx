import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { MotionSection } from "@/components/ui/MotionSection";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <MotionSection id="projects" className="border-t border-zinc-800/60 py-16">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Featured"
          title="Projects"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {projects.length > featuredProjects.length && (
        <div className="mt-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2 font-mono text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
          >
            <span>See more projects</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </MotionSection>
  );
}
