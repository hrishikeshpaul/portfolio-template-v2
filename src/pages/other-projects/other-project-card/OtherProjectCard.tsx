import { FC } from "react";

import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
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
            py={{ base: "4", md: "8" }}
        >
            <Avatar ignoreFallback src={image} size="2xl" display={{ base: "none", md: "block" }} />
            <Flex w="100%" direction="column" alignContent="center">
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
