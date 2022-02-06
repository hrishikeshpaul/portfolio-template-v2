import { FC, useState } from "react";

import { Box, Button, Flex } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { OtherProjectCard } from "pages/other-projects/other-project-card/OtherProjectCard";

export const OtherProjects: FC = () => {
    const [count, setCount] = useState<number>(3);

    return (
        <Box>
            {configs.otherProjects.map((project, idx) => (
                <>{idx < count && <OtherProjectCard key={project.id} {...project} />}</>
            ))}
            <Flex justifyContent="center" py="8">
                <Button variant="outline">Show More</Button>
            </Flex>
        </Box>
    );
};
