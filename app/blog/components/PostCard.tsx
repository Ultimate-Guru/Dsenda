import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import { formatDate, makeExcerpt } from "@/lib/blog-utils";
import PostCover from "./PostCover";

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col rounded-2xl border border-[#191919]/10 bg-white p-4">
      <PostCover post={post} className="aspect-square" />
      <div className="mt-4 flex items-center gap-2 text-xs text-[#191919]/60">
        {post.category && (
          <span className="rounded bg-[#EDEDFC] px-2 py-0.5 font-medium text-[#4338CA]">
            {post.category}
          </span>
        )}
        <span>{formatDate(post.created_at)}</span>
      </div>
      <h2 className="mt-2 text-xl font-medium leading-snug text-[#191919]">
        {post.title}
      </h2>
      <p className="mt-2 line-clamp-3 text-sm text-[#191919]/70">
        {makeExcerpt(post)}
      </p>
      <Link
        href={`/blog/${post.id}`}
        className="mt-4 text-sm font-medium text-[#191919] hover:text-[#4F46E5]"
      >
        Read more →
      </Link>
    </article>
  );
}
