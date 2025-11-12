const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              At WellMoon Veda, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-['Quicksand',_'Poppins',_sans-serif]">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Payment information</li>
              <li>Health and wellness preferences</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-['Quicksand',_'Poppins',_sans-serif]">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions</li>
              <li>Send you updates and promotional materials</li>
              <li>Respond to your comments and questions</li>
              <li>Personalize your experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              You have the right to access, correct, or delete your personal information. You may also opt-out of receiving promotional communications from us at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at privacy@wellmoonveda.com
            </p>
          </section>

          <p className="text-sm mt-8 font-['Quicksand',_'Poppins',_sans-serif]">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
