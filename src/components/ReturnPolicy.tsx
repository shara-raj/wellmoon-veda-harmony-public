import Navigation from "./Navigation";
import Footer from "./Footer";

const ReturnPolicy = () => {
  const effectiveDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-12">
            Return and Refund Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-10 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Our Commitment</h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                At **WellMoon Veda**, your satisfaction is our priority. We want you to feel confident in your
                investment in your wellness journey. This policy outlines our terms for refunds and returns across our
                service offerings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Subscription Services</h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                We offer a **7-day money-back guarantee** on all new subscriptions. If you're not satisfied with our
                services within the first 7 days, we'll provide a full refund.
              </p>
              <ul className="list-disc pl-8 space-y-2 mt-4 font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                <li>The refund request must be made within **7 days of the original purchase date**.</li>
                <li>Refunds will typically be processed within 5-10 business days.</li>
                <li>Cancellation of access is immediate upon refund approval.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Digital Products</h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Due to the nature of digital products (e-books, recorded courses, downloadable guides), these are
                generally **non-refundable once accessed or downloaded**. However, we evaluate refund requests on a
                case-by-case basis if there is a technical issue preventing access or if the product does not meet the
                specified description.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Live Sessions and Workshops</h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Cancellations and refunds for booked one-on-one sessions or live workshops are managed based on timing:
              </p>
              <ul className="list-disc pl-8 space-y-2 mt-4 font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                <li>**More than 48 hours before:** Full refund.</li>
                <li>**24–48 hours before:** 50% refund.</li>
                <li>
                  **Less than 24 hours:** No refund, but you may be granted a **one-time rescheduling** opportunity at
                  our discretion.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">How to Request a Refund</h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                To initiate a refund request, please follow these steps:
              </p>
              <ol className="list-decimal pl-8 space-y-2 mt-4 font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                <li>Email us at **refunds@wellmoonveda.com**.</li>
                <li>
                  Include your original order number, date of purchase, and the specific reason for your refund request.
                </li>
                <li>We commit to reviewing your request and responding within 48 hours.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Exceptions and Promotional Offers
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Refunds may not be available for deeply discounted bundles, promotional, or giveaway purchases. Special
                terms for these offers will be clearly communicated at the time of purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                If you have any further questions about our return policy, please contact our support team at
                **support@wellmoonveda.com**.
              </p>
            </section>

            <p className="text-sm mt-8 font-['Quicksand',_'Poppins',_sans-serif] text-foreground/70">
              *This Return and Refund Policy is effective as of **{effectiveDate}**.*
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
