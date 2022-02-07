import { FC } from "react";

import { Image, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Tags } from "shared/tags/Tags";
import { ProjectCardFooter } from "shared/project-card-footer/ProjectCardFooter";

interface Props {
    id: string;
    title: string;
    demo?: string;
    github?: string;
    tags: string[];
    description: string;
    readMore?: string;
    image: string;
}

export const OtherProjectCard: FC<Props> = ({ id, title, demo, github, tags, description, readMore, image }) => {
    return (
        <Flex
            alignItems={{ base: "flex-start", lg: "center" }}
            gap="10"
            id={`other-project-card-${id}`}
            py={{ base: "8", md: "8" }}
        >
            <Box flex="0.25" display={{ base: "none", md: "block" }}>
                <Image ignoreFallback src={image} />
            </Box>
            <Flex w="100%" direction="column" alignContent="center" flex={1}>
                <Box>
                    <Heading fontSize="2xl">{title}</Heading>
                    <Text pt="2">{description}</Text>
                    <Tags tags={tags} id={id} size="xs" />
                </Box>
                <ProjectCardFooter readMore={readMore} github={github} demo={demo} />
            </Flex>
        </Flex>
    );
};
