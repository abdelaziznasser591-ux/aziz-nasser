import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/laki.lb',
      handle: '@laki.lb',
      icon: 'instagram'
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@laki_lb',
      handle: '@laki_lb',
      icon: 'tiktok'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/96181045545',
      handle: '+961 81045545',
      icon: 'whatsapp'
    }
  ];

  const footerLinks = {
    shop: [
      { key: 'allProducts', href: '#products' },
      { key: 'newArrivals', href: '#products' },
      { key: 'bestsellers', href: '#products' }
    ],
    help: [
      { key: 'contactUs', href: 'https://wa.me/96181045545' },
      { key: 'shipping', href: '#' },
      { key: 'returns', href: '#' },
      { key: 'faq', href: '#' }
    ]
  };

  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'tiktok':
        return <MessageCircle className="w-5 h-5" />;
      case 'whatsapp':
        return <Phone className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer id="footer" className="bg-dark-brown text-cream/90 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-arabic text-3xl text-cream">لكِ</h3>
              <span className="font-heading text-sm tracking-wider text-cream/70">LAKI</span>
            </div>
            <p className="font-body text-sm text-cream/70 leading-relaxed mb-6">
              {t('aboutDescription')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cream/10 hover:bg-gold hover:text-dark-brown rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label={social.name}
                >
                  {renderIcon(social.icon)}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Shop Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg text-cream mb-4">{t('shop')}</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream/70 hover:text-gold transition-colors duration-300 footer-link"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Help Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg text-cream mb-4">{t('help')}</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="font-body text-sm text-cream/70 hover:text-gold transition-colors duration-300 footer-link"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading text-lg text-cream mb-4">{t('contactInfo')}</h4>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-body text-sm text-cream/70 hover:text-gold transition-colors duration-300 group"
                  >
                    <span className="text-cream/50 group-hover:text-gold transition-colors">
                      {renderIcon(social.icon)}
                    </span>
                    {social.handle}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cream/10 mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-body text-sm text-cream/50">
            {t('copyright')}
          </p>
          <p className="font-body text-sm text-primary">
            {t('madeBy')}
          </p>
        </div>
      </div>
    </footer>
  );
};
