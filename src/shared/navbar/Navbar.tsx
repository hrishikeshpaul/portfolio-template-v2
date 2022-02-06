import { FC } from "react";

import { Box, Button, Container, Flex, HStack, useColorModeValue } from "@chakra-ui/react";

import { configs } from "shared/content/Content";
import { bgDark, bgLight } from "theme";
import { LogoType } from "shared/navbar/logo-type/LogoType";
import { onResumeOpen } from "utils/Functions";

export const Navbar: FC = () => {
    const bg = useColorModeValue(bgLight, bgDark);

    return (
        <Box position="fixed" top="0" w="100%" left="50%" transform="translate(-50%)" zIndex="1000">
            <Container py="4" px="6" bg={bg}>
                <Flex justifyContent="space-between" alignItems="center">
                    <LogoType text={configs.common.logoType} />
                    <HStack spacing="8">
                        <Button variant="link" color="black">
                            Work
                        </Button>
                        <Button variant="link" color="black">
                            About
                        </Button>
                        <Button variant="link" onClick={onResumeOpen}>
                            Resume
                        </Button>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
};
