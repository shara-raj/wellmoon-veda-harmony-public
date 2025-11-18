import Footer from "./Footer";
import { useEffect } from "react";
import SecondaryNavigation from "./SecondaryNavigation";

const ReturnPolicy = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  const effectiveDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <SecondaryNavigation />
      <div
        className="min-h-screen bg-background pt-20"
        style={{
          backgroundImage: "url(/images/pattern.png)",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-12">
            Refund and Returns Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-10 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                REFUND POLICY
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Any participant who pays the package amount for any program
                offered by **WellMoon Veda** and wants to withdraw/ask for a
                refund before the program commences is eligible for a refund.
              </p>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                After the commencement of the program, **No refund of the fee
                will be made under any circumstances whatsoever.**
              </p>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                The package amount once paid is **non-refundable and
                non-transferable** irrespective of the mode of payment unless a
                request for cancellation of the application/refund is made by
                the participant in writing before program commencement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Returns Policy
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Given the nature of our digital and service-based wellness
                offerings (e.g., live sessions, courses, retreats), there are
                generally no "returns" of physical goods. Returns are addressed
                strictly under the Refund Policy section above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Contact for Requests
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Please send all questions, comments, and feedback regarding this
                policy to us at: **info@wellmoonveda.com**
              </p>
            </section>

            <p className="text-sm mt-8 font-['Quicksand',_'Poppins',_sans-serif] text-foreground/70">
              *This Refund and Returns Policy is effective as of **
              {effectiveDate}**.*
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
