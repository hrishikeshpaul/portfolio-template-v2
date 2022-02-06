import { configs } from "shared/content/Content";

export const open = (link: string) => window.open(link, "_blank");

export const onResumeOpen = () => {
    open(configs.common.resume);
};

export const onLinkedinOpen = () => {
    open(configs.common.linkedin);
};

export const onGitHubOpen = () => {
    open(configs.common.github);
};

export const onMailTo = () => {
    open("mailto:" + configs.common.email);
};
