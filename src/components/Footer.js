import React from "react"
import { Link } from "gatsby"
import identity from "../content/misc/identity.json"
import contactData from "../content/misc/contact-data.json"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-shell">
          <div className="footer-identity">
            <p className="footer-heading">{identity.name}</p>
            <p className="footer-text">
              Software engineer writing and building across full-stack, data,
              and AI systems.
            </p>
            <p className="footer-prompt">
              Have a project in mind? Start with a quote or book a short call.
            </p>
          </div>
          <div className="footer-column">
            <p className="footer-heading">Navigate</p>
            <Link to="/about/">About</Link>
            <Link to="/projects/">Projects</Link>
            <Link to="/blog/">Writings</Link>
            <Link to="/quote/">Get a Quote</Link>
          </div>
          <div className="footer-column">
            <p className="footer-heading">Connect</p>
            <a href={`mailto:${contactData.email.value}`}>
              {contactData.email.value}
            </a>
            <a
              href={contactData.meetingLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp / Book a Call
            </a>
            {contactData.socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-legal">
          <p>
            © {new Date().getFullYear()} {identity.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
