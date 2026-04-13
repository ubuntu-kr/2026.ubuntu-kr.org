import { sequence, defineMiddleware } from "astro:middleware";
import { setLocale, type Locale } from "./paraglide/runtime.js";

export const onRequest = sequence(
    defineMiddleware((context, next) => {
        setLocale(context.currentLocale as Locale);
        return next();
    })
);