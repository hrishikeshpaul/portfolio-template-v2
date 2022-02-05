import { FC } from "react";

import { Badge, Box, Button, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { ArrowRightIcon, GitHubIcon, LinkIcon } from "utils/Icons";

interface Props {
    id: string;
    title: string;
    year: string;
    type?: string;
    demo?: string;
    github?: string;
    tags: string[];
    description: string;
    readMore?: string;
    image: string;
}

export const FeaturedProjectCard: FC<Props> = ({
    id,
    title,
    year,
    type,
    demo,
    github,
    tags,
    description,
    readMore,
    image,
}) => {
    const onLinkPress = (link: string) => {
        window.open(link, "_blank");
    };

    return (
        <Flex
            justifyContent="space-between"
            id="featured-project-card"
            direction={{ base: "column-reverse", lg: "row" }}
        >
            <Flex
                h="auto"
                pr={{ base: "0", lg: "8" }}
                direction="column"
                justifyContent="space-between"
                flex={{ base: 1, lg: 0.6 }}
            >
                <Box>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Text fontSize="sm" fontWeight="700" opacity="0.5" as="span">
                            {year}
                        </Text>
                        {demo && (
                            <Button
                                variant="link"
                                leftIcon={<LinkIcon fontSize="14pt" />}
                                onClick={() => onLinkPress(demo)}
                            >
                                Live Demo
                            </Button>
                        )}
                    </Flex>
                    <Heading>{title}</Heading>

                    <Box py="4" display={{ base: "block", lg: "none" }}>
                        <Image borderRadius="xl" src={image} />
                    </Box>

                    <Text fontSize="lg" pt="3">
                        {description}
                    </Text>
                    <Flex py="2" wrap="wrap" gap="4">
                        {tags.map((tag) => (
                            <Badge
                                textTransform="capitalize"
                                key={`${id}-tag-${tag}`}
                                colorScheme="gray"
                                borderRadius="md"
                                px="8px"
                                py="4px"
                                fontSize="sm"
                                fontWeight="600"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </Flex>
                </Box>
                <Flex justifyContent="space-between" pt="4">
                    {readMore && (
                        <Button
                            variant="link"
                            colorScheme="black"
                            rightIcon={<ArrowRightIcon fontSize="16pt" />}
                            onClick={() => onLinkPress(readMore)}
                        >
                            Read More
                        </Button>
                    )}
                    {github && (
                        <Button variant="link" leftIcon={<GitHubIcon />} onClick={() => onLinkPress(github)}>
                            GitHub
                        </Button>
                    )}
                </Flex>
            </Flex>

            <Box display={{ base: "none", lg: "block" }} flex={{ base: 1, lg: 0.7 }} pl={{ base: "0", lg: "8" }}>
                <Image borderRadius="xl" src={image} />
            </Box>
        </Flex>
    );
};
