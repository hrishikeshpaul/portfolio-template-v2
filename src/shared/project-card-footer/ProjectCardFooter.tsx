import { FC } from "react";

import { Button, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { ArrowRightIcon, GitHubIcon, LinkIcon } from "utils/Icons";
import { open } from "utils/Functions";

interface GitHubButtonProps {
    github?: string;
    display?: any;
}

interface ReadMoreProps {
    readMore?: string;
}

interface LiveDemoProps {
    demo?: string;
    display?: any;
}

interface Props extends GitHubButtonProps, ReadMoreProps, LiveDemoProps {}

export const ReadMore: FC<ReadMoreProps> = ({ readMore }) => {
    return readMore ? (
        <Button
            data-aos="fade"
            data-aos-offset="200"
            variant="link"
            colorScheme="black"
            rightIcon={<ArrowRightIcon fontSize="16pt" />}
            onClick={() => open(readMore)}
        >
            Read More
        </Button>
    ) : null;
};

export const GitHubButton: FC<GitHubButtonProps> = ({ github, display }) => {
    const as = useBreakpointValue({ base: IconButton, lg: Button });

    return github ? (
        <Button
            data-aos="fade"
            data-aos-delay="400"
            as={as}
            variant="secondary"
            py="5"
            display={display}
            leftIcon={<GitHubIcon />}
            icon={<GitHubIcon />}
            onClick={() => open(github)}
        >
            GitHub
        </Button>
    ) : null;
};

export const LiveDemo: FC<LiveDemoProps> = ({ demo, display }) => {
    const as = useBreakpointValue({ base: IconButton, lg: Button });

    return demo ? (
        <Button
            data-aos="fade"
            data-aos-delay="200"
            as={as}
            display={display}
            leftIcon={<LinkIcon fontSize="14pt" />}
            icon={<LinkIcon fontSize="14pt" />}
            onClick={() => open(demo)}
        >
            Live Demo
        </Button>
    ) : null;
};

export const ProjectCardFooter: FC<Props> = ({ readMore, github, demo }) => {
    return (
        <Flex justifyContent={readMore ? "space-between" : "flex-end"} alignItems="center" pt="8">
            <ReadMore readMore={readMore} />
            <Flex gap="4" justifyContent="space-between" alignItems="center" display={demo || github ? "flex" : "none"}>
                <LiveDemo demo={demo} />
                <GitHubButton github={github} />
            </Flex>
        </Flex>
    );
};
