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
        default: "#FF6B00",  // Thailand-inspired orange
        _dark: "#FF9E00",
      },
      heroGradientEnd: {
        default: "#009688",  // Thailand-inspired teal
        _dark: "#00BCD4",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#16161D",
    thailand: {
      orange: "#FF6B00",
      gold: "#FFD700",
      teal: "#009688",
      lightTeal: "#00BCD4",
      darkRed: "#C41E3A",
    },
  },
  fonts,
  breakpoints,
});

export default theme;
