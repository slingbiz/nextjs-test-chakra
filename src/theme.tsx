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
        default: "#3B82F6", // Blue - representing Thai seas
        _dark: "#60A5FA",
      },
      heroGradientEnd: {
        default: "#EC4899", // Pink - representing Thai sunsets
        _dark: "#F472B6",
      },
      thailandGold: {
        default: "#FCD34D", // Thai gold accent
        _dark: "#FDE047",
      },
      thailandGreen: {
        default: "#10B981", // Tropical green
        _dark: "#34D399",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#16161D",
    thailandBlue: {
      50: "#EFF6FF",
      100: "#DBEAFE",
      200: "#BFDBFE",
      300: "#93C5FD",
      400: "#60A5FA",
      500: "#3B82F6",
      600: "#2563EB",
      700: "#1D4ED8",
      800: "#1E40AF",
      900: "#1E3A8A",
    },
  },
  fonts,
  breakpoints,
});

export default theme;
