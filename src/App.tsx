import { FC } from "react";

import { Box, Container } from "@chakra-ui/react";

import { Navbar } from "shared/navbar/Navbar";
import { Landing } from "pages/landing/Landing";
import { NavbarHeight } from "theme";

import "./App.scss";

export const App: FC = () => {
    return (
        <Container h="100%">
            <Navbar />
            <Box pt={NavbarHeight} h="100%">
                <Landing />
            </Box>
        </Container>
    );
};
