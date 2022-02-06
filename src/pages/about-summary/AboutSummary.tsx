import { FC } from "react";

import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { configs, Content, MarkdownFile, useContent } from "shared/content/Content";

export const AboutSummary: FC = () => {
    const content = useContent(MarkdownFile.AboutSummary);
    return (
        <Box>
            <Flex pt="8" gap="8" direction={{ base: "column", md: "row" }}>
                <Box flex="0.3">
                    <Image borderRadius="xl" src={configs.common.mainPicture} w="100%" />
                </Box>
                <Box flex="0.6">
                    <Heading>{configs.common.name}</Heading>
                    <Text fontWeight="bold" opacity="0.5">
                        /ri-shi-kaysh/
                    </Text>
                    <Content fontSize="lg" pt="4">
                        {content.aboutSummary}
                    </Content>
                </Box>
            </Flex>
        </Box>
    );
};
