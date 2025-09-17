import { useContext } from "react";
import { I18nContext } from "../contexts/I18nContext";
import { translations } from "../constants/translations";

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error(translations.en.error.useI18n);
  }

  return context;
}
