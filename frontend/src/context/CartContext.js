import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const generateUniqueId = (productId, colorHex) => {
    return `${productId}-${colorHex}-${Date.now()}`;
  };

  const addToCart = useCallback((product, selectedColor) => {
    const cartItem = {
      uniqueId: generateUniqueId(product.id, selectedColor.hex),
      productId: product.id,
      nameEn: product.nameEn,
      nameAr: product.nameAr,
      price: product.price,
      color: selectedColor,
      image: selectedColor.image
    };

    setCart(prevCart => [...prevCart, cartItem]);
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((uniqueId) => {
    setCart(prevCart => prevCart.filter(item => item.uniqueId !== uniqueId));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const openCart = useCallback(() => {
    setIsCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsCartOpen(false);
  }, []);

  const toggleCart = useCallback(() => {
    setIsCartOpen(prev => !prev);
  }, []);

  const getCartTotal = useCallback(() => {
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  const getCartCount = useCallback(() => {
    return cart.length;
  }, [cart]);

  const checkout = useCallback((language) => {
    if (cart.length === 0) return;

    const total = getCartTotal();
    
    let message = language === 'ar' 
      ? "طلب جديد من لكِ LAKI:\n\n"
      : "New Order from لكِ LAKI:\n\n";

    cart.forEach(item => {
      const name = language === 'ar' ? item.nameAr : item.nameEn;
      const colorName = language === 'ar' ? item.color.nameAr : item.color.nameEn;
      message += `${name} (${colorName}) - $${item.price}\n`;
    });

    message += language === 'ar' 
      ? `\nالمجموع: $${total}`
      : `\nTotal: $${total}`;

    const whatsappUrl = `https://wa.me/96181045545?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }, [cart, getCartTotal]);

  const value = {
    cart,
    isCartOpen,
    addToCart,
    removeFromCart,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
    getCartTotal,
    getCartCount,
    checkout
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
