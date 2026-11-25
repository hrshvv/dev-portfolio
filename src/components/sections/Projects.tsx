import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { MotionSection } from "@/components/ui/MotionSection";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <MotionSection id="projects" className="border-t border-zinc-800/60 py-16">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading
          eyebrow="03 / Projects"
          title="Featured Work"
          description="Selected systems, developer tools, and full-stack applications I've built."
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {projects.length > featuredProjects.length && (
        <div className="mt-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <span>View all projects</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </MotionSection>
  );
}
