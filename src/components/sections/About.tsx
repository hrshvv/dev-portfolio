import { profile } from "@/data/profile";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <MotionSection id="about" className="border-t border-zinc-800/60 py-16">
      <SectionHeading eyebrow="01 / About" title="What I Do" />

      <div className="space-y-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
        {profile.aboutParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {profile.pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4"
          >
            <h3 className="text-sm font-semibold text-zinc-100">
              {pillar.title}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
