import React from "react";
import contactData from "../content/misc/contact-data.json";

const ContactForm = () => {
  const formLink = process.env.GATSBY_FORM_LINK || "#";
  const siteUrl = process.env.GATSBY_SITE_URL || "https://www.musman.online";
  const redirectPage = new URL(contactData["redirect-page"], siteUrl).href;

  return (
    <div className="col-md-9 contact-form-col">
      <div className="card shadow-sm p-4 contact-form-card">
        <form action={formLink} method="POST">
          <div className="mb-3 contact-form-field">
            <label className="form-label contact-form-label">Name</label>
            <input 
              type="text" 
              name="name" 
              className="form-control contact-form-input" 
              placeholder="Enter your name" 
              required 
            />
          </div>
          <div className="mb-3 contact-form-field">
            <label className="form-label contact-form-label">Email</label>
            <input 
              type="email" 
              name="email" 
              className="form-control contact-form-input" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="mb-3 contact-form-field">
            <label className="form-label contact-form-label">Message</label>
            <textarea 
              name="message" 
              className="form-control contact-form-input" 
              rows="4" 
              placeholder="Write your message..." 
              required
            ></textarea>
          </div>
          <input type="hidden" name="_next" value={redirectPage} />
          <button type="submit" className="btn btn-primary w-100 contact-submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
