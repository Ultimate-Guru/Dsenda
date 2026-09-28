"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/types/blog";
import { getCategories, plainText } from "@/lib/blog-utils";
import FeaturedPost from "./FeaturedPost";
import PostCard from "./PostCard";
import Pagination from "./Pagination";
import SearchBox from "./SearchBox";
import CategoryList from "./CategoryList";
import NewsletterCard from "./NewsletterCard";

const GRID_SIZE = 4; // small cards per page (the newest post is featured on page 1)

export default function BlogListing({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const categories = useMemo(() => getCategories(posts), [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (category && p.category !== category) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        plainText(p.content).toLowerCase().includes(q)
      );
    });
  }, [posts, query, category]);

  const [featured, ...rest] = filtered;
  const totalPages = Math.max(1, Math.ceil(rest.length / GRID_SIZE));
  const safePage = Math.min(page, totalPages);
  const visible = rest.slice((safePage - 1) * GRID_SIZE, safePage * GRID_SIZE);

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="space-y-6">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-[#191919]/10 bg-white p-10 text-center">
            <p className="text-lg font-medium text-[#191919]">
              {posts.length === 0 ? "No posts yet" : "No posts match your search"}
            </p>
            <p className="mt-2 text-sm text-[#191919]/60">
              {posts.length === 0
                ? "New articles will appear here."
                : "Try a different word or choose another category."}
            </p>
          </div>
        ) : (
          <>
            {safePage === 1 && featured && <FeaturedPost post={featured} />}
            {visible.length > 0 && (
              <div className="grid gap-6 sm:grid-cols-2">
                {visible.map((p) => (
                  <PostCard key={p.id} post={p} />
                ))}
              </div>
            )}
            <Pagination
              page={safePage}
              totalPages={totalPages}
              onChange={(p) => {
                setPage(p);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </>
        )}
      </div>

      <aside className="space-y-8">
        <SearchBox
          value={query}
          onChange={(v) => {
            setQuery(v);
            setPage(1);
          }}
        />
        <CategoryList
          categories={categories}
          total={posts.length}
          active={category}
          onSelect={(c) => {
            setCategory(c);
            setPage(1);
          }}
        />
        <NewsletterCard />
      </aside>
    </div>
  );
}
