import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const currentExperience = experiences.slice(0, 1);

  return (
    <MotionSection
      id="experience"
      className="border-t border-zinc-800/60 py-14"
    >
      <SectionHeading eyebrow="Career" title="Work Experience" />

      <div className="space-y-6">
        {currentExperience.map((exp) => (
          <div
            key={`${exp.company}-${exp.period}`}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-6"
          >
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <div>
                <h3 className="text-base font-semibold text-zinc-100">
                  {exp.company}
                </h3>
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
    </MotionSection>
  );
}
