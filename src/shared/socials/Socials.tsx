import { Button, HStack, IconButton } from "@chakra-ui/react";
import { FC } from "react";
import { onGitHubOpen, onLinkedinOpen, onMailTo, onResumeOpen } from "utils/Functions";
import { GitHubIcon, LinkedInIcon, MailIcon } from "utils/Icons";

const iconButtonStyles = {
    fontSize: "2xl",
    variant: "ghost",
    color: "gray.700",
    bg: "transparent",
    _hover: { color: "primary.500" },
    _active: { bg: "transparent" },
};

interface Props {
    resume?: boolean;
    github?: boolean;
    linkedin?: boolean;
    mail?: boolean;
}

export const Socials: FC<Props> = ({ resume = true, github = true, linkedin = true, mail = true }) => {
    return (
        <HStack spacing="6">
            {resume && (
                <Button size="lg" borderRadius="xl" mr="2" onClick={onResumeOpen}>
                    Resume
                </Button>
            )}
            {linkedin && (
                <IconButton
                    minWidth="0"
                    {...iconButtonStyles}
                    aria-label="linkedin-icon"
                    icon={<LinkedInIcon />}
                    onClick={onLinkedinOpen}
                />
            )}

            {github && (
                <IconButton
                    minWidth="0"
                    {...iconButtonStyles}
                    aria-label="github-icon"
                    icon={<GitHubIcon />}
                    onClick={onGitHubOpen}
                />
            )}
            {mail && (
                <IconButton
                    minWidth="0"
                    {...iconButtonStyles}
                    fontSize="3xl"
                    aria-label="mail-icon"
                    icon={<MailIcon />}
                    onClick={onMailTo}
                />
            )}
        </HStack>
    );
};
