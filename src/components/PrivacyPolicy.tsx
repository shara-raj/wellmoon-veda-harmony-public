import Navigation from "./Navigation";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground text-center mb-12">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <section>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed text-lg">
                At WellMoon Veda, we are committed to maintaining the accuracy, confidentiality, and security of your
                personally identifiable information (“Personal Information”). As part of this commitment, our privacy
                policy governs our actions regarding the collection, use, and disclosure of Personal Information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Introduction</h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                We are responsible for maintaining and protecting the Personal Information under our control. We have
                designated an individual or individuals who is/are responsible for compliance with our privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Identifying Purposes</h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                We collect, use, and disclose Personal Information to provide you with the product or service you have
                requested and to offer you additional products and services we believe you might be interested in. The
                purposes for which we collect Personal Information will be identified before or at the time we collect
                the information. In certain circumstances, the purposes for which information is collected may be clear,
                and consent may be implied, such as where your name, address, and payment information are provided as
                part of the order process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Consent</h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Knowledge and consent are required for the collection, use, or disclosure of Personal Information except
                where required or permitted by law. Providing us with your Personal Information is always your choice.
                However, your decision not to provide certain information may limit our ability to provide you with our
                products or services. We will not require you to consent to the collection, use, or disclosure of
                information as a condition to the supply of a product or service, except as necessary to be able to
                supply the product or service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Limiting Collection</h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                The Personal Information collected will be limited to those details necessary for the purposes
                identified by us. With your consent, we may collect Personal Information from you in person, over the
                telephone or by corresponding with you via mail, facsimile, or the Internet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Limiting Use, Disclosure and Retention
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Personal Information may only be used or disclosed for the purpose for which it was collected unless you
                have otherwise consented, or when it is required or permitted by law. Personal Information will only be
                retained for the period of time required to fulfill the purpose for which we collected it or as may be
                required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Accuracy and Access</h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Personal Information will be maintained in as accurate, complete and up-to-date form as is necessary to
                fulfill the purposes for which it is to be used. Upon request, you will be informed of the existence,
                use and disclosure of your Personal Information, and will be given access to it. You may verify the
                accuracy and completeness of your Personal Information and may request that it be amended, if
                appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Safeguarding Customer Information
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Personal Information will be protected by security safeguards that are appropriate to the sensitivity
                level of the information. We take all reasonable precautions to protect your Personal Information from
                any loss or unauthorized use, access, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Cookies and Other Websites</h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                A cookie is a small computer file or piece of information that may be stored in your computer's hard
                drive when you visit our websites. We may use cookies to improve our website's functionality and in some
                cases, to provide visitors with a customized online experience. You may change your Internet browser
                settings to prevent your computer from accepting cookies. Our website may also contain links to other
                third-party sites that are not governed by this privacy policy. We suggest that you examine the privacy
                statements of those sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                You may direct any questions or enquiries with respect to our privacy policy or our practices by
                contacting: **privacy@wellmoonveda.com**
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

export default PrivacyPolicy;
