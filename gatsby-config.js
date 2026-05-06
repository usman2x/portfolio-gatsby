require("dotenv").config();

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: "Muhammad Usman | Engineering Journal and Selected Work",
    description: "Software engineering notes, selected delivery work, and practical ways to start a project conversation.",
    author: "Muhammad Usman",
    siteUrl: "https://www.musman.online",
    giscus: {
      repo: process.env.GATSBY_GISCUS_REPO || "",
      repoId: process.env.GATSBY_GISCUS_REPO_ID || "",
      category: process.env.GATSBY_GISCUS_CATEGORY || "General",
      categoryId: process.env.GATSBY_GISCUS_CATEGORY_ID || "",
    },
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap.xml",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID || "default-tracking-id", // Use environment variable
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/experience/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/misc/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Muhammad Usman`,
        short_name: `musman`,
        start_url: `/`,
        background_color: `#f7f3ee`,
        display: `minimal-ui`,
        icon: `static/images/portfolio.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
