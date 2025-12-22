import PricingGrid from "./PricingGrid";
import { Link } from "react-router-dom";

export default function PricingSection() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl space-y-16">
        <header className="max-w-full space-y-4">
          <h2 className="text-4xl text-center font-medium">Plans & Pricing</h2>
          <p className="text-center">
            Choose a plan that aligns with your wellness journey.
          </p>
        </header>

        <PricingGrid />

        <div className="text-center">
          <Link
            to="/pricing"
            className="inline-block mt-6 text-sm underline underline-offset-4"
          >
            View full pricing details
          </Link>
        </div>
      </div>
    </section>
  );
}
