import { FC, useEffect, useState } from "react";

import { Text, Stack, StyleProps, Link } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

import common from "content/common/common.json";
import landing from "content/landing/landing-config.json";
import featuredProjects from "content/featured-projects/featured-projects-config.json";

import LandingMd from "content/landing/landing.md";

export const configs = {
    common,
    landing,
    featuredProjects,
};

interface State {
    landing: string;
}

export enum ContentFile {
    Landing,
}

const Mapper = {
    [ContentFile.Landing]: LandingMd,
};

export const useContent = (fileName: ContentFile) => {
    const [data, setData] = useState<State>({ landing: "" });

    useEffect(() => {
        fetch(Mapper[fileName])
            .then((res) => res.text())
            .then((text) => setData((data) => ({ ...data, landing: text })));
    }, [fileName]);

    return data;
};

interface Props extends StyleProps {
    children?: string;
}

export const Content: FC<Props> = ({ children, ...rest }) => {
    return (
        <Stack spacing="4">
            <ReactMarkdown
                components={{
                    p: ({ node, ...props }) => <Text {...rest} {...props} />,
                    a: ({ node, ...props }) => (
                        <Link href={props.href} target="_blank" color="primary.500" {...props} />
                    ),
                }}
            >
                {children as string}
            </ReactMarkdown>
        </Stack>
    );
};
