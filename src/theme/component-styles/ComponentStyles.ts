import { ComponentStyleConfig } from "@chakra-ui/react";

const TextStyles: ComponentStyleConfig = {
    baseStyle: {
        fontWeight: 500,
    },
};

const ContainerStyles: ComponentStyleConfig = {
    baseStyle: {
        maxW: "container.xl",
    },
};

const ButtonStyles: ComponentStyleConfig = {
    baseStyle: {
        fontWeight: "bold",
    },
    variants: {
        outline: (props: any) => ({
            _hover: {
                color: "white",
                bg: `${props.colorScheme}.500`,
            },
        }),
    },
};

export const components = {
    Text: { ...TextStyles },
    Container: { ...ContainerStyles },
    Link: { ...TextStyles },
    Button: { ...ButtonStyles },
};
