import type { BlogPost } from "@/types/blog";
import Image from "next/image";

// Shows the post's cover image, or a soft placeholder until the backend has one
export default function PostCover({
  post,
  className = "",
}: {
  post: BlogPost;
  className?: string;
}) {
  if (post.cover_image) {
    return (
      <Image
        src={post.cover_image}
        alt=""
        fill
        className={`w-full rounded-xl object-cover ${className}`}
      />
    );
  }
  return (
    <div
      aria-hidden
      className={`w-full rounded-xl bg-linear-to-br from-[#EDEDFC] to-[#C9C6F5] ${className}`}
    />
  );
}
