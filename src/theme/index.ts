import { ThemeConfig, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import { PrimaryColors } from "theme/colors/Colors";
import { components } from "theme/component-styles/ComponentStyles";

const config: ThemeConfig = {
    cssVarPrefix: "hp",
};

const fonts = {
    body: "'Urbanist', sans-serif",
    heading: "'Cormorant Garamond', serif",
};

const colors = {
    primary: {
        ...PrimaryColors,
    },
};

export const bgLight = "white";
export const bgDark = "gray.800";
export const NavbarHeight = "60px";

export const theme = extendTheme(
    {
        config,
        colors,
        fonts,
        components,
    },
    withDefaultColorScheme({ colorScheme: "primary" }),
);
