import Footer from "@/components/Footer";
import SecondaryNavigation from "@/components/SecondaryNavigation";
import React from "react";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <>
      <SecondaryNavigation />
      <main
        className="px-4 py-16"
        style={{
          backgroundImage: "url(/images/pattern.png)",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="mx-auto max-w-6xl space-y-20">
          <ContactHeader />
          <div className="grid gap-16 md:grid-cols-2">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
