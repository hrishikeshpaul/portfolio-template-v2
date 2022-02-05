import { FC } from "react";

import { Container } from "@chakra-ui/react";

import "./App.scss";
import { Navbar } from "shared/navbar/Navbar";

export const App: FC = () => {
    return (
        <Container>
            <Navbar />
        </Container>
    );
};
