import { FC, useState } from "react";

import { Accordion, AccordionItem, Heading } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { Expandable } from "pages/about-summary/common/expandable/Expandable";

export const Experience: FC = () => {
    const [experiencesExpanded, setExperiencesExpanded] = useState<number[]>([]);

    return (
        <>
            <Heading fontSize="2xl" fontWeight="semibold">
                Experiences
            </Heading>
            <br />
            <Accordion pt="2" allowMultiple index={experiencesExpanded}>
                {configs.aboutSummary.experiences.map((exp, idx) => (
                    <AccordionItem p="0" border="0" mb="4" key={`panel-${exp.company}`}>
                        <Expandable
                            id={exp.id}
                            title={exp.company}
                            subTitle={exp.position}
                            date={exp.duration}
                            content={exp.description}
                            idx={idx}
                            onChange={setExperiencesExpanded}
                            expanded={experiencesExpanded}
                        />
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};
