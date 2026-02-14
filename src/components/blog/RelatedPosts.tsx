// components/blog/RelatedPosts.tsx
import BlogCard from "./BlogCard";
import { BlogPost } from "@/types/blog";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="space-y-8">
      <h2 className=" text-2xl text-center">Related Reading</h2>

      <div
        className="
        grid gap-8
        grid-cols-1
        md:grid-cols-3
      "
      >
        {posts.slice(0, 3).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
