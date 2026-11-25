import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/Badge";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <MotionSection id="skills" className="border-t border-zinc-800/60 py-16">
      <SectionHeading
        eyebrow="04 / Skills"
        title="Tech Stack"
        description="Languages, frameworks, and infrastructure tools I use regularly."
      />

      <div className="space-y-5">
        {skillCategories.map((group) => (
          <div
            key={group.category}
            className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6"
          >
            <span className="w-40 shrink-0 font-mono text-xs text-zinc-500">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
