import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <MotionSection
      id="experience"
      className="border-t border-zinc-800/60 py-16"
    >
      <SectionHeading eyebrow="03 / Experience" title="Work History" />

      <div className="relative space-y-10 border-l border-zinc-800 pl-6">
        {experiences.map((exp) => (
          <div key={`${exp.company}-${exp.period}`} className="relative">
            {/* Timeline Node */}
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border border-zinc-700 bg-zinc-950" />

            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <div>
                <h3 className="text-base font-semibold text-zinc-100">
                  {exp.role}
                </h3>
                <p className="text-sm text-zinc-400">
                  {exp.company} ·{" "}
                  <span className="text-zinc-500">{exp.location}</span>
                </p>
              </div>
              <span className="font-mono text-xs text-zinc-500">
                {exp.period}
              </span>
            </div>

            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-400">
              {exp.highlights.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {exp.techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
