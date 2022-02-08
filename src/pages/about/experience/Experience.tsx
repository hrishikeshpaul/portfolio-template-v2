import { FC, useState } from "react";

import { Accordion, AccordionItem } from "@chakra-ui/react";

import { configs } from "shared/content/Content";
import { Expandable } from "pages/about/common/expandable/Expandable";
import { ArticleTitle } from "pages/about/common/title/Title";

export const Experience: FC = () => {
    const [experiencesExpanded, setExperiencesExpanded] = useState<number[]>([]);

    return (
        <>
            <ArticleTitle title="Experiences" />
            <br />
            <Accordion pt="2" allowMultiple index={experiencesExpanded}>
                {configs.about.experiences.map((exp, idx) => (
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
