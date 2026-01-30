import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Send, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

const LoveWall = () => {
  const { t, language } = useLanguage();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sample love notes
  const loveNotes = [
    { id: 1, nameEn: 'Sara M.', nameAr: 'سارة م.', messageEn: 'Best crepes in town! The pistachio crepe is absolutely divine. Can\'t stop coming back!', messageAr: 'أفضل كريب في المدينة! كريب الفستق إلهي تماماً. لا أستطيع التوقف عن العودة!' },
    { id: 2, nameEn: 'Ahmad K.', nameAr: 'أحمد ك.', messageEn: 'The Oreo pancakes are out of this world. My kids love this place!', messageAr: 'بانكيك الأوريو من عالم آخر. أطفالي يعشقون هذا المكان!' },
    { id: 3, nameEn: 'Maria L.', nameAr: 'ماريا ل.', messageEn: 'Finally found my happy place! The atmosphere is cozy and the desserts are perfection.', messageAr: 'أخيراً وجدت مكاني السعيد! الأجواء مريحة والحلويات مثالية.' },
    { id: 4, nameEn: 'Hassan B.', nameAr: 'حسن ب.', messageEn: 'Golden Plate is the best thing I\'ve ever tasted. True luxury in every bite!', messageAr: 'الطبق الذهبي أفضل شيء تذوقته في حياتي. فخامة حقيقية في كل قضمة!' },
    { id: 5, nameEn: 'Lina S.', nameAr: 'لينا س.', messageEn: 'Celebrated my birthday here. The team made it so special. Thank you Crepe Planet!', messageAr: 'احتفلت بعيد ميلادي هنا. الفريق جعله مميزاً جداً. شكراً كريب بلانيت!' },
    { id: 6, nameEn: 'Omar R.', nameAr: 'عمر ر.', messageEn: 'The Kinder crepe brought back childhood memories. Pure happiness!', messageAr: 'كريب الكيندر أعاد لي ذكريات الطفولة. سعادة خالصة!' },
    { id: 7, nameEn: 'Nadia H.', nameAr: 'نادية ح.', messageEn: 'Instagram-worthy desserts that taste even better than they look!', messageAr: 'حلويات تستحق الانستغرام وطعمها أفضل من مظهرها!' },
    { id: 8, nameEn: 'Karim A.', nameAr: 'كريم أ.', messageEn: 'Best date night spot! Romantic vibes and delicious food. Perfect combo!', messageAr: 'أفضل مكان للمواعيد! أجواء رومانسية وطعام لذيذ. مزيج مثالي!' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast.error(language === 'ar' ? 'يرجى ملء جميع الحقول' : 'Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast.success(
        language === 'ar' 
          ? 'شكراً لمشاركة حبك! 💛' 
          : 'Thank you for sharing your love! 💛'
      );
      setName('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-20" data-testid="love-wall-page">
      {/* Hero Section */}
      <section className="relative py-16 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          {/* Floating hearts decoration */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Heart className="w-6 h-6 text-gold/20" fill="currentColor" />
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 mb-6">
              <Heart className="w-8 h-8 text-gold" fill="currentColor" />
            </div>
            <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-4 ${language === 'ar' ? 'font-arabic-serif' : ''}`}>
              {t('loveWallTitle')}
            </h1>
            <p className={`text-white/70 text-base sm:text-lg ${language === 'ar' ? 'font-arabic-sans' : ''}`}>
              {t('loveWallSubtitle')}
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

      {/* Love Notes Grid - Masonry Style */}
      <section className="py-16 bg-background" data-testid="love-notes-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {loveNotes.map((note, index) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="break-inside-avoid bg-white rounded-2xl p-6 shadow-card hover:shadow-floating transition-shadow duration-500 border border-gold/10"
                data-testid={`love-note-${note.id}`}
              >
                <Quote className="w-8 h-8 text-gold/30 mb-3" />
                <p className={`text-secondary mb-4 leading-relaxed italic ${language === 'ar' ? 'font-arabic-sans text-right' : ''}`}>
                  "{language === 'ar' ? note.messageAr : note.messageEn}"
                </p>
                <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-gold" fill="currentColor" />
                  </div>
                  <span className={`font-medium text-primary ${language === 'ar' ? 'font-arabic-sans' : ''}`}>
                    {language === 'ar' ? note.nameAr : note.nameEn}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Love Form */}
      <section className="py-16 bg-primary" data-testid="share-love-form">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className={`font-serif text-3xl sm:text-4xl text-white mb-4 ${language === 'ar' ? 'font-arabic-serif' : ''}`}>
              {t('shareYourLove')}
            </h2>
            <p className={`text-white/70 ${language === 'ar' ? 'font-arabic-sans' : ''}`}>
              {language === 'ar' 
                ? 'شاركنا تجربتك الحلوة!'
                : 'Share your sweet experience with us!'
              }
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="space-y-6">
              <div>
                <label className={`block text-white/80 text-sm font-medium mb-2 ${language === 'ar' ? 'font-arabic-sans text-right' : ''}`}>
                  {t('yourName')}
                </label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                  className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold ${language === 'ar' ? 'text-right' : ''}`}
                  data-testid="love-name-input"
                />
              </div>
              <div>
                <label className={`block text-white/80 text-sm font-medium mb-2 ${language === 'ar' ? 'font-arabic-sans text-right' : ''}`}>
                  {t('yourMessage')}
                </label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={language === 'ar' ? 'شاركنا رأيك...' : 'Share your thoughts...'}
                  rows={4}
                  className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold resize-none ${language === 'ar' ? 'text-right' : ''}`}
                  data-testid="love-message-input"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold text-primary hover:bg-gold/90 font-bold py-3 rounded-full"
                data-testid="submit-love-btn"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full"
                    />
                    {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send size={18} />
                    {t('submitLove')}
                  </span>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default LoveWall;
