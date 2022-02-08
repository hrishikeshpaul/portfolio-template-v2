import { FC, useEffect } from "react";

import { Box, Container } from "@chakra-ui/react";
import AOS from "aos";

import { Navbar } from "shared/navbar/Navbar";
import { Landing } from "pages/landing/Landing";
import { PageHeader } from "shared/page-header/PageHeader";
import { Footer } from "shared/footer/Footer";
import { NavbarHeight } from "theme";
import { FeaturedProjects } from "pages/featured-projects/FeaturedProjects";
import { OtherProjects } from "pages/other-projects/OtherProjects";
import { About } from "pages/about/About";
import { AboutPageId, WorkPageId } from "utils/useScroll";

import "./App.scss";
import "aos/dist/aos.css";

export const App: FC = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <Container h="100%" px={{ base: 6, md: 6, lg: 4 }}>
            <Navbar />
            <Box mt={{ base: "96px", md: NavbarHeight }}>
                <Landing />
                <Box id={WorkPageId}>
                    <PageHeader label="Featured Projects" />
                    <FeaturedProjects />
                    <PageHeader id="page-other-projects" label="Other Projects" />
                    <OtherProjects />
                </Box>

                <Box id={AboutPageId}>
                    <PageHeader label="About Me" />
                    <About />
                </Box>
            </Box>
            <Footer />
        </Container>
    );
};
