import "server-only";
import { type Locale } from "../../i18n-config";

// We enumerate all dictionaries here so that we can leverage static analysis and ensure that

const dictionaries = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  it: () =>
    import("../../dictionaries/it.json").then((module) => module.default),
  fr: () =>
    import("../../dictionaries/fr.json").then((module) => module.default),
  hi: () =>
    import("../../dictionaries/hi.json").then((module) => module.default),
  ar: () =>
    import("../../dictionaries/ar.json").then((module) => module.default),
};

function deepMerge(base: any, update: any) {
  if (!update) return base;
  if (!base) return update;

  const output = { ...base };
  Object.keys(update).forEach((key) => {
    if (isObject(update[key]) && isObject(base[key])) {
      output[key] = deepMerge(base[key], update[key]);
    } else {
      output[key] = update[key];
    }
  });
  return output;
}

function isObject(item: any) {
  return item && typeof item === "object" && !Array.isArray(item);
}

export const getDictionary = async (locale: Locale) => {
  const [en, target] = await Promise.all([
    dictionaries.en(),
    locale !== "en" ? dictionaries[locale]?.() : null,
  ]).catch(() => [null, null]);

  if (!en) return {}; // Safety fallback

  return deepMerge(en, target);
};
