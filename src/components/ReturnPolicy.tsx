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
            {/* Refund Policy */}
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                REFUND POLICY
              </h2>

              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Any participant who pays the package amount for any program
                offered by <strong>WellMoon Veda</strong> and wishes to withdraw
                or request a refund{" "}
                <strong>before the program commences</strong> is eligible for a
                refund.
              </p>

              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                After the commencement of the program,{" "}
                <strong>
                  no refund of the fee will be made under any circumstances
                  whatsoever.
                </strong>
              </p>

              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                The package amount once paid is{" "}
                <strong>non-refundable and non-transferable</strong>{" "}
                irrespective of the mode of payment, unless a written request
                for cancellation of the application or refund is made by the
                participant <strong>before program commencement</strong>.
              </p>
            </section>

            {/* Returns Policy */}
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Returns Policy
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                As our offerings primarily consist of wellness services, live
                programs, and digital content (such as courses, sessions, and
                retreats), there are no returns of physical goods. All requests
                related to changes, cancellations, or refunds are governed
                strictly by the Refund Policy stated above.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Contact for Refunds and Queries
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Please send all questions, comments, refund requests, and
                feedback to us at: <strong>info@wellmoonveda.com</strong>
              </p>
            </section>

            <p className="text-sm mt-8 font-['Quicksand',_'Poppins',_sans-serif] text-foreground/70">
              *This Refund and Returns Policy is effective as of{" "}
              <strong>{effectiveDate}</strong>.*
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
