import React from "react";
import SecondaryNavigation from "@/components/SecondaryNavigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div>
      <SecondaryNavigation />
      <div
        className=""
        style={{
          backgroundImage: "url(/images/pattern.png)",
          backgroundRepeat: "repeat",
        }}
      >
        {" "}
        About
      </div>
      <Footer />
    </div>
  );
};

export default About;
