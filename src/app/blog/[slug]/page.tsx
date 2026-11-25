import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Badge } from "@/components/ui/Badge";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-14 sm:py-16">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 transition-colors hover:text-zinc-100"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>All articles</span>
      </Link>

      <header className="mb-10 border-b border-zinc-800/60 pb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-xs text-zinc-500">
          <time dateTime={post.date}>{post.date}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-4xl sm:leading-tight">
          {post.title}
        </h1>

        <p className="mt-3 text-base text-zinc-400">{post.summary}</p>

        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        )}
      </header>

      <div className="prose prose-invert prose-zinc max-w-none prose-headings:tracking-tight prose-a:text-zinc-200 prose-a:underline-offset-4 hover:prose-a:text-white prose-code:text-zinc-200 prose-pre:border prose-pre:border-zinc-800 prose-pre:bg-zinc-950">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: "github-dark-default",
                    keepBackground: false,
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
