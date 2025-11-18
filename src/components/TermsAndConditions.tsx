import Footer from "./Footer";
import { useEffect } from "react";
import SecondaryNavigation from "./SecondaryNavigation";

const TermsAndConditions = () => {
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
            Terms and Conditions
          </h1>

          <div className="prose prose-lg max-w-none space-y-10 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                1. Agreement to Terms
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                By accessing and using WellMoon Veda's services, courses, or
                digital content (collectively, "Services"), you agree to be
                bound by these Terms and Conditions. If you do not agree to
                these terms, please do not use our Services. These terms
                constitute a legally binding agreement between you and WellMoon
                Veda.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                2. Use of Services & Health Disclaimer
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Our wellness services, including yoga, meditation, sound
                healing, and other practices, are intended for general personal
                wellness purposes only. They are not a substitute for
                professional medical advice, diagnosis, or treatment. Always
                seek the advice of your physician or other qualified health
                provider with any questions you may have regarding a medical
                condition.
              </p>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                WellMoon Veda is not responsible for any personal injury or
                property damage that may result from the use of our Services,
                including live classes or digital guidance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                3. User Responsibilities
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                You agree to the following when using our Services:
              </p>
              <ul className="list-disc pl-8 space-y-2 font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                <li>
                  Provide accurate and complete information during registration
                  and purchasing.
                </li>
                <li>
                  Maintain the confidentiality of your account password and
                  login details.
                </li>
                <li>
                  Use our Services in accordance with all applicable local,
                  state, and international laws and regulations.
                </li>
                <li>
                  Consult with healthcare professionals before beginning any new
                  wellness or physical exercise program.
                </li>
                <li>
                  Not share, distribute, or resell our proprietary content,
                  including course materials or digital guides, without our
                  explicit written permission.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                4. Intellectual Property Rights
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                All content, trademarks, service marks, graphics, and materials
                on the WellMoon Veda website and within our courses are our
                exclusive property or licensed to us, and are protected by
                copyright and intellectual property laws. You are granted a
                limited, non-exclusive, non-transferable license to access and
                use the content for your personal, non-commercial use only. You
                may not reproduce, distribute, or create derivative works
                without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                5. Payments, Refunds, and Cancellation
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                All prices are subject to change. Payment must be received by us
                before any service is provided.
              </p>
              <h3 className="text-xl font-serif font-medium text-foreground mt-6 mb-2">
                Cancellation Policy:
              </h3>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                For scheduled appointments (e.g., private healing sessions), a
                cancellation fee may apply if the cancellation is made less than
                24 hours prior to the scheduled time. Specific policy details
                will be communicated at the time of booking.
              </p>
              <h3 className="text-xl font-serif font-medium text-foreground mt-6 mb-2">
                Digital Product Refunds:
              </h3>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Due to the digital nature of our courses and guides, all sales
                are final and non-refundable unless otherwise specified in
                writing for a particular product (e.g., a "30-day money-back
                guarantee").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                6. Limitation of Liability
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                To the maximum extent permitted by law, WellMoon Veda shall not
                be liable for any indirect, incidental, special, or
                consequential damages, including but not limited to damages for
                loss of profits, goodwill, or other intangible losses, resulting
                from your use of or inability to use the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                7. Modifications to Terms
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any
                time. We will notify users of significant changes by posting the
                new Terms on this page and updating the "Last updated" date.
                Continued use of our Services after any such change constitutes
                your acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                8. Governing Law
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction where WellMoon Veda is
                registered, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                9. Contact Information
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                For questions regarding these Terms and Conditions, please
                contact us at: **legal@wellmoonveda.com**
              </p>
            </section>

            <p className="text-sm mt-8 font-['Quicksand',_'Poppins',_sans-serif] text-foreground/70">
              *These Terms and Conditions are effective as of **{effectiveDate}
              **.*
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
