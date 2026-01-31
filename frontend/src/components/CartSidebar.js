import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

export const CartSidebar = () => {
  const { t, language, getProductName, getColorName, isRTL } = useLanguage();
  const { cart, isCartOpen, closeCart, removeFromCart, getCartTotal, checkout } = useCart();

  const scrollToProducts = () => {
    closeCart();
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 cart-overlay"
            onClick={closeCart}
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: isRTL ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? '-100%' : '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed top-0 ${isRTL ? 'left-0' : 'right-0'} z-50 h-full w-full sm:w-[450px] max-w-full bg-card shadow-elegant cart-sidebar`}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-5 h-5 text-foreground" />
                  <h2 className="font-heading text-xl text-foreground">{t('yourBag')}</h2>
                  {cart.length > 0 && (
                    <span className="w-6 h-6 bg-gold text-dark-brown text-xs font-semibold rounded-full flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeCart}
                  className="text-foreground hover:bg-muted rounded-sm"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Cart Content */}
              {cart.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-2">{t('emptyBag')}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-6 max-w-xs">
                    {t('emptyBagDesc')}
                  </p>
                  <Button
                    onClick={scrollToProducts}
                    className="bg-dark-brown hover:bg-dark-brown/90 text-cream rounded-sm"
                  >
                    {t('browseCollection')}
                  </Button>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <ScrollArea className="flex-1 scrollbar-luxury">
                    <div className="p-4 space-y-4">
                      {cart.map((item, index) => (
                        <motion.div
                          key={item.uniqueId}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: isRTL ? -100 : 100 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex gap-4 p-3 bg-muted/50 rounded-sm"
                        >
                          {/* Product Image */}
                          <div className="w-24 h-24 flex-shrink-0 rounded-sm overflow-hidden bg-muted">
                            <img
                              src={item.image}
                              alt={language === 'ar' ? item.nameAr : item.nameEn}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-heading text-sm text-foreground line-clamp-2 mb-1">
                              {language === 'ar' ? item.nameAr : item.nameEn}
                            </h4>
                            <p className="text-xs text-muted-foreground mb-2">
                              {getColorName(item.color)}
                            </p>
                            <p className="font-heading text-base font-semibold text-foreground">
                              ${item.price}
                            </p>
                          </div>

                          {/* Remove Button */}
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.uniqueId)}
                            className="flex-shrink-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-sm h-8 w-8"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>

                  {/* Footer with Total & Checkout */}
                  <div className="p-6 border-t border-border space-y-4">
                    {/* Total */}
                    <div className="flex items-center justify-between">
                      <span className="font-body text-base text-foreground">{t('total')}</span>
                      <span className="font-heading text-2xl font-semibold text-foreground">
                        ${getCartTotal()} <span className="text-sm font-normal text-muted-foreground">USD</span>
                      </span>
                    </div>

                    {/* Checkout Button */}
                    <Button
                      onClick={() => checkout(language)}
                      className="w-full py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-sm font-semibold tracking-wide flex items-center justify-center gap-2 whatsapp-pulse"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      {t('checkout')}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
