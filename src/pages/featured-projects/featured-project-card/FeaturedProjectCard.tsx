import { FC } from "react";

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Tags } from "shared/tags/Tags";
import { ProjectCardFooter } from "shared/project-card-footer/ProjectCardFooter";

export enum ImagePosition {
    Right,
    Left,
}
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
    imagePosition: ImagePosition;
}

const ImagePositionLayoutMapper: Record<ImagePosition, "row" | "row-reverse"> = {
    [ImagePosition.Right]: "row",
    [ImagePosition.Left]: "row-reverse",
};

const ImagePositionPaddingRightMapper: Record<ImagePosition, string> = {
    [ImagePosition.Right]: "8",
    [ImagePosition.Left]: "0",
};

const ImagePositionPaddingLeftMapper: Record<ImagePosition, string> = {
    [ImagePosition.Right]: "0",
    [ImagePosition.Left]: "8",
};

export const FeaturedProjectCard: FC<Props> = ({
    id,
    title,
    demo,
    github,
    tags,
    description,
    readMore,
    image,
    imagePosition,
}) => {
    return (
        <Flex
            justifyContent="space-between"
            id="featured-project-card"
            py={{ base: "12", md: "28" }}
            direction={{ base: "column-reverse", lg: ImagePositionLayoutMapper[imagePosition] }}
        >
            <Flex
                h="auto"
                pr={{ base: "0", lg: ImagePositionPaddingRightMapper[imagePosition] }}
                pl={{ base: "0", lg: ImagePositionPaddingLeftMapper[imagePosition] }}
                direction="column"
                justifyContent="space-between"
                flex={{ base: 1, lg: 0.6 }}
            >
                <Box>
                    <Heading>{title}</Heading>

                    <Image borderRadius="xl" src={image} py="4" display={{ base: "block", lg: "none" }} />

                    <Text fontSize="lg" pt={{ base: 0, lg: "2" }}>
                        {description}
                    </Text>
                    <Tags tags={tags} id={id} />
                </Box>

                <ProjectCardFooter readMore={readMore} github={github} demo={demo} />
            </Flex>

            <Box
                display={{ base: "none", lg: "block" }}
                flex={{ base: 1, lg: 0.6 }}
                pl={{ base: "0", lg: ImagePositionPaddingRightMapper[imagePosition] }}
                pr={{ base: "0", lg: ImagePositionPaddingLeftMapper[imagePosition] }}
            >
                <Image borderRadius="xl" src={image} />
            </Box>
        </Flex>
    );
};
