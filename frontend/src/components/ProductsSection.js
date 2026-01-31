import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ProductCard } from './ProductCard';
import { productsData } from '../data/products';

export const ProductsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-foreground mb-4">
            {t('luxuryBags')}
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-4" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            {t('newArrivals')}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {productsData.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
