import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for fade animation
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, hsl(0 33% 86%) 0%, hsl(0 27% 89%) 50%, hsl(30 33% 97%) 100%)'
          }}
        >
          {/* Silk texture overlay */}
          <div className="absolute inset-0 silk-texture opacity-50" />
          
          {/* Floating orbs */}
          <motion.div
            className="absolute w-64 h-64 rounded-full floating-orb"
            style={{ 
              background: 'radial-gradient(circle, hsl(0 33% 86% / 0.6) 0%, transparent 70%)',
              top: '10%',
              left: '10%'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute w-48 h-48 rounded-full floating-orb"
            style={{ 
              background: 'radial-gradient(circle, hsl(43 69% 52% / 0.3) 0%, transparent 70%)',
              bottom: '20%',
              right: '15%'
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-arabic text-[120px] md:text-[150px] leading-none text-dark-brown relative z-10"
            style={{ fontWeight: 700 }}
          >
            لكِ
          </motion.h1>
          
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="font-heading text-lg md:text-xl tracking-[0.3em] text-dark-brown/80 mt-6 relative z-10"
          >
            DESIGNED FOR YOUR PRESENCE
          </motion.p>
          
          {/* Loading bar */}
          <motion.div
            className="absolute bottom-20 w-48 h-0.5 bg-dark-brown/20 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'hsl(43 69% 52%)' }}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 3.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
