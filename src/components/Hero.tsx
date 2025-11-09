import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import mudraImage from "@/assets/mudra-hands.jpg";
import yogaImage from "@/assets/woman-yoga.jpg";
import meditatingImage from "@/assets/woman-meditating.jpg";
import meditationBadge from "@/assets/meditation-badge.png";
import meditationCenter from "@/assets/meditation-center.png";

const Hero = () => {
  const [rotation, setRotation] = useState(0);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Only run on desktop (>= 1024px) and if user hasn't set reduced motion
      if (window.innerWidth >= 1024 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const scrollY = window.scrollY;
        // Rotate clockwise as user scrolls down
        setRotation(scrollY * 0.1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Avatar URLs for social proof
  const avatars = [
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Aria",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna",
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-wider uppercase text-primary">
                Woman's Wellness
              </p>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-foreground leading-tight">
                Yoga Helps Calm The Mind
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                At WellMoon Veda, we blend ancient Vedic practices with modern research to help women find balance, clarity, and inner calm. Explore yoga, mudra, pranayama, sound healing, and aura balancing — guided and science-informed.
              </p>
            </div>

            {/* Video Pill */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="group flex items-center space-x-3 bg-card hover:bg-secondary transition-all duration-300 rounded-full pl-2 pr-6 py-2 shadow-soft hover:shadow-medium">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                    <Play className="w-5 h-5 text-primary-foreground fill-current" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Watch Welcome Video</span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Video player would be integrated here</p>
                </div>
              </DialogContent>
            </Dialog>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft"
                onClick={() => document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Subscribe Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2"
                onClick={() => document.getElementById('healing-paths')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Know More
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-3">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Customer ${index + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-background"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">332+</span> Happy Customers
              </p>
            </div>
          </div>

          {/* Right Column - Collage & Badge (Desktop Only) */}
          <div className="hidden lg:block relative">
            <div className="relative w-full max-w-[500px] h-[600px] mx-auto animate-fade-in animate-breathe" style={{ animationDelay: '0.2s' }}>
              {/* Photo 1 - Meditation (Top Left) */}
              <div className="absolute top-0 left-0 w-64 h-80 rounded-full overflow-hidden shadow-medium">
                <img
                  src={meditatingImage}
                  alt="Woman meditating"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Photo 2 - Yoga (Right) */}
              <div className="absolute top-20 w-72 h-96 rounded-3xl overflow-hidden shadow-medium" style={{ left: 'calc(16rem + 0.5px)' }}>
                <img
                  src={yogaImage}
                  alt="Woman practicing yoga"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Photo 3 - Mudra (Bottom) */}
              <div className="absolute left-12 w-64 h-80 rounded-3xl overflow-hidden shadow-medium" style={{ top: 'calc(20rem + 0.5px)' }}>
                <img
                  src={mudraImage}
                  alt="Healing mudra hand gesture"
                  className="w-full h-full object-cover"
                />
              </div>
              </div>

              {/* Rotating Badge */}
              <div
                ref={badgeRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
              >
                <div className="relative w-64 h-64">
                  {/* White ring with soft shadow */}
                  <div className="absolute inset-0 m-auto w-28 h-28 rounded-full bg-white shadow-soft border border-black"></div>

                  {/* Rotating text inside the ring */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 256 256"
                    style={{ 
                      transform: `rotate(${rotation}deg)`,
                      transformOrigin: '50% 50%',
                      transformBox: 'fill-box'
                    }}
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 128, 128 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                      />
                    </defs>
                    <text 
                      fill="currentColor"
                      style={{ 
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '13px',
                        fontWeight: '500',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                      }}
                    >
                      <textPath 
                        href="#circlePath" 
                        startOffset="50%"
                        textAnchor="middle"
                      >
                        UNITE THE MIND, BODY, AND SPIRIT WITH EVERY BREATH
                      </textPath>
                    </text>
                  </svg>

                  {/* Center image - stays upright */}
                  <div 
                    className="absolute inset-0 m-auto w-[5.125rem] h-[5.125rem] rounded-full overflow-hidden border border-black"
                  >
                    <img
                      src={meditationCenter}
                      alt="Meditation silhouette"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
