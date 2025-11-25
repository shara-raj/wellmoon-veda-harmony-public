import { useEffect, useRef, useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  // State to track when the section is visible in the viewport (for desktop animation)
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to trigger the animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set isVisible to true when the section is 20% visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once visible if you want the animation to only run once
          observer.unobserve(entry.target);
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
      className="py-22 lg:py-32 bg-gradient-subtle"
      style={{
        backgroundImage: "url(/images/pattern.png)",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Choose Your Path
          </h2>
          <p className="text-lg text-muted-foreground">
            Select the plan that aligns with your wellness journey
          </p>
        </div>

        {/* Outer wrapper for positioning the scroll arrow */}
        <div className="relative max-w-6xl mx-auto mb-12">
          {/* Mobile Sliding Carousel / Desktop Grid */}
          <div
            ref={sectionRef}
            className="flex md:grid md:grid-cols-3 gap-8 
                       overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 scroll-smooth"
          >
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                // Mobile specific width, snapping, and flex-shrink
                className={`
                  bg-card rounded-2xl p-6 md:p-6 shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col text-center hover:scale-105 
                  ${plan.featured ? "ring-2 ring-primary scale-105" : ""}
                  
                  w-[85vw] flex-shrink-0 snap-start md:w-auto md:flex-shrink-0 md:flex-grow
                  
                  // Desktop Staggered Slide Animation Classes
                  transition-all duration-1000 ease-out 
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  } 
                `}
                // Staggered delay for each card
                style={{
                  transitionDelay: isVisible ? `${index * 0.2}s` : "0s",
                  transform: isVisible ? "translateY(0)" : "translateY(80px)",
                }}
              >
                {plan.featured && (
                  <div className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full w-fit mb-4 mx-auto">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-center gap-3"
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.featured
                      ? "bg-[#d4af37]/70 text-primary-foreground hover:bg-[#d4af37]/40"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* 🏹 Scroll Hint Arrow (Mobile Only) */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 
                          hidden sm:flex md:hidden items-center justify-center 
                          pr-4 pointer-events-none z-20"
          >
            <div className="text-primary-foreground/80 bg-primary/80 rounded-full p-2 animate-pulse shadow-lg">
              <ChevronRight className="w-6 h-6" />
            </div>
            <span className="text-sm text-primary-foreground/80 absolute -right-6">
              Scroll
            </span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
