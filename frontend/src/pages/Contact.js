import { motion } from 'framer-motion';
import { MessageCircle, Instagram, MapPin, Clock, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: MessageCircle,
      titleEn: 'WhatsApp',
      titleAr: 'واتساب',
      valueEn: '+961 76 779 566',
      valueAr: '+961 76 779 566',
      link: 'https://wa.me/96176779566',
      color: 'bg-green-500',
    },
    {
      icon: Instagram,
      titleEn: 'Instagram',
      titleAr: 'انستغرام',
      valueEn: '@crepe__planet',
      valueAr: '@crepe__planet',
      link: 'https://instagram.com/crepe__planet',
      color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400',
    },
    {
      icon: Clock,
      titleEn: 'Opening Hours',
      titleAr: 'ساعات العمل',
      valueEn: 'Daily: 12PM - 12AM',
      valueAr: 'يومياً: 12 ظهراً - 12 ليلاً',
      link: null,
      color: 'bg-primary',
    },
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="contact-page">
      {/* Hero Section */}
      <section className="relative py-16 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-4 ${language === 'ar' ? 'font-arabic-serif' : ''}`}>
              {t('contactTitle')}
            </h1>
            <p className={`text-white/70 text-base sm:text-lg ${language === 'ar' ? 'font-arabic-sans' : ''}`}>
              {t('contactSubtitle')}
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ delay: 0.5 }}
              className="h-1 bg-gold mx-auto rounded-full mt-6"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-background" data-testid="contact-cards">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 text-center shadow-card hover:shadow-floating transition-all duration-500"
                data-testid={`contact-card-${index}`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${info.color} mb-6`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`font-serif text-xl text-primary mb-2 ${language === 'ar' ? 'font-arabic-serif' : ''}`}>
                  {language === 'ar' ? info.titleAr : info.titleEn}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold/80 font-medium transition-colors duration-300"
                    data-testid={`contact-link-${index}`}
                  >
                    {language === 'ar' ? info.valueAr : info.valueEn}
                  </a>
                ) : (
                  <p className={`text-secondary ${language === 'ar' ? 'font-arabic-sans' : ''}`}>
                    {language === 'ar' ? info.valueAr : info.valueEn}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-20 bg-primary" data-testid="whatsapp-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gold/20 mb-8">
              <MessageCircle className="w-12 h-12 text-gold" />
            </div>
            <h2 className={`font-serif text-3xl sm:text-4xl text-white mb-4 ${language === 'ar' ? 'font-arabic-serif' : ''}`}>
              {t('messageUs')}
            </h2>
            <p className={`text-white/70 text-lg mb-8 max-w-xl mx-auto ${language === 'ar' ? 'font-arabic-sans' : ''}`}>
              {language === 'ar' 
                ? 'أرسل لنا رسالة على واتساب وسنرد عليك في أقرب وقت ممكن!'
                : 'Send us a message on WhatsApp and we\'ll get back to you as soon as possible!'
              }
            </p>
            <motion.a
              href="https://wa.me/96176779566"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-testid="contact-whatsapp-btn"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-primary font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <MessageCircle size={22} />
              {t('orderNow')}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 bg-background" data-testid="instagram-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`font-serif text-3xl text-primary mb-4 ${language === 'ar' ? 'font-arabic-serif' : ''}`}>
              {t('followUs')}
            </h2>
            <p className={`text-secondary mb-8 ${language === 'ar' ? 'font-arabic-sans' : ''}`}>
              {language === 'ar' 
                ? 'تابعنا على انستغرام لمشاهدة أحدث إبداعاتنا!'
                : 'Follow us on Instagram to see our latest creations!'
              }
            </p>
            <motion.a
              href="https://instagram.com/crepe__planet"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="instagram-btn"
              className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Instagram size={22} />
              @crepe__planet
            </motion.a>
          </motion.div>

          {/* Instagram Preview Grid */}
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-6 gap-2">
            {[
              'https://images.unsplash.com/photo-1503624280608-6b79dc9ab03d?w=200',
              'https://images.unsplash.com/photo-1652282564241-c3a728e83d0b?w=200',
              'https://images.unsplash.com/photo-1548184934-0e21703c9a12?w=200',
              'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=200',
              'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200',
              'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=200',
            ].map((src, index) => (
              <motion.a
                key={index}
                href="https://instagram.com/crepe__planet"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="relative aspect-square rounded-lg overflow-hidden group"
                data-testid={`instagram-preview-${index}`}
              >
                <img
                  src={src}
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
