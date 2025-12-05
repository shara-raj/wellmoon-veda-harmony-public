import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import backgroundPattern from "@/assets/images/pattern.png";
import yoga from "@/assets/yoga.mp4";
import mudraHealing from "@/assets/mudrahealing.mp4";
import natureHealing from "@/assets/naturehealing.mp4";
import soundHealing from "@/assets/soundhealing.mp4";
import auraHealing from "@/assets/aurahealing_.mp4";

// ──────────────────────────────
// TYPES
// ──────────────────────────────
type HealingPath = {
  title: string;
  description: string;
  videoSrc: string;
};

// ──────────────────────────────
// VIDEO ICON (NON-CLICKABLE, NO CONTROLS)
// ──────────────────────────────
const VideoIcon: React.FC<{ src: string; title: string }> = ({
  src,
  title,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        const result = video.play();
        if (result !== undefined) {
          await result;
        }
      } catch {
        // If autoplay is blocked, we do nothing.
        // The icon will just appear as a static frame – still non-clickable.
      }
    };

    tryPlay();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      autoPlay
      playsInline
      controls={false}
      aria-label={`${title} icon`}
      preload="auto"
      // prevent interactions / overlays
      className="w-20 h-20 object-contain relative z-20 rounded-full pointer-events-none"
      disablePictureInPicture
      controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
    />
  );
};

// ──────────────────────────────
// MAIN COMPONENT
// ──────────────────────────────
const HealingPaths = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const paths: HealingPath[] = [
    {
      videoSrc: yoga,
      title: "Wellness Yoga",
      description:
        "Asanas and postures designed for hormonal harmony, strength, and inner peace.",
    },
    {
      videoSrc: mudraHealing,
      title: "Mudra Healing",
      description:
        "Empower your energy flow through mindful breathing and sacred hand gestures.",
    },
    {
      videoSrc: soundHealing,
      title: "Sound Healing",
      description:
        "Immerse in soothing vibrations to refresh the mind and spirit.",
    },
    {
      videoSrc: auraHealing,
      title: "Aura Healing",
      description:
        "Immerse in gentle aura-cleansing energies that rebalance your field and restore mental and spiritual harmony.",
    },
    {
      videoSrc: natureHealing,
      title: "Virtual Nature Healing",
      description:
        "Experience gentle, guided sessions that bring the benefits of nature to you, wherever you are.",
    },
  ];

  return (
    <section
      id="healing-paths"
      className="py-20 lg:py-32 bg-background"
      style={{
        backgroundImage: `url(${backgroundPattern})`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Healing Rooted in Science and Spirit
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At WellMoon Veda, we bring together ancient Vedic wisdom and modern
            science to help women restore balance, energy, and emotional
            clarity. Our practices are grounded, compassionate, and designed to
            align with your natural rhythm.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={sectionRef}
          className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12"
        >
          {paths.map((path, index) => (
            <div
              key={path.title}
              className={`
                transition-[opacity,transform] duration-1000 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }
              `}
              style={{
                transitionDelay: isVisible ? `${index * 0.2}s` : "0s",
              }}
            >
              <div
                className="
          group bg-[#e0cbb6]/20 p-8 shadow-soft rounded-[36px] text-center
          hover:shadow-medium hover:scale-105 hover:bg-[#e0cbb6]/45
          transition-transform transition-shadow transition-colors duration-300 ease-out
        "
              >
                <div className="mb-6 mx-auto flex items-center justify-center relative w-32 h-32">
                  {/* White circular background - shows on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="w-20 h-20 rounded-full bg-white" />
                  </div>

                  {/* Non-clickable animated video icon */}
                  <VideoIcon src={path.videoSrc} title={path.title} />
                </div>

                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  {path.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {path.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="bg-[#d4af37]/70 hover:bg-[#d4af37]/40 
              text-primary-foreground
              hover:text-black 
              shadow-soft
              transition-all duration-300
              hover:scale-105"
            onClick={() =>
              document
                .getElementById("subscribe")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Subscribe for More Insights
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HealingPaths;
