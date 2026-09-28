import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost } from "@/lib/blog-api";
import { formatDate, makeExcerpt } from "@/lib/blog-utils";
import PostCover from "../components/PostCover";
import PostBody from "../components/PostBody";
import Banner from "@/components/Banner";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id).catch(() => null);
  if (!post) return { title: "Post not found | Dsenda" };
  return { title: `${post.title} | Dsenda`, description: makeExcerpt(post, 160) };
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) notFound();

  return (
    <main className="bg-[#FAFAFA]">
      <article className="mx-auto max-w-4xl px-6 pt-12 pb-16">
        <Link href="/blog" className="text-sm text-[#191919]/60 hover:text-[#4F46E5]">
          ← Back to blog
        </Link>
        <h1 className="mx-auto mt-6 max-w-3xl text-center text-3xl font-medium leading-tight text-[#191919] md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-3 text-center text-sm text-[#191919]/60">
          {post.category ? `${post.category} · ` : ""}
          {formatDate(post.created_at)}
        </p>
        <PostCover post={post} className="mt-8 aspect-video" />
        <div className="mt-10">
          <PostBody content={post.content} />
        </div>
      </article>
      <Banner />
    </main>
  );
}
