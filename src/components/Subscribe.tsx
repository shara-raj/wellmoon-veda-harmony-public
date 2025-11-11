import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing to WellMoon Veda!");
      setEmail("");
    }
  };

  return (
    <section
      id="subscribe"
      className="py-20 lg:py-32 bg-gradient-sage relative overflow-hidden"
      style={{ backgroundImage: "url(/images/pattern.png)", backgroundRepeat: "repeat" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-primary-foreground mb-6">
            Begin Your Healing Journey
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Subscribe to receive gentle reminders, healing stories, guided practices, and updates from WellMoon Veda.
            Join our community of women finding balance and clarity.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground text-foreground placeholder:text-muted-foreground border-0 flex-grow"
              />
              <Button
                variant="outline"
                type="submit"
                size="lg"
                className="bg-[hsl(35_50%_65%)] 
            text-primary-foreground 
            hover:bg-[#e0cbb6]/30 
            hover:text-black 
            shadow-soft
            //scale transition
            transition-all duration-300
            //Scale on hover
            hover: scale-105 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/70 mt-4">
              By subscribing, you agree to receive emails from WellMoon Veda. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
