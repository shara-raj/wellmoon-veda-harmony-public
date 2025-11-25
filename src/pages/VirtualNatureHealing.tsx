import Footer from "@/components/Footer";
import SecondaryNavigation from "@/components/SecondaryNavigation";
import React from "react";

const VirtualNatureHealing = () => {
  return (
    <>
      <SecondaryNavigation />
      <div
        className=""
        style={{
          backgroundImage: "url(/images/pattern.png)",
          backgroundRepeat: "repeat",
        }}
      >
        {" "}
        Aura Healing{" "}
      </div>
      <Footer />
    </>
  );
};

export default VirtualNatureHealing;
