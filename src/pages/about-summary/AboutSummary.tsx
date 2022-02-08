import { FC, useState } from "react";

import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

import { configs, Content, MarkdownFile, useContent } from "shared/content/Content";
import { Skills } from "pages/about-summary//skills/Skills";
import { Education } from "pages/about-summary//education/Education";
import { Experience } from "pages/about-summary/experience/Expeirence";

export const AboutSummary: FC = () => {
    const content = useContent(MarkdownFile.AboutSummary);

    return (
        <Box>
            <Flex pt="8" gap={{ base: 6, md: 6, lg: 12 }} direction={{ base: "column", md: "row" }}>
                <Box flex="0.35" data-aos="fade-up" data-aos-offset="200">
                    <Image borderRadius="xl" src={configs.common.mainPicture} w="100%" />
                </Box>
                <Box flex="0.85">
                    <Heading data-aos="fade-down" data-aos-offset="200">
                        {configs.common.name}
                    </Heading>
                    <Text fontWeight="bold" opacity="0.5" data-aos="fade" data-aos-offset="200" data-aos-delay="200">
                        {configs.common.pronunciation}
                    </Text>
                    <Box pt="4" data-aos="fade-up" data-aos-offset="200" data-aos-delay="400">
                        <Content fontSize="lg">{content.aboutSummary}</Content>
                    </Box>
                </Box>
            </Flex>
            <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: 16, md: 6, lg: 12 }}
                mt="16"
                justifyContent="space-between"
            >
                <Box flex="0.6" flexShrink="0" overflow="hidden">
                    <Education />
                </Box>
                <Box flex="0.6" overflow="hidden">
                    <Experience />
                </Box>
            </Flex>
            <Box pt="16">
                <Skills />
            </Box>
        </Box>
    );
};
