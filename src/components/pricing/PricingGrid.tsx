import PricingCard from "./PricingCard";

export default function PricingGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <PricingCard
        title="Starter"
        price="Free"
        description="Explore foundational wellness content."
        features={["Access to selected articles", "Monthly newsletter"]}
      />

      <PricingCard
        title="Guided"
        price="₹999 / month"
        description="Personalized guidance and practices."
        features={[
          "All Starter features",
          "Guided sessions",
          "Exclusive resources",
        ]}
        highlighted
      />

      <PricingCard
        title="Inner Circle"
        price="₹2499 / month"
        description="Deep, ongoing support for your journey."
        features={["All Guided features", "1:1 sessions", "Priority support"]}
      />
    </div>
  );
}
