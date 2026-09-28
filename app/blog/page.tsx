import type { Metadata } from "next";
import { getPosts } from "@/lib/blog-api";
import type { BlogPost } from "@/types/blog";
import Navbar from "@/components/Navbar";
import BlogHero from "./components/BlogHero";
import BlogListing from "./components/BlogListing";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Dsenda",
  description: "Articles and insights from the Dsenda team.",
};

export default async function BlogPage() {
  let posts: BlogPost[] = [];
  let failed = false;
  try {
    posts = await getPosts();
  } catch {
    failed = true;
  }

  return (
    <main>
    <Navbar />
      <BlogHero />
      {failed ? (
        <div className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-2xl border border-[#191919]/10 bg-white p-10 text-center">
            <p className="text-lg font-medium text-[#191919]">
              We couldn&apos;t load the articles
            </p>
            <p className="mt-2 text-sm text-[#191919]/60">
              The server may be waking up. Refresh the page in a few seconds.
            </p>
          </div>
        </div>
      ) : (
        <BlogListing posts={posts} />
      )}
      <Banner />
      <Footer />
    </main>
  );
}
