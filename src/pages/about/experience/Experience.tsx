import { FC, useState } from "react";

import { Accordion, AccordionItem } from "@chakra-ui/react";

import { Expandable } from "pages/about/common/expandable/Expandable";
import { ArticleTitle } from "pages/about/common/title/Title";
import {useTranslation} from "react-i18next";

interface ExperienceProps {
    id: string;
    company: string;
    position: string;
    duration: string;
    description: Array<string>;
}

export const Experience: FC = () => {
    const [experiencesExpanded, setExperiencesExpanded] = useState<number[]>([]);
    const {t} = useTranslation('about');
    const experiences = t('experiences', { returnObjects: true}) as Array<ExperienceProps>;

    return (
        <>
            <ArticleTitle title="Experiences" />
            <br />
            <Accordion pt="2" allowMultiple index={experiencesExpanded}>
                {experiences.map((exp, idx) => (
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
