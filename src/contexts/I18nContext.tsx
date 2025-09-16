import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { translations } from "../constants/translations";

export type Language = "en" | "ar";

export interface I18nContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  isRTL: boolean;
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined);
export type TFunction = (key: string, params?: Record<string, string | number>) => string;

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("language") as Language;
      if (stored) return stored;
      return navigator.language.startsWith("ar") ? "ar" : "en";
    }
    return "en";
  });

  const isRTL = language === "ar";

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const value = useMemo<I18nContextType>(() => {

    const t: TFunction = (
      key,
      params
    ) => {
      const translationMap = translations[language] as Record<string, string>;

      let translation = translationMap[key] ?? key;

      // replace {{params}} if any
      if (params) {
        Object.entries(params).forEach(([param, value]) => {
          translation = translation.replace(
            `{{${param}}}`,
            String(value)
          );
        });
      }
      return translation;
    };

    return {
      language,
      toggleLanguage,
      t,
      isRTL,
    };
  }, [language, isRTL]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

