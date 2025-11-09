import { Hand, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import yogaPoseIcon from "@/assets/yoga-pose.png";

const HealingPaths = () => {
  const paths = [
    {
      icon: "image",
      iconSrc: yogaPoseIcon,
      title: "Wellness Yoga",
      description: "Asanas and postures designed for hormonal harmony, strength, and inner peace.",
    },
    {
      icon: Hand,
      title: "Mudra & Pranayama Healing",
      description: "Empower your energy flow through mindful breathing and sacred hand gestures.",
    },
    {
      icon: Sparkles,
      title: "Sound & Aura Healing",
      description: "Immerse in soothing vibrations and energy-balancing therapies that refresh the mind and spirit.",
    },
  ];

  return (
    <section id="healing-paths" className="py-20 lg:py-32 bg-background" style={{ backgroundImage: 'url(/images/pattern.png)', backgroundRepeat: 'repeat' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Healing Rooted in Science and Spirit
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At WellMoon Veda, we bring together ancient Vedic wisdom and modern science to help women restore balance, energy, and emotional clarity. Our practices are grounded, compassionate, and designed to align with your natural rhythm.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {paths.map((path, index) => (
            <div
              key={path.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in-subtle text-center hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 transition-colors duration-300 mx-auto relative overflow-hidden">
                {path.icon === "image" && (
                  <div className="absolute inset-0 animate-rotate-slow">
                    <svg className="w-full h-full" viewBox="0 0 64 64">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <line
                          key={i}
                          x1="32"
                          y1="32"
                          x2="32"
                          y2="8"
                          stroke="#C7AF97"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          transform={`rotate(${i * 15} 32 32)`}
                        />
                      ))}
                    </svg>
                  </div>
                )}
                {path.icon === "image" ? (
                  <img src={path.iconSrc} alt="" className="w-10 h-10 object-contain relative z-10" style={{ filter: 'brightness(0) saturate(100%) invert(11%) sepia(8%) saturate(665%) hue-rotate(357deg) brightness(97%) contrast(90%)' }} />
                ) : (
                  <path.icon className="w-10 h-10 transition-colors duration-300" style={{ color: '#2b2a28' }} />
                )}
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                {path.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {path.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2"
            onClick={() => document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Subscribe for More Insights
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HealingPaths;
