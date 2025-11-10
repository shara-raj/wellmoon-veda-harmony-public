import { Button } from "@/components/ui/button";
import yogaPoseIcon from "@/assets/yoga-pose.png";
import sunRays from "@/assets/sun-rays-new.png";
import MudraHandsIcon from "@/components/icons/MudraHandsIcon";
import SingingBowlIcon from "@/components/icons/SingingBowlIcon";

const HealingPaths = () => {
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
    <section id="healing-paths" className="py-20 lg:py-32 bg-background">
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
              className="group bg-card p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in-subtle text-center hover:scale-105 hover:bg-[#e0cbb6]/30"
              style={{ animationDelay: `${index * 0.1}s`, borderRadius: '36px' }}
            >
              <div className="mb-6 mx-auto flex items-center justify-center relative w-32 h-32">
                {/* White circular background - shows on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="w-20 h-20 rounded-full bg-white"></div>
                </div>
                
                {/* Sun rays - shows on hover with 60% transparency */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-[15]">
                  <img src={sunRays} alt="" className="w-40 h-40 object-contain" />
                </div>
                
                {/* Icon - always on top */}
                {path.icon === "image" ? (
                  <img src={path.iconSrc} alt="" className="w-20 h-20 object-contain relative z-20" style={{ transition: 'none' }} />
                ) : path.icon === "custom" && path.IconComponent ? (
                  <path.IconComponent className="w-20 h-20 relative z-20" />
                ) : null}
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
