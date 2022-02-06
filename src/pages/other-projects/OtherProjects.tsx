import { FC, useState } from "react";

import { Box, Button, Flex } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { OtherProjectCard } from "pages/other-projects/other-project-card/OtherProjectCard";
import { ChevronDownIcon, ChevronUpIcon } from "utils/Icons";

const initialCount = 3;
const incrementor = 3;

export const OtherProjects: FC = () => {
    const [count, setCount] = useState<number>(initialCount);

    const scrollToElement = (idx: number) => {
        const elementTop = document
            .getElementById(`other-project-card-${configs.otherProjects[idx].id}`)
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
            {configs.otherProjects.map((project, idx) => (
                <div key={project.id}>{idx < count && <OtherProjectCard key={project.id} {...project} />}</div>
            ))}
            <Flex justifyContent="center" py="8" display={configs.otherProjects.length > 3 ? "flex" : "none"}>
                {count < configs.otherProjects.length ? (
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
