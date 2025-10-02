import { extendTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: "#16161D",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9",
      },
      heroGradientEnd: {
        default: "#FF0080",
        _dark: "#fbec8f",
      },
      // Thailand-inspired colors
      thailandGold: {
        default: "#FFD700",
        _dark: "#FFA500",
      },
      thailandBlue: {
        default: "#1E90FF",
        _dark: "#4facfe",
      },
      thailandOrange: {
        default: "#FFA500",
        _dark: "#FF6347",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
  styles: {
    global: {
      "@keyframes gradient": {
        "0%": {
          backgroundPosition: "0% 50%",
        },
        "50%": {
          backgroundPosition: "100% 50%",
        },
        "100%": {
          backgroundPosition: "0% 50%",
        },
      },
    },
  },
});

export default theme;
