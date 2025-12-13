import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import pranayamaImage from "@/assets/blog-pranayama.jpg";
import soundHealingImage from "@/assets/blog-sound-healing.jpg";
import auraImage from "@/assets/blog-aura.jpg";

const Blog = () => {
  const importedImages = import.meta.glob(
    "/src/assets/featuredSectionImages/*.{png,jpg,jpeg,webp}",
    { eager: true }
  );

  const imagesMap: Record<string, string> = Object.entries(
    importedImages
  ).reduce((acc, [path, mod]) => {
    const fileName = path.split("/").pop() || "";
    const key = fileName.replace(/\.[^/.]+$/, ""); // remove extension
    // mod.default is the resolved url in Vite when eager: true
    acc[key] = (mod as any).default;
    return acc;
  }, {} as Record<string, string>);

  // Also create an array ordered by filename (useful as fallback)
  const imagesArray = Object.keys(imagesMap)
    .sort() // optional: keep alphabetical order by filename
    .map((k) => imagesMap[k]);

  const titleToSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[^\w-]/g, "");

  const articles = [
    {
      title: "The Science Behind Pranayama Breathing",
      excerpt:
        "Discover how ancient breathing techniques affect your nervous system and promote emotional balance through modern scientific research.",
      image: pranayamaImage,
      category: "Wellness Science",
      readTime: "5 min read",
    },
    {
      title: "Sound Healing: Vibrations That Transform",
      excerpt:
        "Explore the therapeutic power of sound frequencies and how they can restore harmony to your mind, body, and spirit.",
      image: soundHealingImage,
      category: "Healing Practices",
      readTime: "7 min read",
    },
    {
      title: "Understanding Your Aura Energy",
      excerpt:
        "Learn to recognize and balance your energetic field for improved wellbeing, clarity, and emotional resilience.",
      image: auraImage,
      category: "Energy Work",
      readTime: "6 min read",
    },
  ];

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
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Wellness Insights
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore articles that bridge ancient wisdom with modern
            understanding
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className="group bg-[#c1a88d]/70 rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in-subtle"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/50 text-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {article.category}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-[#636363]">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-muted-foreground">
                    {article.readTime}
                  </span>
                  <button className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {/* Featured Guides - Horizontal Scroll */}
      <div className="max-w-6xl mx-auto mt-20">
        <h3 className="text-3xl font-serif font-semibold text-center mb-8 text-foreground">
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
                {featuredGuides.map((guide, index) => {
                  // try to pick matching image by slug, otherwise fallback to index
                  const slug = titleToSlug(guide.title);
                  const matchedSrc = imagesMap[slug];
                  const fallbackSrc = imagesArray[index] ?? undefined;
                  const src = matchedSrc ?? fallbackSrc;

                  return (
                    <article
                      key={guide.title}
                      className="
              bg-[#c1a88d]/70 rounded-2xl p-6 shadow-soft 
              hover:shadow-medium hover:-translate-y-1
              transition-all duration-300 animate-fade-in-subtle
              overflow-hidden
            "
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {/* IMAGE (render only if found) */}
                      {src && (
                        <div className="mb-4 rounded-lg overflow-hidden">
                          <img
                            src={src}
                            alt={guide.title}
                            className="w-full h-56 object-cover block"
                          />
                        </div>
                      )}

                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-white text-black">
                          {guide.tag}
                        </span>
                      </div>

                      <h4 className="text-lg font-serif font-semibold text-foreground mb-3">
                        {guide.title}
                      </h4>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {guide.description}
                      </p>

                      <a
                        href={guide.url}
                        className="inline-flex items-center gap-2 text-sm font-medium text-black hover:gap-3 transition-all"
                      >
                        Explore Guide
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
