import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const ExperiencePage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <Layout>
      <div className="container mb-6">
        <h1 className="text-center font-heading text-[clamp(1.7rem,2.6vw,2.35rem)] leading-[1.15] text-[var(--text-main)]">
          {frontmatter.title}
        </h1>
      </div>
      <div
        className="article-prose prose prose-lg max-w-[680px] mx-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/experience/all.md/" }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default ExperiencePage
