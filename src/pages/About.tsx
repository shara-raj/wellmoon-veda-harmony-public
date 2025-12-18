import React from "react";
import SecondaryNavigation from "@/components/SecondaryNavigation";
import Footer from "@/components/Footer";
import AboutApproach from "@/components/about/AboutApproach";
import AboutHero from "@/components/about/AboutHero";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutValues from "@/components/about/AboutValues";

const About = () => {
  return (
    <div>
      <SecondaryNavigation />
      <main
        className="overflow-hidden"
        style={{
          backgroundImage: "url(/images/pattern.png)",
          backgroundRepeat: "repeat",
        }}
      >
        <AboutHero />
        <AboutPhilosophy />
        <AboutApproach />
        <AboutValues />
      </main>
      <Footer />
    </div>
  );
};

export default About;
