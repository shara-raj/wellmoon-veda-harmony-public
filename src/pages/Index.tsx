import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HealingPaths from "@/components/HealingPaths";
import WellnessInvitation from "@/components/WellnessInvitation";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import PricingSection from "@/components/pricing/PricingSection";

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
        <PricingSection />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
