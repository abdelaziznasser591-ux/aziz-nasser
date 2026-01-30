import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary border-t border-gold/20" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl text-white">
                <span className="text-gold">Crepe</span> Planet
              </span>
            </Link>
            <p className="mt-3 text-white/60 text-sm flex items-center justify-center md:justify-start gap-2">
              {t('madeWith')} <Heart className="w-4 h-4 text-gold fill-gold" />
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center space-x-6">
            <Link to="/menu" className="text-white/70 hover:text-gold transition-colors duration-300">
              {t('menu')}
            </Link>
            <Link to="/about" className="text-white/70 hover:text-gold transition-colors duration-300">
              {t('about')}
            </Link>
            <Link to="/contact" className="text-white/70 hover:text-gold transition-colors duration-300">
              {t('contact')}
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            <motion.a
              href="https://wa.me/96176779566"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors duration-300"
              data-testid="footer-whatsapp"
            >
              <MessageCircle size={20} />
            </motion.a>
            <motion.a
              href="https://instagram.com/crepe__planet"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white"
              data-testid="footer-instagram"
            >
              <Instagram size={20} />
            </motion.a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Crepe Planet. {t('allRights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};
