import { ArrowRight } from "lucide-react";
import { recentPosts, featuredPosts } from "@/data/BlogData";
import { Link } from "react-router-dom";

const Blog = () => {
  const importedImages = import.meta.glob(
    "/src/assets/featuredSectionImages/*.{png,jpg,jpeg,webp}",
    { eager: true },
  );

  const imagesMap: Record<string, string> = Object.entries(
    importedImages,
  ).reduce(
    (acc, [path, mod]) => {
      const fileName = path.split("/").pop() || "";
      const key = fileName.replace(/\.[^/.]+$/, ""); // remove extension
      // mod.default is the resolved url in Vite when eager: true
      acc[key] = (mod as any).default;
      return acc;
    },
    {} as Record<string, string>,
  );

  // Also create an array ordered by filename (useful as fallback)
  const imagesArray = Object.keys(imagesMap)
    .sort() // optional: keep alphabetical order by filename
    .map((k) => imagesMap[k]);

  const titleToSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[^\w-]/g, "");

  const featuredGuides = [
    {
      title: "Cycle Syncing: A Natural Way to Balance Women’s Hormones",
      url: "/blog/cycle-syncing-hormonal-health",
      description:
        "Align your lifestyle, movement, and self-care with each menstrual phase to support hormonal balance.",
      tag: "Hormonal Health",
    },
    {
      title: "10 Yoga Practices Every Woman Should Do for Hormonal Balance",
      url: "/blog/yoga-for-hormonal-balance",
      description:
        "Gentle yoga sequences to regulate hormones, reduce PMS, and support overall wellbeing.",
      tag: "Yoga for Women",
    },
    {
      title: "IAYT Approach to PCOS: Diet, Yoga & Lifestyle Tips",
      url: "/blog/iayt-yoga-for-pcos",
      description:
        "An integrative yoga therapy view on managing PCOS naturally with diet, movement, and rest.",
      tag: "PCOS Support",
    },
    {
      title: "Holistic Prenatal & Postnatal Care: Yoga, Mudras & Nutrition",
      url: "/blog/prenatal-postnatal-wellness",
      description:
        "Support each stage of motherhood with safe yoga, breath, mudras, and nourishing foods.",
      tag: "Prenatal & Postnatal",
    },
    {
      title: "Top 7 Mudras Every Woman Should Practice for Hormonal Wellness",
      url: "/blog/mudras-for-womens-health",
      description:
        "Use simple hand gestures to calm the mind, balance hormones, and support daily energy.",
      tag: "Mudra Healing",
    },
    {
      title: "Managing Menopause Naturally: Yoga, Breathwork & Herbs",
      url: "/blog/menopause-natural-relief",
      description:
        "Ease hot flashes, mood shifts, and sleep disturbances with natural, body-honoring tools.",
      tag: "Menopause Wellness",
    },
    {
      title: "Emotional Wellness for Women: Simple Practices to Reduce Stress",
      url: "/blog/emotional-wellbeing-women",
      description:
        "Create emotional safety with breath, movement, and gentle mindset shifts.",
      tag: "Emotional Health",
    },
    {
      title: "Understanding Breast Health: Early Signs, Self-Care & Yoga",
      url: "/blog/breast-health-awareness",
      description:
        "Learn daily breast care, early signs to notice, and supportive yoga practices.",
      tag: "Breast Health",
    },
    {
      title: "Pelvic Floor Strengthening Yoga: Why It Matters for Every Woman",
      url: "/blog/pelvic-floor-yoga",
      description:
        "Strengthen and relax your pelvic floor for posture, digestion, and reproductive health.",
      tag: "Pelvic Floor",
    },
    {
      title: "Essential Nutrition for Women: What Every Woman Should Eat Daily",
      url: "/blog/nutrition-for-women-daily-guide",
      description:
        "A simple daily guide to proteins, fats, minerals, and herbs that support women’s bodies.",
      tag: "Women's Nutrition",
    },
  ];

  return (
    <section
      id="blog"
      className="py-20 lg:py-32 bg-background"
      style={{
        backgroundImage: "url(/images/pattern.png)",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl  font-semibold text-foreground mb-6">
            Wellness Insights
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore articles that bridge ancient wisdom with modern
            understanding
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recentPosts.slice(0, 3).map((article, index) => (
            <article
              key={article.id}
              className="group bg-[#c1a88d]/70 rounded-2xl overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute top-4 left-4 bg-white/50 text-xs px-3 py-1 rounded-full">
                  {article.category}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl  font-semibold">{article.title}</h3>

                <p className="text-muted-foreground">{article.excerpt}</p>

                <div className="flex justify-between items-center">
                  <span className="text-lg text-muted-foreground">
                    {article.readTime}
                  </span>

                  <Link
                    to={`/blog/${article.slug}`}
                    className="flex items-center gap-2 text-lg font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {/* Featured Guides - Horizontal Scroll */}
      <div className="max-w-6xl mx-auto mt-20">
        <h3 className="text-3xl  font-semibold text-center mb-8 text-foreground">
          Featured Guides for Women’s Wellness
        </h3>

        <div className="relative">
          <div className="max-w-6xl mx-auto mt-20">
            <div>
              {/* GRID CONTAINER INSTEAD OF SCROLL */}
              <div
                className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3
        gap-6
      "
              >
                {featuredPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className="
          bg-[#c1a88d]/70
          rounded-2xl
          p-6
          shadow-soft
          hover:shadow-medium
          hover:-translate-y-1
          transition-all
          duration-300
          overflow-hidden
        "
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Image */}
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-56 object-cover block"
                      />
                    </div>

                    {/* Optional category */}
                    {post.category && (
                      <span className="inline-block mb-3 text-xs font-medium px-3 py-1 rounded-full bg-white text-black">
                        {post.category}
                      </span>
                    )}

                    {/* Title */}
                    <h4 className="text-lg  font-semibold text-foreground mb-3">
                      {post.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* CTA */}
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-lg font-medium text-black hover:gap-3 transition-all"
                    >
                      Explore Guide
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
