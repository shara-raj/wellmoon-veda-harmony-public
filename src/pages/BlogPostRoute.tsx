import { useParams } from "react-router-dom";
import BlogPostPage from "./BlogPostPage";
import { featuredPosts, recentPosts } from "@/data/MockBlogPosts";

export default function BlogPostRoute() {
  const { slug } = useParams<{ slug: string }>();

  // Combine all posts
  const allPosts = [...featuredPosts, ...recentPosts];

  // Find current post
  const post = allPosts.find((p) => p.slug === slug);

  // Fallback (important for dev)
  if (!post) {
    return (
      <div className="py-20 text-center">
        <p>Post not found</p>
      </div>
    );
  }

  // Mock related posts (simple logic for now)
  const relatedPosts = recentPosts.filter((p) => p.id !== post.id);

  return (
    <BlogPostPage
      post={post}
      relatedPosts={relatedPosts}
      featuredPosts={featuredPosts}
    />
  );
}
