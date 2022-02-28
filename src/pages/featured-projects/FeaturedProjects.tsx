import { FC } from "react";

import { Box } from "@chakra-ui/react";

import { FeaturedProjectCard, ImagePosition } from "pages/featured-projects/featured-project-card/FeaturedProjectCard";
import { configs } from "shared/content/Content";

export const FeaturedProjects: FC = () => {
    return (
        <Box
            id="featured-projects"
            display={{ base: "block", md: "flex", lg: "block" }}
            flexDir="column"
            gap={{ base: "2", md: "1" }}
        >
            {configs.featuredProjects.map((project, idx) => (
                <FeaturedProjectCard
                    imagePosition={idx % 2 === 0 ? ImagePosition.Right : ImagePosition.Left}
                    key={project.id}
                    {...project}
                />
            ))}
        </Box>
    );
};
