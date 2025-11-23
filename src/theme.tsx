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
      dragonNight: {
        default: "#030712",
        _dark: "#02040a",
      },
      dragonSky: {
        default: "#67e8f9",
        _dark: "#7dd3fc",
      },
      dragonEmber: {
        default: "#fb7185",
        _dark: "#f472b6",
      },
      dragonMist: {
        default: "rgba(255,255,255,0.8)",
        _dark: "rgba(226,232,240,0.85)",
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
