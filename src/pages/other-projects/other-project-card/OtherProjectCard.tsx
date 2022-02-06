import { FC } from "react";

import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Date } from "shared/date/Date";
import { LiveDemo } from "shared/live-demo/LiveDemo";
import { Tags } from "shared/tags/Tags";

interface Props {
    id: string;
    title: string;
    year: string;
    demo?: string;
    github?: string;
    tags: string[];
    description: string;
    readMore?: string;
    image: string;
}

export const OtherProjectCard: FC<Props> = ({ id, title, year, demo, github, tags, description, readMore, image }) => {
    return (
        <Flex alignItems="center" gap="10" id={`other-project-card-${id}`} py={{ base: "12", md: "28" }}>
            <Avatar ignoreFallback src={image} size="2xl" />
            <Flex w="100%" direction="column" alignContent="center">
                <Box>
                    <Heading fontSize="2xl">{title}</Heading>
                    {/* <Flex justifyContent="space-between" alignItems="center">
                    <Date year={year} />
                    {demo && <LiveDemo demo={demo} />}
                </Flex> */}
                    <Text pt="2">{description}</Text>
                    <Tags tags={tags} id={id} size="xs" />
                </Box>
                <Flex justifyContent="space-between" alignItems="center">
                    
                </Flex>
            </Flex>
        </Flex>
    );
};
