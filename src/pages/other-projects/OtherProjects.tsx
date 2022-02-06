import { FC, useState } from "react";

import { Box } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { OtherProjectCard } from "pages/other-projects/other-project-card/OtherProjectCard";

export const OtherProjects: FC = () => {
    const [count, setCount] = useState<number>(3);

    return (
        <Box>
            {configs.otherProjects.map((project, idx) => (
                <>{idx < count && <OtherProjectCard key={project.id} {...project} />}</>
            ))}
        </Box>
    );
};
