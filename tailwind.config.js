const { gruvbox } = require("./lib/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gruvbox: {
          text: {
            primary: gruvbox.colors.text.primary,
            secondary: gruvbox.colors.text.secondary,
            muted: gruvbox.colors.text.muted,
          },
          border: {
            default: gruvbox.colors.border.default,
            hover: gruvbox.colors.border.hover,
            muted: gruvbox.colors.border.muted,
          },
          background: {
            default: gruvbox.colors.background.default,
            soft: gruvbox.colors.background.soft,
            softer: gruvbox.colors.background.softer,
          },
        },
      },
    },
  },
  plugins: [],
};
