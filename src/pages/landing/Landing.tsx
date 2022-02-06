import { FC } from "react";

import { Center, Container, Heading, Image, HStack, Button, Stack, IconButton, Icon, Flex } from "@chakra-ui/react";

import { configs, useContent, ContentFile } from "content";
import { Content } from "shared/content/Content";
import { ChevronDownIcon, GitHubIcon, LinkedInIcon, MailIcon } from "utils/Icons";

const iconButtonStyles = {
    fontSize: "2xl",
    variant: "ghost",
    color: "gray.700",
    bg: "transparent",
    _hover: { color: "primary.500" },
    _active: { bg: "transparent" },
};

export const Landing: FC = () => {
    const content = useContent(ContentFile.Landing);

    const scrollIntoView = () => {
        const featuredHeader = document.getElementById("featured-projects");

        if (featuredHeader) {
            featuredHeader.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    const onLinkOpen = (link: string) => {
        window.open(link, "_blank");
    };

    const onMail = () => {
        window.open("mailto:" + configs.common.email);
    };

    return (
        <>
            <Center pb="32">
                <HStack spacing="16" justifyContent="space-between" alignItems="flex-start">
                    <Stack flex={{ base: "1", lg: "0.6" }} spacing="16">
                        <Stack spacing="8">
                            <Heading fontSize={{ base: "5xl", md: "7xl" }} lineHeight={1}>
                                {configs.landing.headline}
                            </Heading>
                            <Content fontSize="lg">{content.landing}</Content>
                        </Stack>
                        <HStack spacing="2">
                            <Button
                                size="lg"
                                borderRadius="xl"
                                mr="2"
                                onClick={() => onLinkOpen(configs.common.resume)}
                            >
                                Resume
                            </Button>
                            <IconButton
                                {...iconButtonStyles}
                                aria-label="linkedin-icon"
                                icon={<LinkedInIcon />}
                                onClick={() => onLinkOpen(configs.common.linkedin)}
                            />
                            <IconButton
                                {...iconButtonStyles}
                                aria-label="github-icon"
                                icon={<GitHubIcon />}
                                onClick={() => onLinkOpen(configs.common.github)}
                            />
                            <IconButton
                                {...iconButtonStyles}
                                fontSize="3xl"
                                aria-label="mail-icon"
                                icon={<MailIcon />}
                                onClick={onMail}
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
