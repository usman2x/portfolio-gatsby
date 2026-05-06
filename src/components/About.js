import React from "react"
import aboutData from "../content/misc/about.json"

const About = () => {
  const { description, bio, videoUrl } = aboutData

  return (
    <section
      id="about"
      className="container rounded-[14px] border border-[var(--border-default)] bg-[var(--bg-card)] p-5 shadow-[var(--shadow-sm)]"
    >
      <h2 className="mb-4 text-center font-heading text-3xl text-[var(--text-main)]">
        About Me
      </h2>

      <div className="grid gap-4">
        <div>
          <p className="mb-3 leading-[1.62] text-[var(--text-muted)]">
            {description}
          </p>

          <div className="rounded-[14px] border border-[var(--border-default)] bg-[var(--bg-card)] px-4 py-4">
            <h3 className="mb-3 font-heading text-[1.05rem] text-[var(--text-main)]">
              Achievements
            </h3>
            <ul className="list-none space-y-2">
              {bio.map((item, index) => (
                <li
                  key={index}
                  className="relative pl-4 text-[var(--text-muted)] before:absolute before:left-0 before:top-[0.62rem] before:h-[6px] before:w-[6px] before:rounded-full before:bg-[var(--brand-primary)] before:content-['']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {videoUrl && (
        <div className="mt-4">
          <h3 className="mb-2 text-center font-heading text-[1.15rem] text-[var(--text-main)]">
            Video Introduction
          </h3>
          <div className="mx-auto mt-4 aspect-video w-full max-w-[760px] overflow-hidden rounded-[14px] shadow-[var(--shadow-md)]">
            <iframe
              src={videoUrl}
              title="Introduction Video"
              className="h-full w-full border-0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  )
}

export default About
