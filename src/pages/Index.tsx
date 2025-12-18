import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HealingPaths from "@/components/HealingPaths";
import WellnessInvitation from "@/components/WellnessInvitation";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Blog from "@/components/ui/Blog";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <Navigation />
        <Hero />
      </div>
      <main>
        <HealingPaths />
        <WellnessInvitation />
        <Testimonials />
        <Blog />
        <Pricing />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
