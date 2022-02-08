import { FC } from "react";

import { Box, Button, AccordionButton, AccordionPanel, Text, Flex, UnorderedList } from "@chakra-ui/react";

interface Props {
    expanded: number[];
    idx: number;
    onChange: (expanded: any) => void;
    title: string;
    subTitle: string;
    date: string;
    descriptions: string[];
}

export const Expandable: FC<Props> = ({ expanded, idx, title, subTitle, date, descriptions, onChange }) => {
    const isExpanded = expanded.includes(idx);

    return (
        <>
            <AccordionButton
                as={Box}
                p="0"
                disabled
                onClick={undefined}
                _hover={{ bg: "transparent" }}
                cursor="auto"
                overflow="hidden"
                display="block"
            >
                <Text fontSize="xl" fontWeight="bold">
                    {title}
                </Text>
                <Text>{subTitle}</Text>
                <Text opacity="0.6">{date}</Text>
                <Flex pt="2">
                    <Box pr="2" flex="1" isTruncated={!expanded.includes(idx)}>
                        {!isExpanded ? (
                            <ul>
                                <Text as="li" isTruncated={!expanded.includes(idx)}>
                                    {descriptions[0]}
                                </Text>
                            </ul>
                        ) : (
                            <UnorderedList listStylePosition="outside">
                                <Text as="li" isTruncated={!expanded.includes(idx)}>
                                    {descriptions[0]}
                                </Text>
                            </UnorderedList>
                        )}
                    </Box>
                    {!expanded.includes(idx) && (
                        <Button
                            size="xs"
                            variant="link"
                            colorScheme="gray"
                            opacity="0.7"
                            onClick={() => {
                                if (!expanded.includes(idx)) {
                                    onChange([...expanded, idx]);
                                } else {
                                    const newExpanded = expanded.filter((e) => e !== idx);
                                    onChange(newExpanded);
                                }
                            }}
                        >
                            See more
                        </Button>
                    )}
                </Flex>
            </AccordionButton>
            <AccordionPanel p="0">
                <UnorderedList listStylePosition="outside">
                    {descriptions.slice(1).map((desc, idx) => (
                        <Text as="li" key={`${title}-desc-${idx}`}>
                            {desc}
                        </Text>
                    ))}
                </UnorderedList>

                {expanded.includes(idx) && (
                    <Flex justifyContent="flex-end">
                        <Button
                            size="xs"
                            variant="link"
                            colorScheme="gray"
                            opacity="0.7"
                            onClick={() => {
                                const newExpanded = expanded.filter((e) => e !== idx);
                                onChange(newExpanded);
                            }}
                        >
                            See less
                        </Button>
                    </Flex>
                )}
            </AccordionPanel>
        </>
    );
};
