import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    menu: 'Menu',
    offers: 'Offers',
    contact: 'Contact',
    loveWall: 'Love Wall',
    
    // Hero
    heroTitle: 'Where Crepes Become an Experience.',
    heroSubtitle: 'Crafted with love. Filled with chocolate. Finished with perfection.',
    orderNow: 'Order Now on WhatsApp',
    viewMenu: 'View Our Menu',
    
    // About
    aboutTitle: 'The Art of Sweet Perfection',
    aboutText1: 'At Crepe Planet, desserts are more than food — they are a moment of happiness.',
    aboutText2: 'From rich Belgian chocolate to creamy pistachio and fluffy pancakes, every bite is crafted to satisfy your sweetest cravings.',
    ourStory: 'Our Story',
    ourMission: 'Our Mission',
    missionText: 'To bring joy through every dessert we create, using only the finest ingredients and time-honored recipes passed down through generations.',
    
    // Menu
    menuTitle: 'Our Menu',
    menuSubtitle: 'Fluffy, warm, and dripping with flavor — our creations are made to be unforgettable.',
    crepes: 'Crepes',
    pancakes: 'Pancakes',
    signaturePlate: 'Signature Plate',
    chefFavorite: "Chef's Favorite",
    orderOnWhatsApp: 'Order on WhatsApp',
    
    // Offers
    offersTitle: 'Special Offers',
    offersSubtitle: 'Limited time deals you don\'t want to miss',
    
    // Contact
    contactTitle: 'Get in Touch',
    contactSubtitle: 'One message away from your next favorite dessert.',
    followUs: 'Follow Us',
    messageUs: 'Message Us',
    
    // Love Wall
    loveWallTitle: 'Wall of Love',
    loveWallSubtitle: 'Sweet words from our sweet community',
    shareYourLove: 'Share Your Love',
    yourName: 'Your Name',
    yourMessage: 'Your Message...',
    submitLove: 'Send Love',
    
    // Footer
    madeWith: 'Made with love & chocolate',
    allRights: 'All rights reserved',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'من نحن',
    menu: 'القائمة',
    offers: 'العروض',
    contact: 'اتصل بنا',
    loveWall: 'جدار الحب',
    
    // Hero
    heroTitle: 'حيث يصبح الكريب تجربة.',
    heroSubtitle: 'صُنع بحب. مليء بالشوكولاتة. مثالي حتى النهاية.',
    orderNow: 'اطلب الآن عبر واتساب',
    viewMenu: 'عرض القائمة',
    
    // About
    aboutTitle: 'فن الكمال الحلو',
    aboutText1: 'في كريب بلانيت، الحلويات أكثر من مجرد طعام — إنها لحظة سعادة.',
    aboutText2: 'من الشوكولاتة البلجيكية الغنية إلى الفستق الكريمي والبانكيك الهش، كل قضمة مصنوعة لإرضاء رغباتك الأكثر حلاوة.',
    ourStory: 'قصتنا',
    ourMission: 'مهمتنا',
    missionText: 'جلب السعادة من خلال كل حلوى نصنعها، باستخدام أجود المكونات والوصفات العريقة المتوارثة عبر الأجيال.',
    
    // Menu
    menuTitle: 'قائمتنا',
    menuSubtitle: 'هشة، دافئة، وتقطر بالنكهة — إبداعاتنا صُنعت لتكون لا تُنسى.',
    crepes: 'كريب',
    pancakes: 'بانكيك',
    signaturePlate: 'الطبق المميز',
    chefFavorite: 'المفضل لدى الشيف',
    orderOnWhatsApp: 'اطلب عبر واتساب',
    
    // Offers
    offersTitle: 'عروض خاصة',
    offersSubtitle: 'عروض لفترة محدودة لا تريد أن تفوتها',
    
    // Contact
    contactTitle: 'تواصل معنا',
    contactSubtitle: 'رسالة واحدة تفصلك عن حلوتك المفضلة القادمة.',
    followUs: 'تابعنا',
    messageUs: 'راسلنا',
    
    // Love Wall
    loveWallTitle: 'جدار الحب',
    loveWallSubtitle: 'كلمات حلوة من مجتمعنا الحلو',
    shareYourLove: 'شارك حبك',
    yourName: 'اسمك',
    yourMessage: 'رسالتك...',
    submitLove: 'أرسل حبك',
    
    // Footer
    madeWith: 'صُنع بحب وشوكولاتة',
    allRights: 'جميع الحقوق محفوظة',
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    setDirection(language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
