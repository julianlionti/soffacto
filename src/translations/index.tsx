import i18n, { StringMap, TOptions } from "i18next";
import { useCallback } from "react";
import { initReactI18next, useTranslation } from "react-i18next";
import { enUs } from "./en_us";
import { esAr } from "./es_ar";

export type Translations =
  | "description"
  | "about"
  | "services"
  | "about.title"
  | "about.maintitle";

export type Translation = Record<Translations, string>;

export const initTranslations = (): void => {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: enUs },
      es: { translation: esAr },
    },
    fallbackLng: "es",
    interpolation: { escapeValue: false },
  });
};

type TypedT = (key: Translations) => string | TOptions<StringMap> | undefined;
export const useT = (): TypedT => {
  const { t } = useTranslation<Translations>();

  const typedT = useCallback<TypedT>((key) => t(key), [t]);
  return typedT;
};
