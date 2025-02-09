import React from "react";
import contactData from "../content/misc/contact-data.json";

const ContactInfo = () => {
  return (
    <div className="row text-center mt-5">
       {/* Email Section */}
        <div className="col-md-4">
        <h5>Email</h5>
        <div className="d-flex align-items-center justify-content-center gap-2">
          <img src={contactData.email.icon} alt="Email Icon" width="30" />
          <a href={`mailto:${contactData.email.value}`} className="text-decoration-none">
            {contactData.email.value}
          </a>
        </div>
      </div>

      {/* Phone Section */}
      <div className="col-md-4">
        <h5>Phone</h5>
        <div className="d-flex align-items-center justify-content-center gap-2">
          <img src={contactData.phone.icon} alt="Phone Icon" width="30" />
          <p>{contactData.phone.value}</p>
        </div>
      </div>
      {/* Social Links Section */}
      <div className="col-md-4">
        <h5>Follow Me</h5>
        <div className="d-flex justify-content-center gap-3">
          {contactData.socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              <img src={link.icon} alt={link.name} width="30" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;