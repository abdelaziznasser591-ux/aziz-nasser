import { useState } from "react";
import "@/App.css";
import { LanguageProvider } from "./context/LanguageContext";
import { CartProvider } from "./context/CartContext";
import { SplashScreen } from "./components/SplashScreen";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProductsSection } from "./components/ProductsSection";
import { CartSidebar } from "./components/CartSidebar";
import { Footer } from "./components/Footer";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen bg-background">
          {/* Splash Screen */}
          {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

          {/* Main Content */}
          <Header />
          <main>
            <HeroSection />
            <ProductsSection />
          </main>
          <Footer />

          {/* Cart Sidebar */}
          <CartSidebar />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
