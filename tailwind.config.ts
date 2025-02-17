import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        background: "var(--color-bg)",
        surface: "var(--color-surface)",
        overlay: "var(--color-overlay)",

        // Text colors
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        muted: "var(--color-text-muted)",
        subtle: "var(--color-text-subtle)",

        // Accent colors
        red: "var(--color-red)",
        green: "var(--color-green)",
        yellow: "var(--color-yellow)",
        blue: "var(--color-blue)",
        purple: "var(--color-purple)",
        aqua: "var(--color-aqua)",
        orange: "var(--color-orange)",

        // Highlight colors
        "highlight-low": "var(--color-highlight-low)",
        "highlight-med": "var(--color-highlight-med)",
        "highlight-high": "var(--color-highlight-high)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
    },
  },
  darkMode: "class", // Enable dark mode via class
  plugins: [require("@tailwindcss/typography")],
};

export default config;
