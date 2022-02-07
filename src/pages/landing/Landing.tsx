import { FC } from "react";

import { Center, Container, Heading, Image, HStack, Stack, Icon, Flex, Box } from "@chakra-ui/react";

import { Content, configs, useContent, MarkdownFile } from "shared/content/Content";
import { ChevronDownIcon } from "utils/Icons";
import { Socials } from "shared/socials/Socials";

export const Landing: FC = () => {
    const content = useContent(MarkdownFile.Landing);

    const scrollIntoView = () => {
        const featuredHeader = document.getElementById("page-featured-projects");

        if (featuredHeader) {
            featuredHeader.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box id="page-landing">
            <Center pb="32">
                <HStack spacing="16" justifyContent="space-between" alignItems="flex-start">
                    <Stack flex={{ base: "1", lg: "0.6" }} spacing="16">
                        <Stack spacing="8">
                            <Heading fontSize={{ base: "5xl", md: "7xl" }} lineHeight={1}>
                                {configs.landing.headline}
                            </Heading>
                            <Content fontSize="lg">{content.landing}</Content>
                        </Stack>
                        <Socials />
                    </Stack>
                    <Container
                        alignItems="center"
                        flex="0.4"
                        display={{ base: "none", lg: "block" }}
                        data-aos="fade-up"
                    >
                        <Image borderRadius="xl" src={configs.landing.picture} />
                    </Container>
                </HStack>
            </Center>
            <Flex justifyContent="center">
                <Icon
                    fontSize="3xl"
                    cursor="pointer"
                    transition="color 0.25s ease-in-out"
                    _hover={{ color: "primary.500" }}
                    onClick={() => scrollIntoView()}
                >
                    <ChevronDownIcon />
                </Icon>
            </Flex>
        </Box>
    );
};
