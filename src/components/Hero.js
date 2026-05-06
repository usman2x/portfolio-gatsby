import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import heroData from "../content/misc/hero.json"

const Hero = () => {
  const { title, subtitle, description, resumeLink, hireMeLink } = heroData

  return (
    <section
      className="container grid overflow-hidden border border-[var(--border-default)] bg-[var(--bg-card)] shadow-[var(--shadow-sm)] md:grid-cols-[minmax(220px,30%)_1fr]"
      id="top"
    >
      <div className="min-h-[240px] border-b border-[var(--border-default)] bg-[color-mix(in_srgb,var(--brand-secondary)_22%,var(--bg-card))] md:min-h-[320px] md:border-b-0 md:border-r">
        <StaticImage
          src="../images/usman.jpg"
          alt="Muhammad Usman portrait"
          placeholder="blurred"
          quality={88}
          formats={["auto", "webp", "avif"]}
          className="h-full w-full"
          loading="eager"
        />
      </div>
      <div className="flex flex-col justify-center bg-[linear-gradient(120deg,color-mix(in_srgb,var(--brand-accent)_72%,black)_0%,color-mix(in_srgb,var(--brand-secondary)_78%,var(--brand-primary))_52%,color-mix(in_srgb,var(--brand-primary)_76%,black)_100%)] px-4 py-6 md:px-8">
        <h1 className="mb-1 max-w-[720px] font-heading text-[clamp(1.85rem,2.8vw,2.65rem)] text-white">
          {title}
        </h1>
        <h2 className="mb-2 max-w-[720px] font-heading text-[clamp(1.05rem,1.9vw,1.5rem)] text-[#ffe7d8]">
          {subtitle}
        </h2>
        <p className="max-w-[720px] text-base text-[#fff7f2]">{description}</p>
        <div className="mt-4 flex flex-wrap gap-3 max-md:flex-col">
          <a
            href={resumeLink}
            className="theme-btn-outline-light theme-btn-lg max-md:w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
          <a
            href={hireMeLink}
            className="theme-btn-primary theme-btn-lg max-md:w-full"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
