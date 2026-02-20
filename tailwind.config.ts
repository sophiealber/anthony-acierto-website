import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e6bb8",
          light: "#3b82f6",
          dark: "#1a5a9e",
        },
        surface: {
          DEFAULT: "#f8fafc",
          white: "#ffffff",
          muted: "#f1f5f9",
          border: "#e2e8f0",
        },
        teal: {
          DEFAULT: "#0d9488",
          light: "#14b8a6",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
