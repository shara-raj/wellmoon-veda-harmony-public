import { BlogPost } from "@/types/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group rounded-2xl overflow-hidden border bg-background">
      <div className="overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-52 w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <div className="p-5 space-y-2">
        <p className="text-xs text-muted-foreground">{post.date}</p>
        <h2 className="font-serif text-lg leading-snug">{post.title}</h2>
        <p className="text-sm text-muted-foreground">{post.excerpt}</p>
      </div>
    </article>
  );
}
