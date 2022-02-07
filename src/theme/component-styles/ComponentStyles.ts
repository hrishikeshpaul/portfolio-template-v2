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
        solid: {
            color: "white",
        },
        secondary: (props: any) => {
            return {
                color: props.colorMode === "dark" ? "white" : "gray.900",
                backgroundColor: props.colorMode === "dark" ? "gray.700" : "gray.50",
                _hover: {
                    backgroundColor: props.colorMode === "dark" ? "gray.600" : "gray.100",
                },
                _active: {
                    backgroundColor: props.colorMode === "dark" ? "gray.600" : "gray.200",
                },
            };
        },
    },
    defaultProps: {
        variant: "solid",
    },
};

export const components = {
    Text: { ...TextStyles },
    Container: { ...ContainerStyles },
    Link: { ...TextStyles },
    Button: { ...ButtonStyles },
};
