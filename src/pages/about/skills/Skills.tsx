import { FC } from "react";

import { Box } from "@chakra-ui/react";

import { Tags } from "shared/tags/Tags";
import { ArticleTitle, SectionTitle } from "../common/title/Title";
import {useTranslation} from "react-i18next";


interface SkillProps {
    title: string;
    tools: Array<string>;
}

export const Skills: FC = () => {
    const {t} = useTranslation('about');

    const skills = t('skills', { returnObjects: true, ns: 'about' }) as Array<SkillProps>;

    return (
        <>
            <ArticleTitle title="Skills" pb="2" />

            <br />
            {skills.map(
                (skill: SkillProps) => (
                    <Box p="0" mb="4" key={`skills-${skill.title}`}>
                        <SectionTitle title={skill.title} />
                        <Tags id={`skills-tags-${skill.title}`} tags={skill.tools} />
                    </Box>
                ))}
        </>
    );
};

