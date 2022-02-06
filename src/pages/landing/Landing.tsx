import { FC } from "react";

import {
    Center,
    Container,
    Heading,
    Image,
    HStack,
    Button,
    Stack,
    IconButton,
    Icon,
    Flex,
    Box,
} from "@chakra-ui/react";

import { Content, configs, useContent, ContentFile } from "shared/content/Content";
import { ChevronDownIcon, GitHubIcon, LinkedInIcon, MailIcon } from "utils/Icons";
import { onGitHubOpen, onLinkedinOpen, onMailTo, onResumeOpen } from "utils/Functions";

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
                        <HStack spacing="2">
                            <Button size="lg" borderRadius="xl" mr="2" onClick={onResumeOpen}>
                                Resume
                            </Button>
                            <IconButton
                                {...iconButtonStyles}
                                aria-label="linkedin-icon"
                                icon={<LinkedInIcon />}
                                onClick={onLinkedinOpen}
                            />
                            <IconButton
                                {...iconButtonStyles}
                                aria-label="github-icon"
                                icon={<GitHubIcon />}
                                onClick={onGitHubOpen}
                            />
                            <IconButton
                                {...iconButtonStyles}
                                fontSize="3xl"
                                aria-label="mail-icon"
                                icon={<MailIcon />}
                                onClick={onMailTo}
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
        </Box>
    );
};
