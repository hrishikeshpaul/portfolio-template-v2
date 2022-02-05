import { FC } from "react";

import { Box, Container } from "@chakra-ui/react";

import { Navbar } from "shared/navbar/Navbar";
import { Landing } from "pages/landing/Landing";
import { NavbarHeight } from "theme";

import "./App.scss";
import { PageHeader } from "shared/page-header/PageHeader";

export const App: FC = () => {
    return (
        <Container h="100%" px="6">
            <Navbar />
            <Box mt={NavbarHeight} h="100%">
                <Landing />
                <PageHeader label="Featured Projects" />
            </Box>
        </Container>
    );
};
