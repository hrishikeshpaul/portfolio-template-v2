import { FC, useState } from "react";

import { Box, Button, Flex } from "@chakra-ui/react";
import {useTranslation} from "react-i18next";
import { OtherProjectCard } from "pages/other-projects/other-project-card/OtherProjectCard";
import { ChevronDownIcon, ChevronUpIcon } from "utils/Icons";

const initialCount = 3;
const incrementor = 3;

interface OtherProjectProps {
    id: string;
    title: string;
    year: string;
    github: string;
    demo: string;
    tags: Array<string>;
    description: string;
    image: string;
    jpg: string;
}

export const OtherProjects: FC = () => {
    const [count, setCount] = useState<number>(initialCount);
    const {t} = useTranslation('other-projects');
    const otherProjects = t('projects', { returnObjects: true}) as Array<OtherProjectProps>;

    const scrollToElement = (idx: number) => {
        const elementTop = document
            .getElementById(`other-project-card-${otherProjects[idx].id}`)
            ?.getBoundingClientRect().top;

        if (elementTop) {
            window.scrollTo({ top: elementTop + window.scrollY - 64, behavior: "smooth" });
        }
    };

    const onShowMore = () => {
        const oldCount = count;
        setCount(count + incrementor);
        setTimeout(() => {
            scrollToElement(oldCount);
        }, 1);
    };

    const onShowLess = () => {
        setCount(initialCount);
        scrollToElement(initialCount);
    };

    return (
        <Box>
            {otherProjects.map((project, idx) => (
                <div key={project.id}>{idx < count && <OtherProjectCard key={project.id} {...project} />}</div>
            ))}
            <Flex justifyContent="center" py="8" display={otherProjects.length > 3 ? "flex" : "none"}>
                {count < otherProjects.length ? (
                    <Button rightIcon={<ChevronDownIcon />} variant="link" onClick={onShowMore}>
                        Show More
                    </Button>
                ) : (
                    <Button rightIcon={<ChevronUpIcon />} variant="link" onClick={onShowLess}>
                        Show Less
                    </Button>
                )}
            </Flex>
        </Box>
    );
};
