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
        default: "#FDE047",
        _dark: "#FACC15",
      },
      heroGradientEnd: {
        default: "#FB7185",
        _dark: "#FDA4AF",
      },
      heroBgStart: {
        default: "#031123",
        _dark: "#01070f",
      },
      heroBgMid: {
        default: "#0f3b23",
        _dark: "#0f5133",
      },
      heroBgEnd: {
        default: "#3c0828",
        _dark: "#641334",
      },
      heroAccent: {
        default: "#C53030",
        _dark: "#FEB2B2",
      },
      heroSnow: {
        default: "rgba(255, 255, 255, 0.45)",
        _dark: "rgba(255, 255, 255, 0.25)",
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
});

export default theme;
