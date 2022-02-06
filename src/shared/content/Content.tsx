import { FC, useEffect, useState } from "react";

import { Text, Stack, StyleProps, Link } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

import common from "content/common/common.json";
import landing from "content/landing/landing-config.json";
import featuredProjects from "content/featured-projects/featured-projects-config.json";
import otherProjects from "content/other-projects/other-projects-config.json";

import LandingMd from "content/landing/landing.md";
import AboutSummaryMd from "content/about-summary/about-summary.md";

export const configs = {
    common,
    landing,
    featuredProjects,
    otherProjects,
};

interface State {
    landing: string;
    aboutSummary: string;
}

export enum MarkdownFile {
    Landing = "landing",
    AboutSummary = "aboutSummary",
}

const Mapper = {
    [MarkdownFile.Landing]: LandingMd,
    [MarkdownFile.AboutSummary]: AboutSummaryMd,
};

export const useContent = (fileName: MarkdownFile) => {
    const [data, setData] = useState<State>({ landing: "", aboutSummary: "" });

    useEffect(() => {
        fetch(Mapper[fileName])
            .then((res) => res.text())
            .then((text) => setData((data) => ({ ...data, [fileName]: text })));
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
