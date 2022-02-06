import { FC } from "react";

import { Button, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { ArrowRightIcon, GitHubIcon, LinkIcon } from "utils/Icons";
import { open } from "utils/Functions";

interface ButtonProps {
    buttonSize?: string;
}

interface GitHubButtonProps extends ButtonProps {
    github?: string;
    display?: any;
}

interface ReadMoreProps {
    readMore?: string;
}

interface LiveDemoProps extends ButtonProps {
    demo?: string;
    display?: any;
}

interface Props extends GitHubButtonProps, ReadMoreProps, LiveDemoProps {}

export const ReadMore: FC<ReadMoreProps> = ({ readMore }) => {
    return readMore ? (
        <Button
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
    const as = useBreakpointValue({ base: IconButton, md: Button });

    return github ? (
        <Button
            as={as}
            colorScheme="gray"
            color="black"
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
    const as = useBreakpointValue({ base: IconButton, md: Button });

    return demo ? (
        <Button as={as} display={display} leftIcon={<LinkIcon />} icon={<LinkIcon />} onClick={() => open(demo)}>
            Live Demo
        </Button>
    ) : null;
};

export const ProjectCardFooter: FC<Props> = ({ readMore, github, demo, buttonSize = "md" }) => {
    return (
        <Flex justifyContent="space-between" alignItems="center" py="4">
            <Flex gap="4" justifyContent="space-between" display={demo || github ? "flex" : "none"}>
                <LiveDemo demo={demo} />
                <GitHubButton github={github} />
            </Flex>

            <ReadMore readMore={readMore} />
        </Flex>
    );
};
