import { FC } from "react";

import { Box, Button, Container, Flex, HStack, useColorModeValue } from "@chakra-ui/react";

import {useTranslation} from "react-i18next";
import { LogoType } from "shared/navbar/logo-type/LogoType";
import { bgDark, bgLight } from "theme";
import { onResumeOpen } from "utils/Functions";
import { AboutPageId, useScroll, WorkPageId } from "utils/useScroll";
import { MenuDrawer } from "./drawer/Drawer";
import { ColorModeButton } from "shared/color-mode-button/ColorModeButton";
import {LanguageSelect} from "shared/language-select/LanguageSelect"

export const Navbar: FC = () => {
    const bg = useColorModeValue(bgLight, bgDark);
    const navItemColor = useColorModeValue("gray.800", "white");
    const currentPage = useScroll();
    const {t} = useTranslation('common')

    const toSection = (section: string) => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Box bg={bg} position="fixed" top="0" w="100%" left="50%" transform="translate(-50%)" zIndex="10">
            <Container py="4" px="4" data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">
                <Flex justifyContent="space-between" alignItems="center">
                    <LogoType text={t('logoType',  { returnObjects: true })} />
                    <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
                        <HStack spacing="8" mr="6">
                            <Button
                                variant="link"
                                color={navItemColor}
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
                        <LanguageSelect />
                        <ColorModeButton />
                    </Flex>

                    <MenuDrawer
                        currentPage={currentPage}
                        onSectionClick={toSection}
                        display={{ base: "block", md: "none" }}
                    />
                </Flex>
            </Container>
        </Box>
    );
};
