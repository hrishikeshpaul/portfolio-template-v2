import { FC } from "react";

import { Badge, Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ArrowRightIcon, GitHubIcon, LinkIcon } from "utils/Icons";
import { Date } from "shared/date/Date";
import { LiveDemo } from "shared/live-demo/LiveDemo";
import { Tags } from "shared/tags/Tags";
import { ReadMore } from "shared/read-more/ReadMore";

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
    year,
    demo,
    github,
    tags,
    description,
    readMore,
    image,
    imagePosition,
}) => {
    const onLinkPress = (link: string) => {
        window.open(link, "_blank");
    };

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

                    <Flex justifyContent="space-between" alignItems="center" pt="1">
                        <Date year={year} />
                        {demo && <LiveDemo demo={demo} />}
                    </Flex>

                    <Box py="4" display={{ base: "block", lg: "none" }}>
                        <Image borderRadius="xl" src={image} />
                    </Box>

                    <Text fontSize="lg" pt={{ base: 0, lg: "2" }}>
                        {description}
                    </Text>
                    <Tags tags={tags} id={id} />
                </Box>
                <Flex justifyContent="space-between" pt="4">
                    {readMore && <ReadMore link={readMore} />}
                    {github && (
                        <Button variant="link" leftIcon={<GitHubIcon />} onClick={() => onLinkPress(github)}>
                            GitHub
                        </Button>
                    )}
                </Flex>
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
