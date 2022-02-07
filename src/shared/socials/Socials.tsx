import { Button, HStack, IconButton } from "@chakra-ui/react";
import { FC } from "react";
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
}

export const Socials: FC<Props> = ({ resume = true, exclude }) => {
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
                        <IconButton
                            data-aos="fade"
                            data-aos-delay={idx * 100 + 800}
                            key={social.type}
                            minWidth="0"
                            bg="transparent"
                            fontSize="2xl"
                            color="gray.700"
                            _hover={{ color: "primary.500" }}
                            _active={{ bg: "transparent" }}
                            aria-label={`${social.type}-icon`}
                            icon={LinksToIconMapper[social.type]}
                            onClick={() => open(social.link)}
                        />
                    ),
            )}
        </HStack>
    );
};

Socials.defaultProps = {
    // resume: false,
    // github: false,
    // linkedin: false,
    // mail: false,
    // youtube: false,
    // facebook: false,
    // instagram: false,
};
