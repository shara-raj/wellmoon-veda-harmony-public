import Navigation from "./Navigation";
import Footer from "./Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-8">
          Terms and Conditions
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              By accessing and using WellMoon Veda's services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Use of Services</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              Our wellness services, including yoga, meditation, and healing practices, are intended for personal wellness purposes. They are not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">User Responsibilities</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-['Quicksand',_'Poppins',_sans-serif]">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Use our services in accordance with all applicable laws</li>
              <li>Consult with healthcare professionals before beginning any wellness program</li>
              <li>Not share or distribute our proprietary content without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              All content, trademarks, and materials on WellMoon Veda are our property or licensed to us. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              WellMoon Veda shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Modifications</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              For questions regarding these Terms and Conditions, please contact us at legal@wellmoonveda.com
            </p>
          </section>

          <p className="text-sm mt-8 font-['Quicksand',_'Poppins',_sans-serif]">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
