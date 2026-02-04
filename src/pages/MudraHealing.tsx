import Footer from "@/components/Footer";
import SecondaryNavigation from "@/components/SecondaryNavigation";
import MudraGrid from "@/components/MudraGrid";
import React from "react";

const MudraHealing = () => {
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
        <MudraGrid />;
      </div>
      <Footer />
    </>
  );
};

export default MudraHealing;
