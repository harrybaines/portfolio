import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
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
        primary: colors.lime[500],
        muted: colors.zinc[400],
        background: "#0D0B0E",
        danger: colors.red[500],
        warning: colors.orange[500],
        success: colors.yellow[500],
        info: colors.purple[500],
        highlight: colors.sky[500],
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      typography: {
        DEFAULT: {
          css: {
            "p, li": {
              fontFamily: "var(--font-sans)",
            },
            "--tw-prose-body": colors.gray[200],
            "--tw-prose-headings": colors.gray[200],
            "--tw-prose-links": colors.lime[500],
            "--tw-prose-bold": colors.gray[200],
            "--tw-prose-code": colors.gray[200],
            "--tw-prose-quotes": colors.gray[200],
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
