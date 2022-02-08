import { FC } from "react";

import { StyleProps, Text } from "@chakra-ui/react";

interface Props extends StyleProps {
    title: string;
}

export const SectionTitle: FC<Props> = ({ title, ...props }) => {
    return (
        <Text fontWeight="semibold" fontSize="lg" {...props} data-aos="fade-down">
            {title}
        </Text>
    );
};
