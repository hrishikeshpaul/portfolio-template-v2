import { FC, useState } from "react";

import { Accordion, AccordionItem, Heading } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { Expandable } from "../common/expandable/Expandable";

export const Education: FC = () => {
    const [educationExpanded, setEducationExpanded] = useState<number[]>([]);

    return (
        <>
            <Heading fontSize="2xl" fontWeight="semibold">
                Education
            </Heading>
            <br />

            <Accordion pt="2" allowMultiple index={educationExpanded} id="education">
                {configs.aboutSummary.educations.map((edu, idx) => (
                    <AccordionItem p="0" border="0" mb="4" key={`panel-${edu.school}-${edu.degree}`}>
                        <Expandable
                            title={edu.school}
                            subTitle={edu.degree}
                            date={edu.duration}
                            content={edu.content}
                            id={edu.id}
                            idx={idx}
                            onChange={setEducationExpanded}
                            expanded={educationExpanded}
                        />
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};
