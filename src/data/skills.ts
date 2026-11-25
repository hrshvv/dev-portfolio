export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "Go"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML / CSS"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "NestJS", "Express", "FastAPI", "gRPC", "REST"],
  },
  {
    category: "Databases & Caching",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "AWS", "Vercel", "GitHub Actions", "Linux"],
  },
];
