# Crepe Planet - Product Requirements Document

## Project Overview
**Brand Name:** Crepe Planet  
**Industry:** Luxury Desserts, Crepes, Pancakes & Chocolate  
**Date Created:** January 30, 2025  
**Status:** MVP Complete ✅

---

## Original Problem Statement
Build a high-end luxury dessert restaurant website that:
- Feels luxurious and premium
- Makes users hungry instantly
- Converts visitors to WhatsApp orders
- Builds strong Instagram brand presence
- Works perfectly on mobile first
- Supports bilingual content (English + Arabic)

---

## User Personas

### Primary: Local Dessert Lovers (18-35)
- Young professionals seeking Instagram-worthy experiences
- Prefer WhatsApp ordering over apps
- Arabic and English speakers
- Mobile-first users

### Secondary: Tourists & Visitors
- Looking for premium dessert spots
- Need English language support
- Value quick ordering via WhatsApp

---

## Core Requirements

### Design & Branding
- **Colors:** Deep Green (#1A3C34), Olive (#6B705C), Gold (#D4AF37), Cream (#F9F7F2)
- **Typography:** Playfair Display (headings), DM Sans (body), Amiri & Tajawal (Arabic)
- **Style:** Luxury café, Instagram-worthy, clean UI, modern animations

### Technical Requirements
- React.js frontend with Framer Motion animations
- Bilingual support (EN/AR) with RTL layout
- Mobile-first responsive design
- WhatsApp integration for orders

---

## What's Been Implemented ✅

### Pages (January 30, 2025)
1. **Home Page**
   - Full-screen hero with overlay
   - "Order Now on WhatsApp" CTA → https://wa.me/96176779566
   - Featured menu preview
   - Features section (Premium Ingredients, Artisan Crafted, Sweet Moments)

2. **About Page**
   - Brand storytelling
   - Mission statement
   - Values grid
   - Image gallery

3. **Menu Page**
   - Category tabs (Crepes, Pancakes, Signature Plate)
   - 14 Crepe items, 13 Pancake items, 1 Signature item
   - Prices in Lebanese Lira (L.L) as per actual menu
   - Hover-to-reveal WhatsApp ordering

4. **Special Offers Page**
   - 4 promotional offer cards
   - Double Delight (20% off)
   - Sweet Weekend (Free topping)
   - Happy Hour (15% off)
   - First Order Bonus (Free mini dessert)

5. **Love Wall (Guestbook)**
   - 8 sample testimonials
   - Masonry layout
   - Comment submission form (simulated)

6. **Contact Page**
   - WhatsApp: +961 76 779 566
   - Instagram: @crepe__planet
   - Instagram preview grid

### Components
- Navbar with language toggle
- Floating WhatsApp button (all pages)
- Footer with social links
- Menu cards with hover effects
- Language context for EN/AR switching

### Features
- ✅ Bilingual (English + Arabic)
- ✅ RTL layout for Arabic
- ✅ WhatsApp ordering integration
- ✅ Instagram links
- ✅ Mobile responsive
- ✅ Smooth animations (Framer Motion)
- ✅ Premium color scheme

---

## Prioritized Backlog

### P0 (Critical) - DONE
- [x] Core pages (Home, About, Menu, Contact)
- [x] WhatsApp integration
- [x] Mobile responsiveness
- [x] Bilingual support

### P1 (Important) - DONE
- [x] Special Offers page
- [x] Love Wall / Guestbook
- [x] Floating WhatsApp button
- [x] Instagram integration

### P2 (Nice to Have) - FUTURE
- [ ] Persistent guestbook (save to database)
- [ ] Admin panel for menu management
- [ ] Real-time offers management
- [ ] Google Maps location embed
- [ ] Online ordering system
- [ ] Loyalty program integration

---

## Next Action Items
1. **Deploy to production** - User will handle deployment
2. **Connect custom domain** - e.g., crepeplanet.com
3. **Add real product images** - Replace stock photos with actual dishes
4. **SEO optimization** - Meta tags, Open Graph, structured data
5. **Analytics setup** - Google Analytics / Facebook Pixel

---

## Technical Stack
- **Frontend:** React 19, Tailwind CSS, Framer Motion
- **UI Components:** Shadcn/UI, Lucide React icons
- **Fonts:** Google Fonts (Playfair Display, DM Sans, Amiri, Tajawal)
- **State Management:** React Context (Language)
- **Build Tool:** Create React App with Craco

---

## Notes
- Love Wall comment submission is **MOCKED** (shows toast but doesn't persist)
- Stock images from Unsplash used for food photography
- WhatsApp number: +961 76 779 566
- Instagram: @crepe__planet
