"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { content, Content } from "@/lib/content";

type Language = "en" | "ru" | "pl" | "uk";

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>("en");

    // Fallback to English if translation is missing (though we ensured it matches)
    const t = content[lang] || content.en;

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
