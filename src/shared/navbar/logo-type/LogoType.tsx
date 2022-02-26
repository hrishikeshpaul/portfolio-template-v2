import { FC } from "react";

import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

interface Props {
    text: {
        mobile: string;
        desktop: string;
    };
}

export const LogoType: FC<Props> = ({ text }) => {
    const variant = useBreakpointValue({ base: text.mobile, md: text.desktop });

    return (
        <Box transition="all 0.2s ease-in-out" _hover={{ cursor: "pointer", color: "primary.600" }}>
            <Text fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1" fontFamily="Signature" mb={{ base: 0, md: -2 }}>
                {variant}
            </Text>
        </Box>
    );
};
