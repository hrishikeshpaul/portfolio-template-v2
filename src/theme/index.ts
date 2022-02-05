import { ThemeConfig, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import { PrimaryColors } from "theme/colors/Colors";
import { TextStyles } from "theme/components";

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

const components = {
    Text: { ...TextStyles },
};

export const theme = extendTheme(
    {
        config,
        colors,
        fonts,
        components,
    },
    withDefaultColorScheme({ colorScheme: "primary" }),
);
