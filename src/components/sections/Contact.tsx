import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <MotionSection id="contact" className="border-t border-zinc-800/60 py-16">
      <SectionHeading
        eyebrow="06 / Contact"
        title="Get in Touch"
        description="Have a project, backend challenge, or engineering role in mind? Feel free to reach out directly."
      />

      <div className="flex flex-wrap items-center gap-3">
        <CopyEmailButton email={profile.email} />

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
        >
          <Mail className="h-4 w-4" />
          <span>Send Email</span>
        </a>
      </div>
    </MotionSection>
  );
}
