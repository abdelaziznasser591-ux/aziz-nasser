import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const MenuCard = ({ item, index, isSignature = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t, language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`menu-card-${item.nameEn?.toLowerCase().replace(/\s+/g, '-') || index}`}
      className={`relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-floating transition-shadow duration-500 ${
        isSignature ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Signature Badge */}
      {isSignature && (
        <div className="absolute top-4 right-4 z-20 bg-gold text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wide">
          {t('chefFavorite')}
        </div>
      )}

      {/* Image Container */}
      <div className={`relative overflow-hidden ${isSignature ? 'h-64 md:h-80' : 'h-48'}`}>
        <motion.img
          src={item.image}
          alt={language === 'ar' ? item.nameAr : item.nameEn}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        {/* Price Tag */}
        <div className="absolute bottom-3 right-3 bg-gold text-primary px-3 py-1.5 rounded-full font-bold text-sm shadow-lg">
          {item.price} L.L
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className={`font-serif text-lg md:text-xl text-primary mb-2 ${language === 'ar' ? 'font-arabic-serif text-right' : ''}`}>
          {language === 'ar' ? item.nameAr : item.nameEn}
        </h3>
        <p className={`text-secondary text-sm line-clamp-2 ${language === 'ar' ? 'font-arabic-sans text-right' : ''}`}>
          {language === 'ar' ? item.descriptionAr : item.descriptionEn}
        </p>

        {/* Order Button - Shows on Hover */}
        <motion.a
          href={`https://wa.me/96176779566?text=${encodeURIComponent(`Hi! I'd like to order ${item.nameEn}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors duration-300"
          data-testid={`order-btn-${item.nameEn?.toLowerCase().replace(/\s+/g, '-') || index}`}
        >
          <MessageCircle size={16} />
          {t('orderOnWhatsApp')}
        </motion.a>
      </div>
    </motion.div>
  );
};
