import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';

export const ProductCard = ({ product, index }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const { t, getProductName, getColorName } = useLanguage();
  const { addToCart } = useCart();

  const selectedColor = product.colors[selectedColorIndex];

  const handleColorChange = (colorIndex) => {
    setIsImageLoading(true);
    setSelectedColorIndex(colorIndex);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedColor);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="product-card group bg-card rounded-sm overflow-hidden shadow-card"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted product-image-container">
        {/* Loading skeleton */}
        {isImageLoading && (
          <div className="absolute inset-0 skeleton" />
        )}
        
        {/* Product Image */}
        <img
          src={selectedColor.image}
          alt={getProductName(product)}
          className={`w-full h-full object-cover product-image transition-opacity duration-300 ${
            isImageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsImageLoading(false)}
          onError={() => setIsImageLoading(false)}
        />

        {/* Badge */}
        {product.isNew && !product.soldOut && (
          <div className="absolute top-4 left-4">
            <span className="badge-new rounded-sm badge-shimmer">
              {t('new')}
            </span>
          </div>
        )}
        
        {product.soldOut && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-dark-brown text-cream rounded-sm">
              {t('soldOut')}
            </span>
          </div>
        )}

        {/* Color Swatches Overlay */}
        {product.colors.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4">
            <div className="flex gap-2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-soft">
              {product.colors.map((color, colorIndex) => (
                <button
                  key={color.hex}
                  onClick={() => handleColorChange(colorIndex)}
                  className={`color-swatch ${selectedColorIndex === colorIndex ? 'active' : ''}`}
                  style={{ backgroundColor: color.hex }}
                  title={getColorName(color)}
                  aria-label={`Select ${getColorName(color)} color`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col">
        {/* Product Name */}
        <h3 className="font-heading text-lg text-foreground line-clamp-2 mb-2 min-h-[3.5rem]">
          {getProductName(product)}
        </h3>

        {/* Selected Color Name */}
        <p className="text-sm text-muted-foreground mb-3">
          {getColorName(selectedColor)}
        </p>

        {/* Price & Add to Bag */}
        <div className="flex items-center justify-between mt-auto">
          <span className="font-heading text-xl font-semibold text-foreground">
            ${product.price} <span className="text-sm font-normal text-muted-foreground">USD</span>
          </span>
          
          <Button
            onClick={handleAddToCart}
            disabled={product.soldOut}
            className="bg-dark-brown hover:bg-dark-brown/90 text-cream text-sm px-4 py-2 rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elegant disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('addToBag')}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
