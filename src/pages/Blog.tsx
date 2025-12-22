import Footer from "@/components/Footer";
import SecondaryNavigation from "@/components/SecondaryNavigation";
import FeaturedPosts from "@/components/blog/FeaturedPosts";
import RecentPosts from "@/components/blog/RecentPosts";
import { featuredPosts, recentPosts } from "@/data/BlogData";
import React from "react";

const Blog = () => {
  return (
    <>
      <SecondaryNavigation />
      <div
        className=""
        style={{
          backgroundImage: "url(/images/pattern.png)",
          backgroundRepeat: "repeat",
        }}
      >
        <main className="max-w-7xl mx-auto px-4 py-16">
          <div
            className="
        flex flex-col
        lg:flex-row
        gap-12
      "
          >
            {/* Mobile: Featured on top */}
            <div className="lg:hidden">
              <FeaturedPosts posts={featuredPosts} />
            </div>

            {/* Main content */}
            <div className="flex-1">
              <RecentPosts posts={recentPosts} />
            </div>

            {/* Desktop: Featured on right */}
            <div className="hidden lg:block">
              <FeaturedPosts posts={featuredPosts} />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
