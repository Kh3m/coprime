// 1. Import the extendTheme function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc

const theme: ThemeConfig = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: true,
  colors: {
    white: "#ffffff",
    blue: {
      "50": "#f0f5fd",
      "100": "#e3ecfc",
      "200": "#cddaf8",
      "300": "#aec2f3",
      "400": "#8da1ec",
      "500": "#7181e3",
      "600": "#565ed5",
      "700": "#474dbb",
      "800": "#3c4297",
      default: "#32376f",
      "950": "#202246",
    },
  },
});

// 3. Pass the `theme` prop to the `ChakraProvider`

export default theme;
