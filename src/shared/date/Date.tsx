import { FC } from "react";

import { Text } from "@chakra-ui/react";

interface Props {
    year: string;
}

export const Date: FC<Props> = ({ year }) => {
    return (
        <Text fontSize="sm" fontWeight="700" opacity="0.5" as="span">
            {year}
        </Text>
    );
};
