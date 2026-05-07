import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { format } from "date-fns"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../components/seo" // Import the SEO component
import ShareActions from "../components/ShareActions"
import GiscusComments from "../components/GiscusComments"
import contactData from "../content/misc/contact-data.json"

const BlogTemplate = ({ data }) => {
  const { markdownRemark, site, allMarkdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title, date, description, tags = [], slug, cover } = frontmatter
  const coverImage = getImage(cover)
  const allPosts = allMarkdownRemark.nodes
  const currentPostIndex = allPosts.findIndex(
    post => post.frontmatter.slug === slug
  )
  const newerPost = currentPostIndex > 0 ? allPosts[currentPostIndex - 1] : null
  const olderPost =
    currentPostIndex >= 0 && currentPostIndex < allPosts.length - 1
      ? allPosts[currentPostIndex + 1]
      : null
  const relatedPosts = allPosts
    .filter(post => post.frontmatter.slug !== slug)
    .map(post => {
      const sharedTagCount = (post.frontmatter.tags || []).filter(tag =>
        tags.includes(tag)
      ).length
      return { ...post, sharedTagCount }
    })
    .sort((left, right) => {
      if (right.sharedTagCount !== left.sharedTagCount) {
        return right.sharedTagCount - left.sharedTagCount
      }

      return (
        new Date(right.frontmatter.date).getTime() -
        new Date(left.frontmatter.date).getTime()
      )
    })
    .filter(post => post.sharedTagCount > 0)
    .slice(0, 3)
  const fallbackRelatedPosts =
    relatedPosts.length > 0
      ? relatedPosts
      : allPosts.filter(post => post.frontmatter.slug !== slug).slice(0, 3)
  const postUrl = `${site.siteMetadata.siteUrl}/blog/${slug}`
  const ogImage = cover?.childImageSharp?.gatsbyImageData?.images?.fallback?.src
    ? `${site.siteMetadata.siteUrl}${cover.childImageSharp.gatsbyImageData.images.fallback.src}`
    : null
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description || `A detailed article on ${title}`,
    datePublished: new Date(date).toISOString(),
    author: {
      "@type": "Person",
      name: site.siteMetadata.author,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    image: ogImage ? [ogImage] : undefined,
  }

  return (
    <Layout>
      <SEO
        title={title}
        description={description || `A detailed article on ${title}`}
        pathname={`/blog/${slug}`}
        image={ogImage}
        type="article"
      />
      <section className="container blog-post-shell">
        <Link to="/blog/" className="blog-post-back">
          ← Back to writings
        </Link>
        <article className="blog-article">
          {coverImage ? (
            <GatsbyImage
              image={coverImage}
              alt={title}
              className="blog-cover-image"
            />
          ) : null}
          <header className="blog-post-header">
            <h1 className="blog-post-title">{title}</h1>
            {description ? (
              <p className="blog-post-description">{description}</p>
            ) : null}
            <p className="blog-post-meta">
              <span>{format(new Date(date), "MMMM d, yyyy")}</span>
              <span>•</span>
              <span>{markdownRemark.timeToRead} min read</span>
            </p>
          </header>
          <div className="blog-article-layout">
            <div
              className="blog-post-content article-prose"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <aside className="blog-share-rail">
              <p className="blog-detail-label">Share this article</p>
              <ShareActions title={title} pathname={`/blog/${slug}`} />
            </aside>
          </div>
          {tags.length ? (
            <div className="blog-post-tags">
              {tags.map(tag => (
                <Link
                  key={tag}
                  className="tag-chip"
                  to={`/blog/?tag=${encodeURIComponent(tag.toLowerCase())}`}
                >
                  #{tag}
                </Link>
              ))}
            </div>
          ) : null}
        </article>
        {fallbackRelatedPosts.length ? (
          <section className="blog-detail-section">
            <div className="blog-detail-section-header">
              <h2 className="interior-section-title">Related writings</h2>
              <Link to="/blog/" className="text-link-cta link-underline">
                View all writings
              </Link>
            </div>
            <div className="blog-related-grid">
              {fallbackRelatedPosts.map(post => (
                <article
                  key={post.frontmatter.slug}
                  className="blog-related-card"
                >
                  <p className="preview-meta">
                    {format(new Date(post.frontmatter.date), "MMMM d, yyyy")}
                  </p>
                  <h3 className="blog-related-title">
                    <Link
                      to={`/blog/${post.frontmatter.slug}`}
                      className="writing-list-title-link link-underline"
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h3>
                  <p className="preview-card-summary">
                    {post.frontmatter.description || post.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}
        {newerPost || olderPost ? (
          <nav className="blog-post-pagination" aria-label="Article navigation">
            {newerPost ? (
              <Link
                to={`/blog/${newerPost.frontmatter.slug}`}
                className="project-pagination-card"
              >
                <span className="project-pagination-label">Newer post</span>
                <span>{newerPost.frontmatter.title}</span>
              </Link>
            ) : (
              <div className="project-pagination-card project-pagination-card-disabled">
                <span className="project-pagination-label">Newer post</span>
                <span>No newer article</span>
              </div>
            )}
            {olderPost ? (
              <Link
                to={`/blog/${olderPost.frontmatter.slug}`}
                className="project-pagination-card project-pagination-card-next"
              >
                <span className="project-pagination-label">Older post</span>
                <span>{olderPost.frontmatter.title}</span>
              </Link>
            ) : (
              <div className="project-pagination-card project-pagination-card-next project-pagination-card-disabled">
                <span className="project-pagination-label">Older post</span>
                <span>No older article</span>
              </div>
            )}
          </nav>
        ) : null}
        <section className="comments-section">
          <h3 className="interior-section-title">Comments</h3>
          <GiscusComments slug={slug} />
        </section>
      </section>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date
        description
        tags
        slug
        cover {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              quality: 80
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        excerpt(pruneLength: 140)
        frontmatter {
          title
          date
          description
          tags
          slug
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
        author
      }
    }
  }
`

export default BlogTemplate
