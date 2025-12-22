export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;

  // OPTIONAL metadata (used in UI)
  category?: string;
  readTime?: string;
};
