"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const linkedinUrl =
    profile.socials.find((s) => s.icon === "linkedin")?.href ??
    "https://linkedin.com";
  const xUrl =
    profile.socials.find((s) => s.icon === "twitter")?.href ?? "https://x.com";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <MotionSection id="contact" className="border-t border-zinc-800/60 py-14">
      <SectionHeading eyebrow="Connect" title="Let's Talk" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Left Card: Direct Links */}
        <div className="flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-6">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-zinc-50">
              Have something in mind?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Have a project, an opportunity, or a question? I&apos;d love to
              hear from you.
            </p>

            <div className="mt-6 divide-y divide-zinc-800/70 border-y border-zinc-800/70">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center justify-between py-4 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <Mail className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-zinc-100" />
                  <div>
                    <p className="text-sm font-semibold text-zinc-100">
                      Email me
                    </p>
                    <p className="text-xs text-zinc-400">{profile.email}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-200" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <Linkedin className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-zinc-100" />
                  <div>
                    <p className="text-sm font-semibold text-zinc-100">
                      Connect on LinkedIn
                    </p>
                    <p className="text-xs text-zinc-400">
                      Work and professional connections
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-200" />
              </a>

              <a
                href={xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-zinc-400 transition-colors group-hover:text-zinc-100">
                    <XIcon />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-zinc-100">
                      Say hello on X
                    </p>
                    <p className="text-xs text-zinc-400">
                      Quick conversations and ideas
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-200" />
              </a>
            </div>
          </div>

          <div className="mt-5 space-y-2 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Available for work &amp; freelance</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500">
              <MapPin className="h-3.5 w-3.5" />
              <span>Based in {profile.location}</span>
            </div>
          </div>
        </div>

        {/* Right Card: Message Form */}
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-6">
          <h3 className="text-xl font-bold tracking-tight text-zinc-50">
            Send a Message
          </h3>
          <p className="mt-2 text-sm text-zinc-400">
            Share a little about what you have in mind.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-3">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-600 focus:outline-none"
            />

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-600 focus:outline-none"
            />

            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="w-full resize-y rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-600 focus:outline-none"
            />

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/70 py-3 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-700 hover:bg-zinc-800"
            >
              <span>
                {sent ? "Opening email client..." : "Send Message"}
              </span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </MotionSection>
  );
}
