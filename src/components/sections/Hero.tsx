"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin, Mail, Twitter } from "lucide-react";
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

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="pt-14 pb-16 sm:pt-20 sm:pb-20"
    >
      {/* Availability Pill */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="font-mono text-xs text-zinc-300">
          {profile.availability}
        </span>
      </div>

      {/* Identity & Headline */}
      <div className="space-y-4">
        <p className="font-mono text-sm text-zinc-400">
          Hi, I&apos;m <span className="text-zinc-100">{profile.name}</span> —{" "}
          {profile.role}
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-5xl sm:leading-[1.12]">
          {profile.headline}
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          {profile.tagline}
        </p>
      </div>

      {/* CTAs */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
        >
          <span>Get in Touch</span>
          <ArrowRight className="h-4 w-4" />
        </a>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-800"
        >
          <FileText className="h-4 w-4 text-zinc-400" />
          <span>Resume</span>
        </a>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex items-center gap-4">
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.icon === "mail" ? undefined : "_blank"}
            rel={social.icon === "mail" ? undefined : "noopener noreferrer"}
            aria-label={social.label}
            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <SocialIcon icon={social.icon} />
            <span className="hidden sm:inline">{social.label}</span>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
