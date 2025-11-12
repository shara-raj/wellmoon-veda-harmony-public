import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Wellness Enthusiast",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      content:
        "WellMoon Veda has transformed my approach to self-care. The mudra healing practices have brought such clarity and peace to my daily routine.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Yoga Practitioner",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      content:
        "The blend of ancient wisdom with modern science is exactly what I was looking for. The sound healing sessions are incredibly restorative.",
      rating: 5,
    },
    {
      name: "Maya Rodriguez",
      role: "Holistic Health Coach",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
      content:
        "As a health coach, I recommend WellMoon Veda to all my clients. The aura balancing and pranayama techniques are beautifully taught.",
      rating: 5,
    },
    {
      name: "Aria Chen",
      role: "Meditation Teacher",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aria",
      content:
        "The virtual nature healing sessions have been a game-changer for my students. WellMoon Veda offers authentic, transformative practices.",
      rating: 5,
    },
  ];

  return (
    <section
      className="py-20 lg:py-32 bg-background"
      style={{ backgroundImage: "url(/images/pattern.png)", backgroundRepeat: "repeat" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">Voices of Healing</h2>
          <p className="text-lg text-muted-foreground">
            Hear from women who have found balance and clarity through our practices.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="bg-card rounded-2xl p-8 shadow-soft h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground leading-relaxed mb-6 flex-grow">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="text-center space-y-6 animate-fade-in-subtle">
          <p className="text-lg text-muted-foreground">
            Join thousands of women experiencing balance through WellMoon Veda.
          </p>
          <Button
            variant="outline"
            className="border-2 bg-[hsl(35_50%_65%)] 
            text-primary-foreground 
            hover:bg-[#e0cbb6]/30 
            hover:text-black 
            shadow-soft
            //scale transition
            transition-all duration-300
            //Scale on hover
            hover: scale-105"
            onClick={() => document.getElementById("subscribe")?.scrollIntoView({ behavior: "smooth" })}
          >
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
