import { FC, useState } from "react";

import { Box, Flex, Heading, Text, Image, Accordion, AccordionItem } from "@chakra-ui/react";

import { configs, Content, MarkdownFile, useContent } from "shared/content/Content";
import { Expandable } from "./expandable/Expandable";

export const AboutSummary: FC = () => {
    const content = useContent(MarkdownFile.AboutSummary);
    const [expanded, setExpanded] = useState<number[]>([]);

    return (
        <Box>
            <Flex pt="8" gap={{ base: 6, md: 6, lg: 12 }} direction={{ base: "column", md: "row" }}>
                <Box flex="0.35">
                    <Image borderRadius="xl" src={configs.common.mainPicture} w="100%" />
                </Box>
                <Box flex="0.85">
                    <Heading>{configs.common.name}</Heading>
                    <Text fontWeight="bold" opacity="0.5">
                        {configs.common.pronunciation}
                    </Text>
                    <Box pt="4">
                        <Content fontSize="lg">{content.aboutSummary}</Content>
                    </Box>
                </Box>
            </Flex>
            <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: 16, md: 6, lg: 12 }}
                mt="16"
                justifyContent="space-between"
            >
                <Box flex="0.6" flexShrink="0">
                    <Heading fontSize="2xl" fontWeight="medium">
                        Education
                    </Heading>
                    <br />
                    {configs.aboutSummary.educations.map((education) => (
                        <Box mt="4" key={education.school}>
                            <Text fontSize="xl" fontWeight="bold">
                                {education.school}
                            </Text>
                            <Text>
                                {education.degree} (GPA: {education.gpa})
                            </Text>
                            <Text opacity="0.6">{education.duration}</Text>
                        </Box>
                    ))}
                </Box>
                <Box flex="0.6" overflow="hidden">
                    <Heading fontSize="2xl" fontWeight="medium">
                        Experiences
                    </Heading>
                    <br />
                    <Accordion pt="2" allowMultiple fontWeight="500" index={expanded}>
                        {configs.aboutSummary.experiences.map((exp, idx) => (
                            <AccordionItem p="0" border="0" mb="4" key={`panel-${exp.company}`}>
                                <Expandable
                                    title={exp.company}
                                    subTitle={exp.position}
                                    date={exp.position}
                                    descriptions={exp.description}
                                    idx={idx}
                                    onChange={setExpanded}
                                    expanded={expanded}
                                />
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Box>
            </Flex>
        </Box>
    );
};
