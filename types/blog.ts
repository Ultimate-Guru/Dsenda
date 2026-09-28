// What the backend sends today
export type BlogPost = {
  id: number;
  title: string;
  content: string;
  author_id: number;
  created_at: string;
  updated_at: string;
  // Optional: shown automatically if the backend adds these later
  category?: string | null;
  cover_image?: string | null;
  summary?: string | null;
};

export type CategoryCount = { name: string; count: number };
