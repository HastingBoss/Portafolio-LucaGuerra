import React, { createContext, useContext, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('es'); // Default to Spanish as requested
  
  const toggleLanguage = () => setLang(l => l === 'en' ? 'es' : 'en');
  
  const t = (key) => {
    const keys = key.split('.');
    let val = translations[lang];
    for (let k of keys) {
      if (val === undefined) break;
      val = val[k];
    }
    return val || key;
  };
  
  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
