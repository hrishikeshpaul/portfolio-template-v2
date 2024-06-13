import { FC } from "react";

import { Button, HStack, IconButton, Tooltip } from "@chakra-ui/react";

import {useTranslation} from "react-i18next";
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

interface SocialProps {
    type: string;
    link: string;
}

export const Socials: FC<Props> = ({ resume = true, exclude, delay = 800 }) => {
    const {t} = useTranslation('common');
    const socials = t('socials', { returnObjects: true}) as Array<SocialProps>;

    return (
        <HStack spacing="5">
            {resume && (
                <Button data-aos="fade" data-aos-delay={delay} size="lg" borderRadius="xl" mr="2" onClick={onResumeOpen}>
                    Resume
                </Button>
            )}
            {socials.map(
                (social, idx) =>
                    !exclude?.includes(social.type) && (
                        <Tooltip key={social.type} label={social.type} textTransform="capitalize">
                            <Button
                                p="0"
                                aria-label={`${social.type}-button`}
                                as={IconButton}
                                variant="icon"
                                data-aos="fade"
                                data-aos-delay={idx * 100 + delay}
                                fontSize={social.type === "mail" ? "24pt" : "20pt"}
                                icon={LinksToIconMapper[social.type]}
                                onClick={() => open(social.link)}
                            />
                        </Tooltip>
                    ),
            )}
        </HStack>
    );
};
