import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import identity from "../content/misc/identity.json"
import aboutPage from "../content/pages/about.json"
import contactData from "../content/misc/contact-data.json"

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title={aboutPage.seo.title}
        description={aboutPage.seo.description}
        pathname="/about/"
      />
      <section className="container interior-page about-page-shell">
        <div className="page-intro-grid">
          <div className="page-intro-portrait">
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
          <div className="page-intro-copy">
            <h1 className="page-title">{identity.name}</h1>
            <p className="page-subtitle">{identity.title}</p>
            <p className="page-description">{aboutPage.intro.title}</p>
          </div>
        </div>

        <section className="interior-section">
          {aboutPage.summary.map(paragraph => (
            <p key={paragraph} className="interior-copy">
              {paragraph}
            </p>
          ))}
        </section>

        <section className="interior-section">
          <h2 className="interior-section-title">Strengths</h2>
          <div className="info-grid">
            {aboutPage.strengths.map(item => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="interior-section">
          <h2 className="interior-section-title">How I work</h2>
          <ul className="principles-list">
            {aboutPage.principles.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="interior-section">
          <h2 className="interior-section-title">
            Selected experience highlights
          </h2>
          <ul className="highlights-list">
            {aboutPage.highlights.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="interior-section" id="credentials">
          <h2 className="interior-section-title">Credentials</h2>
          <div className="credentials-list">
            <a
              href={identity.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="credential-link"
            >
              <span>Resume</span>
              <span className="credential-link-arrow">↗</span>
            </a>
            <a
              href={`mailto:${contactData.email.value}`}
              className="credential-link"
            >
              <span>Email</span>
              <span className="credential-link-arrow">↗</span>
            </a>
            <a
              href={contactData.meetingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="credential-link"
            >
              <span>WhatsApp</span>
              <span className="credential-link-arrow">↗</span>
            </a>
            {contactData.socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="credential-link"
              >
                <span>{link.name}</span>
                <span className="credential-link-arrow">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="interior-section interior-cta">
          <h2 className="interior-section-title">{aboutPage.cta.title}</h2>
          <p className="interior-copy">{aboutPage.cta.description}</p>
          <div className="cta-actions">
            <Link to="/quote/" className="theme-btn-primary theme-btn-sm">
              Get a Quote
            </Link>
            <a
              href={contactData.meetingLink}
              className="theme-btn-outline theme-btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default AboutPage
