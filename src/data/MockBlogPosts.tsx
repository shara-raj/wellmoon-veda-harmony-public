import { BlogPost } from "@/types/blog";
import { featuredImages } from "@/assets/featuredSectionImages/featuredimages";

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
export const recentPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Morning Breathwork Routine for a Calm Start",
    excerpt:
      "A short and gentle breathwork routine to begin your day with clarity.",
    image: featuredImages[2],
    date: "Mar 10, 2025",
    slug: "morning-breathwork-routine",
  },
  {
    id: "post-2",
    title: "5 Signs Your Nervous System Needs Rest",
    excerpt:
      "Learn to recognize subtle signs of burnout and emotional overload.",
    image: featuredImages[6],
    date: "Mar 08, 2025",
    slug: "signs-nervous-system-needs-rest",
  },
  {
    id: "post-3",
    title: "How Sound Frequencies Influence Mood",
    excerpt:
      "Understanding how sound therapy impacts emotional and mental states.",
    image: featuredImages[5],
    date: "Mar 05, 2025",
    slug: "sound-frequencies-influence-mood",
  },
  {
    id: "post-4",
    title: "A Beginner’s Guide to Guided Forest Bathing",
    excerpt:
      "What to expect when you experience forest bathing for the first time.",
    image: featuredImages[1],
    date: "Mar 01, 2025",
    slug: "beginners-guide-forest-bathing",
  },
  {
    id: "post-5",
    title: "Evening Rituals to Wind Down Naturally",
    excerpt: "Simple practices to relax your mind and body before sleep.",
    image: featuredImages[7],
    date: "Feb 27, 2025",
    slug: "evening-rituals-wind-down",
  },
];
