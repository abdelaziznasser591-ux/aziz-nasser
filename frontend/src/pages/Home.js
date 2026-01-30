import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, ChevronDown, Sparkles, Award, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t, language } = useLanguage();

  const features = [
    { icon: Sparkles, titleEn: 'Premium Ingredients', titleAr: 'مكونات فاخرة', descEn: 'Only the finest Belgian chocolate', descAr: 'فقط أجود الشوكولاتة البلجيكية' },
    { icon: Award, titleEn: 'Artisan Crafted', titleAr: 'صنع يدوي', descEn: 'Each dessert made with love', descAr: 'كل حلوى مصنوعة بحب' },
    { icon: Heart, titleEn: 'Sweet Moments', titleAr: 'لحظات حلوة', descEn: 'Creating memories one bite at a time', descAr: 'نخلق ذكريات مع كل قضمة' },
  ];

  return (
    <div className="min-h-screen" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1625653504276-c7bdfbc206eb?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920"
            alt="Delicious crepe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold/30 rounded-full animate-pulse" />
        <div className="absolute bottom-32 right-16 w-20 h-20 border border-gold/20 rounded-full" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/20 border border-gold/40 rounded-full text-gold text-sm tracking-widest uppercase">
              Welcome to Crepe Planet
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={`font-serif text-4xl sm:text-5xl lg:text-7xl text-white leading-tight mb-6 ${language === 'ar' ? 'font-arabic-serif' : ''}`}
          >
            {t('heroTitle')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`text-white/80 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 ${language === 'ar' ? 'font-arabic-sans' : ''}`}
          >
            {t('heroSubtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="https://wa.me/96176779566"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-testid="hero-whatsapp-btn"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <MessageCircle size={22} />
              {t('orderNow')}
            </motion.a>

            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                data-testid="hero-menu-btn"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-medium rounded-full text-lg hover:bg-white/10 transition-colors duration-300"
              >
                {t('viewMenu')}
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-white/50"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background" data-testid="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 bg-white rounded-2xl shadow-card hover:shadow-floating transition-shadow duration-500"
                data-testid={`feature-card-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <feature.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className={`font-serif text-xl text-primary mb-3 ${language === 'ar' ? 'font-arabic-serif' : ''}`}>
                  {language === 'ar' ? feature.titleAr : feature.titleEn}
                </h3>
                <p className={`text-secondary ${language === 'ar' ? 'font-arabic-sans' : ''}`}>
                  {language === 'ar' ? feature.descAr : feature.descEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Preview */}
      <section className="py-20 bg-primary" data-testid="featured-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`font-serif text-3xl sm:text-4xl text-white mb-4 ${language === 'ar' ? 'font-arabic-serif' : ''}`}
            >
              {language === 'ar' ? 'أطباقنا المميزة' : 'Our Signature Creations'}
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              className="h-1 bg-gold mx-auto rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Pistachio Crepe', nameAr: 'كريب فستق', price: '450', image: 'https://images.unsplash.com/photo-1548184934-0e21703c9a12?w=600' },
              { name: 'Oreo Pancake', nameAr: 'بانكيك أوريو', price: '450', image: 'https://images.unsplash.com/photo-1652282564241-c3a728e83d0b?w=600' },
              { name: 'Kinder Crepe', nameAr: 'كريب كيندر', price: '450', image: 'https://images.unsplash.com/photo-1503624280608-6b79dc9ab03d?w=600' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden"
                data-testid={`featured-item-${index}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className={`font-serif text-xl text-white mb-1 ${language === 'ar' ? 'font-arabic-serif' : ''}`}>
                    {language === 'ar' ? item.nameAr : item.name}
                  </h3>
                  <p className="text-gold font-bold">{item.price} L.L</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="view-full-menu-btn"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-primary font-bold rounded-full hover:bg-gold/90 transition-colors duration-300"
              >
                {t('viewMenu')}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`font-serif text-3xl sm:text-4xl text-primary mb-6 ${language === 'ar' ? 'font-arabic-serif' : ''}`}
          >
            {language === 'ar' ? 'جاهز لتجربة حلوة؟' : 'Ready for a Sweet Experience?'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-secondary text-lg mb-8 ${language === 'ar' ? 'font-arabic-sans' : ''}`}
          >
            {language === 'ar' ? 'رسالة واحدة تفصلك عن حلوتك المفضلة' : 'One message away from your next favorite dessert'}
          </motion.p>
          <motion.a
            href="https://wa.me/96176779566"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            data-testid="cta-whatsapp-btn"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <MessageCircle size={22} />
            {t('orderNow')}
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Home;
