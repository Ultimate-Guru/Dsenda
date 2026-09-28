import type { BlogPost } from "@/types/blog";

const API = process.env.DSENDA_API_URL ?? "https://dsenda-backend.onrender.com";

export async function getPosts(): Promise<BlogPost[]> {
  const res = await fetch(`${API}/blog`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`Could not load posts (${res.status})`);
  const posts: BlogPost[] = await res.json();
  // Newest first
  return [...posts].sort(
    (a, b) => +new Date(b.created_at) - +new Date(a.created_at)
  );
}

export async function getPost(id: string): Promise<BlogPost | null> {
  const res = await fetch(`${API}/blog/${encodeURIComponent(id)}`, {
    next: { revalidate: 60 },
  });
  if (res.status === 404 || res.status === 422) return null;
  if (!res.ok) throw new Error(`Could not load post (${res.status})`);
  return res.json();
}

export const WAITLIST_URL = `${API}/waitlist`;
