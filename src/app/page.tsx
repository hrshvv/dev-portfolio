import { getAllPosts } from "@/lib/blog";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { RecentPosts } from "@/components/sections/RecentPosts";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <RecentPosts posts={posts} />
      <Contact />
    </>
  );
}
