import { FC } from "react";

import { Badge, Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";

interface Props {
    id: string;
    title: string;
    year: string;
    type: string;
    live: string;
    github: string;
    tags: string[];
    description: string;
    blog: string;
    image: string;
}

export const FeaturedProjectCard: FC<Props> = ({
    id,
    title,
    year,
    type,
    live,
    github,
    tags,
    description,
    blog,
    image,
}) => {
    return (
        <Flex justifyContent="space-between" id="featured-project-card" direction={{ base: "column", lg: "row" }}>
            <Flex
                h="auto"
                pr={{ base: "8", lg: "0" }}
                direction="column"
                justifyContent="space-between"
                flex={{ base: 1, lg: 0.6 }}
            >
                <Box>
                    <Text fontSize="sm" fontWeight="700" opacity="0.5" as="span">
                        {year}
                    </Text>
                    <Heading pt="1">{title}</Heading>
                    <Text fontSize="lg" py="4">
                        {description}
                    </Text>
                    <Flex pb="4" wrap="wrap" gap="4">
                        {tags.map((tag) => (
                            <Badge
                                textTransform="capitalize"
                                key={`${id}-tag-${tag}`}
                                colorScheme="gray"
                                borderRadius="md"
                                px="8px"
                                py="4px"
                                fontSize="md"
                                fontWeight="600"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </Flex>
                </Box>
                <Box fontWeight="700" opacity="0.5" as="span">
                    Read more
                </Box>
            </Flex>

            <Box flex={{ base: 1, lg: 0.6 }} pl={{ base: "0", lg: "8" }} pt={{ base: "8", lg: "0" }}>
                <Image borderRadius="xl" src={image} />
            </Box>
        </Flex>
    );
};
