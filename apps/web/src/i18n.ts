export const SUPPORTED_LANGS = [
  "en",
  "uk",
  "es",
  "fr",
  "de",
  "it",
  "ja",
  "zh",
  "hi",
  "ar",
];

export const DEFAULT_LANG = SUPPORTED_LANGS[0];

export type Lang = (typeof SUPPORTED_LANGS)[number];

export function getHelloWorldGreeting(lang: Lang) {
  return {
    en: "Hello world!",
    uk: "Привіт, Світ!",
    es: "¡Hola Mundo!",
    fr: "Bonjour le monde!",
    de: "Hallo Welt!",
    it: "Ciao mondo!",
    ja: "こんにちは世界！",
    zh: "你好，世界！",
    hi: "नमस्ते दुनिया!",
    ar: "مرحباً بالعالم!",
  }[lang];
}
