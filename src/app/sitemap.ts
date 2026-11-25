import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${profile.siteUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }));

  return [
    {
      url: profile.siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${profile.siteUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${profile.siteUrl}/blog`,
      lastModified: new Date(),
    },
    ...posts,
  ];
}
