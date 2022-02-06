import { FC } from "react";

import { Center, Container, Heading, Image, HStack, Button, Stack, IconButton, Icon, Flex } from "@chakra-ui/react";

import { configs, useContent, ContentFile } from "content";
import { Content } from "shared/content/Content";
import { ChevronDownIcon, GitHubIcon, LinkedInIcon } from "utils/Icons";

export const Landing: FC = () => {
    const content = useContent(ContentFile.Landing);

    const scrollIntoView = () => {
        const featuredHeader = document.getElementById("featured-projects");

        if (featuredHeader) {
            featuredHeader.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <>
            <Center py="32" px={{ base: 0, md: 16, lg: 0 }}>
                <HStack spacing="16" justifyContent="space-between" alignItems="flex-start">
                    <Stack flex={{ base: "1", lg: "0.6" }} spacing="16">
                        <Stack spacing="8">
                            <Heading fontSize={{ base: "5xl", md: "7xl" }} lineHeight={1}>
                                {configs.landing.headline}
                            </Heading>
                            <Content fontSize="lg">{content.landing}</Content>
                        </Stack>
                        <HStack spacing="2">
                            <Button size="lg" borderRadius="xl" mr="2">
                                Resume
                            </Button>
                            <IconButton
                                fontSize="2xl"
                                variant="ghost"
                                color="gray.700"
                                bg="transparent"
                                _hover={{ color: "primary.500" }}
                                aria-label="linkedin-icon"
                                icon={<LinkedInIcon />}
                            />
                            <IconButton
                                fontSize="2xl"
                                bg="transparent"
                                _hover={{ color: "primary.500" }}
                                variant="ghost"
                                color="gray.700"
                                aria-label="github-icon"
                                icon={<GitHubIcon />}
                            />
                        </HStack>
                    </Stack>
                    <Container alignItems="center" flex="0.4" display={{ base: "none", lg: "block" }}>
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
        </>
    );
};
