import { extendTheme, ThemeConfig, withDefaultColorScheme, theme as ChakraTheme } from "@chakra-ui/react";

import { PrimaryColors } from "theme/colors/Colors";

const config: ThemeConfig = {
    cssVarPrefix: "hp",
};

const fonts = {
    ...ChakraTheme.fonts,
    body: "'Urbanist', sans-serif",
    heading: "'Cormorant Garamond', serif",
};

const colors = {
    primary: {
        ...PrimaryColors,
    },
};

export const theme = extendTheme({ config, colors, fonts }, withDefaultColorScheme({ colorScheme: "primary" }));
