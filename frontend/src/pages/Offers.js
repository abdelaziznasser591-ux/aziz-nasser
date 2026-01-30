import { motion } from 'framer-motion';
import { Clock, Gift, Percent, Star, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Offers = () => {
  const { t, language } = useLanguage();

  const offers = [
    {
      id: 1,
      titleEn: 'Double Delight',
      titleAr: 'متعة مضاعفة',
      descriptionEn: 'Order any 2 crepes and get 20% off your total order!',
      descriptionAr: 'اطلب أي كريبين واحصل على خصم 20% على طلبك!',
      discount: '20%',
      validUntilEn: 'Valid until end of month',
      validUntilAr: 'صالح حتى نهاية الشهر',
      icon: Percent,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 2,
      titleEn: 'Sweet Weekend',
      titleAr: 'عطلة حلوة',
      descriptionEn: 'Free extra topping on all orders during weekends!',
      descriptionAr: 'إضافة مجانية على جميع الطلبات خلال عطلة نهاية الأسبوع!',
      discount: 'FREE',
      validUntilEn: 'Every Sat & Sun',
      validUntilAr: 'كل سبت وأحد',
      icon: Gift,
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 3,
      titleEn: 'Happy Hour',
      titleAr: 'الساعة السعيدة',
      descriptionEn: 'All pancakes at special prices from 3PM to 6PM daily!',
      descriptionAr: 'جميع البانكيك بأسعار خاصة من 3 إلى 6 مساءً يومياً!',
      discount: '15%',
      validUntilEn: '3PM - 6PM Daily',
      validUntilAr: '3 - 6 مساءً يومياً',
      icon: Clock,
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: 4,
      titleEn: 'First Order Bonus',
      titleAr: 'مكافأة الطلب الأول',
      descriptionEn: 'New customer? Get a free mini dessert with your first order!',
      descriptionAr: 'عميل جديد؟ احصل على حلوى صغيرة مجانية مع طلبك الأول!',
      discount: 'GIFT',
      validUntilEn: 'First order only',
      validUntilAr: 'الطلب الأول فقط',
      icon: Star,
      color: 'from-blue-500 to-indigo-600',
    },
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="offers-page">
      {/* Hero Section */}
      <section className="relative py-16 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-gold/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-gold/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/20 border border-gold/40 rounded-full text-gold text-sm tracking-widest uppercase mb-6">
              {language === 'ar' ? 'لفترة محدودة' : 'Limited Time'}
            </span>
            <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-4 ${language === 'ar' ? 'font-arabic-serif' : ''}`}>
              {t('offersTitle')}
            </h1>
            <p className={`text-white/70 text-base sm:text-lg ${language === 'ar' ? 'font-arabic-sans' : ''}`}>
              {t('offersSubtitle')}
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

      {/* Offers Grid */}
      <section className="py-16 bg-background" data-testid="offers-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-floating transition-all duration-500"
                data-testid={`offer-card-${offer.id}`}
              >
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-r ${offer.color} relative`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="font-bold text-white text-lg">{offer.discount}</span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                      <offer.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-12 text-center">
                  <h3 className={`font-serif text-2xl text-primary mb-3 ${language === 'ar' ? 'font-arabic-serif' : ''}`}>
                    {language === 'ar' ? offer.titleAr : offer.titleEn}
                  </h3>
                  <p className={`text-secondary mb-4 ${language === 'ar' ? 'font-arabic-sans' : ''}`}>
                    {language === 'ar' ? offer.descriptionAr : offer.descriptionEn}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-sm text-gold">
                    <Clock size={14} />
                    {language === 'ar' ? offer.validUntilAr : offer.validUntilEn}
                  </div>

                  {/* Order Button */}
                  <motion.a
                    href="https://wa.me/96176779566"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors duration-300"
                    data-testid={`offer-order-${offer.id}`}
                  >
                    <MessageCircle size={18} />
                    {language === 'ar' ? 'اطلب الآن' : 'Claim Offer'}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="py-12 bg-primary/5" data-testid="terms-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={`text-secondary text-sm ${language === 'ar' ? 'font-arabic-sans' : ''}`}>
            {language === 'ar' 
              ? '* العروض قابلة للتغيير. لا يمكن دمج العروض. اتصل بنا عبر واتساب للتفاصيل.'
              : '* Offers subject to change. Cannot be combined with other offers. Contact us on WhatsApp for details.'
            }
          </p>
        </div>
      </section>
    </div>
  );
};

export default Offers;
