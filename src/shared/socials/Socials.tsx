import { FC } from "react";

import { Button, HStack, IconButton } from "@chakra-ui/react";

import { configs } from "shared/content/Content";
import { onResumeOpen, open } from "utils/Functions";
import { FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, YoutubeIcon } from "utils/Icons";

const LinksToIconMapper: Record<string, JSX.Element> = {
    linkedin: <LinkedInIcon />,
    github: <GitHubIcon />,
    facebook: <FacebookIcon />,
    instagram: <InstagramIcon />,
    youtube: <YoutubeIcon />,
    mail: <MailIcon />,
};

interface Props {
    resume?: boolean;
    exclude?: Array<string>;
    delay?: number;
}

export const Socials: FC<Props> = ({ resume = true, exclude, delay = 800 }) => {
    return (
        <HStack spacing="6">
            {resume && (
                <Button data-aos="fade" data-aos-delay="700" size="lg" borderRadius="xl" mr="2" onClick={onResumeOpen}>
                    Resume
                </Button>
            )}
            {configs.common.socials.map(
                (social, idx) =>
                    !exclude?.includes(social.type) && (
                        <Button
                            p="0"
                            as={IconButton}
                            data-aos="fade"
                            variant="icon"
                            data-aos-delay={idx * 100 + delay}
                            key={social.type}
                            fontSize="2xl"
                            icon={LinksToIconMapper[social.type]}
                            onClick={() => open(social.link)}
                        />
                    ),
            )}
        </HStack>
    );
};
