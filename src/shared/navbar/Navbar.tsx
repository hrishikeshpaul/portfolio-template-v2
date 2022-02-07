import { FC } from "react";

import { Box, Button, Container, Flex, HStack, useColorModeValue } from "@chakra-ui/react";

import { configs } from "shared/content/Content";
import { bgDark, bgLight } from "theme";
import { LogoType } from "shared/navbar/logo-type/LogoType";
import { onResumeOpen } from "utils/Functions";
import { AboutPageId, useScroll, WorkPageId } from "utils/useScroll";

export const Navbar: FC = () => {
    const bg = useColorModeValue(bgLight, bgDark);
    const navItemColor = useColorModeValue("gray.800", "white");
    const currentPage = useScroll();

    const toSection = (section: string) => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Box position="fixed" top="0" w="100%" left="50%" transform="translate(-50%)" zIndex="10">
            <Container py="4" bg={bg} px="6" data-aos="fade-down" data-aos-duration="500">
                <Flex justifyContent="space-between" alignItems="center">
                    <LogoType text={configs.common.logoType} />
                    <HStack spacing="8">
                        <Button
                            variant="link"
                            color={navItemColor}
                            transition="all 0.25s ease-in-out"
                            textDecoration="underline"
                            textDecorationThickness="2px"
                            textDecorationColor={currentPage === WorkPageId ? "primary.500" : "transparent"}
                            onClick={() => toSection(WorkPageId)}
                            data-aos="fade"
                            data-aos-delay="200"
                        >
                            Work
                        </Button>
                        <Button
                            variant="link"
                            color={navItemColor}
                            textDecoration={currentPage === AboutPageId ? "underline" : "none"}
                            textDecorationThickness="2px"
                            textDecorationColor="primary.500"
                            onClick={() => toSection(AboutPageId)}
                            data-aos="fade"
                            data-aos-delay="300"
                        >
                            About
                        </Button>
                        <Button variant="link" onClick={onResumeOpen} data-aos="fade" data-aos-delay="400">
                            Resume
                        </Button>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
};
