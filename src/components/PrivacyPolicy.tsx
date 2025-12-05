import SecondaryNavigation from "./SecondaryNavigation";
import Footer from "./Footer";
import { useEffect } from "react";
import backgroundPattern from "@/assets/images/pattern.png";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);
  return (
    <>
      <SecondaryNavigation />
      <div
        className="min-h-screen bg-background pt-20"
        style={{
          backgroundImage: `url(${backgroundPattern})`,
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground text-center mb-12">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            {/* Intro paragraph */}
            <section>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed text-lg">
                At WellMoon Veda, we are committed to maintaining the accuracy,
                confidentiality, and security of your personally identifiable
                information (“Personal Information”). As part of this
                commitment, this Privacy Policy governs our actions as they
                relate to the collection, use, and disclosure of Personal
                Information.
              </p>
            </section>

            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Introduction
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                We are responsible for maintaining and protecting the Personal
                Information under our control. We have designated an individual
                or individuals who are responsible for compliance with this
                Privacy Policy.
              </p>
            </section>

            {/* Identifying Purposes */}
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Identifying Purposes
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                We collect, use, and disclose Personal Information to provide
                you with the products or services you have requested and to
                offer you additional products and services we believe you might
                be interested in. The purposes for which we collect Personal
                Information will be identified before or at the time we collect
                the information. In certain circumstances, the purposes for
                which information is collected may be clear and consent may be
                implied, such as where your name, address, and payment
                information are provided as part of the order process.
              </p>
            </section>

            {/* Consent */}
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Consent
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Knowledge and consent are required for the collection, use, or
                disclosure of Personal Information except where required or
                permitted by law. Providing us with your Personal Information is
                always your choice. However, your decision not to provide
                certain information may limit our ability to provide you with
                our products or services. We will not require you to consent to
                the collection, use, or disclosure of information as a condition
                to the supply of a product or service, except as required to be
                able to supply that product or service.
              </p>
            </section>

            {/* Limiting Collection */}
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Limiting Collection
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                The Personal Information collected will be limited to those
                details necessary for the purposes identified by us. With your
                consent, we may collect Personal Information from you in person,
                over the telephone, or by corresponding with you via mail,
                email, or the Internet.
              </p>
            </section>

            {/* Limiting Use, Disclosure and Retention */}
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Limiting Use, Disclosure, and Retention
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Personal Information may only be used or disclosed for the
                purpose for which it was collected unless you have otherwise
                consented, or when it is required or permitted by law. Personal
                Information will only be retained for the period of time
                required to fulfill the purpose for which we collected it or as
                may be required by law.
              </p>
            </section>

            {/* Accuracy & Customer Access */}
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Accuracy and Customer Access
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Personal Information will be maintained in as accurate,
                complete, and up-to-date a form as is necessary to fulfill the
                purposes for which it is to be used.
              </p>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Upon request, you will be informed of the existence, use, and
                disclosure of your Personal Information and will be given access
                to it. You may verify the accuracy and completeness of your
                Personal Information and may request that it be amended if
                appropriate. However, in certain circumstances permitted by law,
                we may not be able to disclose certain information to you, for
                example, if other individuals are referenced or if there are
                legal, security, or commercial proprietary restrictions.
              </p>
            </section>

            {/* Safeguarding Customer Information */}
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Safeguarding Customer Information
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Personal Information will be protected by security safeguards
                that are appropriate to the sensitivity level of the
                information. We take all reasonable precautions to protect your
                Personal Information from any loss or unauthorized use, access,
                or disclosure.
              </p>
            </section>

            {/* Openness */}
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Openness
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                We will make information available to you about our policies and
                practices with respect to the management of your Personal
                Information.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Cookies
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                A cookie is a small computer file or piece of information that
                may be stored on your computer's hard drive when you visit our
                website. We may use cookies to improve our website's
                functionality and, in some cases, to provide visitors with a
                customized online experience. You may change your Internet
                browser settings to prevent your computer from accepting cookies
                or to notify you when you receive a cookie so that you may
                decline its acceptance. Please note, however, that if you
                disable cookies, you may not experience optimal performance of
                our website.
              </p>
            </section>

            {/* Other Websites */}
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Other Websites
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                Our website may contain links to other third-party sites that
                are not governed by this Privacy Policy. Although we endeavour
                to only link to sites with high privacy standards, our Privacy
                Policy will no longer apply once you leave our website. We are
                not responsible for the privacy practices of third-party
                websites, and we encourage you to review the privacy statements
                of those sites to learn how your information may be collected,
                used, shared, and disclosed.
              </p>
            </section>

            {/* Contact / Complaints */}
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Contact Us / Handling Complaints and Suggestions
              </h2>
              <p className="font-['Quicksand',_'Poppins',_sans-serif] font-normal leading-relaxed">
                You may direct any questions, enquiries, or complaints with
                respect to this Privacy Policy or our practices by contacting:
                <br />
                <strong>privacy@wellmoonveda.com</strong>
              </p>
            </section>

            {/* Last updated */}
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
