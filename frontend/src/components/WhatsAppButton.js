import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/96176779566"
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-whatsapp-btn"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-floating cursor-pointer group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
    >
      {/* Pulse Animation */}
      <span className="absolute w-full h-full rounded-full bg-gold animate-ping opacity-30"></span>
      
      {/* Icon */}
      <MessageCircle className="w-7 h-7 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-white rounded-lg shadow-lg text-primary text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Order on WhatsApp
      </span>
    </motion.a>
  );
};
