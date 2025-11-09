import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import pranayamaImage from "@/assets/blog-pranayama.jpg";
import soundHealingImage from "@/assets/blog-sound-healing.jpg";
import auraImage from "@/assets/blog-aura.jpg";

const Blog = () => {
  const articles = [
    {
      title: "The Science Behind Pranayama Breathing",
      excerpt: "Discover how ancient breathing techniques affect your nervous system and promote emotional balance through modern scientific research.",
      image: pranayamaImage,
      category: "Wellness Science",
      readTime: "5 min read",
    },
    {
      title: "Sound Healing: Vibrations That Transform",
      excerpt: "Explore the therapeutic power of sound frequencies and how they can restore harmony to your mind, body, and spirit.",
      image: soundHealingImage,
      category: "Healing Practices",
      readTime: "7 min read",
    },
    {
      title: "Understanding Your Aura Energy",
      excerpt: "Learn to recognize and balance your energetic field for improved wellbeing, clarity, and emotional resilience.",
      image: auraImage,
      category: "Energy Work",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="blog" className="py-20 lg:py-32 bg-background" style={{ backgroundImage: 'url(/images/pattern.png)', backgroundRepeat: 'repeat' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Wellness Insights
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore articles that bridge ancient wisdom with modern understanding
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in-subtle"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {article.category}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  <button className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
