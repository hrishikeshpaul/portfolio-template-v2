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
    location: string;
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
    location,
    year,
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
                    <Heading data-aos="fade-down" data-aos-offset="200" fontSize="4xl" lineHeight="1">
                        {title}
                    </Heading>
                    <Text
                        pt="2"
                        fontSize="sm"
                        fontWeight="600"
                        opacity="0.6"
                        data-aos="fade"
                        data-aos-delay="100"
                        data-aos-offset="200"
                    >
                        {year} • {location}
                    </Text>

                    <Box
                        py="4"
                        display={{ base: "inherit", lg: "none" }}
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="200"
                    >
                        <Image borderRadius="xl" src={image} />
                    </Box>

                    <Text
                        fontSize="lg"
                        pt={{ base: 0, lg: "2" }}
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        borderRadius="xl"
                    >
                        {description}
                    </Text>
                    <Tags tags={tags} id={id} />
                </Box>

                <ProjectCardFooter readMore={readMore} github={github} demo={demo} />
            </Flex>

            <Box
                data-aos="fade-up"
                data-aos-offset="200"
                display={{ base: "none", lg: "block" }}
                flex={{ base: 1, lg: 0.6 }}
                pl={{ base: "0", lg: ImagePositionPaddingRightMapper[imagePosition] }}
                pr={{ base: "0", lg: ImagePositionPaddingLeftMapper[imagePosition] }}
            >
                <Image borderRadius="xl" src={image} alt={`${title}-cover-image`} />
            </Box>
        </Flex>
    );
};
