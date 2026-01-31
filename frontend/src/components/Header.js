import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t, isRTL } = useLanguage();
  const { toggleCart, getCartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { key: 'home', id: 'hero' },
    { key: 'collection', id: 'products' },
    { key: 'about', id: 'footer' },
    { key: 'contact', id: 'footer' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-cream/95 header-blur shadow-soft' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <h1 className="font-arabic text-4xl text-dark-brown font-bold">لكِ</h1>
              <span className="hidden sm:block font-heading text-xs tracking-[0.2em] text-dark-brown/70 uppercase">
                Designed for<br />your presence
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className="font-body text-sm tracking-wide text-dark-brown/80 hover:text-dark-brown transition-colors duration-300 relative group"
                >
                  {t(item.key)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="font-arabic text-base px-3 py-1 text-dark-brown hover:bg-primary/30 rounded-sm"
              >
                {language === 'en' ? 'ع' : 'EN'}
              </Button>

              {/* Search Icon (decorative) */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex text-dark-brown hover:bg-primary/30 rounded-sm"
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* Cart Icon */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleCart}
                className="relative text-dark-brown hover:bg-primary/30 rounded-sm"
              >
                <ShoppingBag className="w-5 h-5" />
                {getCartCount() > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-dark-brown text-xs font-semibold rounded-full flex items-center justify-center"
                  >
                    {getCartCount()}
                  </motion.span>
                )}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-dark-brown hover:bg-primary/30 rounded-sm"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          <div 
            className="absolute inset-0 bg-dark-brown/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <motion.nav
            initial={{ x: isRTL ? -300 : 300 }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? -300 : 300 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-64 h-full bg-cream shadow-elegant pt-24 px-6`}
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className="font-body text-lg text-dark-brown hover:text-gold transition-colors text-left"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </motion.nav>
        </motion.div>
      )}
    </>
  );
};
