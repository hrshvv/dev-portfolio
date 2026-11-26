import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { profile, type SocialLink } from "@/data/profile";

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  switch (icon) {
    case "github":
      return <Github className="h-4 w-4" />;
    case "linkedin":
      return <Linkedin className="h-4 w-4" />;
    case "twitter":
      return <Twitter className="h-4 w-4" />;
    case "mail":
      return <Mail className="h-4 w-4" />;
  }
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/60">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs text-zinc-500">
          © {year} {profile.name}. Built with Next.js & Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.icon === "mail" ? undefined : "_blank"}
              rel={social.icon === "mail" ? undefined : "noopener noreferrer"}
              aria-label={social.label}
              className="text-zinc-500 transition-colors hover:text-zinc-200"
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
