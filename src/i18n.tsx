import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import ChainedBackend, { ChainedBackendOptions } from 'i18next-chained-backend'
import multiResourcesBackend from "i18next-multi-to-backend";

export const supportedLanguages = ['en', 'nl'];

i18next
    .use(initReactI18next)
    .use(ChainedBackend)
    .init<ChainedBackendOptions>({
        fallbackLng: supportedLanguages[0],
        lng: supportedLanguages[0], //default language
        supportedLngs: supportedLanguages,
        defaultNS: "about",
        backend: {
            backends: [
                multiResourcesBackend(
                    (language:any, namespace:any) => import(`./content/${namespace}/${namespace}-${language}.json`)
                ),
                multiResourcesBackend(
                    (language:any, namespace:any) => import(`./content/md/${namespace}-${language}.md`), 'content'
                )
            ]
        }
    });

export default i18next;
