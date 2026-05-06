import React from "react"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo.js"

const Contact = () => {
  return (
    <section
      id="contact"
      className="container rounded-[14px] border border-[var(--border-default)] bg-[var(--bg-card)] p-5 shadow-[var(--shadow-sm)]"
    >
      <h2 className="mb-4 text-center font-heading text-3xl text-[var(--text-main)]">
        Contact Me
      </h2>
      <p className="mx-auto mb-5 max-w-[720px] text-center text-[0.95rem] text-[var(--text-muted)]">
        Share your project goals and timelines. I usually respond within 24
        hours.
      </p>

      <div className="flex justify-center">
        <ContactForm />
      </div>

      <ContactInfo />
    </section>
  )
}

export default Contact
