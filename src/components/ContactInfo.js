import React from "react";
import contactData from "../content/misc/contact-data.json";

const ContactInfo = () => {
  const whatsappNumber = contactData.phone.value.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="row text-center mt-4 contact-info-grid">
      <div className="col-md-4">
        <div className="contact-info-card">
          <h5>Email</h5>
          <div className="d-flex align-items-center justify-content-center gap-2 contact-info-row">
            <img src={contactData.email.icon} alt="Email Icon" width="24" />
            <a href={`mailto:${contactData.email.value}`} className="contact-info-link">
              {contactData.email.value}
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="contact-info-card">
          <h5>Phone</h5>
          <div className="d-flex align-items-center justify-content-center gap-2 contact-info-row">
            <img src={contactData.phone.icon} alt="Phone Icon" width="24" />
            <p className="contact-info-text">{contactData.phone.value}</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info-link contact-whatsapp-link"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="col-md-4">
        <div className="contact-info-card">
          <h5>Follow Me</h5>
          <div className="d-flex justify-content-center gap-3 contact-social-links">
            {contactData.socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <img src={link.icon} alt={link.name} width="24" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
