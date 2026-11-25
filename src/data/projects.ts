export interface Project {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    title: "Retriev",
    slug: "retriev",
    tagline: "Open-source AI workspace & knowledge retrieval platform",
    description:
      "An open-source AI workspace designed to build, manage, and deploy configurable AI agents powered by personal knowledge bases and real-time retrieval.",
    techStack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Vector Search"],
    githubUrl: "https://github.com/yourusername/retriev",
    liveUrl: "https://retriev.example.com",
    featured: true,
    year: "2026",
  },
  {
    title: "NexDocs",
    slug: "nexdocs",
    tagline: "Enterprise document management & workflow engine",
    description:
      "A secure document management platform featuring fine-grained access control, configurable approval workflows, and fast full-text document search.",
    techStack: ["TypeScript", "NestJS", "React", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/yourusername/nexdocs",
    featured: true,
    year: "2025",
  },
  {
    title: "TrackWise",
    slug: "trackwise",
    tagline: "Personal finance & budget analytics tracker",
    description:
      "A full-stack financial management tool for tracking expenses, recurring income, monthly budgets, and spending trends with clean visual summaries.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/trackwise",
    liveUrl: "https://trackwise.example.com",
    featured: true,
    year: "2025",
  },
  {
    title: "GBot",
    slug: "gbot",
    tagline: "Conversational AI assistant with live web retrieval",
    description:
      "An AI-powered conversational bot equipped with real-time web search and citation grounding for up-to-date technical answers.",
    techStack: ["Python", "FastAPI", "TypeScript", "React", "Redis"],
    githubUrl: "https://github.com/yourusername/gbot",
    featured: true,
    year: "2024",
  },
  {
    title: "NewsGuard ML",
    slug: "newsguard-ml",
    tagline: "NLP-based article classification pipeline",
    description:
      "A machine learning and natural language processing web application structured to classify and filter news articles in real time.",
    techStack: ["Python", "Scikit-Learn", "NLP", "Flask"],
    githubUrl: "https://github.com/yourusername/newsguard-ml",
    featured: false,
    year: "2024",
  },
];
