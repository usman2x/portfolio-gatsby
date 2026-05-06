const path = require("path");
const projects = require("./src/content/misc/projects.json");

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

  projects.forEach((project, index) => {
    const previousProject = index > 0 ? projects[index - 1] : null;
    const nextProject = index < projects.length - 1 ? projects[index + 1] : null;

    createPage({
      path: `/projects/${project.slug}/`,
      component: path.resolve(`./src/templates/project-template.js`),
      context: {
        project,
        previousProject,
        nextProject,
      },
    });
  });
};
