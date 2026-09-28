import type { BlogPost, CategoryCount } from "@/types/blog";

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Strips HTML and simple Markdown symbols so we can build short previews
export function plainText(s: string) {
  return s
    .replace(/<[^>]*>/g, " ")
    .replace(/^[#>*\-\s]+/gm, "")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function makeExcerpt(post: BlogPost, max = 140) {
  const text = post.summary?.trim() || plainText(post.content);
  return text.length > max ? text.slice(0, max).trimEnd() + "…" : text;
}

// Builds the category list from whatever categories the posts have
export function getCategories(posts: BlogPost[]): CategoryCount[] {
  const counts = new Map<string, number>();
  for (const p of posts) {
    const name = p.category?.trim();
    if (name) counts.set(name, (counts.get(name) ?? 0) + 1);
  }
  return [...counts.entries()].map(([name, count]) => ({ name, count }));
}
