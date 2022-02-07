import { FC } from "react";

import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

import { configs, Content, MarkdownFile, useContent } from "shared/content/Content";

export const AboutSummary: FC = () => {
    const content = useContent(MarkdownFile.AboutSummary);

    return (
        <Box>
            <Flex pt="8" gap={{ base: 6, md: 6, lg: 12 }} direction={{ base: "column", md: "row" }}>
                <Box flex="0.35">
                    <Image borderRadius="xl" src={configs.common.mainPicture} w="100%" />
                </Box>
                <Box flex="0.85">
                    <Heading>{configs.common.name}</Heading>
                    <Text fontWeight="bold" opacity="0.5">
                        {configs.common.pronunciation}
                    </Text>
                    <Box pt="4">
                        <Content fontSize="lg">{content.aboutSummary}</Content>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};
