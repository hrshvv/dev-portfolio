import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical articles on backend engineering, system design, and full-stack development.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="py-14 sm:py-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 transition-colors hover:text-zinc-100"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>Back home</span>
      </Link>

      <div className="mb-10 space-y-2">
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          Writing
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
          Blog
        </h1>
        <p className="text-sm text-zinc-400">
          Notes and deep dives on backend architecture, distributed systems, and engineering craft.
        </p>
      </div>

      <div className="divide-y divide-zinc-800/60 rounded-xl border border-zinc-800/80 bg-zinc-900/30">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block p-5 transition-colors hover:bg-zinc-900/70"
          >
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h2 className="text-base font-semibold text-zinc-100 transition-colors group-hover:text-white">
                {post.title}
              </h2>
              <span className="shrink-0 font-mono text-xs text-zinc-500">
                {post.date} · {post.readingTime}
              </span>
            </div>

            <p className="mt-1.5 text-sm text-zinc-400">{post.summary}</p>

            {post.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
