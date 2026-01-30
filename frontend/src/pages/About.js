import { motion } from 'framer-motion';
import { ChefHat, Coffee, Heart, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  const values = [
    { icon: ChefHat, titleEn: 'Master Craftsmanship', titleAr: 'براعة الصنع', descEn: 'Every crepe is a work of art', descAr: 'كل كريب هو عمل فني' },
    { icon: Coffee, titleEn: 'Finest Ingredients', titleAr: 'أجود المكونات', descEn: 'Belgian chocolate, fresh fruits, premium toppings', descAr: 'شوكولاتة بلجيكية، فواكه طازجة، إضافات فاخرة' },
    { icon: Heart, titleEn: 'Made with Love', titleAr: 'مصنوع بحب', descEn: 'Every bite tells a story of passion', descAr: 'كل قضمة تحكي قصة شغف' },
    { icon: Star, titleEn: 'Premium Experience', titleAr: 'تجربة فاخرة', descEn: 'From order to taste, excellence is our standard', descAr: 'من الطلب إلى التذوق، التميز هو معيارنا' },
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="about-page">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/20 border border-gold/40 rounded-full text-gold text-sm tracking-widest uppercase mb-6">
              {t('ourStory')}
            </span>
            <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 ${language === 'ar' ? 'font-arabic-serif' : ''}`}>
              {t('aboutTitle')}
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ delay: 0.5 }}
              className="h-1 bg-gold mx-auto rounded-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background" data-testid="story-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/6844476/pexels-photo-6844476.jpeg?w=600"
                  alt="Cafe interior"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-floating"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold rounded-2xl z-0" />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-12 -left-6 bg-white p-6 rounded-2xl shadow-card z-20"
              >
                <p className="font-serif text-3xl text-gold">5+</p>
                <p className={`text-secondary text-sm ${language === 'ar' ? 'font-arabic-sans' : ''}`}>
                  {language === 'ar' ? 'سنوات من الخبرة' : 'Years of Excellence'}
                </p>
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={language === 'ar' ? 'text-right' : 'text-left'}
            >
              <h2 className={`font-serif text-3xl sm:text-4xl text-primary mb-6 ${language === 'ar' ? 'font-arabic-serif' : ''}`}>
                {language === 'ar' ? 'قصتنا' : 'Our Story'}
              </h2>
              <p className={`text-secondary text-lg mb-6 leading-relaxed ${language === 'ar' ? 'font-arabic-sans' : ''}`}>
                {t('aboutText1')}
              </p>
              <p className={`text-secondary text-lg mb-8 leading-relaxed ${language === 'ar' ? 'font-arabic-sans' : ''}`}>
                {t('aboutText2')}
              </p>
              <div className="h-px bg-gold/30 w-24 mb-8" />
              <h3 className={`font-serif text-2xl text-primary mb-4 ${language === 'ar' ? 'font-arabic-serif' : ''}`}>
                {t('ourMission')}
              </h3>
              <p className={`text-secondary leading-relaxed ${language === 'ar' ? 'font-arabic-sans' : ''}`}>
                {t('missionText')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary" data-testid="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`font-serif text-3xl sm:text-4xl text-white mb-4 ${language === 'ar' ? 'font-arabic-serif' : ''}`}>
              {language === 'ar' ? 'ما يميزنا' : 'What Makes Us Special'}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              className="h-1 bg-gold mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-gold/30 transition-colors duration-300"
                data-testid={`value-card-${index}`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/20 mb-4">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className={`font-serif text-lg text-white mb-2 ${language === 'ar' ? 'font-arabic-serif' : ''}`}>
                  {language === 'ar' ? value.titleAr : value.titleEn}
                </h3>
                <p className={`text-white/70 text-sm ${language === 'ar' ? 'font-arabic-sans' : ''}`}>
                  {language === 'ar' ? value.descAr : value.descEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-background" data-testid="gallery-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1503624280608-6b79dc9ab03d?w=400',
              'https://images.unsplash.com/photo-1652282564241-c3a728e83d0b?w=400',
              'https://images.unsplash.com/photo-1548184934-0e21703c9a12?w=400',
              'https://images.unsplash.com/photo-1723130033796-e0a59fd7c711?w=400',
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-xl overflow-hidden aspect-square"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
