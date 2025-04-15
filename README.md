# 📄 Gatsby Site: Local Testing & GitHub Pages Deployment

## 🚀 1. Run Gatsby Locally (for Development)

To start the site in development mode:

```bash
gatsby develop
```

- Opens at `http://localhost:8000`
- Live reload, fast refresh enabled
- Ignores `pathPrefix`, so URL paths are root-based (good for local dev)

---

## 🧪 2. Test Site Locally With `pathPrefix` (Like on GitHub Pages)

If your site will be deployed under a subdirectory like `https://username.github.io/my-site`, you need to test it locally with `pathPrefix`.

### ✅ Steps:

1. Set the `pathPrefix` in `gatsby-config.js`:

```js
module.exports = {
  pathPrefix: "/my-site", // replace with your repo name
  // other config...
}
```

2. Build the site with prefix:

```bash
gatsby build --prefix-paths
```

3. Serve the site locally:

```bash
gatsby serve --prefix-paths
```

- Opens at `http://localhost:9000/my-site/`
- Good for verifying routing, assets, and links before pushing to GitHub Pages

---

## 🚀 3. Deploy to GitHub Pages

### 1. Make sure you have `gh-pages` installed:

```bash
npm install gh-pages --save-dev
```

### 2. Update your `package.json`:

```json
"scripts": {
  "develop": "gatsby develop",
  "build": "gatsby build",
  "serve": "gatsby serve",
  "deploy": "gatsby build --prefix-paths && gh-pages -d public"
}
```

### 3. Deploy:

```bash
npm run deploy
```

- This builds the project with the correct path prefix and pushes the `public/` folder to the `gh-pages` branch.

---

## ✅ Bonus: Test Build Without Deploying

You can also manually test the build before deploying:

```bash
npm run build
gatsby serve --prefix-paths
```