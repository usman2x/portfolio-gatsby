const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}}) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/blog-template.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
