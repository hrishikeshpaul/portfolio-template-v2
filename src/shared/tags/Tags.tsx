import { FC } from "react";

import { Flex, Badge } from "@chakra-ui/react";

interface Props {
    id: string;
    tags: Array<string>;
    size?: string;
    delay?: number;
}

export const Tags: FC<Props> = ({ id, tags, size = "sm", delay = 400 }) => {
    return (
        <Flex py="2" wrap="wrap" gap="4">
            {tags.map((tag, idx) => (
                <Badge
                    data-aos="fade"
                    data-aos-delay={idx * 100 + delay}
                    textTransform="capitalize"
                    key={`${id}-tag-${tag}`}
                    colorScheme="gray"
                    borderRadius="md"
                    px="8px"
                    py="4px"
                    fontSize={size}
                    fontWeight="600"
                >
                    {tag}
                </Badge>
            ))}
        </Flex>
    );
};
