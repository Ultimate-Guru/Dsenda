import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import { formatDate, makeExcerpt } from "@/lib/blog-utils";
import PostCover from "./PostCover";

export default function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-2xl border border-[#191919]/10 bg-white p-6">
      <PostCover post={post} className="aspect-[16/9]" />
      <div className="mt-5 flex items-center gap-2 text-xs text-[#191919]/60">
        {post.category && (
          <span className="rounded bg-[#EDEDFC] px-2 py-0.5 font-medium text-[#4338CA]">
            {post.category}
          </span>
        )}
        <span>{formatDate(post.created_at)}</span>
      </div>
      <h2 className="mt-3 text-3xl font-medium leading-tight text-[#191919] md:text-4xl">
        {post.title}
      </h2>
      <p className="mt-3 text-sm text-[#191919]/70">
        {makeExcerpt(post, 200)}
      </p>
      <Link
        href={`/blog/${post.id}`}
        className="mt-5 inline-block text-sm font-medium text-[#191919] hover:text-[#4F46E5]"
      >
        Read story →
      </Link>
    </article>
  );
}
