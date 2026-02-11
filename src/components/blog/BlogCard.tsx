import { Link } from "react-router-dom";
import { BlogPost } from "@/types/blog";

type Props = {
  post: BlogPost;
};

export default function BlogCard({ post }: Props) {
  // 🔴 CRITICAL SAFETY CHECK
  if (!post) {
    return (
      <div className="h-64 bg-yellow-100 flex items-center justify-center">
        POST UNDEFINED
      </div>
    );
  }

  return (
    <Link to={`/blog/${post.slug}`} className="block">
      <article
        className="
          group
          overflow-hidden
          rounded-2xl
          border
          bg-background
          transition-all
          hover:-translate-y-1
        "
      >
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="
              h-56
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <p className="text-xs text-muted-foreground">{post.date}</p>

          <h2 className=" text-lg leading-snug">{post.title}</h2>

          <p className="text-lg text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
