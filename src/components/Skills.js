import React, { useState } from "react"
import skills from "../content/misc/skills.json"
import {
  Code2,
  Database,
  Cloud,
  LineChart,
  Terminal,
  Layout,
  FileCode,
  Figma,
  Cpu,
  Globe,
  PenTool,
  Microscope,
  Layers,
  GitBranch,
  Smartphone,
  Monitor,
  Server,
  Shield,
  Search,
  Film,
} from "lucide-react"

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null)

  // Map to convert skill names to Lucide icons
  const getIconForSkill = skillName => {
    const iconMap = {
      React: <Code2 size={32} />,
      JavaScript: <Terminal size={32} />,
      "HTML/CSS": <Layout size={32} />,
      "Node.js": <Server size={32} />,
      Python: <FileCode size={32} />,
      Database: <Database size={32} />,
      AWS: <Cloud size={32} />,
      Git: <GitBranch size={32} />,
      "UI/UX": <Figma size={32} />,
      "Mobile Development": <Smartphone size={32} />,
      "Front-end Development": <Monitor size={32} />,
      "Back-end Development": <Server size={32} />,
      DevOps: <Cloud size={32} />,
      Testing: <Microscope size={32} />,
      "Big Data": <LineChart size={32} />,
      "Machine Learning": <Cpu size={32} />,
      "Agentic AI": <Cpu size={32} />,
      Blockchain: <Globe size={32} />,
      SEO: <Search size={32} />,
      Content: <PenTool size={32} />,
      Security: <Shield size={32} />,
      Design: <Layers size={32} />,
      Video: <Film size={32} />,
    }

    // Return the mapped icon or a default icon
    return iconMap[skillName] || <Code2 size={32} />
  }

  return (
    <section
      id="skills"
      className="container rounded-[14px] border border-[var(--border-default)] bg-[var(--bg-card)] p-5 shadow-[var(--shadow-sm)]"
    >
      <h2 className="mb-4 text-center font-heading text-3xl text-[var(--text-main)]">
        Skills & Technologies
      </h2>
      <p className="mx-auto mb-4 max-w-[720px] text-center text-[0.95rem] text-[var(--text-muted)]">
        Click on any skill to view related technologies.
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div
              className={`flex min-h-[136px] cursor-pointer flex-col items-center justify-center rounded-xl border bg-[var(--bg-card)] p-4 text-center transition ${
                activeSkill === index
                  ? "border-[var(--brand-primary)] shadow-[0_10px_22px_rgba(233,122,60,0.2)]"
                  : "border-[var(--border-default)] shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-sm)]"
              }`}
              onClick={() =>
                setActiveSkill(activeSkill === index ? null : index)
              }
            >
              <div className="mb-3 text-[var(--brand-primary)]">
                {getIconForSkill(skill.name)}
              </div>
              <h5 className="mb-0 text-center text-base font-semibold text-[var(--text-main)]">
                {skill.name}
              </h5>

              {activeSkill === index && skill.technologies && (
                <div className="mt-3 w-full pt-3">
                  <div className="flex flex-wrap justify-center gap-2">
                    {skill.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-[var(--bg-page)] px-3 py-2 text-sm text-[var(--text-main)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
