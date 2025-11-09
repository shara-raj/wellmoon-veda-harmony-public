import { Hand, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import TreePoseIcon from "@/components/icons/TreePoseIcon";

const HealingPaths = () => {
  const paths = [
    {
      icon: TreePoseIcon,
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
              <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 mx-auto">
                <path.icon className="w-7 h-7 text-sage-dark group-hover:text-primary-foreground transition-colors duration-300" />
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
