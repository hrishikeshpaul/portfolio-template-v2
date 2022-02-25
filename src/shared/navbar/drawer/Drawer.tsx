import { FC, useRef } from "react";

import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    IconButton,
    StyleProps,
    Flex,
    Text,
    HStack,
    VStack,
    DrawerFooter,
} from "@chakra-ui/react";

import { ColorModeButton } from "shared/color-mode-button/ColorModeButton";
import { AboutPageId, useScroll, WorkPageId } from "utils/useScroll";
import { MenuIcon } from "utils/Icons";
import { Socials } from "shared/socials/Socials";

interface Props extends StyleProps {
    onSectionClick: (section: string) => void;
}

export const MenuDrawer: FC<StyleProps> = ({ ...props }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<any>(null);

    return (
        <Box {...props}>
            <Button
                as={IconButton}
                variant="icon"
                ref={btnRef}
                onClick={onOpen}
                aria-label="open drawer"
                fontSize="lg"
                color="primary.500"
                icon={<MenuIcon />}
            />
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader px="4">
                        <Flex justifyContent="space-between">
                            <ColorModeButton />
                            <DrawerCloseButton position="relative" top="0" right="0" />
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody>
                        <VStack spacing="4">
                            <Text fontSize="xl" fontWeight="600">
                                Work
                            </Text>
                            <Text fontSize="xl" fontWeight="600">
                                About
                            </Text>
                            <Text fontSize="xl" fontWeight="700" color="primary.500">
                                Resume
                            </Text>
                        </VStack>
                        <Flex justifyContent="center" mt="8">
                            <Socials delay={100} resume={false} />
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};
