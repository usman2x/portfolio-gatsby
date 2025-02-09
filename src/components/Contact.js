import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo.js";

const Contact = () => {
  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center mb-4">Contact Me</h2>

      <div className="row justify-content-center">
        {/* Render Contact Form */}
        <ContactForm />
      </div>

      {/* Render Contact Info */}
      <ContactInfo />
    </section>
  );
};

export default Contact;