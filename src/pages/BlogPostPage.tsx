// pages/BlogPostPage.tsx
import { BlogPost } from "@/types/blog";
import RelatedPosts from "@/components/blog/RelatedPosts";
import FeaturedPostGrid from "@/components/blog/FeaturedPostGrid";
import SecondaryNavigation from "@/components/SecondaryNavigation";
import Footer from "@/components/Footer";

type Props = {
  post: BlogPost;
  relatedPosts: BlogPost[];
  featuredPosts: BlogPost[];
};

export default function BlogPostPage({
  post,
  relatedPosts,
  featuredPosts,
}: Props) {
  return (
    <>
      <SecondaryNavigation />
      <article className="px-4 py-16">
        {/* Hero Image */}
        <div className="overflow-hidden rounded-2xl pb-5">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[550px] object-contain"
          />
        </div>
        {/* Content wrapper */}
        <div className="mx-auto max-w-4xl space-y-10">
          {/* Header */}
          <header className="space-y-4 text-center">
            <h1 className="font-serif text-3xl md:text-4xl leading-tight">
              {post.title}
            </h1>

            <p className="text-sm text-muted-foreground">
              {post.date} · 5 min read
            </p>
          </header>

          {/* Article content */}
          <section
            className="
            prose
            prose-neutral
            prose-lg
            max-w-none
          "
          >
            {/* later this will come from CMS / markdown */}
            <p>
              This is where your blog content will live. The typography is tuned
              for long-form reading with gentle spacing and soft contrast.
            </p>

            <h2>Listening to the Body</h2>
            <p>
              Wellness begins with awareness. Breath, posture, and rhythm all
              influence how we experience calm.
            </p>

            <h3>Daily Practices</h3>
            <p>
              Small, consistent rituals can create profound emotional shifts.
            </p>
          </section>

          {/* Divider */}
          <hr className="my-16 border-muted" />

          {/* Related Posts */}
          <RelatedPosts posts={relatedPosts} />

          {/* Featured / Pillar Posts */}
          <div className="pt-16">
            <FeaturedPostGrid posts={featuredPosts} />
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
