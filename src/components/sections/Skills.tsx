import { techStack } from "@/data/skills";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <MotionSection id="skills" className="border-t border-zinc-800/60 py-14">
      <SectionHeading eyebrow="Technologies" title="Tech Stack" />

      <div className="flex flex-wrap gap-2.5">
        {techStack.map((tech) => {
          const iconUrl = tech.color
            ? `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`
            : `https://cdn.simpleicons.org/${tech.slug}`;

          return (
            <div
              key={tech.name}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-800/90 bg-zinc-900/60 px-3.5 py-2 text-sm font-medium text-zinc-200 transition-all duration-150 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
            >
              <img
                src={iconUrl}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-4 w-4 shrink-0 object-contain"
              />
              <span>{tech.name}</span>
            </div>
          );
        })}
      </div>
    </MotionSection>
  );
}
