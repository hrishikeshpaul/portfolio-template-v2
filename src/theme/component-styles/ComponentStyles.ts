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
        icon: (props: any) => {
            return {
                color: props.colorMode === "dark" ? "white" : "gray.900",
                background: "transparent",
                _hover: {
                    background: "transparent",
                    color: "primary.500",
                },
                _focus: {
                    background: "transparent",
                },
                _active: {
                    background: "transparent",
                },
            };
        },
    },
    defaultProps: {
        variant: "solid",
    },
};

const LinkStyles: ComponentStyleConfig = {
    baseStyle: (props) => {
        let color = "primary.600";

        if (props.colorMode === "dark") color = "primary.100";

        return {
            fontWeight: 700,
            color,
        };
    },
};

export const components = {
    Text: { ...TextStyles },
    Container: { ...ContainerStyles },
    Link: { ...LinkStyles },
    Button: { ...ButtonStyles },
};
