import type { Locale, Dictionary } from "./types";
import en from "./dictionaries/en.json";
import id from "./dictionaries/id.json";

const dictionaries: Record<Locale, Dictionary> = { en, id };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
