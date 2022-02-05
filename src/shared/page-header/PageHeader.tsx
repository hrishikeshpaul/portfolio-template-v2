import { FC } from "react";

import { Box, Text } from "@chakra-ui/react";

export const PageHeader: FC = () => {
    const borderColor = "gray.400";
    return (
        <Box
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
                Hello
            </Text>
        </Box>
    );
};
