**Live Demo:** You can view the deployed version of this portfolio [here](https://usman2x.github.io/portfolio-gatsby/).

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/#gatsby-cli)) to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries).

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!


## Building a Gatsby Site for Production

To build your Gatsby site for production, follow these steps:

#### Steps:
1. **Install Dependencies**: Ensure all dependencies are installed by running:
   ```bash
   npm install
   ```
   
2. **Build the Site**: Use the `gatsby build` command to generate a production-ready version of your site:
   ```bash
   gatsby build
   ```
This command compiles and optimizes your site. Below are the complete steps executed when this command runs.

  - Source Compilation: Gatsby collects data from various sources (e.g., Markdown files, CMSs, APIs) and processes them using GraphQL. It generates a unified data layer that plugins and pages can query.
  
  - Code Transpilation & Bundling: Gatsby uses Webpack under the hood to transpile modern JavaScript (ES6+, JSX, TypeScript) into browser-compatible code. This step also bundles assets like CSS, images, and other static resources for optimal delivery.

  - Page Generation: Based on the React components defined in `src/pages` or dynamically created via the `createPages` API, Gatsby generates static HTML files for each page route. These are fully rendered static pages optimized for fast loading.

  - Service Worker & Asset Optimization: Gatsby optimizes assets (e.g., image compression, lazy-loading) and generates a service worker file if `gatsby-plugin-offline` is used. This ensures Progressive Web App (PWA) capabilities such as offline support and caching strategies.

  - Static Site Generation: The final static site is assembled in the `public/` folder, including all pre-rendered HTML files, bundled JavaScript, CSS, and media assets. This output is ready to be deployed to any static hosting provider.

  - `public/`: The main output directory containing the production-ready static site with all generated HTML, JavaScript, CSS, and assets.
  
  - `cache/`: A temporary directory used by Gatsby during the build process to store intermediate build artifacts and improve subsequent build times.

  - `.cache/`: Stores internal cache data that helps speed up rebuilds by avoiding redundant work (e.g., re-querying GraphQL).

  - `chunk-map.json`: Contains mappings of webpack chunks for efficient asset loading.


3. **Serve Locally (Optional)**: To test the production build locally before deployment, run:
   ```bash
   gatsby serve
   ```
   - This serves the built site on `http://localhost:9000`, allowing you to verify that everything works as expected.


## Building a Gatsby Site for Production using pathPrefix

When deploying a Gatsby site to GitHub Pages or any other platform where the site is hosted under a subdirectory (e.g., `https://<username>.github.io/<repository-name>`), it’s crucial to use the `--prefix-paths` flag during the build process. Here's why:

1. **Path Prefix Configuration**:
   - If your site is hosted under a subdirectory (like `/repository-name`), all asset paths (CSS, JS, images) and internal links need to include this prefix.
   - Without the `pathPrefix` configuration in `gatsby-config.js` and the `--prefix-paths` flag, Gatsby assumes the site is hosted at the root level (e.g., `https://example.com`).

2. **Broken Links and Assets**:
   - If you test your site locally without the `--prefix-paths` flag, Gatsby generates paths assuming the root domain. For example, an image might have a path like `/static/image.png`.
   - When deployed to GitHub Pages under a subdirectory (e.g., `/repository-name`), the browser looks for `/static/image.png` but fails because the correct path should be `/repository-name/static/image.png`.

3. **Testing Locally with Path Prefix**:
   - To avoid broken links and assets, always test your site locally with the `--prefix-paths` flag:
     ```bash
     gatsby build --prefix-paths
     gatsby serve
     ```
   - This ensures that all paths include the prefix specified in `gatsby-config.js` (e.g., `pathPrefix: "/repository-name"`).

4. **Consistency Between Local and Production**:
   - Testing with `--prefix-paths` ensures that your local environment mirrors the production environment, reducing the risk of issues like broken images or incorrect links after deployment.

## Directory layout for gatsby-portfolio

Here's a well-structured directory layout for Gatsby portfolio website, along with a description of each folder and file:  

```
/gatsby-portfolio/        # Root directory of your Gatsby portfolio project
│── /src/                 # Source directory containing core project files
│   ├── /components/      # Reusable React components (Navbar, Footer, Hero, etc.)
│   ├── /content/         # Configurable content (JSON & Markdown files)
│   │   ├── /blog/        # Markdown files for blog posts
│   │   ├── /experience/  # Markdown files for experience details
│   │   ├── /misc/        # Other structured content (about, skills, etc.)
│   ├── /pages/           # Individual page components (Index, About, Projects, etc.)
│   ├── /styles/          # CSS styles (global.css, component-specific styles)
│── /static/              # Static assets (served as-is, no processing by Webpack)
│   ├── /images/          # Store all images (for projects, avatar, etc.)
│   ├── cv.pdf            # Resume file for download
│── gatsby-config.js      # Gatsby configuration file (plugins, metadata, sources)
│── package.json          # Project metadata, dependencies, scripts
│── gatsby-node.js        # Customizations for Gatsby's data layer (if needed)
│── gatsby-browser.js     # Browser-side Gatsby APIs (global styles, animations)
│── gatsby-ssr.js         # Server-side rendering configurations (if needed)
│── README.md             # Documentation for project setup and structure
```

### Explanation of Key Files  

- **gatsby-config.js**  
  - This file configures Gatsby’s core settings, plugins, and data sources.  
  - Defines site metadata (title, description, author).  
  - Specifies file system sources (`gatsby-source-filesystem`) for Markdown and images.  
  - Includes image optimization (`gatsby-plugin-image`, `gatsby-transformer-sharp`).  

- **package.json**  
  - Contains project dependencies (`react`, `gatsby`, `graphql`).  
  - Defines scripts for development (`gatsby develop`), build (`gatsby build`), and deployment.  


