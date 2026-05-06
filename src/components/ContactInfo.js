import React from "react"
import contactData from "../content/misc/contact-data.json"

const ContactInfo = () => {
  const whatsappNumber = contactData.phone.value.replace(/\D/g, "")
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <div className="mt-4 grid gap-4 text-center md:grid-cols-3">
      <div>
        <div className="h-full rounded-[10px] border border-[var(--border-default)] bg-[var(--bg-card)] px-3 py-4">
          <h5>Email</h5>
          <div className="flex min-h-8 items-center justify-center gap-2">
            <img src={contactData.email.icon} alt="Email Icon" width="24" />
            <a
              href={`mailto:${contactData.email.value}`}
              className="link-underline text-[var(--text-muted)]"
            >
              {contactData.email.value}
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="h-full rounded-[10px] border border-[var(--border-default)] bg-[var(--bg-card)] px-3 py-4">
          <h5>Phone</h5>
          <div className="flex min-h-8 items-center justify-center gap-2">
            <img src={contactData.phone.icon} alt="Phone Icon" width="24" />
            <p className="m-0 text-[var(--text-muted)]">
              {contactData.phone.value}
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-2 inline-flex text-[0.88rem] font-semibold text-[var(--text-muted)]"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div>
        <div className="h-full rounded-[10px] border border-[var(--border-default)] bg-[var(--bg-card)] px-3 py-4">
          <h5>Follow Me</h5>
          <div className="flex justify-center gap-3">
            {contactData.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--bg-card)] transition hover:border-[var(--brand-primary)]"
              >
                <img src={link.icon} alt={link.name} width="24" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
