import { FC, useState } from "react";

import { Accordion, AccordionItem } from "@chakra-ui/react";
import { Expandable } from "pages/about/common/expandable/Expandable";
import { ArticleTitle } from "pages/about/common/title/Title";
import {useTranslation} from "react-i18next";

interface EducationProps {
    id: string;
    school: string;
    degree: string;
    duration: string;
    content: Array<string>;
}

export const Education: FC = () => {
    const [educationExpanded, setEducationExpanded] = useState<number[]>([]);
    const {t} = useTranslation('about');
    const educations = t('educations', { returnObjects: true}) as Array<EducationProps>;

    return (
        <>
            <ArticleTitle title="Education" />

            <br />

            <Accordion pt="2" allowMultiple index={educationExpanded} id="education">
                {educations.map((edu, idx) => (
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
