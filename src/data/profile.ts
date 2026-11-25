export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "mail";
}

export interface Track {
  title: string;
  artist: string;
  src?: string;
}

export interface Profile {
  name: string;
  brand: string;
  githubUsername: string;
  role: string;
  availability: string;
  headline: string;
  tagline: string;
  bannerLines: string[];
  favoriteTracks: Track[];
  aboutParagraphs: string[];
  pillars: {
    title: string;
    description: string;
  }[];
  email: string;
  location: string;
  resumeUrl: string;
  siteUrl: string;
  socials: SocialLink[];
}

export const profile: Profile = {
  name: "Your Name",
  brand: "yourname.dev",
  githubUsername: "yourusername",
  role: "Full Stack Developer",
  availability: "Open to opportunities",
  headline: "I build reliable systems from 0→1 and scale them from 1→100.",
  tagline:
    "Software Engineer focused on building reliable backend systems and full-stack applications. Passionate about backend engineering, system design, and building things that work well under the hood and look good on the surface.",
  bannerLines: ["GRIND", "GRIND", "GRIND"],
  favoriteTracks: [
    {
      title: "The Less I Know the Better",
      artist: "Tame Impala",
      src: "/audio/track-1.mp3",
    },
    {
      title: "Midnight City",
      artist: "M83",
      src: "/audio/track-2.mp3",
    },
  ],
  aboutParagraphs: [
    "I'm a software engineer with experience designing and shipping production backend services, APIs, and full-stack web applications. I care deeply about system reliability, clean abstractions, and interfaces that feel effortless to use.",
    "Whether it's architecting a database schema, optimizing service-to-service communication, or crafting a responsive frontend, I enjoy owning problems end-to-end—from first commit to production monitoring.",
  ],
  pillars: [
    {
      title: "Backend & System Design",
      description:
        "Designing resilient APIs, event-driven pipelines, and scalable data models built for low latency and clarity.",
    },
    {
      title: "Full-Stack Product Craft",
      description:
        "Shipping end-to-end TypeScript and React/Next.js applications with crisp UI, strong typing, and high performance.",
    },
    {
      title: "Infrastructure & DevOps",
      description:
        "Containerizing workloads, automating CI/CD workflows, and keeping deployments predictable and observable.",
    },
  ],
  email: "hello@yourname.dev",
  location: "Remote / Worldwide",
  resumeUrl: "/resume.pdf",
  siteUrl: "https://yourname.dev",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/yourusername",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      icon: "linkedin",
    },
    {
      label: "X / Twitter",
      href: "https://x.com/yourusername",
      icon: "twitter",
    },
    {
      label: "Email",
      href: "mailto:hello@yourname.dev",
      icon: "mail",
    },
  ],
};
