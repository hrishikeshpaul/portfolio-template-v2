import { FC } from "react";

import { Box } from "@chakra-ui/react";
import { configs } from "content";
import { FeaturedProjectCard } from "./featured-project-card/FeaturedProjectCard";

export const FeaturedProjects: FC = () => {
    return (
        <Box py="32" h="100%" w="100%">
            {configs.featuredProjects.map((project) => (
                <FeaturedProjectCard key={project.id} {...project} />
            ))}
        </Box>
    );
};
