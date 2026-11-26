import { profile } from "@/data/profile";
import { getAllPosts } from "@/lib/blog";
import { getGitHubActivity } from "@/lib/github";
import { Hero } from "@/components/sections/Hero";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { RecentPosts } from "@/components/sections/RecentPosts";
import { Contact } from "@/components/sections/Contact";

export default async function HomePage() {
  const [posts, githubData] = await Promise.all([
    Promise.resolve(getAllPosts()),
    getGitHubActivity(profile.githubUsername),
  ]);

  return (
    <>
      <Hero />
      <div className="pb-12">
        <MusicPlayer tracks={profile.favoriteTracks} />
      </div>
      <GitHubActivity data={githubData} />
      <Projects />
      <Skills />
      <About />
      <Experience />
      <RecentPosts posts={posts} />
      <Contact />
    </>
  );
}
