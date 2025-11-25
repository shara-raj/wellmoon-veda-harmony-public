import { Button } from "@/components/ui/button";

const WellnessInvitation = () => {
  return (
    <section
      className="py-20 lg:py-32 bg-gradient-warm relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/pattern.png)",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sage/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-6">
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            <blockquote
              className="text-5xl lg:text-6xl font-bold text-foreground italic leading-relaxed"
              style={{ fontFamily: "Tangerine, cursive" }}
            >
              "Healing begins when you pause and listen to your body."
            </blockquote>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Receive weekly wellness notes, guided practices, and ancient wisdom
            delivered to your inbox.
          </p>

          <Button
            size="lg"
            variant="outline"
            className="bg-[hsl(35_50%_65%)] 
            text-primary-foreground 
            hover:bg-[#e0cbb6]/30 
            hover:text-black 
            shadow-soft
            transition-all duration-300
            //Scale on hover
            hover: scale-105"
            onClick={() =>
              document
                .getElementById("subscribe")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Subscribe for Weekly Wellness Notes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WellnessInvitation;
