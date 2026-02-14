import { BlogPost } from "@/types/blog";
import BlogCard from "./BlogCard";

type Props = {
  posts: BlogPost[];
};

export default function FeaturedPostGrid({ posts }: Props) {
  return (
    <section className="space-y-5">
      <h2 className=" text-2xl text-center">Featured Guides</h2>

      <div
        className="
          grid gap-8
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
        "
      >
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
