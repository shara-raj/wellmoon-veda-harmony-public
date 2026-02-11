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
          <h1 className="text-4xl md:text-5xl  font-semibold text-foreground mb-12">
            Terms and Conditions
          </h1>

          <div className="prose prose-lg max-w-none space-y-10 text-muted-foreground">
            {/* 1. Introduction */}
            <section>
              <h2 className="text-2xl  font-semibold text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                This website is operated by WellMoon Veda. We offer guided
                forest therapy walks, yoga training, wellness workshops, and
                retreat packages. All trainings and workshops are conducted by
                certified instructors associated with WellMoon Veda.
              </p>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                The terms “we”, “us”, and “our” refer to WellMoon Veda. Your
                access and use of our website are governed by these Terms and
                Conditions (“Terms”), along with our Privacy Policy. By using
                our website, you agree to comply with these Terms. If you do not
                agree, you are not authorized to use our website or services.
              </p>
            </section>

            {/* 2. Use of Our Website */}
            <section>
              <h2 className="text-2xl  font-semibold text-foreground mb-4">
                2. Use of Our Website
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                You agree to use our website only for lawful purposes. You will
                not engage in actions that violate intellectual property rights,
                privacy laws, or any applicable regulations. By agreeing to
                these Terms, you confirm that you are of legal age to enter into
                a binding contract.
              </p>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                You agree not to attempt unauthorized access to our systems or
                disrupt the security, network integrity, or operations of our
                website. You also agree to provide accurate, updated personal
                information whenever required.
              </p>
            </section>

            {/* 3. General Conditions */}
            <section>
              <h2 className="text-2xl  font-semibold text-foreground mb-4">
                3. General Conditions
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                We reserve the right to refuse service to anyone at any time. We
                may change, suspend, or discontinue any part of the website
                without notice. Continued use of our website after modifications
                implies acceptance of the updated Terms.
              </p>
            </section>

            {/* 4. Products and Services */}
            <section>
              <h2 className="text-2xl  font-semibold text-foreground mb-4">
                4. Products and Services
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                All purchases made through our website are subject to
                availability. We may limit or cancel quantities or restrict
                sales to specific regions or individuals. Prices are shown in
                INR unless stated otherwise. We reserve the right to decline
                suspicious or fraudulent orders.
              </p>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                While we strive for accuracy, we do not guarantee that product
                colors, visuals, or design elements displayed on our website are
                fully accurate due to display variations.
              </p>
            </section>

            {/* 5. Links to Third-Party Websites */}
            <section>
              <h2 className="text-2xl  font-semibold text-foreground mb-4">
                5. Links to Third-Party Websites
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                Any links to third-party websites are provided for convenience.
                WellMoon Veda does not endorse, control, or take responsibility
                for external sites, their content, or their services. Accessing
                third-party links is at your own risk.
              </p>
            </section>

            {/* 6. User Content & Submissions */}
            <section>
              <h2 className="text-2xl  font-semibold text-foreground mb-4">
                6. User Content, Feedback & Submissions
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                You are solely responsible for any content you submit, including
                comments, feedback, and posts. By submitting content, you grant
                us permission to edit, modify, publish, or use it in any form.
                You agree not to upload illegal, abusive, or harmful content.
              </p>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                We reserve the right to remove any content that violates these
                Terms.
              </p>
            </section>

            {/* 7. Personal Information */}
            <section>
              <h2 className="text-2xl  font-semibold text-foreground mb-4">
                7. Personal Information
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                Your submission of personal information is governed by our
                Privacy Policy. Please review it to understand how we collect,
                store, and use your data.
              </p>
            </section>

            {/* 8. Errors & Omissions */}
            <section>
              <h2 className="text-2xl  font-semibold text-foreground mb-4">
                8. Errors and Omissions
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                Occasionally, our website may contain errors, typographical
                mistakes, or outdated information. We reserve the right to
                correct such errors and update information without prior notice.
              </p>
            </section>

            {/* 9. Limitation of Liability */}
            <section>
              <h2 className="text-2xl  font-semibold text-foreground mb-4">
                9. Disclaimer & Limitation of Liability
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                Our website and services are provided "as is" without warranties
                of any kind. We do not guarantee uninterrupted, secure, or
                error-free service. WellMoon Veda is not liable for damages
                arising from the use or inability to use our website, including
                indirect or consequential losses.
              </p>
            </section>

            {/* 10. Indemnification */}
            <section>
              <h2 className="text-2xl  font-semibold text-foreground mb-4">
                10. Indemnification
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                You agree to indemnify and hold WellMoon Veda harmless from any
                claims, liabilities, damages, or expenses arising from your use
                of our website or violation of these Terms.
              </p>
            </section>

            {/* 11. Entire Agreement */}
            <section>
              <h2 className="text-2xl  font-semibold text-foreground mb-4">
                11. Entire Agreement
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                These Terms constitute the entire agreement between you and
                WellMoon Veda regarding your use of our website and services,
                superseding any prior agreements.
              </p>
            </section>

            {/* 12. Waiver */}
            <section>
              <h2 className="text-2xl  font-semibold text-foreground mb-4">
                12. Waiver
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                Failure to enforce any part of the Terms does not constitute a
                waiver of our rights to enforce them in the future.
              </p>
            </section>

            {/* 13. Severability */}
            <section>
              <h2 className="text-2xl  font-semibold text-foreground mb-4">
                13. Severability
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                If any provision of these Terms is found invalid or
                unenforceable, the remaining provisions will continue to remain
                in effect.
              </p>
            </section>

            {/* 14. Governing Law */}
            <section>
              <h2 className="text-2xl  font-semibold text-foreground mb-4">
                14. Governing Law
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                These Terms shall be governed by the laws of India. Any disputes
                must be resolved in the courts of Kalpetta, India.
              </p>
            </section>

            {/* 15. Contact */}
            <section>
              <h2 className="text-2xl  font-semibold text-foreground mb-4">
                15. Contact Information
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] leading-relaxed">
                For questions regarding these Terms and Conditions, contact us
                at:
                <br />
                <strong>legal@wellmoonveda.com</strong>
              </p>
            </section>

            {/* Effective Date */}
            <p className="text-lg mt-8 font-['Quicksand',_'Poppins',_sans-serif] text-foreground/70">
              *These Terms and Conditions are effective as of{" "}
              <strong>{effectiveDate}</strong>.*
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
