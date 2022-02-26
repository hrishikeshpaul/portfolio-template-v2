import { FC } from "react";

import { HStack, IconButton, StyleProps, useColorMode, useColorModeValue } from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "utils/Icons";

export const ColorModeButton: FC<StyleProps> = (props) => {
    const color = useColorModeValue("gray.800", "white");
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack {...props}>
            <IconButton
                aria-label="appearance"
                bg="transparent"
                color={color}
                fontSize="lg"
                _hover={{ color: "primary.500" }}
                _active={{ bg: "transparent" }}
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                variant="ghost"
                size="xs"
                onClick={() => {
                    toggleColorMode();
                    window.scrollBy(0, 1);
                    window.scrollBy(0, -1);
                }}
                w="32px"
                h="32px"
            />
        </HStack>
    );
};
