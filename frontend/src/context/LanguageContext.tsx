import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";

export type Language = "en" | "ta";

interface LanguageContextProps {
  language: Language;
  changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem("portfolio_lang") as Language) || "en";
  });

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("portfolio_lang", lang);
  };

  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguageContext must be used within a LanguageProvider");
  }
  return context;
}
