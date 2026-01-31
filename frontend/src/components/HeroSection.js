import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';

export const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(180deg, hsl(0 33% 86% / 0.4) 0%, hsl(30 33% 97%) 70%)'
      }}
    >
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full floating-orb"
          style={{
            background: 'radial-gradient(circle, hsl(0 33% 86% / 0.5) 0%, transparent 60%)',
            top: '5%',
            left: '5%'
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full floating-orb"
          style={{
            background: 'radial-gradient(circle, hsl(0 27% 89% / 0.6) 0%, transparent 60%)',
            top: '30%',
            right: '10%'
          }}
          animate={{
            y: [20, -30, 20],
            x: [10, -15, 10]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full floating-orb"
          style={{
            background: 'radial-gradient(circle, hsl(43 69% 52% / 0.2) 0%, transparent 60%)',
            bottom: '20%',
            left: '20%'
          }}
          animate={{
            y: [-15, 25, -15],
            x: [5, -10, 5]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Silk Texture */}
      <div className="absolute inset-0 silk-texture opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-arabic text-[100px] sm:text-[120px] md:text-[140px] leading-none text-dark-brown mb-4"
          style={{ fontWeight: 700 }}
        >
          لكِ
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-lg sm:text-xl md:text-2xl tracking-[0.25em] text-dark-brown/80 mb-8"
        >
          {t('tagline')}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-base sm:text-lg text-dark-brown/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t('heroDescription')}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Button
            onClick={scrollToProducts}
            className="btn-luxury px-10 py-4 text-base"
          >
            {t('shopNow')}
          </Button>
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
          transition={{ duration: 1.5, repeat: Infinity }}
          className="cursor-pointer"
          onClick={scrollToProducts}
        >
          <ChevronDown className="w-8 h-8 text-dark-brown/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};
