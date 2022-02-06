import { FC } from "react";

import { Box, Text } from "@chakra-ui/react";

interface Props {
    label: string;
}
export const PageHeader: FC<Props> = ({ label }) => {
    const borderColor = "gray.500";
    return (
        <Box
            py={{ base: "16", md: "24" }}
            _before={{
                display: "inline-block",
                content: "''",
                borderBottom: "2px solid ",
                borderColor,
                width: "5rem",
                margin: "auto 0.5rem",
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
