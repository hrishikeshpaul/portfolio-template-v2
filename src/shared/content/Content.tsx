import { FC } from "react";

import { Text, Stack, StyleProps } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

interface Props extends StyleProps {
    children?: string;
}

export const Content: FC<Props> = ({ children, ...rest }) => {
    return (
        <Stack spacing="4">
            <ReactMarkdown
                components={{
                    p: ({ node, ...props }) => <Text {...rest} {...props} />,
                }}
            >
                {children as string}
            </ReactMarkdown>
        </Stack>
    );
};
