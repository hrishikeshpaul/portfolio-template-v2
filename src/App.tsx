import { FC, useEffect, lazy, Suspense } from "react";

import { Box, Container, Center, Spinner } from "@chakra-ui/react";
import AOS from "aos";

import { NavbarHeight } from "theme";
import { AboutPageId, WorkPageId } from "utils/useScroll";

import "./App.scss";
import "aos/dist/aos.css";

const Navbar = lazy(() => import("shared/navbar/Navbar").then((module) => ({ default: module.Navbar })));
const Landing = lazy(() => import("pages/landing/Landing").then((module) => ({ default: module.Landing })));
const PageHeader = lazy(() =>
    import("shared/page-header/PageHeader").then((module) => ({ default: module.PageHeader })),
);
const Footer = lazy(() => import("shared/footer/Footer").then((module) => ({ default: module.Footer })));
const FeaturedProjects = lazy(() =>
    import("pages/featured-projects/FeaturedProjects").then((module) => ({
        default: module.FeaturedProjects,
    })),
);
const OtherProjects = lazy(() =>
    import("pages/other-projects/OtherProjects").then((module) => ({
        default: module.OtherProjects,
    })),
);
const About = lazy(() => import("pages/about/About").then((module) => ({ default: module.About })));

const Loader: FC = () => (
    <Center w="100%" h="100%">
        <Spinner size="lg" color="primary.500" />
    </Center>
);

export const App: FC = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <Suspense fallback={<Loader />}>
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
        </Suspense>
    );
};
