/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.md",
    "./src/**/*.mdx",
    "./docs/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--brand-primary)",
          secondary: "var(--brand-secondary)",
          accent: "var(--brand-accent)",
        },
        background: {
          page: "var(--bg-page)",
          card: "var(--bg-card)",
          muted: "var(--bg-muted)",
        },
        text: {
          main: "var(--text-main)",
          muted: "var(--text-muted)",
        },
        border: {
          default: "var(--border-default)",
        },
      },
      fontFamily: {
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Merriweather", "ui-serif", "Georgia", "serif"],
      },
      backgroundImage: {
        "sunset-sky":
          "linear-gradient(120deg, #6F8798 0%, #F2B38A 52%, #E97A3C 100%)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "680px",
            color: "var(--text-main)",
            lineHeight: "1.7",
            p: {
              marginTop: "0.85em",
              marginBottom: "0.95em",
              color: "var(--text-main)",
            },
            h1: {
              fontFamily: "Merriweather, ui-serif, Georgia, serif",
              color: "var(--text-main)",
            },
            h2: {
              fontFamily: "Merriweather, ui-serif, Georgia, serif",
              color: "var(--text-main)",
            },
            h3: {
              fontFamily: "Merriweather, ui-serif, Georgia, serif",
              color: "var(--text-main)",
            },
            h4: {
              fontFamily: "Merriweather, ui-serif, Georgia, serif",
              color: "var(--text-main)",
            },
            a: {
              color: "var(--brand-primary)",
              textDecoration: "none",
              fontWeight: "600",
            },
            "a:hover": {
              color: "var(--brand-accent)",
              textDecoration: "underline",
            },
            blockquote: {
              color: "var(--text-muted)",
              borderLeftColor: "var(--brand-accent)",
              backgroundColor: "var(--bg-muted)",
              borderRadius: "0 0.5rem 0.5rem 0",
              padding: "0.8rem 1rem",
            },
            strong: {
              color: "var(--text-main)",
            },
          },
        },
        lg: {
          css: {
            fontSize: "1.05rem",
            lineHeight: "1.8",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
