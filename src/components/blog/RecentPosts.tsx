import BlogCard from "./BlogCard";
import { BlogPost } from "@/types/blog";

export default function RecentPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="space-y-10">
      <h2 className="font-serif text-2xl">Recent Posts</h2>

      <div
        className="
        grid gap-8
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
      "
      >
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination placeholder */}
      <div className="flex justify-center gap-2 pt-10">
        <button className="px-4 py-2 rounded-lg border">Prev</button>
        <button className="px-4 py-2 rounded-lg border">Next</button>
      </div>
    </section>
  );
}
