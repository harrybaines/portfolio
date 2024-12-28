const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sonokai: {
          bg: "#2c2e34",
          text: "#e2e2e3",
          "text-muted": "#9699a3",
          green: "#9ed072",
          red: "#fc5d7c",
          orange: "#f39660",
          yellow: "#e7c664",
          purple: "#b39df3",
          blue: "#76cce0",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["JetBrains Mono", "var(--font-geist-mono)", ...fontFamily.mono],
      },
    },
  },
  plugins: [],
};
