import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const Pricing = () => {
  // --- VISIBILITY LOGIC (for animation triggering) ---
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger visibility when the target element enters the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing after the first time it becomes visible (optional, but good for performance)
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      // Determines how much of the element must be visible to trigger (20%)
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
  // --- END VISIBILITY LOGIC ---

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Explore the basics of holistic wellness",
      features: [
        "Access to introductory yoga videos",
        "Basic mudra guide",
        "Weekly wellness newsletter",
        "Community forum access",
      ],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Basic",
      price: "$29",
      period: "per month",
      description: "Deepen your practice with guided sessions",
      features: [
        "Everything in Free",
        "20+ guided yoga sessions",
        "Complete mudra & pranayama library",
        "Monthly sound healing sessions",
        "Personalized wellness dashboard",
        "Email support",
      ],
      cta: "Subscribe Now",
      featured: true,
    },
    {
      name: "Premium",
      price: "$79",
      period: "per month",
      description: "Full access to transformative healing",
      features: [
        "Everything in Basic",
        "Unlimited access to all sessions",
        "Live virtual healing sessions",
        "One-on-one aura balancing",
        "Personalized healing path",
        "Priority support",
        "Exclusive workshops & events",
      ],
      cta: "Subscribe Now",
      featured: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 lg:py-32 bg-gradient-subtle"
      style={{ backgroundImage: "url(/images/pattern.png)", backgroundRepeat: "repeat" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">Choose Your Path</h2>
          <p className="text-lg text-muted-foreground">Select the plan that aligns with your wellness journey</p>
        </div>

        {/* Attach the ref to the parent grid container */}
        <div ref={sectionRef} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              // 🔑 Animation classes: Slide-up (translate-y) and Fade-in (opacity)
              className={`
                bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium 
                flex flex-col text-center 
                // Hover Effects
                hover:scale-105 transition-all duration-300 
                // Featured State
                ${plan.featured ? "ring-2 ring-primary scale-105" : ""}
                
                // Animation Start State (hidden and below)
                transition-all duration-1000 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
              `}
              // 🔑 Staggered Delay (0.2s increment)
              style={{ transitionDelay: isVisible ? `${index * 0.2}s` : "0s" }}
            >
              {plan.featured && (
                <div className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full w-fit mb-4 mx-auto">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full hover:scale-[1.02] transition-transform ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">All plans include a 14-day money-back guarantee</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
