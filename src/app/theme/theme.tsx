import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: "brand.500",
  },
};

const theme = extendTheme({
  colors: {
    primary: "#545BE8",
    dark: {
      1: "#101928",
      2: "#141E32",
      3: "#000000",
    },
    light: {
      1: "#969696",
      2: "#DDDDDD",
      3: "#A4A4A4",
    },
    white: "#FFFFFF",
    yellow: "#F0C932",
    bgLight: "#F5F5F5",
    bgDark: "#393E46",
  },
  fonts: {
    heading: `Poppins, ${base.fonts?.heading}`,
    body: `Poppins, ${base.fonts.body}`,
  },
  components: {
    Button: {
      variants: {
        primary: (props: StyleFunctionProps) => ({
          ...brandRing,
          backgroundColor: mode("primary", "brand.200")(props),
          color: "white",
          borderWidth: "1px",
          borderColor: "transparent",
          letterSpacing: 1,
          _hover: {
            backgroundColor: "transparent",
            color: "primary",
            borderWidth: "1px",
            borderColor: "primary",
            transition: "all 0.4s",
          },

          _active: {
            backgroundColor: mode("brand.700", "brand.400")(props),
          },
        }),

        secondary: (props: StyleFunctionProps) => ({
          // ...brandRing,
          backgroundColor: "transparent",
          color: mode("primary", "gray.800")(props),
          borderWidth: "1px",
          borderColor: "primary",
          letterSpacing: 1,

          _hover: {
            backgroundColor: "primary",
            color: "White",
            transition: "all 0.4s",
          },

          _active: {
            backgroundColor: "primary",
          },
        }),
      },
    },
  },
});

export default theme;
