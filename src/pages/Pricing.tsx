import Footer from "@/components/Footer";
import SecondaryNavigation from "@/components/SecondaryNavigation";
import React from "react";
import PricingHeader from "@/components/pricing/PricingHeader";
import PricingGrid from "@/components/pricing/PricingGrid";

const PlanandPricing = () => {
  return (
    <>
      <SecondaryNavigation />
      <main
        className="px-4 py-16"
        style={{
          backgroundImage: "url(/images/pattern.png)",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="mx-auto max-w-6xl space-y-20">
          <PricingHeader />
          <PricingGrid />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PlanandPricing;
