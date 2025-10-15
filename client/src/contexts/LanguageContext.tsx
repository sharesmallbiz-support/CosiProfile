import { createContext, useContext, useState, useEffect } from 'react';
import type { Language, LanguageContent } from '@/types/language';

interface LanguageContextType {
  language: Language;
  content: LanguageContent | null;
  setLanguage: (lang: Language) => void;
  isLoading: boolean;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'ka' || saved === 'en') ? saved : 'en';
  });
  const [content, setContent] = useState<LanguageContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const loadLanguage = async () => {
      if (content) {
        setIsTransitioning(true);
        await new Promise(resolve => setTimeout(resolve, 200));
      } else {
        setIsLoading(true);
      }

      try {
        const response = await fetch(`./${language}.json`);
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error('Failed to load language file:', error);
      } finally {
        setIsLoading(false);
        setIsTransitioning(false);
      }
    };

    loadLanguage();
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  return (
    <LanguageContext.Provider value={{ language, content, setLanguage, isLoading, isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
