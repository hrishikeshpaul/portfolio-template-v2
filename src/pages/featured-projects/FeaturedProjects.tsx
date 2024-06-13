import { FC } from "react";

import { Box } from "@chakra-ui/react";

import { FeaturedProjectCard, ImagePosition } from "pages/featured-projects/featured-project-card/FeaturedProjectCard";
import {useTranslation} from "react-i18next";

interface FeaturedProjectProps {
    id: string;
    title: string;
    year: string;
    location: string;
    demo: string;
    github: string;
    tags: Array<string>;
    description: string;
    image: string;
    jpg: string;
}


export const FeaturedProjects: FC = () => {

    const {t, i18n} = useTranslation('featured-projects');
    const featuredProjects = t('projects', { returnObjects: true }) as Array<FeaturedProjectProps>;

    return (
        <Box
            id="featured-projects"
            display={{ base: "block", md: "flex", lg: "block" }}
            flexDir="column"
            gap={{ base: "2", md: "1" }}
        >
            {featuredProjects.map((project, idx) => (
                <FeaturedProjectCard
                    imagePosition={idx % 2 === 0 ? ImagePosition.Right : ImagePosition.Left}
                    key={project.id}
                    {...project}
                />
            ))}
        </Box>
    );
};
