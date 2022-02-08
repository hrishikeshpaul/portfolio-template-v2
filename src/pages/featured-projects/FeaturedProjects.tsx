import { FC } from "react";

import { Box } from "@chakra-ui/react";
import { configs } from "shared/content/Content";

import { FeaturedProjectCard, ImagePosition } from "pages/featured-projects/featured-project-card/FeaturedProjectCard";

export const FeaturedProjects: FC = () => {
    return (
        <Box
            id="featured-projects"
            display={{ base: "block", md: "grid", lg: "block" }}
            gridTemplateColumns="repeat(2, 1fr)"
            gap="10"
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
