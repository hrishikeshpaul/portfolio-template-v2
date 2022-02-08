import { FC } from "react";

import { StyleProps, Text, useColorModeValue } from "@chakra-ui/react";

interface Props extends StyleProps {
    title: string;
}

export const SectionTitle: FC<Props> = ({ title, ...props }) => {
    const titleColor = useColorModeValue("gray.600", "gray.100");
    return (
        <Text fontWeight="semibold" fontSize="lg" {...props}>
            {title}
        </Text>
    );
};
