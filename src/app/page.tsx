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

export default async function HomePage() {
  const githubData = await getGitHubActivity(profile.githubUsername);

  return (
    <>
      <Hero />
      <div className="pb-12">
        <MusicPlayer tracks={profile.favoriteTracks} />
      </div>
      <GitHubActivity data={githubData} />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Insights />
    </>
  );
}
