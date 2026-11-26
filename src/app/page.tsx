import { Suspense } from "react";
import { profile } from "@/data/profile";
import { getGitHubActivity } from "@/lib/github";
import { Hero } from "@/components/sections/Hero";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Insights } from "@/components/sections/Insights";

async function GitHubActivitySection() {
  const githubData = await getGitHubActivity(profile.githubUsername);
  return <GitHubActivity data={githubData} />;
}

function GitHubActivitySkeleton() {
  return (
    <section className="pb-16" aria-hidden="true">
      <div className="mb-4 flex items-center justify-between">
        <div className="h-3.5 w-28 animate-pulse rounded bg-zinc-800/80" />
        <div className="h-3.5 w-16 animate-pulse rounded bg-zinc-800/80" />
      </div>
      <div className="h-28 w-full animate-pulse rounded-lg bg-zinc-900/40" />
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="pb-12">
        <MusicPlayer tracks={profile.favoriteTracks} />
      </div>
      <Suspense fallback={<GitHubActivitySkeleton />}>
        <GitHubActivitySection />
      </Suspense>
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Insights />
    </>
  );
}
