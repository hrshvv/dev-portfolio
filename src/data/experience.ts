export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  techStack: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Acme Cloud Systems",
    role: "Software Engineer",
    period: "2024 — Present",
    location: "Remote",
    highlights: [
      "Architected and maintained core backend microservices handling high-throughput API traffic with sub-50ms p95 latency.",
      "Designed PostgreSQL indexing and Redis caching strategies that reduced primary database load by 45%.",
      "Led end-to-end delivery of customer-facing dashboard features in Next.js and TypeScript.",
    ],
    techStack: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis", "Next.js"],
  },
  {
    company: "Studio SixtySix",
    role: "Frontend Developer",
    period: "2022 — 2024",
    location: "Hybrid",
    highlights: [
      "Built responsive, accessible web applications and reusable component libraries in React and Tailwind CSS.",
      "Collaborated closely with backend engineers to integrate REST and WebSocket APIs cleanly.",
      "Improved Core Web Vitals and bundle size across production client portals.",
    ],
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "REST APIs"],
  },
];
