import React, { useEffect, useRef } from "react";
import { trackEvent } from "../utils/analytics";

const GiscusComments = ({ slug }) => {
  const commentsRef = useRef(null);
  const repo = process.env.GATSBY_GISCUS_REPO;
  const repoId = process.env.GATSBY_GISCUS_REPO_ID;
  const category = process.env.GATSBY_GISCUS_CATEGORY || "General";
  const categoryId = process.env.GATSBY_GISCUS_CATEGORY_ID;

  useEffect(() => {
    if (!commentsRef.current || !repo || !repoId || !categoryId) {
      return;
    }

    commentsRef.current.innerHTML = "";
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", repo);
    script.setAttribute("data-repo-id", repoId);
    script.setAttribute("data-category", category);
    script.setAttribute("data-category-id", categoryId);
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", slug);
    script.setAttribute("data-strict", "1");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-loading", "lazy");
    commentsRef.current.appendChild(script);
    trackEvent("comment_open", { event_category: "engagement", event_label: slug });
  }, [category, categoryId, repo, repoId, slug]);

  if (!repo || !repoId || !categoryId) {
    return (
      <div className="comments-empty-state">
        Comments are disabled. Configure giscus environment variables to enable discussions.
      </div>
    );
  }

  return <div ref={commentsRef} className="comments-block giscus" />;
};

export default GiscusComments;
