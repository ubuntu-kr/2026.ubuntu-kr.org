import englishMessages from "../../messages/en.json";
import koreanMessages from "../../messages/ko.json";

export const lanuages = {
    en: "English",
    ko: "한국어"
}

export const defaultLang = "ko";

export const ui = {
    en: englishMessages,
    ko: koreanMessages
} as const;