import { FC } from "react";

import { Center, Container, Heading, Image, HStack, Button, Stack } from "@chakra-ui/react";
import { configs } from "content";
import { Content } from "shared/content/Content";
import { useContent } from "content/useContent";

export const Landing: FC = () => {
    const { landing } = useContent();

    return (
        <Center h="100%" w="100%">
            <HStack spacing="16" justifyContent="space-between" alignItems="flex-start">
                <Stack flex={{ base: "1", md: "0.6" }} spacing="16">
                    <Stack spacing="8">
                        <Heading fontSize={["5xl", "7xl"]} lineHeight={1}>
                            {configs.landing.headline}
                        </Heading>
                        <Content fontSize="lg">{landing}</Content>
                    </Stack>
                    <Button>Resume</Button>
                </Stack>
                <Container flex="0.4" w="50%" display={{ base: "none", md: "block" }}>
                    <Image borderRadius="xl" src={configs.landing.picture} />
                </Container>
            </HStack>
        </Center>
    );
};
