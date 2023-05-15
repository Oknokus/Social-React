import i18n from "i18next";
import HttpBackend, { HttpBackendOptions } from 'i18next-http-backend'
import languagedetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

i18n
    .use(HttpBackend)
    .use(languagedetector)
    .use(initReactI18next)
    .init({
        fallbackLng:"ru",
        whitelist: ["ru", "en"],
        debug: false,
        detection: {
            order: ["localStorage", "cookie"],
            caches: ["localStorage", "cookie"]
        },
        interpolation: {
            escapeValue: false
        }
    });

    export default i18n;

