import { FC } from "react";

import { Box, Button, AccordionButton, AccordionPanel, Text, Flex } from "@chakra-ui/react";

interface Props {
    expanded: number[];
    idx: number;
    company: string;
    position: string;
    duration: string;
    description: string[];
    onChange: (expanded: any) => void;
}

export const Expandable: FC<Props> = ({ expanded, idx, company, position, duration, description, onChange }) => {
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
                    {company}
                </Text>
                <Text>{position}</Text>
                <Text opacity="0.6">{duration}</Text>
                <Flex>
                    <Box pr="2" flex="1" textAlign="left" isTruncated={!expanded.includes(idx)}>
                        <Text as="li" isTruncated={!expanded.includes(idx)}>
                            {description[0]}
                        </Text>
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
                {description.slice(1).map((desc, idx) => (
                    <Text as="li" key={`${company}-desc-${idx}`}>
                        {desc}
                    </Text>
                ))}

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
