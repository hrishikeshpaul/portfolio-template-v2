import { FC } from "react";

import { Box } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { OtherProjectCard } from "pages/other-projects/other-project-card/OtherProjectCard";

export const OtherProjects: FC = () => {
    return (
        <Box h="100%" w="100%">
            {configs.otherProjects.map((project) => (
                <OtherProjectCard key={project.id} {...project} />
            ))}
        </Box>
    );
};
