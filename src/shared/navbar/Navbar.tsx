import { FC } from "react";

import { Box, Button, Container, Flex, HStack, useColorModeValue } from "@chakra-ui/react";

import { configs } from "shared/content/Content";
import { bgDark, bgLight } from "theme";
import { LogoType } from "shared/navbar/logo-type/LogoType";
import { onResumeOpen } from "utils/Functions";
import { AboutPageId, useScroll, WorkPageId } from "utils/useScroll";

export const Navbar: FC = () => {
    const bg = useColorModeValue(bgLight, bgDark);
    const currentPage = useScroll();

    return (
        <Box bg={bg} position="fixed" top="0" w="100%" left="50%" transform="translate(-50%)" zIndex="10">
            <Container py="4" px="6">
                <Flex justifyContent="space-between" alignItems="center">
                    <LogoType text={configs.common.logoType} />
                    <HStack spacing="8">
                        <Button
                            variant="link"
                            color="black"
                            transition="all 0.25s ease-in-out"
                            textDecoration="underline"
                            textDecorationThickness="2px"
                            textDecorationColor={currentPage === WorkPageId ? "primary.500" : "transparent"}
                        >
                            Work
                        </Button>
                        <Button
                            variant="link"
                            color="black"
                            textDecoration={currentPage === AboutPageId ? "underline" : "none"}
                            textDecorationThickness="2px"
                            textDecorationColor="primary.500"
                        >
                            About
                        </Button>
                        <Button variant="link" onClick={onResumeOpen}>
                            Resume
                        </Button>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
};
