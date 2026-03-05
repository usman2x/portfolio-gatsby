import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo.js";

const Contact = () => {
  return (
    <section id="contact" className="container section-shell contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="section-subtitle contact-subtitle">Share your project goals and timelines. I usually respond within 24 hours.</p>

      <div className="row justify-content-center contact-layout">
        <ContactForm />
      </div>

      <ContactInfo />
    </section>
  );
};

export default Contact;
