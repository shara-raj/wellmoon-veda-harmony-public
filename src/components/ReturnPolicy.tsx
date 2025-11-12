import Navigation from "./Navigation";
import Footer from "./Footer";

const ReturnPolicy = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-8">
          Return Policy
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              At WellMoon Veda, your satisfaction is our priority. We want you to feel confident in your investment in your wellness journey.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Subscription Services</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              We offer a 7-day money-back guarantee on all new subscriptions. If you're not satisfied with our services within the first 7 days, we'll provide a full refund.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 font-['Quicksand',_'Poppins',_sans-serif]">
              <li>Request must be made within 7 days of purchase</li>
              <li>Refund will be processed within 5-10 business days</li>
              <li>Cancellation is immediate upon refund approval</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Digital Products</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              Due to the nature of digital products (e-books, recorded sessions, courses), these are generally non-refundable once accessed. However, we evaluate refund requests on a case-by-case basis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Live Sessions and Workshops</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              Cancellations and refunds for live sessions:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 font-['Quicksand',_'Poppins',_sans-serif]">
              <li>More than 48 hours before: Full refund</li>
              <li>24-48 hours before: 50% refund</li>
              <li>Less than 24 hours: No refund, but you may reschedule once</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How to Request a Refund</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              To request a refund:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mt-4 font-['Quicksand',_'Poppins',_sans-serif]">
              <li>Email us at refunds@wellmoonveda.com</li>
              <li>Include your order number and reason for refund</li>
              <li>We'll respond within 48 hours</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Exceptions</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              Refunds may not be available for promotional or discounted purchases. Special terms will be clearly communicated at the time of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
              Questions about our return policy? Contact us at support@wellmoonveda.com
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

export default ReturnPolicy;
