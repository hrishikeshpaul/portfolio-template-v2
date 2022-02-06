import { FC } from "react";

import { Box } from "@chakra-ui/react";
import { configs } from "shared/content/Content";

export const OtherProjects: FC = () => {
    return (
        <Box h="100%" w="100%">
            {configs.otherProjects.map((project, idx) => (
                <>{project.title}</>
            ))}
        </Box>
    );
};
