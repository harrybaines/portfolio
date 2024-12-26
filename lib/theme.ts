export const gruvbox = {
  colors: {
    bg: "#282828",
    fg: "#ebdbb2",
    gray: "#928374",
    green: "#b8bb26",
    red: "#fb4934",
    orange: "#fe8019",
    purple: "#d3869b",
    aqua: "#8ec07c",
    yellow: "#fabd2f",
    softBg: "#32302f",
    text: {
      primary: "#fbf1c7",
      secondary: "#d5c4a1",
      muted: "#928374",
    },
    border: {
      default: "#3c3836",
      hover: "#b8bb26",
      muted: "#504945",
    },
    background: {
      default: "#282828",
      soft: "#32302f",
      softer: "#3c3836",
    },
  },
  transitions: {
    colors: "transition-colors",
  },
} as const;

// Type helper for theme colors
type ThemeColor = keyof typeof gruvbox.colors;

// Utility function to get theme color
export const getThemeColor = (color: ThemeColor) => gruvbox.colors[color];
