import i18next from '../i18n';
export const open = (link: string) => window.open(link, "_blank");

export const onResumeOpen = () => {
    open(i18next.t("resume", {ns: 'common'}));
};

export const onMailTo = () => {
    open("mailto:" + i18next.t('email', {ns: 'common'}));
};
