import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import HowToOrder from "@/components/HowToOrder";
import DeliveryAreas from "@/components/DeliveryAreas";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProductGrid />
      <HowToOrder />
      <DeliveryAreas />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
