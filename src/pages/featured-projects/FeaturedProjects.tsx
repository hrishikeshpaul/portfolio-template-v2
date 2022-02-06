import { FC } from "react";

import { Box } from "@chakra-ui/react";
import { configs } from "content";
import { FeaturedProjectCard, ImagePosition } from "./featured-project-card/FeaturedProjectCard";

export const FeaturedProjects: FC = () => {
    return (
        <Box h="100%" w="100%">
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
