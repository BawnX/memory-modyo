/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          "button-text": "var(--color-button-text)",
          "button-text-hover": "var(--color-button-hover-text)",
        },
      },
      backgroundColor: {
        skin: {
          base: "var(--color-fill-base)",
          accent: "var(--color-fill-accent)",
          "button-base": "var(--color-button-base)",
          "button-hover": "var(--color-button-hover)",
          "card-base": "var(--color-card-base)",
        },
      },
    },
    fontFamily: {
      sans: ['"Pixelify Sans Variable"', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
