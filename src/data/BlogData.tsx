import { BlogPost } from "@/types/blog";
import { featuredImages } from "@/assets/featuredSectionImages/featuredImages";

/**
 * FEATURED / PILLAR POSTS
 * These are curated and fixed (10 posts)
 */
export const featuredPosts: BlogPost[] = [
  {
    id: "pillar-1",
    title: "Cycle Syncing: A Natural Way to Balance Women’s Hormones",
    excerpt:
      "Align your lifestyle, movement, and self-care with each menstrual phase to support hormonal balance.",
    image: featuredImages[0],
    date: "Jan 10, 2025",
    slug: "understanding-hormonal-balance",
  },
  {
    id: "pillar-2",
    title: "10 Yoga Practices Every Woman Should Do for Hormonal Balance",
    excerpt:
      "Gentle yoga sequences to regulate hormones, reduce PMS, and support overall wellbeing.",
    image: featuredImages[1],
    date: "Jan 15, 2025",
    slug: "breathwork-for-emotional-healing",
  },
  {
    id: "pillar-3",
    title: "IAYT Approach to PCOS: Diet, Yoga & Lifestyle Tips",
    excerpt:
      "An integrative yoga therapy view on managing PCOS naturally with diet, movement, and rest.",
    image: featuredImages[2],
    date: "Jan 20, 2025",
    slug: "pranayama-for-daily-calm",
  },
  {
    id: "pillar-4",
    title: "Holistic Prenatal & Postnatal Care: Yoga, Mudras & Nutrition",
    excerpt:
      "Support each stage of motherhood with safe yoga, breath, mudras, and nourishing foods.",
    image: featuredImages[3],
    date: "Jan 25, 2025",
    slug: "sound-healing-vibrations",
  },
  {
    id: "pillar-5",
    title: "Top 7 Mudras Every Woman Should Practice for Hormonal Wellness",
    excerpt:
      "Use simple hand gestures to calm the mind, balance hormones, and support daily energy.",
    image: featuredImages[4],
    date: "Feb 01, 2025",
    slug: "forest-bathing-healing",
  },
  {
    id: "pillar-6",
    title: "Managing Menopause Naturally: Yoga, Breathwork & Herbs",
    excerpt:
      "Ease hot flashes, mood shifts, and sleep disturbances with natural, body-honoring tools.",
    image: featuredImages[5],
    date: "Feb 05, 2025",
    slug: "aura-healing-for-beginners",
  },
  {
    id: "pillar-7",
    title: "Emotional Wellness for Women: Simple Practices to Reduce Stress",
    excerpt:
      "Create emotional safety with breath, movement, and gentle mindset shifts.",
    image: featuredImages[6],
    date: "Feb 10, 2025",
    slug: "mind-body-connection",
  },
  {
    id: "pillar-8",
    title: "Understanding Breast Health: Early Signs, Self-Care & Yoga",
    excerpt:
      "Learn daily breast care, early signs to notice, and supportive yoga practices.",
    image: featuredImages[7],
    date: "Feb 15, 2025",
    slug: "meditation-inner-balance",
  },
  {
    id: "pillar-9",
    title: "Pelvic Floor Strengthening Yoga: Why It Matters for Every Woman",
    excerpt:
      "Strengthen and relax your pelvic floor for posture, digestion, and reproductive health.",
    image: featuredImages[8],
    date: "Feb 20, 2025",
    slug: "yoga-nervous-system-regulation",
  },
  {
    id: "pillar-10",
    title: "Essential Nutrition for Women: What Every Woman Should Eat Daily",
    excerpt:
      "A simple daily guide to proteins, fats, minerals, and herbs that support women’s bodies.",
    image: featuredImages[9],
    date: "Feb 25, 2025",
    slug: "daily-rituals-emotional-wellbeing",
  },
];

/**
 * RECENT POSTS
 * Mixed content, newest should appear first
 */
export const allPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "The Science Behind Pranayama Breathing",
    excerpt:
      "Discover how ancient breathing techniques affect your nervous system.",
    image: featuredImages[3],
    date: "Mar 15, 2025",
    slug: "science-behind-pranayama-breathing",
    category: "Wellness Science",
    readTime: "5 min read",
  },
  {
    id: "post-2",
    title: "Sound Healing: Vibrations That Transform",
    excerpt: "Explore the therapeutic power of sound frequencies.",
    image: featuredImages[4],
    date: "Mar 12, 2025",
    slug: "sound-healing-vibrations",
    category: "Healing Practices",
    readTime: "7 min read",
  },
  {
    id: "post-3",
    title: "Gentle Evening Rituals to Calm the Nervous System",
    excerpt:
      "Unwind after a long day with simple evening rituals that signal safety to your nervous system and prepare your body for deep rest.",
    image: featuredImages[5],
    date: "Mar 18, 2025",
    slug: "gentle-evening-rituals-calm-nervous-system",
    category: "Nervous System Care",
    readTime: "6 min read",
  },
  {
    id: "post-4",
    title: "How Breath Awareness Improves Emotional Regulation",
    excerpt:
      "Learn how mindful awareness of the breath can help you respond to emotions with clarity instead of reacting from stress.",
    image: featuredImages[6],
    date: "Mar 16, 2025",
    slug: "breath-awareness-emotional-regulation",
    category: "Emotional Wellness",
    readTime: "5 min read",
  },
];

export const recentPosts = allPosts;
