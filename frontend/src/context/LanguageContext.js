import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/products';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default to English as requested
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    // Update document direction
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    
    // Update body class for font switching
    if (language === 'ar') {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-body');
    } else {
      document.body.classList.remove('font-arabic');
      document.body.classList.add('font-body');
    }
  }, [language, direction]);

  const toggleLanguage = () => {
    if (language === 'en') {
      setLanguage('ar');
      setDirection('rtl');
    } else {
      setLanguage('en');
      setDirection('ltr');
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const getProductName = (product) => {
    return language === 'ar' ? product.nameAr : product.nameEn;
  };

  const getColorName = (color) => {
    return language === 'ar' ? color.nameAr : color.nameEn;
  };

  const value = {
    language,
    direction,
    toggleLanguage,
    t,
    getProductName,
    getColorName,
    isRTL: direction === 'rtl'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
