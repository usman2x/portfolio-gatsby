import React from "react";
import { Link } from "gatsby";
import homeContent from "../content/pages/home.json";
import contactData from "../content/misc/contact-data.json";
import identity from "../content/misc/identity.json";

const HomeCta = () => {
  const credentials = [
    { label: "LinkedIn", href: contactData.socialLinks.find((item) => item.name === "LinkedIn")?.url },
    { label: "GitHub", href: contactData.socialLinks.find((item) => item.name === "GitHub")?.url },
    { label: "WhatsApp", href: contactData.meetingLink },
    { label: "Email", href: `mailto:${contactData.email.value}` },
    { label: "Resume", href: identity.resumeLink },
  ].filter((item) => item.href);

  return (
    <section id="contact" className="container landing-section cta-section">
      <div className="cta-layout">
        <div className="cta-copy">
          <p className="section-eyebrow">{homeContent.cta.eyebrow}</p>
          <h2 className="landing-section-title">{homeContent.cta.title}</h2>
          <p className="landing-section-description">{homeContent.cta.description}</p>
          <div className="cta-actions">
            <Link to="/quote/" className="theme-btn-primary theme-btn-sm">
              {homeContent.cta.quoteLabel}
            </Link>
            <a
              href={contactData.meetingLink}
              className="theme-btn-outline theme-btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {homeContent.cta.callLabel}
            </a>
            <a href="#home-credentials" className="text-link-cta">
              {homeContent.cta.credentialsLabel}
            </a>
          </div>
        </div>
        <div className="credentials-panel" id="home-credentials">
          <h3>Credentials and contact</h3>
          <div className="credentials-list">
            {credentials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="credential-link"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span>{item.label}</span>
                <span className="credential-link-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCta;
