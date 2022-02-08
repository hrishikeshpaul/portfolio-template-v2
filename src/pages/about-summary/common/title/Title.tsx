import { FC } from "react";

import { Text, useColorModeValue } from "@chakra-ui/react";

interface Props {
    title: string;
}

export const SectionTitle: FC<Props> = ({ title }) => {
    const titleColor = useColorModeValue("gray.600", "gray.100");
    return (
        <Text fontWeight="bold" fontSize="lg" color={titleColor}>
            {title}
        </Text>
    );
};
