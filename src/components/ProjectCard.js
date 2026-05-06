import React, { useState } from "react"
import ProjectVisual from "./ProjectVisual"

const ProjectCard = ({ title, description, image, link, tags }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const canExpand = (description || "").length > 180
  const collapsedDescriptionStyle = isExpanded
    ? undefined
    : {
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }

  return (
    <div className="h-full overflow-hidden rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] shadow-[var(--shadow-sm)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]">
      <ProjectVisual
        image={image}
        alt={`${title} project preview`}
        title={title}
        className="h-[174px] w-full"
      />
      <div className="flex flex-col gap-2 p-4">
        <h5 className="text-base font-semibold text-[var(--text-main)]">
          {title}
        </h5>
        <p
          className="m-0 leading-[1.45] text-[var(--text-muted)]"
          style={collapsedDescriptionStyle}
        >
          {description}
        </p>
        {canExpand ? (
          <button
            type="button"
            className="w-fit border-0 bg-transparent p-0 text-[0.82rem] font-semibold text-[var(--brand-primary)] hover:text-[color-mix(in_srgb,var(--brand-primary)_85%,black)]"
            onClick={() => setIsExpanded(current => !current)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        ) : null}
        <div className="mb-[0.1rem] flex flex-wrap gap-2">
          {(tags || []).map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link-cta project-preview-more"
            aria-label={`Open ${title} project`}
          >
            <span aria-hidden="true">...</span>
            <span className="sr-only">Open project</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
