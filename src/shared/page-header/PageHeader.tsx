import { FC } from "react";

import { Box, Text } from "@chakra-ui/react";

interface Props {
    id?: string;
    label: string;
}
export const PageHeader: FC<Props> = ({ id, label }) => {
    const borderColor = "gray.500";

    return (
        <Box
            id={id}
            pt={{ base: "24", md: "32" }}
            pb="16"
            _before={{
                display: "inline-block",
                content: "''",
                borderBottom: "2px solid ",
                borderColor,
                width: "5rem",
                margin: "auto",
                marginRight: "0.5rem",
                transform: "translateY(-0.35rem)",
            }}
            textTransform="uppercase"
            fontSize="xl"
        >
            <Text as="span" color={borderColor} fontWeight="700">
                {label}
            </Text>
        </Box>
    );
};
