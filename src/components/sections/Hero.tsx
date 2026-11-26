"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Terminal,
  Twitter,
} from "lucide-react";
import { FootballBanner } from "@/components/football/FootballBanner";
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

function VerifiedBadge() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-label="Verified"
      className="h-5 w-5 shrink-0 text-sky-500"
      fill="currentColor"
    >
      <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
    </svg>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [avatarAlt, setAvatarAlt] = useState(false);
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      setTimeString(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="pt-10 pb-10 sm:pt-12 sm:pb-10"
    >
      {/* Cover Banner — Interactive Pixel Football */}
      <FootballBanner />

      {/* Avatar Row + Live Clock */}
      <div className="relative z-10 flex items-end justify-between px-1">
        <div className="flex items-end gap-3">
          <button
            type="button"
            onClick={() => setAvatarAlt((prev) => !prev)}
            aria-label="Toggle avatar style"
            className="group relative -mt-12 flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-zinc-950 bg-zinc-900 shadow-lg transition-transform hover:scale-[1.02] active:scale-95 sm:-mt-14 sm:h-28 sm:w-28"
          >
            <div
              className={`flex h-full w-full items-center justify-center font-mono text-2xl font-bold tracking-tight transition-colors sm:text-3xl ${
                avatarAlt
                  ? "bg-gradient-to-br from-emerald-500/20 via-zinc-900 to-sky-500/20 text-emerald-300"
                  : "bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 text-zinc-100"
              }`}
            >
              {avatarAlt ? "</>" : initials}
            </div>
          </button>

          {/* Curved Arrow + "click me!" */}
          <div className="mb-2 hidden items-center gap-1.5 text-zinc-500 sm:flex">
            <svg
              viewBox="0 0 36 20"
              className="h-4 w-7 text-zinc-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M34 14C24 14 14 12 4 6" />
              <path d="M9 4L3 6l3 5" />
            </svg>
            <span className="font-mono text-[11px] italic text-zinc-400">
              {avatarAlt ? "nice!" : "click me!"}
            </span>
          </div>
        </div>

        {/* Live Local Time */}
        <div className="mb-2 flex flex-col items-end gap-1">
          <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400">
            <MapPin className="h-3.5 w-3.5 text-zinc-500" />
            <span>{timeString || "--:--:--"}</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-500">local time</span>
          </div>
          <span className="h-0.5 w-3 rounded-full bg-zinc-700" />
        </div>
      </div>

      {/* Name + Verified Badge + Role */}
      <div className="mt-5">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
            {profile.name}
          </h1>
          <VerifiedBadge />
        </div>
        <p className="mt-0.5 text-sm text-zinc-400 sm:text-base">
          {profile.role}
        </p>
      </div>

      {/* Pill Action Buttons */}
      <div className="mt-5 flex flex-wrap items-center gap-2.5">
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-xs font-medium text-zinc-950 transition-colors hover:bg-white sm:text-sm"
        >
          <FileText className="h-3.5 w-3.5" />
          <span>Resume</span>
        </a>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-800 sm:text-sm"
        >
          <MessageCircle className="h-3.5 w-3.5 text-zinc-400" />
          <span>Let&apos;s Talk</span>
        </a>
      </div>

      {/* Bio Paragraph + More about me */}
      <div className="mt-6 max-w-2xl space-y-3">
        <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
          {profile.tagline}
        </p>

        <a
          href="#about"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-200 transition-colors hover:text-white"
        >
          <span>More about me</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Icon-only Social & Quick Links Row */}
      <div className="mt-6 flex items-center gap-4">
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.icon === "mail" ? undefined : "_blank"}
            rel={social.icon === "mail" ? undefined : "noopener noreferrer"}
            aria-label={social.label}
            title={social.label}
            className="text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <SocialIcon icon={social.icon} />
          </a>
        ))}
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
          title="Resume"
          className="text-zinc-400 transition-colors hover:text-zinc-100"
        >
          <FileText className="h-4 w-4" />
        </a>
        <Link
          href="/blog"
          aria-label="Technical Blog"
          title="Technical Blog"
          className="text-zinc-400 transition-colors hover:text-zinc-100"
        >
          <Terminal className="h-4 w-4" />
        </Link>
      </div>
    </motion.section>
  );
}
