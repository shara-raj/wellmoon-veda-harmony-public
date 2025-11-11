import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import yogaPoseIcon from "@/assets/yoga-pose.png";
import sunRays from "@/assets/sun-rays-new.png";
import MudraHandsIcon from "@/components/icons/MudraHandsIcon";
import SingingBowlIcon from "@/components/icons/SingingBowlIcon";

const HealingPaths = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 🔑 KEY CHANGE: Update state based on entry.isIntersecting
        // This will set isVisible to true when entering, and false when exiting.
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 },
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

  const paths = [
    {
      icon: "image",
      iconSrc: yogaPoseIcon,
      title: "Wellness Yoga",
      description: "Asanas and postures designed for hormonal harmony, strength, and inner peace.",
    },
    {
      icon: "custom",
      IconComponent: MudraHandsIcon,
      title: "Mudra & Pranayama Healing",
      description: "Empower your energy flow through mindful breathing and sacred hand gestures.",
    },
    {
      icon: "custom",
      IconComponent: SingingBowlIcon,
      title: "Sound & Aura Healing",
      description: "Immerse in soothing vibrations and energy-balancing therapies that refresh the mind and spirit.",
    },
  ];

  return (
    <section
      id="healing-paths"
      className="py-20 lg:py-32 bg-background"
      style={{ backgroundImage: "url(/images/pattern.png)", backgroundRepeat: "repeat" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Healing Rooted in Science and Spirit
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At WellMoon Veda, we bring together ancient Vedic wisdom and modern science to help women restore balance,
            energy, and emotional clarity. Our practices are grounded, compassionate, and designed to align with your
            natural rhythm.
          </p>
        </div>

        <div ref={sectionRef} className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {paths.map((path, index) => (
            <div
              key={path.title}
              // The new class for the default (non-hover) background is added here
              className={`
    group bg-card p-8 shadow-soft hover:shadow-medium transition-all duration-300 text-center
    hover:scale-105 hover:bg-[#e0cbb6]/30 rounded-[36px]
    
    // 🎨 NEW BASE BACKGROUND COLOR (60% opacity)
    bg-[#e0cbb6]/60
    
    // Base classes for the smooth transition
    transition-all duration-1000 ease-out 
    
    // State change (translate-y-20 makes the movement very noticeable)
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} 
  `}
              // Inline style for staggered delay
              style={{
                transitionDelay: isVisible ? `${index * 0.2}s` : "0s",
              }}
            >
              <div className="mb-6 mx-auto flex items-center justify-center relative w-32 h-32">
                {/* White circular background - shows on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="w-20 h-20 rounded-full bg-white"></div>
                </div>

                {/* Icon - always on top */}
                {path.icon === "image" ? (
                  <img
                    src={path.iconSrc}
                    alt={`${path.title} icon`}
                    className="w-20 h-20 object-contain relative z-20"
                    style={{ filter: "brightness(0)", transition: "none" }}
                  />
                ) : path.icon === "custom" && path.IconComponent ? (
                  <path.IconComponent className="w-20 h-20 relative z-20" />
                ) : null}
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">{path.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{path.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2
            //New hover color
            hover:bg-[hsl(35_50%_65%)]
            hover:text-white"
            onClick={() => document.getElementById("subscribe")?.scrollIntoView({ behavior: "smooth" })}
          >
            Subscribe for More Insights
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HealingPaths;
