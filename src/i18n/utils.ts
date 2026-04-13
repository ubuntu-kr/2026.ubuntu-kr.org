import { extractLocaleFromUrl, baseLocale, toLocale, type Locale } from '../paraglide/runtime';
import { m as messages } from '../paraglide/messages.js';

export type MessageKey = keyof typeof messages;
export type MessageFunction = (
  inputs?: Record<string, never>,
  options?: { locale?: Locale }
) => string;
export type TranslationKey = MessageKey;
export type { Locale };

export function useTranslations(locale?: Locale) {
  const resolvedLocale = toLocale(locale) ?? baseLocale;

  return function t(key: MessageKey) {
    return (messages[key] as MessageFunction)({}, { locale: resolvedLocale });
  };
}
