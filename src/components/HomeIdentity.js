import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import identity from "../content/misc/identity.json";
import homeContent from "../content/pages/home.json";
import contactData from "../content/misc/contact-data.json";

const HomeIdentity = () => {
  const { aboutLabel, callLabel } = homeContent.identity;

  return (
    <section className="container landing-section landing-section-surface landing-section-surface-brand identity-section" id="top">
      <div className="identity-layout">
        <Link to="/about/" className="identity-link-card">
          <div className="identity-portrait">
            <StaticImage
              src="../images/usman.jpg"
              alt={identity.portraitAlt}
              placeholder="blurred"
              quality={88}
              formats={["auto", "webp", "avif"]}
              className="identity-portrait-image"
              loading="eager"
            />
          </div>
          <div className="identity-heading-block">
            <p className="section-eyebrow">About</p>
            <h1 className="identity-name">{identity.name}</h1>
            <p className="identity-title">{identity.title}</p>
          </div>
        </Link>
        <div className="identity-body">
          <p className="identity-intro">{identity.intro}</p>
          <p className="identity-secondary">{identity.secondaryIntro}</p>
          <p className="identity-supporting">{identity.supportingLine}</p>
          <div className="identity-actions">
            <Link to="/about/" className="theme-btn-outline theme-btn-sm">
              {aboutLabel}
            </Link>
            <a
              href={contactData.meetingLink}
              className="theme-btn-primary theme-btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {callLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIdentity;
