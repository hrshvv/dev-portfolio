export interface SkillCategory {
  category: string;
  items: string[];
}

export interface TechStackItem {
  name: string;
  slug: string;
  color?: string;
}

export const techStack: TechStackItem[] = [
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
  { name: "NestJS", slug: "nestjs", color: "E0234E" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "Express.js", slug: "express", color: "FFFFFF" },
  { name: "Fastify", slug: "fastify", color: "FFFFFF" },
  { name: "Bun", slug: "bun", color: "FBF0DF" },
  { name: "Hono.js", slug: "hono", color: "E36002" },
  { name: "GraphQL", slug: "graphql", color: "E10098" },
  { name: "gRPC", slug: "grpc", color: "60A5FA" },
  { name: "Kafka", slug: "apachekafka", color: "FFFFFF" },
  { name: "Redis", slug: "redis", color: "FF4438" },
  { name: "Prisma", slug: "prisma", color: "E4E4E7" },
  { name: "Drizzle", slug: "drizzle", color: "C5F74F" },
  { name: "TypeORM", slug: "typeorm", color: "FE0803" },
  { name: "Elasticsearch", slug: "elasticsearch", color: "24BBB1" },
  { name: "Pinecone", slug: "pinecone", color: "FFFFFF" },
  { name: "Vue.js", slug: "vuedotjs", color: "4FC08D" },
  { name: "Nuxt.js", slug: "nuxt", color: "00DC82" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
  { name: "TanStack Query", slug: "reactquery", color: "FF4154" },
  { name: "shadcn/ui", slug: "shadcnui", color: "FFFFFF" },
  { name: "Bootstrap", slug: "bootstrap", color: "8B5CF6" },
  { name: "Redux", slug: "redux", color: "9B72CF" },
  { name: "AWS", slug: "amazonwebservices", color: "FF9900" },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
  { name: "Nginx", slug: "nginx", color: "009639" },
  { name: "Cloudflare", slug: "cloudflare", color: "F38020" },
  { name: "Vault", slug: "vault", color: "FFEC6E" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "GitHub", slug: "github", color: "FFFFFF" },
  { name: "GitHub Actions", slug: "githubactions", color: "2088FF" },
  { name: "Turborepo", slug: "turborepo", color: "EF4444" },
  { name: "Postman", slug: "postman", color: "FF6C37" },
];

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
