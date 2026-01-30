import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MenuCard } from '../components/MenuCard';

const Menu = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('crepes');

  const categories = [
    { id: 'crepes', labelEn: 'Crepes', labelAr: 'كريب' },
    { id: 'pancakes', labelEn: 'Pancakes', labelAr: 'بانكيك' },
    { id: 'signature', labelEn: 'Signature Plate', labelAr: 'الطبق المميز' },
  ];

  const menuItems = {
    crepes: [
      { nameEn: 'Strawberry & Banana Crepe', nameAr: 'كريب فراولة وموز', descriptionEn: 'Fresh strawberries and banana with chocolate drizzle', descriptionAr: 'فراولة طازجة وموز مع صلصة الشوكولاتة', price: '450', image: 'https://images.unsplash.com/photo-1503624280608-6b79dc9ab03d?w=500' },
      { nameEn: 'Strawberry Crepe', nameAr: 'كريب فراولة', descriptionEn: 'Sweet crepe filled with fresh strawberries and cream', descriptionAr: 'كريب حلو محشو بالفراولة الطازجة والكريمة', price: '400', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500' },
      { nameEn: 'Banana Crepe', nameAr: 'كريب موز', descriptionEn: 'Golden crepe with caramelized banana', descriptionAr: 'كريب ذهبي مع الموز المكرمل', price: '350', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500' },
      { nameEn: 'Fruits Crepe', nameAr: 'كريب فواكه', descriptionEn: 'Seasonal fresh fruits medley', descriptionAr: 'مزيج من الفواكه الموسمية الطازجة', price: '450', image: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=500' },
      { nameEn: 'Brownies Crepe', nameAr: 'كريب براونيز', descriptionEn: 'Chocolate brownies chunks with rich sauce', descriptionAr: 'قطع براونيز الشوكولاتة مع صلصة غنية', price: '450', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500' },
      { nameEn: 'Oreo Crepe', nameAr: 'كريب أوريو', descriptionEn: 'A chocolate dream layered with crushed Oreo and silky cream', descriptionAr: 'حلم شوكولاتة مع أوريو مطحون وكريمة ناعمة', price: '450', image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=500' },
      { nameEn: 'KitKat Crepe', nameAr: 'كريب كيت كات', descriptionEn: 'Crunchy KitKat pieces with chocolate', descriptionAr: 'قطع كيت كات مقرمشة مع الشوكولاتة', price: '400', image: 'https://images.unsplash.com/photo-1632203171982-cc0df6e9beb4?w=500' },
      { nameEn: 'Mars Crepe', nameAr: 'كريب مارس', descriptionEn: 'Gooey Mars bar filling with caramel', descriptionAr: 'حشوة مارس لزجة مع الكراميل', price: '400', image: 'https://images.unsplash.com/photo-1578775887804-699de7086ff9?w=500' },
      { nameEn: 'Twix Crepe', nameAr: 'كريب تويكس', descriptionEn: 'Caramel and cookie crunch', descriptionAr: 'كراميل ومقرمشات البسكويت', price: '400', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500' },
      { nameEn: 'Marshmallow Crepe', nameAr: 'كريب مارشميلو', descriptionEn: 'Fluffy marshmallow with chocolate drizzle', descriptionAr: 'مارشميلو هش مع رذاذ الشوكولاتة', price: '500', image: 'https://images.unsplash.com/photo-1558303054-a4f6e2bdcc3f?w=500' },
      { nameEn: 'Milka Crepe', nameAr: 'كريب ميلكا', descriptionEn: 'Premium Milka chocolate filling', descriptionAr: 'حشوة شوكولاتة ميلكا الفاخرة', price: '500', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500' },
      { nameEn: 'Kinder Crepe', nameAr: 'كريب كيندر', descriptionEn: 'Pure indulgence with rich Kinder chocolate', descriptionAr: 'متعة خالصة مع شوكولاتة كيندر الغنية', price: '450', image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500' },
      { nameEn: 'Lotus Crepe', nameAr: 'كريب لوتس', descriptionEn: 'Biscoff spread with cookie crumbs', descriptionAr: 'سبريد لوتس مع فتات البسكويت', price: '450', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500' },
      { nameEn: 'Fettucini Crepe', nameAr: 'كريب فيتوتشيني', descriptionEn: 'Signature thin strips with chocolate sauce', descriptionAr: 'شرائح رفيعة مميزة مع صلصة الشوكولاتة', price: '400', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500' },
    ],
    pancakes: [
      { nameEn: 'Oreo Pancake', nameAr: 'بانكيك أوريو', descriptionEn: 'Fluffy stack with Oreo crumbles and cream', descriptionAr: 'كومة هشة مع فتات أوريو والكريمة', price: '450', image: 'https://images.unsplash.com/photo-1652282564241-c3a728e83d0b?w=500' },
      { nameEn: 'Brownie Pancake', nameAr: 'بانكيك براوني', descriptionEn: 'Rich brownie pieces on fluffy pancakes', descriptionAr: 'قطع براوني غنية على بانكيك هش', price: '450', image: 'https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=500' },
      { nameEn: 'KitKat Pancake', nameAr: 'بانكيك كيت كات', descriptionEn: 'Crunchy KitKat topping with chocolate', descriptionAr: 'تغطية كيت كات مقرمشة مع الشوكولاتة', price: '400', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500' },
      { nameEn: 'Twix Pancake', nameAr: 'بانكيك تويكس', descriptionEn: 'Caramel drizzle with Twix pieces', descriptionAr: 'رذاذ كراميل مع قطع تويكس', price: '400', image: 'https://images.unsplash.com/photo-1575853121743-60c24f0a7502?w=500' },
      { nameEn: 'Kinder Delice Pancake', nameAr: 'بانكيك كيندر ديليس', descriptionEn: 'Kinder Delice chocolate paradise', descriptionAr: 'جنة شوكولاتة كيندر ديليس', price: '450', image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500' },
      { nameEn: 'Kinder Bueno Pancake', nameAr: 'بانكيك كيندر بوينو', descriptionEn: 'Hazelnut cream with Kinder Bueno', descriptionAr: 'كريمة البندق مع كيندر بوينو', price: '450', image: 'https://images.unsplash.com/photo-1560787313-5dff3307e257?w=500' },
      { nameEn: 'Mars Pancake', nameAr: 'بانكيك مارس', descriptionEn: 'Caramel and nougat delight', descriptionAr: 'متعة الكراميل والنوجا', price: '400', image: 'https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?w=500' },
      { nameEn: 'Lotus Pancake', nameAr: 'بانكيك لوتس', descriptionEn: 'Lotus Biscoff spread with cookie pieces', descriptionAr: 'سبريد لوتس مع قطع البسكويت', price: '450', image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=500' },
      { nameEn: 'Marshmallow Pancake', nameAr: 'بانكيك مارشميلو', descriptionEn: 'Toasted marshmallow tower', descriptionAr: 'برج مارشميلو محمص', price: '500', image: 'https://images.unsplash.com/photo-1590137876181-2a5a7e340de2?w=500' },
      { nameEn: 'Banana Pancake', nameAr: 'بانكيك موز', descriptionEn: 'Fresh banana slices with syrup', descriptionAr: 'شرائح موز طازجة مع الشراب', price: '350', image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500' },
      { nameEn: 'Strawberry Pancake', nameAr: 'بانكيك فراولة', descriptionEn: 'Sweet strawberries and cream', descriptionAr: 'فراولة حلوة وكريمة', price: '400', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500' },
      { nameEn: 'Banana Strawberry Pancake', nameAr: 'بانكيك موز وفراولة', descriptionEn: 'Best of both worlds', descriptionAr: 'أفضل ما في العالمين', price: '450', image: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=500' },
      { nameEn: 'Extra Pancake', nameAr: 'بانكيك إضافي', descriptionEn: 'Add more fluffy goodness', descriptionAr: 'أضف المزيد من اللذة الهشة', price: '500', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500' },
    ],
    signature: [
      { nameEn: 'The Golden Plate - Pistachio Crepe', nameAr: 'الطبق الذهبي - كريب الفستق', descriptionEn: 'A golden crepe filled with creamy pistachio bliss. Our signature creation that defines luxury.', descriptionAr: 'كريب ذهبي محشو بنعيم الفستق الكريمي. إبداعنا المميز الذي يعرف الفخامة.', price: '450', image: 'https://images.unsplash.com/photo-1548184934-0e21703c9a12?w=600', isSignature: true },
    ],
  };

  return (
    <div className="min-h-screen pt-20" data-testid="menu-page">
      {/* Hero Section */}
      <section className="relative py-16 bg-primary overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-4 ${language === 'ar' ? 'font-arabic-serif' : ''}`}>
              {t('menuTitle')}
            </h1>
            <p className={`text-white/70 text-base sm:text-lg max-w-xl mx-auto ${language === 'ar' ? 'font-arabic-sans' : ''}`}>
              {t('menuSubtitle')}
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ delay: 0.5 }}
              className="h-1 bg-gold mx-auto rounded-full mt-6"
            />
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-gold/10 py-4" data-testid="category-tabs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid={`category-${category.id}`}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-card'
                    : 'bg-white text-primary border border-primary/20 hover:bg-primary/5'
                }`}
              >
                {language === 'ar' ? category.labelAr : category.labelEn}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-12 bg-background" data-testid="menu-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`grid gap-6 ${
                activeCategory === 'signature'
                  ? 'grid-cols-1 max-w-2xl mx-auto'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {menuItems[activeCategory].map((item, index) => (
                <MenuCard
                  key={item.nameEn}
                  item={item}
                  index={index}
                  isSignature={item.isSignature}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Menu;
