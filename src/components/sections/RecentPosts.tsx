import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface RecentPostsProps {
  posts: BlogPostMeta[];
}

export function RecentPosts({ posts }: RecentPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <MotionSection id="blog" className="border-t border-zinc-800/60 py-16">
      <SectionHeading
        eyebrow="05 / Writing"
        title="Recent Articles"
        description="Notes on backend engineering, system design, and building software."
      />

      <div className="divide-y divide-zinc-800/60 rounded-xl border border-zinc-800/80 bg-zinc-900/30">
        {posts.slice(0, 3).map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block p-5 transition-colors hover:bg-zinc-900/70"
          >
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="text-sm font-semibold text-zinc-100 transition-colors group-hover:text-white sm:text-base">
                {post.title}
              </h3>
              <span className="shrink-0 font-mono text-xs text-zinc-500">
                {post.date} · {post.readingTime}
              </span>
            </div>
            <p className="mt-1.5 text-sm text-zinc-400">{post.summary}</p>
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 transition-colors hover:text-zinc-100"
        >
          <span>Read all articles</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </MotionSection>
  );
}
