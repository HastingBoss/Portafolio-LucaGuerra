import React, { createContext, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Derive language from URL path: /es -> 'es', /en -> 'en', else default 'es'
  const pathLang = location.pathname.split('/')[1];
  const lang = (pathLang === 'en' || pathLang === 'es') ? pathLang : 'es';

  // Redirect root / to /es
  useEffect(() => {
    if (!pathLang || (pathLang !== 'en' && pathLang !== 'es')) {
      navigate('/es', { replace: true });
    }
  }, []);

  const toggleLanguage = () => {
    const next = lang === 'es' ? 'en' : 'es';
    navigate(`/${next}`);
  };

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
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
