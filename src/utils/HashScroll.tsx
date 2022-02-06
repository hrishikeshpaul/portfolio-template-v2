import { FC, useEffect } from "react";

const FeaturedProjectsPageId = "page-featured-projects";
const OtherProjectsPageId = "page-other-projects";

export const HashScroll: FC = () => {
    useEffect(() => {
        // if (window.location.hash) {
        //     setTimeout(() => {
        //         const element = document
        //             .getElementById(`page-${window.location.hash.replace("#", "")}`)
        //             ?.getBoundingClientRect().top!;

        //         window.scrollTo({ behavior: "smooth", top: element });
        //     }, 500);
        // }

        const featuredProjects = document.getElementById(FeaturedProjectsPageId)?.getBoundingClientRect().top!;
        const otherProjects = document.getElementById(OtherProjectsPageId)?.getBoundingClientRect().top!;

        document.addEventListener("scroll", () => {
            if (window.scrollY > featuredProjects + 50) {
                window.location.hash = "#work";
            }

            if (window.scrollY < featuredProjects) {
                history.pushState("", document.title, window.location.pathname + window.location.search); // eslint-disable-line
            }
        });
    }, []);

    return <></>;
};
